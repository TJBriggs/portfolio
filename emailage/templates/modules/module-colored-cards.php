 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' colored-cards--main-' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' colored-cards--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' colored-cards--' . $pad;
        }
    }
 ?>
<article class="colored-cards main-torso__module<?php echo $classes; ?>">
	<div class="colored-cards__inner">
        <div class="colored-cards__intro-wrap">
            <?php if( get_sub_field('colored_title') ) : ?>
              <h4 class="colored-cards__main-colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
            <?php endif; ?>
            <?php if( get_sub_field('lead_text') ) : ?>
              <h3 class="colored-cards__lead-text"><?php esc_html_e(the_sub_field('lead_text')); ?></h3>
            <?php endif; ?>
        </div>
        <?php if( have_rows('cards') ) : ?>
            <div class="cards">
                <?php while ( have_rows('cards') ) : the_row(); ?>
                    <?php 
                        // Accent Color Modifier
                        $accent_mod = '';
                        $accent_color = get_sub_field('color_accents');
                        if($accent_color) {
                            $accent_mod = ' card--' . $accent_color[0]->post_name;
                        }
                    ?>
                    <div class="cards__card<?php echo $accent_mod; ?>">
                        <div class="cards__left-wrap">
                            <div class="cards__card-icon">
                                <?php 
                                    // Icon Vars
                                    $icon_array = get_sub_field('icon');
                                    $icon_url = $icon_array['url']; // temporary
                                    $icon_size = $icon_array['sizes']['full-icon'];
                                    $icon_alt = $icon_array['alt'];
                                ?>
                                <img class="svg-replace" src="<?php echo esc_url($icon_url); ?>" alt="<?php esc_html_e($icon_alt); ?>">
                            </div>
                            <div class="cards__card-left">
                                <h2><?php esc_html_e(the_sub_field('title')); ?></h2>
                                <h5><?php esc_html_e(the_sub_field('subtitle')); ?></h5>
                                <p><?php esc_html_e(the_sub_field('text')); ?></p>
                                <a class="btn" href="<?php echo esc_url(the_sub_field('button_link')); ?>"><?php esc_html_e(the_sub_field('button_text')); ?></a>
                            </div>
                        </div>
                        <div class="cards__card-right">
                            <h4><?php esc_html_e(the_sub_field('cs_title')); ?></h4>
                            <h3><?php esc_html_e(the_sub_field('cs_text')); ?></h3>
                            <a class="btn" href="<?php echo esc_url(the_sub_field('cs_button_link')); ?>"><?php esc_html_e(the_sub_field('cs_button_text')); ?></a>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
	</div> <!-- // colored-cards__inner -->  
</article> <!-- // colored-cards -->  