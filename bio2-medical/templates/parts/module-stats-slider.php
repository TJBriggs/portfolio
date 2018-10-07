<?php
    wp_enqueue_script( 'sliders' );
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' stats-slider--' . $title;
        }
    }
    //spacing classes
    $spacing = get_sub_field('spacing');
    if($spacing){
        foreach ($spacing as $space) {
            $classes .= ' stats-slider--' . $space;
        }
    }
    // Background Modifiers
    $bg_mod = '';
    $bg_options = get_sub_field('bg_options');
    $bg_image = null;
    //$attr = null;
    if($bg_options == "gray") {
        $bg_mod = ' stats-slider--bg-gray';
    } elseif($bg_options == "blue") {
        $bg_mod = ' stats-slider--bg-blue';
    }
?>
<article class="stats-slider<?php echo $classes; ?><?php echo $bg_mod; ?>">
    <div class="stats-slider__inner">
        <?php if(get_sub_field('section_title')) : ?>
            <h1 class="section-title"><?php the_sub_field('section_title'); ?></h1>
        <?php endif; ?>
        <div class="stats-slider__slider owl-carousel js-owl-carousel--stats-slider">
            <?php while(have_rows('slide_repeater')) : the_row(); ?>
                <div class="stats-slider__slide">
                    <div class="stats-slider__content">
                        <div class="stats-slider__graphic">
                            <?php  
                                // Image Vars
                                $img_alt = '';
                                $img_array = get_sub_field('stat_graphic');
                                $img_size = $img_array['sizes']['half'];
                                $img_alt = $img_array['alt'];
                            ?>
                            <img src="<?php echo $img_size; ?>" alt="<?php echo $img_alt; ?>">
                        </div>
                        <div class="stats-slider__text">
                            <h2><?php the_sub_field('stat_title'); ?></h2>
                            <p class="stats-slider__blurb"><?php the_sub_field('stat_text'); ?></p>
                        </div>
                    </div>
                </div>
            <?php endwhile; ?>
        </div>
        <?php if(get_sub_field('footnotes')) : ?>
            <div class="stats-slider__footnotes">
                <div class="stats-slider__wrap">
                    <?php the_sub_field('footnotes'); ?>
                </div>
            </div>
        <?php endif; ?>
    </div>
</article>