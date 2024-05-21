<?php
    //no classes to start
    $classes = '';
    //special modification classes
    $special_class = get_sub_field('class');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' thirds--' . $title;
        }
    }
    // Background Modifiers
    $bg_mod = '';
    $bg_options = get_sub_field('bg_options');
    $bg_image = null;
    //$attr = null;
    if($bg_options == "gray") {
        $bg_mod = ' thirds--bg-gray';
    } elseif($bg_options == "blue") {
        $bg_mod = ' thirds--bg-blue';
    }
    // Check Layout Options
    $layout_mod = '';
    $layout = get_sub_field('layout_options');
    if($layout == "right") {
        $layout_mod = ' thirds--right';
    }
    // Set Image Vars
    $image_array = get_sub_field('image');
    $attr = array(
        'images' => array(
            '(min-width: 800px)' => $image_array['sizes']['half-half-desktop'],
            '(max-width: 799px)' => $image_array['sizes']['half-half-mobile']
        )
    );
    // execute the function and store the resulting array
    $bg_image = bg_image($attr);
?>
<article class="thirds<?php echo $classes; ?><?php echo $layout_mod; ?><?php echo $bg_mod; ?>">
    <?php if(get_sub_field('video_link')) : ?>
        <?php 
            // enqueue fancybox
            wp_enqueue_script( 'fancybox' );
            wp_enqueue_script( 'fancy-media' );
        ?>
        <a class="thirds__video fancybox-media <?php echo $bg_image['class']; ?>"" href="<?php the_sub_field('video_url') ?>">
            <?php echo $bg_image['styles']; // echo the <style> tag ?>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><circle cx="481.9" cy="487" r="272.8" fill="#FFF"/><path fill="#010101" d="M500 6.7C227 6.7 6.7 227 6.7 500 6.7 772 227 993.3 500 993.3S993.3 772 993.3 500C993.3 227 773 6.7 500 6.7zM404.6 694c-24 13.2-44 2.2-44-26.3V330c0-27.3 19.8-37.2 41.8-23l287.2 182c23 15.4 22 37.4-2.2 50.5L404.6 694z"/></svg>
        </a>
    <?php else : ?>
        <div class="thirds__image <?php echo $bg_image['class']; ?>">
            <?php echo $bg_image['styles']; // echo the <style> tag ?>
        </div>
    <?php endif; ?>
    <div class="thirds__inner">
        <div class="thirds__content">
            <?php the_sub_field('content'); ?>
            <?php if(get_sub_field('add_button')) : ?>
                <?php 
                    $btn_link = get_sub_field('button_link');
                    if (false !== strpos($btn_link,'attachment_id')) {
                        $url = $btn_link;
                        $url_parsed = parse_url($url);
                        parse_str($url_parsed['query'], $url_parts);
                        $attachmentID = $url_parts['attachment_id']; // attachment ID
                        $attachmentSrc = wp_get_attachment_url( $attachmentID ); // returns an array   
                        $btn_link = $attachmentSrc;
                        $target = ' target="_blank"';
                    }
                ?>
                
                <a class="thirds__btn btn" href="<?php echo $btn_link; ?>"><?php the_sub_field('button_text'); ?></a>
            <?php endif; ?>
        </div>
    </div>
</article>