<?php
    $classes = '';
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' accordions--' . $title;
        }
    }
    //spacing classes
    $spacing = get_sub_field('spacing');
    if($spacing){
        foreach ($spacing as $space) {
            $classes .= ' accordions--' . $space;
        }
    }
?>
<article class="accordions<?php echo $classes; ?>">
	<div class="accordions__inner">
		<?php if(get_sub_field('section_title')) : ?>
			<h1 class="section-title"><?php the_sub_field('section_title'); ?></h1>
		<?php endif; ?>
		<div class="accordions__wrap">
			<?php while(have_rows('accordions_repeater')) : the_row(); ?>
				<div class="accordions__accordion">
			        <span class="accordions__link" herf="#"><span><img src="<?php bloginfo('template_url'); ?>/images/global/accordion-arrow-dark.png" alt="Arrow Icon"></span><?php the_sub_field('title'); ?></span>
			        <div class="accordions__content">
			        	<?php the_sub_field('content'); ?>
			        </div> <!-- // accordion-content --> 	
			    </div> <!-- // accordion-block__wrap --> 					
			<?php endwhile; ?>
		</div>
	</div> <!-- // accordions__inner --> 	
</article>