<?php
    // enqueue waypoints if not loaded
    $handle = 'waypoints';
    $list =  'enqueued';
    if (wp_script_is( $handle, $list )) {
           return;
         } else {
           wp_enqueue_script('waypoints');
    }
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' icon-ctas--' . $title;
        }
    }
    // Background Modifiers
    $bgColor = get_sub_field('bg_color');
    $bgModifier = ' icon-ctas--' . $bgColor;
?>
<section class="icon-ctas<?php echo $bgModifier; ?><?php echo $classes; ?>">
    <div class="icon-ctas__inner">
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
            <div class="icon-ctas__intro">
                <?php echo $intro_text; ?>
            </div> <!-- // icon-ctas__intro -->
        <?php endif; ?>
        <?php 
            $ctas = get_sub_field('cta_repeater');
            $cta_count = count($ctas);
            $count_mod = ' cta-wrap--' . $cta_count;
        ?>
        <div class="cta-wrap<?php echo $count_mod; ?>">
            <?php while(have_rows('cta_repeater')) : the_row(); ?>
                <?php 
                    // icon vars
                    $cta_icon = get_sub_field('cta_icon');
                    // $file_parts = pathinfo($cta_icon['url']);
                    // $file_ext = $file_parts['extension']; // get file extension for if statement below
                    // cta vars
                    $cta_link = get_sub_field('cta_link');
                    $cta_main = get_sub_field('cta_mtitle');
                    $cta_sub = get_sub_field('cta_stitle');
                    $cta_blurb = get_sub_field('cta_text');
                ?>
                <div class="cta">
                    <a class="cta__link" href="<?php echo $cta_link; ?>">
                        <span class="cta__icon cta__icon--img visible">
                            <img src="<?php echo $cta_icon['url']; ?>" alt="icon" />
                        </span> <!-- // cta__icon--img -->
                    </a>
                    <div class="cta__text">
                        <h5 class="cta__main-title"><?php echo $cta_main; ?></h5>
                        <?php if($cta_sub) : ?>
                            <h6 class="cta__sub-title"><?php echo $cta_sub; ?></h6>
                        <?php endif; ?>
                        <p class="cta__blurb"><?php echo $cta_blurb; ?></p>
                    </div> <!-- // cta__text -->
                </div> <!-- // cta -->
            <?php endwhile; ?>
        </div> <!-- // cta-wrap -->
    </div> <!-- // icon-ctas__inner -->
</section> <!-- // icon-ctas -->