 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' text-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' text-block--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' text-block--' . $pad;
        }
    }
 ?>
<article class="text-block main-torso__module<?php echo $classes; ?>">
	<div class="text-block__narrow-inner">
		<div class="text-block__text">
            <?php if(get_sub_field('colored_title')) : ?>
                <h4 class="text-block__colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
            <?php endif; ?>
            <?php if(get_sub_field('lead_text')) : ?>
                <h3 class="text-block__lead-text"><?php esc_html_e(get_sub_field('lead_text')); ?></h3>
            <?php endif; ?>
            <?php if(get_sub_field('text')) : ?>
                <div class="text-block__paragraph-text"><?php the_sub_field('text'); ?></div>
            <?php endif; ?>
        </div>
	</div> <!-- // text-block__inner -->  
</article> <!-- // text-block -->  