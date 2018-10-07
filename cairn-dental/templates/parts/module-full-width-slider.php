<?php 
	// Modifier Classes
	$classes = '';
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' full-width-slider--' . $title;
        }
    }
?>
<article class="full-width-slider<?php echo $classes; ?>">
	<?php if(have_rows('full_repeater')) : ?>
		<div class="owl-carousel owl-carousel--full">
			<?php while(have_rows('full_repeater')) : the_row(); ?>
 				<?php
	  				// Set Image Vars
					$image_array = get_sub_field('slide_image');
					$image_size = $image_array['sizes']['full-slide'];
					$image_style = ' style="background-image: url('.$image_size.');"';
					// Layout Modifier
					$layout_mod = '';
					$layout = get_sub_field('text_layout');
					if($layout == "left") {
						$layout_mod = ' slider-text--left';
					} elseif($layout == "right") {
						$layout_mod = ' slider-text--right';
					} elseif($layout == "center") {
						$layout_mod = ' slider-text--center';
					}
	 			?>
		  		<div class="full-width-slider__slide<?php echo $layout_mod; ?>"<?php echo $image_style; ?>>
		  			<div class="slide__overlay">
		  				<div class="slide__inner">
			  				<div class="slide__content">
				  				<div class="slide__text">
				  					<?php if(get_sub_field('bold_text')) : ?>
				  						<h3><?php the_sub_field('bold_text'); ?></h3>
				  					<?php endif; ?>
				  					<?php if(get_sub_field('thin_text')) : ?>
				  						<p><?php the_sub_field('thin_text'); ?></p>
				  					<?php endif; ?>
				  					<?php if(get_sub_field('add_button')) : ?>
				  						<?php 
				  							$link_mod = '';
				  							$link_option = get_sub_field('link_option');
				  							if($link_option) {
				  								$link_mod = ' target="_blank"';
				  							}
				  						?>
										<a class="btn btn-alt" href="<?php the_sub_field('button_link'); ?>"<?php echo $link_mod; ?>><?php the_sub_field('button_text'); ?></a>
				  					<?php endif; ?>
				  				</div>
	 						</div>
			  			</div>
		  			</div>
		  			
		  		</div>
		  	<?php endwhile; ?>
		</div>	
	<?php endif; ?>
</article>