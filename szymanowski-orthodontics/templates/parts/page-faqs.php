<?php wp_enqueue_script('jquery-ui'); ?>
<section class="faqs">
	<div class="faqs__inner">
		<!--  Pull in Page Header -->
		<?php if(get_sub_field('section_title')): ?>
			<?php $section_title = get_sub_field('section_title'); ?>
			<div class="section__title-wrap">
				<h2 class="section__title"><?php echo $section_title; ?></h2>	
			</div> <!-- //section__title-wrap -->
		<?php endif; ?>

		<!--  Pull in FAQ Intro Section -->
		<?php if(get_sub_field('faq_intro')): ?>
			<?php $faq_intro = get_sub_field('faq_intro'); ?>
				<div class="faq-intro"><?php echo $faq_intro; ?></div>
		<?php endif; ?>
		<div id="accordion-container">
			<!--  FAQ Reapeter Loop -->
			<?php if(have_rows('faq_repeater')) : ?>
				<?php while(have_rows('faq_repeater')) : the_row(); ?>
					<?php // Define Category and slug
					    $faqheader = get_sub_fieLd('faq_header');
					    $faqcategory = get_sub_field('faq_section');
					    $faqslug = $faqcategory->slug;				    

					    $args = array(
			                'posts_per_page' => -1,
			                'tax_query' => array(
			                    array(
			                        'taxonomy' => 'faq-type',
			                        'field' => 'slug',
			                        'terms' => $faqslug
			                    )
			                )
						);
			        ?>
			        <h3><?php echo $faqheader; ?></h3>
				        <div class="accordion">
				        	<?php $the_query = new WP_Query($args); ?>
				            <?php if ($the_query->have_posts()) : ?>
				                <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
									<?php $question = get_field('question'); ?>
									<?php $answer = get_field('answer'); ?>
									<h4><?php echo $question; ?></h4>
									<div><?php echo $answer; ?></div>	
								<?php endwhile; wp_reset_query();?>
				            <?php endif; ?>
			        	</div> <!-- //accordian -->
		        <?php endwhile; ?> <!-- // Repeater While -->
			<?php endif; ?> <!-- // Repeater If -->
		</div> <!-- //accordian-container -->
	</div> <!-- // reviews__inner -->
</section>



