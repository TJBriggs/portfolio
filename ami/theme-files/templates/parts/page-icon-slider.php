<?php
    // enqueue flexslider if not loaded
    $handle = 'flexslider';
    $list =  'enqueued';
    if (wp_script_is( $handle, $list )) {
           return;
         } else {
           wp_enqueue_script('flexslider');
    }
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' icon-slider--' . $title;
        }
    }
    // Background Modifiers
    $img = get_sub_field('bg_image');
    $image = $img['sizes']['full-width'];
    $img = $img['url'];
    $style = ' style="background-image: url('.$img.');"';
    $bgModifier = " icon-slider--image";
?>
<section class="icon-slider<?php echo $bgModifier; ?><?php echo $classes; ?>"<?php echo $style; ?>>
    <div class="icon-slider__overlay">
        <div class="icon-slider__slider-wrap">
            <?php $title = get_sub_field('section_title'); ?>
            <h3 class="icon-slider__title"><?php echo $title; ?></h3>
            <div class="icon-slider__nav">
                <ul class="icons">
                    <?php while(have_rows('icons_repeater')) : the_row(); ?>
                        <?php 
                            // icon vars
                            $icon = get_sub_field('icon');
                        ?>
                        <li class="icon icon--img">
                            <img src="<?php echo $icon['url']; ?>" alt="icon" />
                        </li> <!-- // icon--img -->
                    <?php endwhile; ?>
                </ul> <!-- // icons --> 
            </div> <!-- // icon-slider__nav -->
            <div class="icon-slider__slider flexslider">
                <ul class="icon-slider__slides">
                    <?php while(have_rows('icons_repeater')) : the_row(); ?>
                        <?php 
                            $slide_text = get_sub_field('slide_text');
                        ?>
                        <li class="icon-slider__slide">
                            <div class="icon-slider__text">
                                <?php echo $slide_text; ?>
                            </div> <!-- // slide__text -->
                        </li> <!-- // slide -->
                    <?php endwhile; ?>
                </ul> <!-- // slides -->
            </div> <!-- // flexslider -->
        </div> <!-- // icon-slider__slider-wrap -->
    </div> <!-- // iconslider__overlay -->
</section> <!-- // icon-slider -->
