<?php
/**
 * Plugin Name:       Ss Box
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_ss_box_init() {
		/* Automatically load dependencies and version */
		$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

		/* Main Block Script */
		wp_register_script(
			'mx-ss-box-main-script',
			plugins_url( 'build/index.js', __FILE__ ),
			$asset_file['dependencies'],
			$asset_file['version']
		);

		/**
		 *
		 * Callback to Render Dynamic Block Serverside
		 *
		 */
		function mx_ss_box_render_callback( $attributes, $content ) {
			$ss_id = $attributes['postID'];
			$permalink = get_permalink( $ss_id );
			$default_title = get_the_title($ss_id);
			$ss_name = (get_post_meta( $ss_id, 'ss_name', true )) ? get_post_meta( $ss_id, 'ss_name', true ) : $default_title;
			$ss_title = get_post_meta( $ss_id, 'ss_title', true );
			$ss_dealership = get_post_meta( $ss_id, 'ss_dealership', true );
			$ss_quote = get_post_meta( $ss_id, 'ss_quote', true );
			$ss_box_image = get_post_meta( $ss_id, 'ss_box_image', true );
			$ss_box_image_alt = get_post_meta( $ss_id, 'ss_box_image_alt', true );
			$slug = get_post_field( 'post_name', $ss_id );
			$departments = get_the_terms( $ss_id, 'success-stories-departments' );
			$permalink_final = $permalink . '?_success_story_department=' . $first_dept;

			$content = '<div class="wp-block-cover cta-box">';
				$content .= '<span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span>';
				$content .= '<img loading="lazy"class="wp-block-cover__image-background" src="'. esc_url( $ss_box_image ) .'" alt="'. esc_attr( $ss_box_image_alt ) .'" data-object-fit="cover">';
				$content .= '<div class="wp-block-cover__inner-container">';
					$content .= '<div class=" wp-block-group">';
						$content .= '<h2>'. wp_kses_post( $ss_quote, 'mx-blocks-plugin' ) .'</h2>';
						$content .= '<p>'. esc_html( $ss_name, 'mx-blocks-plugin' ) .', '. wp_kses_post( $ss_dealership, 'mx-blocks-plugin' ) .'</p>';
					$content .= '</div>';
					$content .= '<div class="wp-block-mx-buttons">';
						$content .= '<div class="wp-block-mx-button">';
							$content .= '<a class="wp-block-button__link" href="' . esc_url( $permalink_final ) .'">See the Full Story</a>';
						$content .= '</div>';
					$content .= '</div>';
				$content .= '</div>';
			$content .= '</div>';
			return $content;
		}

		/* Editor Styles */
		wp_register_style(
			'mx-ss-box-editor-style',
			plugins_url( 'build/index.css', __FILE__ ),
			null,
			$asset_file['version']
		);

		/* Frontend Styles */
		wp_register_style(
			'mx-ss-box-style',
			plugins_url( 'build/style-index.css', __FILE__ ),
			null,
			$asset_file['version']
		);

		/* Register the block serverside with callback for dynamic block */
		register_block_type( 'mx/ss-box', array(
			'api_version' => 2,
			/* Enqueue Main Script and Editor Styles */
			'editor_script' => 'mx-ss-box-main-script',
			'editor_style' => 'mx-ss-box-editor-style',
			'style' => 'mx-ss-box-style',
			'render_callback' => 'mx_ss_box_render_callback',
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
add_action( 'init', 'mx_ss_box_init' );
