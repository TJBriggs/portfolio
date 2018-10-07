 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' careers-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' careers-block--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' careers-block--' . $pad;
        }
    }
 ?>
<article class="careers-block main-torso__module<?php echo $classes; ?>">
	<div class="careers-block__inner">
        <div class="careers-block__intro-wrap">
            <?php if( get_sub_field('colored_title') ) : ?>
    		  <h4 class="careers-block__colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
            <?php endif; ?>
            <?php if( get_sub_field('lead_text') ) : ?>
              <h3 class="careers-block__lead-text"><?php esc_html_e(the_sub_field('lead_text')); ?></h3>
            <?php endif; ?>
        </div>
        <?php if(get_sub_field('careers_feed')) : ?>
            <div class="careers-block__filters">
                <?php echo facetwp_display( 'facet', 'careers_category' ); ?>
                <?php echo facetwp_display( 'facet', 'careers_location' ); ?>
            </div>
           <div class="careers-block__posts">
               <?php echo facetwp_display( 'template', 'careers' ); ?>
           </div>
       <?php endif; ?>
	</div> <!-- // careers-block__inner -->  
</article> <!-- // careers-block -->  