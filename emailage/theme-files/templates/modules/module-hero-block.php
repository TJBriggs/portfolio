 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' hero-block--' . $title;
        }
    }
    // Hero Type
    $hero_type = get_field('hero_layout');
    if ( $hero_type ) {
        $classes .= ' hero-block--' . $hero_type;
    } 
    // Hero Type
    $curved_accent = get_field('curved_accent');
    if ( $curved_accent ) {
        $classes .= ' hero-block--' . $curved_accent;
    } 
 ?>
<article class="hero-block<?php esc_attr_e($classes); ?>">
	<div class="hero-block__inner">
        <div class="hero-block__text">
            <h4 class="hero-block__colored-title"><?php esc_html_e(the_field('colored_title')); ?></h4>
            <h1><?php esc_html_e(the_field('large_title')); ?></h1>
            <?php if(get_field('hero_text')) : ?>
                <p><?php esc_html_e(the_field('hero_text')); ?></p>
            <?php endif; ?>
            <?php if( get_field('add_button') ) : ?>
                <a class="btn" href="<?php echo esc_url(the_field('button_link')); ?>"><?php esc_html_e(the_field('button_text')); ?></a>
            <?php endif; ?>
        </div>
        <?php 
            if($hero_type == 'figure') :
            // Figure Vars
            $figure_array = get_field('hero_figure');
            $figure_size = $figure_array['sizes']['hero-figure'];
            $figure_alt = $figure_array['alt'];
        ?>
        <div class="hero-block__figure-wrap">
            <img class="hero-block__figure" src="<?php echo $figure_size; ?>" alt="<?php esc_html_e($figure_alt); ?> ">
        </div>
        <?php endif; ?>
	</div> <!-- // hero-block__inner -->  
</article> <!-- // hero-block -->  