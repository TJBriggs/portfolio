<?php wp_enqueue_script('flexslider'); ?>
<?php //special modification classes
    $special_class = get_sub_field('special_classes');
    if($special_class){
        $special_class_array = explode(" ", $special_class);
        foreach ($special_class_array as $class) {
            $special_class .= ' page__group--' . $class;
        }
    } 
?>
<section class="carousel <?php echo $special_class; ?>">
	<div class="carousel__inner">
		<h3 class="section-title"><?php the_sub_field('section_title'); ?></h3>
		<div class="carousel--slider flexslider2">
			<ul class="slides">
				<?php if(have_rows('carousel_repeater')) : ?>
					<?php while(have_rows('carousel_repeater')) : the_row(); ?>
				        <?php $slide_image = get_sub_field('slide_image'); ?>
				        <?php $slide_text = get_sub_field('slide_text'); ?>
						<li class="carousel__slide-item" style="background-image:url(<?php echo $slide_image['sizes']['carousel']; ?>);">
							<p><?php echo $slide_text; ?></p>
						</li> <!-- // carousel__slide-item -->
					<?php endwhile; ?>
				<?php endif; ?>
			</ul> <!-- // slides -->
		</div>	<!-- // carousel--slider -->
	</div><!-- carousel__inner -->
</section> <!-- // carousel -->