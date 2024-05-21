<?php
$ss_id = get_the_ID();
$default_title = get_the_title($ss_id);
$ss_name = (get_post_meta( $ss_id, 'ss_name', true )) ? get_post_meta( $ss_id, 'ss_name', true ) : $default_title;
$ss_title = get_post_meta( $ss_id, 'ss_title', true );
$ss_dealership = get_post_meta( $ss_id, 'ss_dealership', true );
$ss_quote = get_post_meta( $ss_id, 'ss_quote', true );
$ss_bio = get_post_meta( $ss_id, 'ss_bio', true );
$ss_products_used = get_post_meta( $ss_id, 'ss_products_used', true );
$ss_video_url = get_post_meta( $ss_id, 'ss_video_url', true );
$ss_stat_text = get_post_meta( $ss_id, 'ss_stat_text', true );
$ss_stat_caption = get_post_meta( $ss_id, 'ss_stat_caption', true );
$ss_stat_icon = get_post_meta( $ss_id, 'ss_stat_icon', true );
$ss_stat_icon_alt = get_post_meta( $ss_id, 'ss_stat_icon_alt', true );
$ss_category_text = get_post_meta( $ss_id, 'ss_category_text', true );
$ss_category_caption = get_post_meta( $ss_id, 'ss_category_caption',	 true );
$ss_motto_image = get_post_meta( $ss_id, 'ss_motto_image', true );
$ss_motto_image_alt = get_post_meta( $ss_id, 'ss_motto_image_alt', true );
$ss_person_image = get_post_meta( $ss_id, 'ss_person_image', true );
$ss_person_image_alt = get_post_meta( $ss_id, 'ss_person_image_alt', true );
$ss_product_image = get_post_meta( $ss_id, 'ss_product_image', true );
$ss_product_image_alt = get_post_meta( $ss_id, 'ss_product_image_alt', true );
$departments = get_the_terms( $custom_post_id, 'success-stories-departments' );
$first_dept = $departments[0]->slug;
$products = get_the_terms( $custom_post_id, 'success-stories-products' );
$next_post = get_previous_post( true, '', 'success-stories-departments' ); // I know this is weird, but current site paginates right to left
$previous_post = get_next_post( true, '', 'success-stories-departments' ); // These are inteniionally backwards

if( $previous_post ) {
	$previous_post_name = $previous_post->post_name;
	$prev_slug = '/success-stories/' . $previous_post_name . '/?_success_story_department=' . $first_dept;
}

if( $next_post ) {
	$next_post_name = $next_post->post_name;
	$next_slug = '/success-stories/' . $next_post_name . '/?_success_story_department=' . $first_dept;
}
?>
<section class="ss-header <?php esc_attr_e( $first_dept, 'mx-theme' ); ?>">
	<div class="ss-header__upper">
		<?php if( $previous_post ) : ?>
			<span class="ss-header__prev">
				<a href="<?php echo esc_url( $prev_slug ); ?>" rel="prev">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 20" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" d="m4.3 9.79 8.6 9.7h-4L.3 9.79h4zM13 .09l-8.6 9.7h-4L9 .09h4z"/></svg>
				</a>
			</span>
		<?php endif; ?>
		<div class="ss-header__default-inner">
			<div class="ss-header__main-wrap">
				<div class="ss-header__image-wrap">
					<figure class="wp-block-mx-image size-full ss-header__motto-image">
						<img src="<?php echo esc_url( $ss_motto_image ); ?>" alt="<?php esc_attr_e( $ss_motto_image_alt, 'mx-theme' ); ?>" />
					</figure>
					<figure class="wp-block-mx-image size-full ss-header__person-image">
						<img src="<?php echo esc_url( $ss_person_image ); ?>" alt="<?php esc_attr_e( $ss_person_image_alt, 'mx-theme' ); ?>" />
					</figure>
				</div>
				<div class="ss-header__copy">
					<blockquote class="ss-card__quote"><?php esc_attr_e( $ss_quote, 'mx-theme' ); ?></blockquote>
					<h3 class="ss-card__name"><?php esc_attr_e( $ss_name, 'mx-theme' ); ?></h3>
					<p class="ss-card__title-dealership"><span><?php esc_html_e( $ss_title, 'mx-theme' ); ?></span>, <span><?php esc_html_e( $ss_dealership, 'mx-theme' ); ?></span></p>
					<figure class="wp-block-mx-image size-full ss-card__product-logo">
						<img src="<?php echo esc_url( $ss_product_image ); ?>" alt="<?php esc_attr_e( $ss_product_image_alt, 'mx-theme' ); ?>" />
					</figure>
					<?php if ( $ss_video_url ) : ?>
						<div class="wp-block-mx-buttons card__links">
							<div class="wp-block-mx-button ss-header__link is-style-secondary-button is-style-full-width-button">
								<a href="<?php echo esc_attr( $ss_video_url ); ?>" class="wp-block-button__link" data-fancybox>
									<?php esc_html_e( 'Watch the video', 'mx-theme' ); ?>
								</a>
							</div>
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
		<?php if( $next_post ) : ?>
			<span class="ss-header__next">
				<a href="<?php echo esc_url( $next_slug ); ?>" rel="next">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 20" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" d="M9 9.79.4.09h4l8.6 9.7H9zm-8.6 9.7L9 9.79h4l-8.6 9.7h-4z"/></svg>
				</a>
			</span>
		<?php endif; ?>
	</div>
	<div class="ss-header__lower">
		<div class="ss-header__default-inner">
			<div class="ss-header__stats">
				<div class="ss-header__stat">
					<div class="ss-header__stat-text">
						<span><?php esc_attr_e( $ss_stat_text, 'mx-theme' ); ?></span>
						<figure class="wp-block-mx-image size-full ss-header__stat-icon">
							<img src="<?php echo esc_url( $ss_stat_icon ); ?>" alt="<?php esc_attr_e( $ss_stat_icon_alt, 'mx-theme' ); ?>" />
						</figure>
					</div>
					<p class="ss-header__stat-caption"><?php esc_attr_e( $ss_stat_caption, 'mx-theme' ); ?></p>
				</div>
				<div class="ss-header__stat">
					<span><?php esc_attr_e( $ss_category_text, 'mx-theme' ); ?></span>
					<p class="ss-header__stat-caption"><?php esc_attr_e( $ss_category_caption, 'mx-theme' ); ?></p>
				</div>
			</div>
			<div class="ss-header__text">
				<p class="ss-header__products-used"><?php esc_html_e( 'Products Used:', 'mx-theme' ); ?> <?php echo wp_kses_post( __( $ss_products_used, 'mx-theme' ) ); ?></p>
				<div>
					<?php echo wp_kses_post( __( $ss_bio, 'mx-theme' ) ); ?>
				</div>
			</div>
		</div>
	</div>
</section>
