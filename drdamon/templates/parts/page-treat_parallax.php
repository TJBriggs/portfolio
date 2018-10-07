<section class="treat-testimonial">
	<div class="treat-testimonial__inner">
		<!--  Testimonial Reapeter Loop -->
		<?php if(have_rows('treat_repeater')) : ?>
			<?php while(have_rows('treat_repeater')) : the_row(); ?>
				<?php // Define Category and slug
				    $treat_category = get_sub_field('treat_category');
				    $cta_link = get_sub_field('cta_link');
				    $cta_text = get_sub_field('cta_link_text');
				    $treat_slug = $treat_category->slug;				    
				    $args = array(
		                'posts_per_page' => 1,
		                'orderby' => 'rand',
		                'tax_query' => array(
		                    array(
		                        'taxonomy' => 'testimonial-type',
		                        'field' => 'slug',
		                        'terms' => $treat_slug
	                        )
	                    ),
	                    'meta_query' => array(
		                    array(
		                        'key' => 'sticky',
		                        'value' => true,
		                        'compare' => 'LIKE'
		                    )
		                )
					);
		        ?>	        			 
		        	<?php $the_query = new WP_Query($args); ?>
		            <?php if ($the_query->have_posts()) : ?>
		                <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
							<?php $pat_name = get_field('patient_name'); ?>
	                		<?php $pat_city = get_field('patient_city'); ?>
	                		<?php $pat_state = get_field('patient_state'); ?>
	                		<?php $pat_test = get_field('patient_testimonial'); ?>
							<?php $pat_img = get_field('patient_image'); ?>	
								
								<?php if($pat_img) : ?> <!-- if there is an image for the review then proceed -->		
									<aside class="testimonial-img">
										<figure>
											<div class="img-wrap">
												<img src="<?php echo $pat_img['url']; ?>" alt="<?php echo $pat_img['alt']; ?>">
											</div>
										</figure>
									</aside> <!-- // testimonial-img -->

									<article class="testimonial-text">
										<div class="testimonial-text__inner">
											<p>"<?php echo $pat_test; ?>"</p>
											<div class="signature">
												<p>- <?php echo $pat_name; ?></p>
											</div> <!-- // signature -->
										</div> <!-- // testimonial-text__inner -->
									</article> <!-- // testimonial-text -->
								<?php endif; ?>
						<?php endwhile; wp_reset_query();?>
		            <?php endif; ?>
			<?php endwhile; ?> <!-- // Repeater While -->
		<?php endif; ?> <!-- // Repeater If -->
	</div> <!-- // treat-testimonial__inner -->
</section> <!-- // treat-testimonial -->



