<?php
    // enqueue waypoints if not loaded
    wp_enqueue_script('waypoints');
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' graph-block--' . $title;
        }
    }
    // Background Modifiers
    $bgModifier = '';
    $parallax = get_sub_field('parallax');
    $img = get_sub_field('bg_image');
    $image = $img['sizes']['full'];
    $img = $img['url'];
    $style = ' style="background-image: url('.$img.');"';
    if($parallax) {
        $bgModifier = " graph-block--parallax";
    } else {
        $bgModifier = " graph-block--image";
    }
?>
<section class="graph-block<?php echo $bgModifier; ?><?php echo $classes; ?>"<?php echo $style; ?>>
    <div class="graph-block__overlay">
        <div class="graph-block__inner">
            <?php if(get_sub_field('content_title')): ?>
                <?php $content_title = get_sub_field('content_title'); ?>
                    <div class="title-wrap">
                        <h1 class="content-title"><?php echo $content_title; ?></h1>
                    </div>
            <?php endif; ?>
            <?php 
                $intro_type = get_sub_field('intro_editor_type');
                $intro_text = '';
                if($intro_type == 'rich_text') {
                    $intro_rich_text = get_sub_field('content_intro');
                    $intro_text = $intro_rich_text;
                } elseif($intro_type == 'code') {
                    $intro_code = get_sub_field('content_intro_code');
                    $intro_text = $intro_code;
                }
            ?>
            <?php if($intro_text): ?>
                <div class="graph-block__intro">
                    <?php echo $intro_text; ?>
                </div> <!-- // content__intro -->
            <?php endif; ?>
            <div class="graph-slider__slider flexslider">
                <ul class="graph-slider__slides">
                    <?php while(have_rows('icon_repeater')) : the_row(); ?>
                        <?php 
                            $graph = get_sub_field('graph');
                            $icon_title = get_sub_field('icon_title');
                            $icon_text = get_sub_field('icon_text');
                        ?>
                        <li class="graph-slider__slide">
                            <img src="<?php echo $graph['url']; ?>" alt="<?php echo $graph['alt']; ?>" />
                            <div class="graph__text">
                                <h5 class="graph__title"><?php echo $icon_title; ?></h5>
                                <p class="graph__blurb"><?php echo $icon_text; ?></p>
                            </div> <!-- // list__text -->
                        </li> <!-- // slide -->
                    <?php endwhile; ?>
                </ul> <!-- // slides -->
            </div> <!-- // flexslider -->
            <div class="graph-slider__nav">
                <ul class="icons">
                    <?php while(have_rows('icon_repeater')) : the_row(); ?>
                        <?php 
                            // icon vars
                            $list_icon = get_sub_field('icon');
                            $icon_title = get_sub_field('icon_title');
                            $icon_text = get_sub_field('icon_text');
                        ?>
                        <li class="icon">
                            <span class="icon__icon icon__icon--img visible">
                                <img src="<?php echo $list_icon['url']; ?>" alt="icon" />
                            </span> <!-- // list__icon--img -->
                            <div class="icon__text">
                                <h5 class="icon__title"><?php echo $icon_title; ?></h5>
                                <p class="icon__blurb"><?php echo $icon_text; ?></p>
                            </div> <!-- // list__text -->
                        </li>
                    <?php endwhile; ?>
                </ul> <!-- // icons -->
            </div> <!-- // graph-slider__nav -->
        </div> <!-- // graph-block__inner -->
    </div> <!-- // graph-block__overlay -->
</section> <!-- // graph-block -->
