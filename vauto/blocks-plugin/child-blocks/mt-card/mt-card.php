<?php
/**
 * Plugin Name:       Management Team Card
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_mt_card_init() {
	/* Automatically load dependencies and version */
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	/* Main Block Script */
	wp_register_script(
		'mx-mt-card-main-script',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	/**
	 *
	 * Callback to Render Dynamic Block Serverside
	 *
	 */
	function mx_mt_card_render_callback( $attributes, $content ) {
		$mt_id = $attributes['postID'];
		$default_title = get_the_title($mt_id);
		$mt_src = get_post_field( 'post_name', $mt_id );
		$mt_person_image = get_post_meta( $mt_id, 'mt_person_image', true );
		$mt_person_image_alt = get_post_meta( $mt_id, 'mt_person_image_alt', true );
		$mt_name = (get_post_meta( $mt_id, 'mt_name', true )) ? get_post_meta( $mt_id, 'mt_name', true ) : $default_title;
		$mt_title = get_post_meta( $mt_id, 'mt_title', true );
		$mt_linkedin = get_post_meta( $mt_id, 'mt_linkedin', true );
		$mt_email = get_post_meta( $mt_id, 'mt_email', true );
		$mt_phone = get_post_meta( $mt_id, 'mt_phone', true );
		$mt_button_text = get_post_meta( $mt_id, 'mt_button_text', true );
		$mt_bio = get_post_meta( $mt_id, 'mt_bio', true );

		$content = '<div class="mt-wrap">';
			$content .= '<div class="mt-card card">';
				$content .= '<div class="mt-card__image">';
					$content .= '<img class="mt-card__person" src="'. esc_url( $mt_person_image, 'mx-blocks-plugin' ) .'" alt="'. esc_attr( $mt_person_image_alt, 'mx-blocks-plugin' ) .'" />';
				$content .= '</div>';
				$content .= '<div class="mt-card__copy">';
					$content .= '<h3 class="mt-card__name h1">'. esc_html( $mt_name, 'mx-blocks-plugin' ) .'</h3>';
					$content .= '<p class="mt-card__title">'. wp_kses_post( $mt_title, 'mx-blocks-plugin' ) .'</p>';
					$content .= '<div class="wp-block-mx-buttons mt-card__links">';
						$content .= '<div class="wp-block-mx-button mt-card__link is-style-modal-link is-style-small-button">';
							$content .= '<a class="wp-block-button__link" data-fancybox="gallery" data-src="#'. esc_html( $mt_src, 'mx-blocks-plugin' ) .'">'. esc_html( $mt_button_text, 'mx-blocks-plugin' ) .'</a>';
						$content .= '</div>';
					$content .= '</div>';
				$content .= '</div>';
			$content .= '</div>';
			$content .= '<div class="mt-modal" id="'. esc_html( $mt_src, 'mx-blocks-plugin' ) .'" style="display: none">';
				$content .= '<div class="mt-modal__meta">';
					$content .= '<img class="mt-modal__image" src="'. esc_url( $mt_person_image, 'mx-blocks-plugin' ) .'" alt="'. esc_attr( $mt_person_image_alt, 'mx-blocks-plugin' ) .'" />';
					$content .= '<h3>'. esc_html( $mt_name, 'mx-blocks-plugin' ) .'</h3>';
					$content .= '<h5 class="thinweight">'. wp_kses_post( $mt_title, 'mx-blocks-plugin' ) .'</h5>';
					if( $mt_linkedin ) {
						$content .= '<p class="has-medium-font-size"><a href="'. esc_url( $mt_person_image, 'mx-blocks-plugin' ) .'" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>';
					}
					if( $mt_email ) {
						$content .= '<p class="has-medium-font-size"><a href="mailto:'. esc_attr( $mt_email, 'mx-blocks-plugin' ) .'">'. esc_html( $mt_email, 'mx-blocks-plugin' ) .'</a></p>';
					}
					if( $mt_phone ) {
					$content .= '<p class="has-medium-font-size"><a href="tel:'. esc_attr( $mt_phone_formated, 'mx-blocks-plugin' ) .'">'. esc_html( $mt_phone, 'mx-blocks-plugin' ) .'</a></p>';
					}
				$content .= '</div>';
				$content .= '<div class="mt-modal__bio">'. wp_kses_post( $mt_bio, 'mx-blocks-plugin' ) .'</div>';
			$content .= '</div>';
		$content .= '</div>';
		return $content;
	}

	/* Editor Styles */
	wp_register_style(
		'mx-mt-card-editor-style',
		plugins_url( 'build/index.css', __FILE__ ),
		null,
		$asset_file['version']
	);

	/* Frontend Styles */
	wp_register_style(
		'mx-mt-card-style',
		plugins_url( 'build/style-index.css', __FILE__ ),
		null,
		$asset_file['version']
	);

	/* Register the block serverside with callback for dynamic block */
	register_block_type( 'mx/mt-card', array(
		'api_version' => 2,
		/* Enqueue Main Script and Editor Styles */
		'editor_script' => 'mx-mt-card-main-script',
		'editor_style' => 'mx-mt-card-editor-style',
		'style' => 'mx-mt-card-style',
		'render_callback' => 'mx_mt_card_render_callback',
		'attributes' => [
			'postID' => [
				'type' => 'number',
				'default' => 0
			],
			'postTitle' => [
				'type' => 'string'
			],
			'postType' => [
				'type' => 'string',
				'default' => 'management-team'
			],
			'postTypeTitle' => [
				'type' => 'string'
			],
		]
	) );
}
add_action( 'init', 'mx_mt_card_init' );
