<?php
/**
 * Plugin Name:       Ss Card
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_ss_card_init() {
	/* Automatically load dependencies and version */
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	/* Main Block Script */
	wp_register_script(
		'mx-ss-card-main-script',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	/**
	 *
	 * Callback to Render Dynamic Block Serverside
	 *
	 */
	function mx_ss_card_render_callback( $attributes, $content ) {
		$ss_id = $attributes['postID'];
		$permalink = get_permalink( $ss_id );
		$default_title = get_the_title($ss_id);
		$ss_name = (get_post_meta( $ss_id, 'ss_name', true )) ? get_post_meta( $ss_id, 'ss_name', true ) : $default_title;
		$ss_title = get_post_meta( $ss_id, 'ss_title', true );
		$ss_dealership = get_post_meta( $ss_id, 'ss_dealership', true );
		$ss_quote = get_post_meta( $ss_id, 'ss_quote', true );
		$ss_motto_image = get_post_meta( $ss_id, 'ss_motto_image', true );
		$ss_motto_image_alt = get_post_meta( $ss_id, 'ss_motto_image_alt', true );
		$ss_person_image = get_post_meta( $ss_id, 'ss_person_image', true );
		$ss_person_image_alt = get_post_meta( $ss_id, 'ss_person_image_alt', true );
		$ss_product_image = get_post_meta( $ss_id, 'ss_product_image', true );
		$ss_product_image_alt = get_post_meta( $ss_id, 'ss_product_image_alt', true );
		$slug = get_post_field( 'post_name', $ss_id );
		$departments = get_the_terms( $ss_id, 'success-stories-departments' );
		$permalink_final = $permalink . '?_success_story_department=' . $first_dept;

		$content = '<div class="ss-card '. esc_attr( $cardClass, 'mx-blocks-plugin' ) .'">';
			$content .= '<div class="ss-card__image-content" style="background-image: url(\'/wp-content/themes/vauto/dist/images/card-overlay.png\'), url(\''. $ss_person_image .'\'), url(\'/wp-content/themes/vauto/dist/images/accent-line.png\')">';
				$content .= '<img class="ss-card__mobile-logo" src="'. esc_url( $ss_product_image ) .'" alt="'. esc_attr( $ss_product_image_alt, 'mx-blocks-plugin' ) .'" />';
				$content .= '<div class="ss-card__overlay-wrap">';
					$content .= '<div class="ss-card__overlay-inner">';
						$content .= '<img class="ss-card__motto-image" src="'. esc_url( $ss_motto_image ) .'" alt="'. esc_attr( $ss_motto_image_alt, 'mx-blocks-plugin' ) .'" />';
						$content .= '<div class="ss-card__mobile-text">';
							$content .= '<h3 class="ss-card__mobile-name has-small-font-size bold">'. esc_html( $ss_name, 'mx-blocks-plugin' ) .'</h3>';
							$content .= '<p class="ss-card__mobile-title-dealership has-small-font-size"><span>'. esc_html( $ss_title, 'mx-blocks-plugin' ) .'</span>, <span>'. esc_html( $ss_dealership, 'mx-blocks-plugin' ) .'</span></p>';
							$content .= '<div class="wp-block-mx-buttons ss-card__links">';
								$content .= '<div class="wp-block-mx-button ss-card__link is-style-secondary-button is-style-xsmall-button">';
									$content .= '<a class="wp-block-button__link" href="' . esc_url( $permalink_final ) .'" data-slug="success-stories-' . esc_attr( $slug, 'mx-blocks-plugin' ) . '">'. esc_html( 'View', 'mx-blocks-plugin' ) .'</a>';
								$content .= '</div>';
							$content .= '</div>';
						$content .= '</div>';
					$content .= '</div>';
				$content .= '</div>';
			$content .= '</div>';
			$content .= '<div class="ss-card__desktop-content">';
				$content .= '<blockquote class="ss-card__quote thinweight">'. esc_html( $ss_quote, 'mx-blocks-plugin' ) .'</blockquote>';
				$content .= '<h3 class="ss-card__name has-small-font-size bold">'. esc_html( $ss_name, 'mx-blocks-plugin' ) .'</h3>';
				$content .= '<p class="ss-card__title-dealership has-medium-font-size thinweight"><span>'. esc_html( $ss_title, 'mx-blocks-plugin' ) .'</span>, <span>'. esc_html( $ss_dealership, 'mx-blocks-plugin' ) .'</span></p>';
				$content .= '<figure class="wp-block-mx-image size-full ss-card__product-logo">';
					$content .= '<img src="'. esc_url( $ss_product_image ) .'" alt="'. esc_attr( $ss_product_image_alt, 'mx-blocks-plugin' ) .'" />';
				$content .= '</figure>';
				$content .= '<div class="wp-block-mx-buttons ss-card__links">';
					$content .= '<div class="wp-block-mx-button ss-card__link is-style-secondary-button is-style-xsmall-button">';
						$content .= '<a class="wp-block-button__link" href="'. esc_url( $permalink_final ) .'" data-slug="success-stories-'. esc_attr( $slug, 'mx-blocks-plugin' ) .'">'. esc_html( 'View', 'mx-blocks-plugin' ) .'</a>';
					$content .= '</div>';
				$content .= '</div>';
			$content .= '</div>';
		$content .= '</div>';
		return $content;
	}

	/* Editor Styles */
	wp_register_style(
		'mx-ss-card-editor-style',
		plugins_url( 'build/index.css', __FILE__ ),
		null,
		$asset_file['version']
	);

	/* Frontend Styles */
	wp_register_style(
		'mx-ss-card-style',
		plugins_url( 'build/style-index.css', __FILE__ ),
		null,
		$asset_file['version']
	);

	/* Register the block serverside with callback for dynamic block */
	register_block_type( 'mx/ss-card', array(
		'api_version' => 2,
		/* Enqueue Main Script and Editor Styles */
		'editor_script' => 'mx-ss-card-main-script',
		'editor_style' => 'mx-ss-card-editor-style',
		'style' => 'mx-ss-card-style',
		'render_callback' => 'mx_ss_card_render_callback',
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
				'default' => 'success-stories'
			],
			'postTypeTitle' => [
				'type' => 'string'
			],
		]
	) );
}
add_action( 'init', 'mx_ss_card_init' );
