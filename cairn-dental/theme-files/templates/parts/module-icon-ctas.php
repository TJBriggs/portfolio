<?php 
	// Modifier Classes
	$classes = '';
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' icon-ctas--' . $title;
        }
    }
    // Count Mod
    $icons = get_sub_field('icon_repeater');
    $icon_count = count($icons);
    $mod = '';
    $mod = ' icon-ctas--' . $icon_count;
    // Title Mod
    $title = get_sub_field('section_title');
    $mod_title = '';
    if($title) {
        $mod_title = ' icon-ctas--title';
    }
?>
<article class="icon-ctas<?php echo $mod; ?><?php echo $mod_title; ?><?php echo $classes; ?>">
	<div class="icon-ctas__inner">
		<?php if(get_sub_field('section_title')) : ?>
			<h2 class="section-title"><?php the_sub_field('section_title'); ?></h2>
		<?php endif; ?>
		<div class="icon-ctas__wrap">
			<?php while(have_rows('icon_repeater')) : the_row(); ?>
				<?php 
					// Set Icon Vars
					$icon_array = get_sub_field('cta_icon');
					$icon_url = $icon_array['url'];
					$icon_alt = $icon_array['alt'];
				?>
				<div class="cta">
					<a class="cta__link" href="<?php the_sub_field('cta_link'); ?>">
						<div class="cta__content">
							<div class="cta__hover">
								<img class="cta__icon js-ajax-replace" src="<?php echo $icon_url; ?>" alt="<?php echo $image_alt; ?>">
								<h5 class="cta__title"><?php the_sub_field('cta_title'); ?><span>></span></h5>
							</div>
							<p class="cta__text"><?php the_sub_field('cta_text'); ?></p>
						</div> <!-- // icon-cta__front -->
					</a> 	
				</div>
			<?php endwhile; ?>
		</div>
	</div> <!-- // icon-ctas__inner --> 	
</article> <!-- // icon-ctas --> 	