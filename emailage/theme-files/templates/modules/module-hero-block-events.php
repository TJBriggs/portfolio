 <?php 
    $id = 14;
    // Modifier Classes
    $classes = '';
    $special_class = get_field('modifiers', $id);
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' hero-block--' . $title;
        }
    }
    // Hero Type
    $hero_type = get_field('hero_layout', $id);
    if ( $hero_type ) {
        $classes .= ' hero-block--' . $hero_type;
    } 
    // Hero Type
    $curved_accent = get_field('curved_accent', $id);
    if ( $curved_accent ) {
        $classes .= ' hero-block--' . $curved_accent;
    } 
 ?>
<article class="hero-block hero-block--blog<?php esc_attr_e($classes); ?>">
	<div class="hero-block__inner">
        <div class="hero-block__text">
            <h4 class="hero-block__colored-title"><?php esc_html_e(the_field('colored_title', $id)); ?></h4>
            <h1><?php esc_html_e(the_field('large_title', $id)); ?></h1>
            <?php if(get_field('hero_text')) : ?>
                <p><?php esc_html_e(the_field('hero_text', $id)); ?></p>
            <?php endif; ?>
            <?php if( get_field('add_button', $id) ) : ?>
                <a class="btn" href="<?php echo esc_url(the_field('button_link', $id)); ?>"><?php esc_html_e(the_field('button_text', $id)); ?></a>
            <?php endif; ?>
        </div>
        <?php 
            if($hero_type == 'figure') :
            // Figure Vars
            $figure_array = get_field('hero_figure', $id);
            $figure_size = $figure_array['sizes']['hero-figure'];
            $figure_alt = $figure_array['alt'];
        ?>
        <div class="hero-block__figure-wrap">
            <img class="hero-block__figure" src="<?php echo $figure_size; ?>" alt="<?php esc_html_e($figure_alt); ?> ">
        </div>
        <?php endif; ?>
	</div> <!-- // hero-block__inner -->  
</article> <!-- // hero-block -->  