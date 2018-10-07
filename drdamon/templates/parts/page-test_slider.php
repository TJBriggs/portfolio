<?php wp_enqueue_script('flexslider'); ?>
<?php if(get_sub_field('section_bg_color')): ?>
<?php $test_bg = get_sub_field('section_bg_color'); ?>
<section class="testimonials <?php echo $test_bg; ?>">
<?php endif; ?>
	<?php if(get_sub_field('add_testimonial')) : ?>
		<div class="testimonial-slider">
			<div class="testimonial-slider__inner flexslider--testimonials">
                <ul class="slides">
					<?php
					    $args = array(
						    'post_type' => 'testimonials',
						    'posts_per_page' => -1,
						);
						$loop = new WP_Query( $args );
					?>

					<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
	                    <li class="testimonials__slide-item">
	                		<?php $pat_name = get_field('patient_name'); ?>
	                		<?php $pat_city = get_field('patient_city'); ?>
	                		<?php $pat_state = get_field('patient_state'); ?>
	                		<?php $pat_test = get_field('patient_testimonial'); ?>
								<div class="testimonial__text">
									<p>"<?php echo $pat_test; ?>"</p>
									<p>- <?php echo $pat_name; ?> -</p>
								</div> <!-- // testimonial__text -->
	                    </li> <!-- // testimonials__slide-item -->
					<?php endwhile; 
					wp_reset_query() ?>
                </ul> <!-- // slides -->
            </div> <!-- // testimonial-slider__inner -->
        </div> <!-- // testimonial-slider -->
	<?php endif; ?>
</section> <!-- // testimonials -->