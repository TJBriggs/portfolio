 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' full-cards--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' full-cards--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' full-cards--' . $pad;
        }
    }
 ?>
<article class="full-cards main-torso__module<?php echo $classes; ?>">
	<div class="full-cards__inner">
		<div class="full-cards__intro-wrap">
            <?php if( get_sub_field('colored_title') ) : ?>
              <h4 class="full-cards__colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
            <?php endif; ?>
            <?php if( get_sub_field('lead_text') ) : ?>
              <h3 class="full-cards__lead-text"><?php esc_html_e(the_sub_field('lead_text')); ?></h3>
            <?php endif; ?>
        </div>
        <?php if( have_rows('cards') ) : ?>
            <div class="cards">
                <?php while ( have_rows('cards') ) : the_row(); ?>
                    <div class="cards__card">
                        <div class="cards__card-icon">
                            <?php 
                                // Icon Vars
                                $icon_array = get_sub_field('card_icon');
                                $icon_size = $icon_array['sizes']['full-icon'];
                                $icon_alt = $icon_array['alt'];
                            ?>
                            <img src="<?php echo esc_url($icon_size); ?>" alt="<?php esc_html_e($icon_alt); ?>">
                        </div>
                        <h2 class="cards__card-title"><?php esc_html_e(the_sub_field('card_title')); ?></h2>
                        <div class="cards__card-text"><?php the_sub_field('card_text'); ?></div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
	</div> <!-- // full-width-cards__inner -->  
</article> <!-- // full-width-cards -->  