 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' basic-cta--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' basic-cta--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' basic-cta--' . $pad;
        }
    }
 ?>
<article class="basic-cta main-torso__module<?php echo $classes; ?>">
	<div class="basic-cta__inner">
		<h4><?php esc_html_e(the_sub_field('title')); ?></h4>
        <div class="basic-cta__wrap">
            <p><?php esc_html_e(the_sub_field('text')); ?></p>
            <a class="btn btn--primary" href="<?php echo esc_url(the_sub_field('button_link')); ?>"><?php esc_html_e(the_sub_field('button_text')); ?></a>
        </div>
	</div> <!-- // basic-cta__inner -->  
</article> <!-- // basic-cta -->  