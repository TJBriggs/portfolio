 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' centered-cta--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' centered-cta--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' centered-cta--' . $pad;
        }
    }
 ?>
<article class="centered-cta main-torso__module<?php echo $classes; ?>">
	<div class="centered-cta__narrow-inner">
		<?php if( get_sub_field('colored_title') ) : ?>
          <h4 class="centered-cta__colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
        <?php endif; ?>
        <?php if( get_sub_field('lead_text') ) : ?>
          <h3 class="centered-cta__lead-text"><?php esc_html_e(the_sub_field('lead_text')); ?></h3>
        <?php endif; ?>
        <a class="btn" href="<?php echo esc_url(the_sub_field('button_link')); ?>"><?php esc_html_e(get_sub_field('button_text')); ?></a>
	</div> <!-- // centered-cta__inner -->  
</article> <!-- // centered-cta -->  