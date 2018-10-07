
<section class="reviews">
	<div class="reviews__inner">
		<?php if(get_sub_field('section_title')): ?>
			<?php $section_title = get_sub_field('section_title'); ?>
				<div class="section__title-wrap">
					<h2 class="section__title"><?php echo $section_title; ?></h2>	
				</div> <!-- // section__title-wrap -->
			<?php endif; ?>
			
			<?php
			    $args = array(
				    'post_type' => 'testimonials',
				    'posts_per_page' => -1,
				);
				
				$loop = new WP_Query( $args );
				$count = 1;
			?>
		<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
			<?php $pat_name = get_field('patient_name'); ?>
    		<?php $pat_city = get_field('patient_city'); ?>
    		<?php $pat_state = get_field('patient_state'); ?>
    		<?php $pat_test = get_field('patient_testimonial'); ?>
    		<?php $pat_img = get_field('patient_image'); ?>
				
				<?php if($pat_img) : ?> <!-- if there is an image for the review then proceed -->
					<?php if($count%3 == 0 OR $count%4 == 0): 
						$modifier = '--modifier';
					else:
						$modifier = '';
					endif;
				?>
					<div class="review-row<?php echo $modifier; ?>">
						<aside class="polaroid-wrap">
							<div class="polaroid">
								<figure class="polaroid-image">
									<div class="img-wrap">
										<img src="<?php echo $pat_img['url']; ?>" alt="<?php echo $pat_img['alt']; ?>">
									</div> <!-- // img-wrap -->
									<figcaption><?php echo $pat_name; ?></figcaption>
								</figure> <!-- // poloaroid-image -->
							</div> <!-- // polaroid -->
						</aside> <!-- // polaroid-wrap-->
						<article class="review-text">
							<?php
							$terms = get_the_terms( $post->ID, 'testimonial-type' );
							if ( $terms && ! is_wp_error( $terms ) ) : 
								$testimonial_type = array();
								foreach ( $terms as $term ) {
									$testimonial_type[] = $term->name;
								}												
								$testimonials = join( " &amp; ", $testimonial_type );
							?>
								<h4><?php echo $testimonials; ?></h4>
							<?php endif; ?>
								<p>"<?php echo $pat_test; ?>"</p>
								<div class="signature">
									<p>- <?php echo $pat_name; ?></p>
								</div> <!-- // signature -->
						</article> <!-- // review-text -->
					</div> <!-- // review -->
				<?php endif; ?>
				<?php  
					$count++; 
					if($count > 4):
						$count = 1;
					endif;
				?> 
		<?php endwhile; 
		wp_reset_query() ?>
	</div> <!-- // reviews__inner -->
</section>