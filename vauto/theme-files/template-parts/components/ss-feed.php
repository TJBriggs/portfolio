<?php
/**
 *
 * Success Stories Feed
 *
 */
?>
<section class="ss-feed">
	<div class="ss-feed__default-inner">
		<div class="ss-feed__filters">
			<div class="facetwp-facet facetwp-filter-wrap">
				<?php echo facetwp_display( 'facet', 'success_story_department' ); ?>
				<?php echo facetwp_display( 'facet', 'success_story_product' ); ?>
				<button class="fwp-submit" data-href="/success-stories/">Filter</button>
			</div>
			<div class="facetwp-facet facetwp-filter-selections">
				<span class="facetwp-facet__label"><?php esc_attr_e( 'Filtering: ', 'mx-theme' ); ?></span>
				<?php echo facetwp_display( 'selections' ); ?>
			</div>
		</div>
		<div class="ss-feed__grid">
			<?php echo facetwp_display( 'template', 'success_stories' ); ?>
		</div>
	</div>
</section>
