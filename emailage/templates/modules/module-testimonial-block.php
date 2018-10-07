 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' testimonial-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' testimonial-block--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' testimonial-block--' . $pad;
        }
    }
 ?>
<article class="testimonial-block main-torso__module<?php echo $classes; ?>">
	<div class="testimonial-block__inner">
		<div class="testimonial-block__wrap">
            <h3 class="testimonial-block__testimonial"><?php esc_html_e(get_sub_field('testimonial_text')); ?></h3>
            <h4 class="testimonial-block__source"><?php esc_html_e(get_sub_field('source_text')); ?></h4>
            <h5 class="testimonial-block__title"><?php esc_html_e(get_sub_field('source_title')); ?></h5>
        </div>
	</div> <!-- // testimonial-block__inner -->  
</article> <!-- // testimonial-block -->  