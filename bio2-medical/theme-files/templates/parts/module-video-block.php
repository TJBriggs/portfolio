<?php
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' video-block--' . $title;
        }
    }
    //spacing classes
    $spacing = get_sub_field('spacing');
    if($spacing){
        foreach ($spacing as $space) {
            $classes .= ' video-block--' . $space;
        }
    }
    // Background Modifiers
    $bg_mod = '';
    $bg_options = get_sub_field('bg_options');
    if($bg_options == "gray") {
        $bg_mod = ' video-block--bg-gray';
    } elseif($bg_options == "blue") {
        $bg_mod = ' video-block--bg-blue';
    } 
?>
<article class="video-block <?php echo $classes; ?><?php echo $bg_mod; ?>">
    <div class="video-block__inner">
        <?php if(get_sub_field('section_title')) : ?>
            <h1 class="section-title"><?php the_sub_field('section_title'); ?></h1>
        <?php endif; ?>
        <?php 
            // enqueue fancybox
            wp_enqueue_script( 'fancybox' );
            wp_enqueue_script( 'fancy-media' );
            // Set Image Vars
            $image_array = get_sub_field('image');
            $attr = array(
                'images' => array(
                    '(min-width: 800px)' => $image_array['sizes']['single-hero'],
                    '(max-width: 799px)' => $image_array['sizes']['two-third']
                )
            );
            // execute the function and store the resulting array
            $bg_image = bg_image($attr);
        ?>
        <a class="video-block__video fancybox-media <?php echo $bg_image['class']; ?>" href="<?php the_sub_field('video_url') ?>">
            <?php echo $bg_image['styles']; // echo the <style> tag ?>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><circle cx="481.9" cy="487" r="272.8" fill="#FFF"/><path fill="#010101" d="M500 6.7C227 6.7 6.7 227 6.7 500 6.7 772 227 993.3 500 993.3S993.3 772 993.3 500C993.3 227 773 6.7 500 6.7zM404.6 694c-24 13.2-44 2.2-44-26.3V330c0-27.3 19.8-37.2 41.8-23l287.2 182c23 15.4 22 37.4-2.2 50.5L404.6 694z"/></svg>
        </a>
        <?php if(get_sub_field('caption')) : ?>
            <div class="video-block__caption"><?php the_sub_field('caption'); ?></div>
        <?php endif; ?>
        <div class="video-block__content">
            <div class="video-block__text-left">
                <?php the_sub_field('text_left'); ?>
            </div>
            <div class="video-block__text-right">
                <?php the_sub_field('text_right'); ?>
            </div>
        </div>
    </div> <!-- // video-block__inner -->
</article> <!-- // video-block -->
