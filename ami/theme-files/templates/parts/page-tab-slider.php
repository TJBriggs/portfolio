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
            $classes .= ' tab-slider--' . $title;
        }
    }
    // Background Image Modifiers
    $style = '';
    $bgModifier = '';
    $parallax = get_sub_field('parallax');
    $img = get_sub_field('bg_image');
    $image = $img['sizes']['full'];
    $img = $img['url'];
    $style = ' style="background-image: url('.$img.');"';
    if($parallax) {
        $bgModifier = " tab-slider--parallax";
    } else {
        $bgModifier = " tab-slider--image";
    }
?>
<section class="tab-slider<?php echo $classes; ?>">
    <div class="tab-slider__slider flexslider">
        <ul class="tab-slider__slides">
            <?php while(have_rows('tabs_repeater')) : the_row(); ?>
                <?php 
                    //img vars
                    $img = get_sub_field('slide_image');
                    $image = $img['sizes']['full-width'];
                    $img = $img['url'];
                    $style = ' style="background-image: url('.$img.');"';
                    // slide vars
                    $slide_title = get_sub_field('slide_title');
                    $slide_text = get_sub_field('slide_text');
                ?>
                <li class="tab-slider__slide"<?php echo $style; ?>>
                    <div class="slide__overlay">
                        <div class="slide__inner">
                            <div class="slide__text-wrap">
                                <h2 class="slide__title">Client Feedback</h2>
                                <h4 class="slide__subtitle"><?php echo $slide_title; ?></h4>
                                <div class="slide__text">
                                    <?php echo $slide_text; ?>
                                </div> <!-- // slide__text -->
                            </div> <!-- // slide__text-wrap -->
                        </div> <!-- // slide__inner -->
                    </div> <!-- // slide__overlay -->
                </li> <!-- // slide -->
            <?php endwhile; ?>
        </ul> <!-- // slides -->
    </div> <!-- // flexslider -->
    <div class="tab-slider__nav">
        <div class="tab-nav__inner">
            <?php 
                // get count of tabs for styling purposes
                $tabs = get_sub_field('tabs_repeater');
                $tab_count = count($tabs);
                $count_mod = ' tabs--' . $tab_count;
            ?>
            <ul class="tabs<?php echo $count_mod; ?>">
                <?php while(have_rows('tabs_repeater')) : the_row(); ?>
                    <?php 
                        // icon vars
                        $tab_icon = get_sub_field('tab_icon');
                        //$file_parts = pathinfo($tab_icon['url']);
                        //$file_ext = $file_parts['extension']; // get file extension for if statement below
                        // cta vars
                        $tab_name = get_sub_field('tab_name');
                    ?>
                    <li class="tab">
                        <span class="tab__icon tab__icon--img">
                            <img src="<?php echo $tab_icon['url']; ?>" alt="icon" />
                        </span> <!-- // tab__icon--img -->
                        <span class="tab__name"><?php echo $tab_name; ?></span> 
                    </li> <!-- // tab -->
                <?php endwhile; ?>
            </ul> <!-- // tabs --> 
        </div> <!-- // tab-nav__inner -->
    </div> <!-- // tabs-slider__nav -->
</section> <!-- // tab-slider -->