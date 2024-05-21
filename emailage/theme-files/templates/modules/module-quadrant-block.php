 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' quadrant-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' quadrant-block--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' quadrant-block--' . $pad;
        }
    }
 ?>
<article class="quadrant-block main-torso__module<?php echo $classes; ?>">
	<div class="quadrant-block__narrow-inner">
		<div class="quadrant-block__text">
            <?php if(get_sub_field('colored_title')) : ?>
                <h4 class="quadrant-block__colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
            <?php endif; ?>
            <?php if(get_sub_field('lead_text')) : ?>
                <h3><?php esc_html_e(get_sub_field('lead_text')); ?></h3>
            <?php endif; ?>
            <?php if( have_rows('text_blocks') ) : ?>
                <div class="quadrant-block__text-blocks">
                    <?php while ( have_rows('text_blocks') ) : the_row(); ?>
                        <div class="quadrant-block__text-block">
                            <h2><?php esc_html_e(the_sub_field('title')); ?></h2>
                            <p><?php esc_html_e(the_sub_field('text')); ?></p>
                        </div>
                    <?php endwhile; ?>
                </div>
            <?php endif; ?>
        </div>
	</div> <!-- // quadrant-block__inner -->  
</article> <!-- // quadrant-block -->  