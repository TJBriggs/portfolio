 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' hover-ctas--main-' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' hover-ctas--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' hover-ctas--' . $pad;
        }
    }
 ?>
<article class="hover-ctas main-torso__module<?php echo $classes; ?>">
	<div class="hover-ctas__inner">
		<div class="hover-ctas__intro-wrap">
            <?php if( get_sub_field('colored_title') ) : ?>
              <h4 class="hover-ctas__main-colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
            <?php endif; ?>
            <?php if( get_sub_field('large_title') ) : ?>
              <h2 class="hover-ctas__large-title"><?php esc_html_e(the_sub_field('large_title')); ?></h2>
            <?php endif; ?>
            <?php if( get_sub_field('lead_text') ) : ?>
              <h3 class="hover-ctas__lead-text"><?php esc_html_e(the_sub_field('lead_text')); ?></h3>
            <?php endif; ?>
        </div>
        <?php if( have_rows('ctas') ) : ?>
            <div class="ctas">
                <?php while ( have_rows('ctas') ) : the_row(); ?>
                    <?php 
                        // Accent Color Modifier
                        $accent_mod = '';
                        $accent_color = get_sub_field('color_accents');
                        if($accent_color) {
                            $accent_mod = ' cta--' . $accent_color[0]->post_name;
                        }
                    ?>
                    <a class="ctas__cta<?php echo $accent_mod; ?>" href="<?php echo esc_url(the_sub_field('link_url')); ?>">
                        <?php 
                            // Icon Vars
                            $icon_array = get_sub_field('icon');
                            $icon_url = $icon_array['url']; // temporary
                            $icon_alt = $icon_array['alt'];
                        ?>
                        <div class="ctas__cta-icon">
                            <img class="svg-replace" src="<?php echo esc_url($icon_url); ?>" alt="<?php esc_html_e($icon_alt); ?>">
                        </div>
                        <h3><?php esc_html_e(the_sub_field('title')); ?></h3>
                        <h6 class="ctas__cta-link"><?php esc_html_e(the_sub_field('link_text')); ?></h6>
                    </a>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
	</div> <!-- // hover-ctas__inner -->  
</article> <!-- // hover-ctas -->  