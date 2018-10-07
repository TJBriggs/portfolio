<?php
    $classes = '';
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' card-callouts--' . $title;
        }
    }
    // Background Modifiers
    $bg_mod = '';
    $bg_options = get_sub_field('bg_options');
    $bg_image = null;
    //$attr = null;
    if($bg_options == "gray") {
        $bg_mod = ' card-callouts--bg-gray';
    } elseif($bg_options == "blue") {
        $bg_mod = ' card-callouts--bg-blue';
    } elseif($bg_options == "image") {
        $bg_mod = ' card-callouts--bg-image';
        // Set Image Vars
        $image_array = get_sub_field('background_image');
        $attr = array(
            'images' => array(
                '(min-width: 800px)' => $image_array['sizes']['two-third'],
                '(max-width: 799px)' => $image_array['sizes']['half']
            )
        );
        // execute the function and store the resulting array
        $bg_image = bg_image($attr);
    }
?>
<article class="card-callouts<?php echo $classes; ?><?php echo $bg_mod; ?> <?php echo $bg_image['class']; ?>">
    <?php echo $bg_image['styles']; // echo the <style> tag ?>
    <div class="card-callouts__overlay">
        <div class="card-callouts__inner">
        <?php if(have_rows('callout_repeater')) : ?>
            <div class="card-callouts__wrap">
                <?php while(have_rows('callout_repeater')) : the_row(); ?>
                    <div class="card-callouts__card">
                        <?php 
                            $img_array = get_sub_field('icon');
                            $img_url = $img_array['url'];
                            $img_alt = $img_array['alt'];
                        ?>
                        <img src="<?php echo $img_url; ?>" alt="<?php echo $img_alt; ?>">
                        <h2 class="card-callouts__title"><?php the_sub_field('title'); ?></h2>
                        <p class="card-callouts__text"><?php the_sub_field('text'); ?></p>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
        </div> <!-- // card-callouts__inner -->
    </div> <!-- // card-callouts__overlay -->
</article> <!-- // card-callouts -->
