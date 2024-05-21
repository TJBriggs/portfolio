<?php
    wp_enqueue_script( 'sliders' );
    //no classes to start
    $classes = '';
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' icon-slider--' . $title;
        }
    }
    //spacing classes
    $spacing = get_sub_field('spacing');
    if($spacing){
        foreach ($spacing as $space) {
            $classes .= ' icon-slider--' . $space;
        }
    }
?>
<article class="icon-slider<?php echo $classes; ?>">
    <div class="icon-slider__inner">
        <?php if(get_sub_field('section_title')) : ?>
            <h1 class="section-title"><?php the_sub_field('section_title'); ?></h1>
        <?php endif; ?>
        <?php if(have_rows('slider_repeater')) : ?>
            <ul class="icon-slider__nav">
                <?php while(have_rows('slider_repeater')) : the_row(); ?>
                    <li class="nav-item">
                        <a class="nav-item__link" href="javascript:void(0);">
                            <?php 
                                // Set Icon Vars For Remaining Slides
                                $icon_array = get_sub_field('icon');
                                $icon_url = $icon_array['url'];
                            ?>
                            <img class="js-ajax-replace" src="<?php echo $icon_url; ?>" alt="Tab icon">
                            <h4><?php the_sub_field('title'); ?></h4>
                        </a>
                    </li>
                <?php endwhile; ?>
            </ul>
            <div class="icon-slider__slides owl-carousel js-owl-carousel--icon-slider">
                <?php while(have_rows('slider_repeater')) : the_row(); ?>
                    <div class="icon-slider__slide">
                        <?php the_sub_field('text'); ?>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
    </div>
</article>