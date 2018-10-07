<?php 
	// Modifier Classes
	$classes = '';
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' faqs--' . $title;
        }
    }
?>
<article class="faqs<?php echo $classes; ?>">
	<div class="faqs__inner">
		<h5 class="section-title"><?php the_sub_field('section_title'); ?></h5>
		<?php // Define category and slug
		    $faq_cat = get_sub_field('faq_categories');
		    $faq_slug = $faq_cat->slug;	
		    // Set query arguments			    
		    $args = array(
                'posts_per_page' => -1,
                'tax_query' => array(
                    array(
                        'taxonomy' => 'faq_cats',
                        'field' => 'slug',
                        'terms' => $faq_slug
                    )
                )
			);
        ?>
        <?php $the_query = new WP_Query($args); ?>
		<?php if ($the_query->have_posts()) : ?>
			<?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
				<div class="accordion">
			        <span class="accordion__link" herf="#"><span><img class="js-ajax-replace" src="<?php bloginfo('template_url'); ?>/images/global/accordion-arrow.svg" alt="Arrow Icon"></span><?php the_field('question'); ?></span>
			        <div class="accordion__content">
			        	<?php the_field('answer'); ?>
			        </div> <!-- // accordion-content --> 	
			    </div> <!-- // accordion-block__wrap --> 					
			<?php endwhile; wp_reset_query();?>
		<?php endif; ?>
	</div> <!-- // faqs__inner --> 	
</article>