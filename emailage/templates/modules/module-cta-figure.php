 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' cta-figure--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' cta-figure--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' cta-figure--' . $pad;
        }
    }
 ?>
<article class="cta-figure main-torso__module<?php echo $classes; ?>">
    <h4 class="cta-figure__colored-title mobile"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
    <div class="cta-figure__main-wrap">
        <div class="cta-figure__figure-wrap">
            <?php 
                // Figure Vars
                $figure_array = get_sub_field('figure_image');
                $figure_size = $figure_array['sizes']['hero-figure'];
                $figure_alt = $figure_array['alt'];
            ?>
            <img class="cta-figure__figure" src="<?php echo esc_url($figure_size); ?>" alt="<?php esc_html_e($figure_alt); ?>">
        </div>
        <div class="cta-figure__text">
            <h4 class="cta-figure__colored-title desktop"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
            <?php if(get_sub_field('lead_text')) : ?>
                <h3 class="cta-figure__lead-text"><?php esc_html_e(get_sub_field('lead_text')); ?></h3>
            <?php endif; ?>
            <?php if(get_sub_field('paragraph_text')) : ?>
                <div class="figure-block__paragraph-text"><?php the_sub_field('paragraph_text'); ?></div>
            <?php endif; ?>
            <?php if( get_sub_field('add_button') ) : ?>
                <a class="btn" href="<?php echo esc_url(the_sub_field('button_link')); ?>"><?php esc_html_e(the_sub_field('button_text')); ?></a>
            <?php endif; ?>
        </div>
    </div> <!-- // cta-figure__wide-inner --> 
	 
</article> <!-- // cta-figure -->  