<?php wp_enqueue_script('flexslider'); ?>
<?php //special modification classes
    $special_class = get_sub_field('special_classes');
    if($special_class){
        $special_class_array = explode(" ", $special_class);
        foreach ($special_class_array as $class) {
            $special_class = ' page__group--' . $class;
        }
    } 
?>
<section class="work-slider<?php echo $special_class; ?>">
<?php if(get_sub_field('section_title')): ?>
	<?php $section_title = get_sub_field('section_title'); ?>
<?php endif; ?>
	<?php if(get_sub_field('slides')): ?>
	    <div class="work--flexslider">
    		<div class="work__slides">
		    	<?php while(has_sub_field('slides')): ?>
		    		<div class="work__slide">
		    			<div class="content__left">
		    				<h3 class="slider__title"><?php echo $section_title; ?></h3>
		    				<div class="slide__content">
			    				<h4 class="slide__content--slide-title"><?php the_sub_field('slide_title'); ?></h4>
			    				<div class="slide__content--slide-text">
			    					<?php the_sub_field('slide_text'); ?>
			    				</div> <!-- // slide__content--slide-text -->
			    				<a class="slide__content--cta btn-clear" href="<?php the_sub_field('cta_btn_link') ?>" ><?php the_sub_field('cta_btn_text') ?></a>
		    				</div> <!-- // slide__content -->
		    			</div> <!-- // content__left -->
		    			<div class="content__right">
		    				<div class="image--flexslider flexslider">
		    					<ul class="slides">
		    						<?php if(have_rows('image_repeater')) : ?>
		    							<?php while(have_rows('image_repeater')) : the_row(); ?>
		    							<?php $img_full = get_sub_field('image'); ?>
		    							<li class="image__slide-item" style="background-image:url(<?php echo $img_full['sizes']['sliderFull']; ?>);"></li>
		    							<?php endwhile; ?>
		    						<?php endif; ?>
		    					</ul>
		    				</div>
		    			</div> <!-- // content__right -->
		    		</div>
		    	<?php endwhile; ?>
	    	</div> <!-- // work--slider -->
	    </div>
	    <div class="work__flexslider-controls">
		    <div class="controls__wrap">
		    	<ul class="work__control-nav">
			    	<?php while(has_sub_field('slides')): ?>
			    		<?php $img_thumb = get_sub_field('img_thumb'); ?>
			    		<li style="background-image:url(<?php echo $img_thumb['sizes']['sliderThumb']; ?>);"><span class="overlay"></span></li>
			    	<?php endwhile; ?>
		    	</ul> <!-- // work__control-nav -->
		    </div> <!-- // controls__wrap -->
	    </div> <!-- // work__flexslider-controls -->
   <?php endif; ?>
</section>