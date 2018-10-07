
<?php
    wp_enqueue_script( 'sliders' );
    //no classes to start
    $classes = '';
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' carousel-slider--' . $title;
        }
    }
    //spacing classes
    $spacing = get_sub_field('spacing');
    if($spacing){
        foreach ($spacing as $space) {
            $classes .= ' carousel-slider--' . $space;
        }
    }
?>
<article class="carousel-slider<?php echo $classes; ?>">
        <?php if(get_sub_field('section_title')) : ?>
            <h1 class="section-title"><span><?php the_sub_field('section_title'); ?></span></h1>
        <?php endif; ?>
        <?php if(have_rows('slider_repeater')) : ?>
            <div class="carousel-slider__slides owl-carousel js-owl-carousel-slider">
                <?php while(have_rows('slider_repeater')) : the_row(); ?>
                	<?php 
                		// Set Image Vars
				        $image_array = get_sub_field('bg_image');
				        $attr = array(
				            'images' => array(
				                '(min-width: 800px)' => $image_array['sizes']['two-third'],
				                '(max-width: 799px)' => $image_array['sizes']['half']
				            )
				        );
				        // execute the function and store the resulting array
				        $bg_image = bg_image($attr);
                	?>
                    <div class="carousel-slider__slide <?php echo $bg_image['class']; ?>">
						<?php echo $bg_image['styles']; // echo the <style> tag ?>
						<div class="carousel-slider__content">

							<h3><?php the_sub_field('title'); ?></h3>
                        	<p><?php the_sub_field('text'); ?></p>
						</div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
</article>