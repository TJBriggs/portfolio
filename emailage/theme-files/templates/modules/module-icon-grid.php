 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' icon-grid--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' icon-grid--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' icon-grid--' . $pad;
        }
    }
 ?>
<article class="icon-grid main-torso__module<?php echo $classes; ?>">
	<div class="icon-grid__inner">
        <div class="icon-grid__intro-wrap">
            <?php if( get_sub_field('colored_title') ) : ?>
              <h4 class="icon-grid__colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
            <?php endif; ?>
            <?php if( get_sub_field('large_title') ) : ?>
              <h2 class="icon-grid__large-title"><?php esc_html_e(the_sub_field('large_title')); ?></h2>
            <?php endif; ?>
            <?php if( get_sub_field('lead_text') ) : ?>
              <h3 class="icon-grid__lead-text"><?php esc_html_e(the_sub_field('lead_text')); ?></h3>
            <?php endif; ?>
        </div>
        <?php 
            $icon_mod = '';
            $icon_count = count( get_sub_field('icons' ) ); 
            if($icon_count === 4 ) {
                $icon_mod = ' two-by-two';
            }
        ?>
        <?php if( have_rows('icons') ) : ?>
            <div class="icon-grid__icon-wrap<?php echo $icon_mod ?>">
                <?php while ( have_rows('icons') ) : the_row(); ?>
                    <div class="icon-grid__icon">
                        <?php 
                            // Icon Vars
                            $icon_array = get_sub_field('icon');
                            $icon_url = $icon_array['url'];
                            $icon_alt = $icon_array['alt'];
                        ?>
                        <img src="<?php echo esc_url($icon_url); ?>" alt="<?php esc_html_e($icon_alt); ?>">
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
	</div> <!-- // icon-grid__inner -->  
</article> <!-- // icon-grid -->  