<?php
/**
 *
 * Success Story Card
 *
 */
$ss_id = get_the_ID();
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
$permalink = get_permalink( $ss_id );
$slug = get_post_field( 'post_name', $ss_id );
$departments = get_the_terms( $ss_id, 'success-stories-departments' );
$deptCount = count( $departments );
$first_dept = $departments[0]->slug;
if( $deptCount > 1 ) {
	$cardClass = 'new-car used-car both';
} else {
	$cardClass = $departments[0]->slug;
}
$permalink_final = $permalink . '?_success_story_department=' . $first_dept;
?>
<div class="ss-card">
	<div class="ss-card__image-content" style="background-image: url(<?php echo '/wp-content/themes/vauto/dist/images/card-overlay.png'; ?>), url(<?php echo $ss_person_image; ?>), url(<?php echo '/wp-content/themes/vauto/dist/images/accent-line.png'; ?>" >
		<img class="ss-card__mobile-logo" src="<?php echo esc_url( $ss_product_image ); ?>" alt="<?php esc_attr_e( $ss_product_image_alt, 'mx-theme' ); ?>" />
		<div class="ss-card__overlay-wrap">
			<div class="ss-card__overlay-inner">
				<img class="ss-card__motto-image" src="<?php echo esc_url( $ss_motto_image ); ?>" alt="<?php esc_attr_e( $ss_motto_image_alt, 'mx-theme' ); ?>" />
				<div class="ss-card__mobile-text">
					<h3 class="ss-card__mobile-name has-small-font-size bold"><?php esc_html_e( $ss_name, 'mx-theme' ); ?></h3>
					<p class="ss-card__mobile-title-dealership has-small-font-size"><span><?php esc_html_e( $ss_title, 'mx-theme' ); ?></span>, <span><?php esc_html_e( $ss_dealership, 'mx-theme' ); ?></span></p>
					<div class="wp-block-mx-buttons ss-card__links">
						<div class="wp-block-mx-button ss-card__link is-style-secondary-button is-style-xsmall-button">
							<a class="wp-block-button__link" href="<?php echo esc_url( $permalink_final ); ?>" data-slug="success-stories-<?php esc_attr_e( $slug, 'mx-theme' ); ?>"><?php esc_html_e( 'View', 'mx-theme' ); ?></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="ss-card__desktop-content">
		<blockquote class="ss-card__quote thinweight"><?php esc_html_e( $ss_quote, 'mx-theme' ); ?></blockquote>
		<h3 class="ss-card__name has-small-font-size bold"><?php esc_html_e( $ss_name, 'mx-theme' ); ?></h3>
		<p class="ss-card__title-dealership has-medium-font-size thinweight"><span><?php esc_html_e( $ss_title, 'mx-theme' ); ?></span>, <span><?php esc_html_e( $ss_dealership, 'mx-theme' ); ?></span></p>
		<figure class="wp-block-mx-image size-full ss-card__product-logo">
			<img src="<?php echo esc_url( $ss_product_image ); ?>" alt="<?php esc_attr_e( $ss_product_image_alt, 'mx-theme' ); ?>" />
		</figure>
		<div class="wp-block-mx-buttons ss-card__links">
			<div class="wp-block-mx-button ss-card__link is-style-secondary-button is-style-xsmall-button">
				<a class="wp-block-button__link" href="<?php echo esc_url( $permalink_final ); ?>" data-slug="success-stories-<?php esc_attr_e( $slug, 'mx-theme' ); ?>"><?php esc_html_e( 'View', 'mx-theme' ); ?></a>
			</div>
		</div>
	</div>
</div>
