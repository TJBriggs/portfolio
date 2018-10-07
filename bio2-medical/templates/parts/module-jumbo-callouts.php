<?php
    $classes = '';
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' jumbo-callouts--' . $title;
        }
    }
    //spacing classes
    $spacing = get_sub_field('spacing');
    if($spacing){
        foreach ($spacing as $space) {
            $classes .= ' jumbo-callouts--' . $space;
        }
    }
    // Set Image Vars
    $image_array = get_sub_field('background_image');
    
    $attr = array(
        'images' => array(
            '(min-width: 1400px)' => $image_array['sizes']['jumbo'],
            '(max-width: 1399px)' => $image_array['sizes']['hero']
        )
    );
    // execute the function and store the resulting array
    $bg_image = bg_image($attr);
?>
<article class="jumbo-callouts <?php echo $classes; ?> <?php echo $bg_image['class']; ?>">
    <?php echo $bg_image['styles']; // echo the <style> tag ?>
        <div class="jumbo-callouts__inner">
            <?php if(have_rows('callout_repeater')) : ?>
                <div class="jumbo-callouts__wrap">
                    <?php while(have_rows('callout_repeater')) : the_row(); ?>
                    <div class="jumbo-callouts__callout">
                        <?php 
                            $img_array = get_sub_field('icon');
                            $img_url = $img_array['url'];
                            $img_alt = $img_array['alt'];
                        ?>
                        <img class="js-ajax-replace" src="<?php echo $img_url; ?>" alt="<?php echo $img_alt; ?>">
                        <h1><?php the_sub_field('title'); ?></h1>
                        <div><?php the_sub_field('text'); ?></div>
                    </div>
                    <?php endwhile; ?>
                </div>
            <?php endif; ?>
        </div> <!-- // jumbo-callouts__inner -->
</article> <!-- // jumbo-callouts -->
