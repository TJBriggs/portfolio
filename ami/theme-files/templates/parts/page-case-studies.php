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
            $classes .= ' content-block--' . $title;
        }
    }
?>
<section class="case-studies<?php echo $classes; ?>">
    <?php while(have_rows('study_repeater')) : the_row(); ?>
        <?php 
            // These images and text will be specific to each case study
            // img vars
            $img = get_sub_field('image');
            $image = $img['sizes']['full-width'];
            $img = $img['url'];
            $style = ' style="background-image: url('.$img.');"';
            // layout vars
            $layout = get_sub_field('layout');
            $layout_mod = ' case-study__overlay--'. $layout;  
            // text var
            $main_text = get_sub_field('study_text'); 
            // hidden text
            $title_1 = get_sub_field('title_1'); 
            $title_2 = get_sub_field('title_2'); 
            $title_3 = get_sub_field('title_3'); 
            $text_1 = get_sub_field('text_1'); 
            $text_2 = get_sub_field('text_2'); 
            $text_3 = get_sub_field('text_3'); 
            // btn var
            $btn_text = get_sub_field('button_text');
        ?>
        <div class="case-study"<?php echo $style; ?>>
            <div class="case-study__overlay<?php echo $layout_mod; ?>">
                <div class="case-study__text">
                    <?php echo $main_text; ?>
                    <a href="#" class="btn btn--case-study"><?php echo $btn_text; ?></a>
                </div>
                <div class="hidden-content">
                    <div class="hidden-content__inner">
                        <div class="hidden-content__close-wrap">
                            <span class="hidden-content__close">
                                <object>
                                    <svg class="close">
                                      <use xlink:href="#close"></use>
                                    </svg>
                                </object>
                            </span>
                        </div>
                        <div class="hidden-content__slider flexslider">
                            <div class="hidden-content__slides">
                                <div class="hidden-content__slide">
                                    <h2 class="hidden-content__title"><?php echo $title_1; ?></h2>
                                    <div class="hidden-content__text">
                                        <?php echo $text_1; ?>
                                    </div> <!-- // hidden-content__text  -->
                                </div> <!-- // hidden-content__slide -->
                                <div class="hidden-content__slide">
                                    <h2 class="hidden-content__title"><?php echo $title_2; ?></h2>
                                    <div class="hidden-content__text">
                                        <?php echo $text_2; ?>
                                    </div> <!-- // hidden-content__text  -->
                                </div> <!-- // hidden-content__slide -->
                                <div class="hidden-content__slide">
                                    <h2 class="hidden-content__title"><?php echo $title_3; ?></h2>
                                    <div class="hidden-content__text">
                                        <?php echo $text_3; ?>
                                    </div> <!-- // hidden-content__text  -->
                                </div> <!-- // hidden-content__slide -->
                            </div> <!-- // hidden-content__slides -->
                        </div> <!-- // hidden-content__slider -->
                    </div> <!-- // hidden-content__inner -->
                </div> <!-- // hidden-content -->
            </div> <!-- // case-study__overlay -->
        </div> <!-- // case-study -->
    <?php endwhile; ?>
</section> <!-- // case-studies -->
