<?php
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' testimonial--' . $title;
        }
    }
    // Background Modifiers
    $parallax = get_sub_field('parallax');
    $img = get_sub_field('bg_image');
    $image = $img['sizes']['full'];
    $img = $img['url'];
    $style = ' style="background-image: url('.$img.');"';
    if($parallax) {
        $bgModifier = " testimonial--parallax";
    } else {
        $bgModifier = " testimonial--image";
    }
?>
<section class="testimonial<?php echo $bgModifier; ?><?php echo $classes; ?>"<?php echo $style; ?>>
    <div class="testimonial__overlay">
        <div class="testimonial__inner">
            <div class="testimonial__text">
                <?php $title = get_sub_field('title'); ?>
                <?php $text = get_sub_field('text'); ?>
                <div class="title-wrap">
                    <h1 class="content-title"><?php echo $title; ?></h1>
                </div>
                <?php echo $text; ?>
            </div> <!-- // testimonial__text -->
        </div> <!-- // testimonial__inner -->
    </div> <!-- // testimonial__overlay -->
</section> <!-- // testimonial -->
