<?php
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' trustbar--' . $title;
        }
    }
    // Background Modifiers
    $bgOptions = get_sub_field('bg_options');
    $bgColor = get_sub_field('bg_color');
    $style = '';
    if ($bgOptions == "color") {
        $bgModifier = ' trustbar--' . $bgColor;
    } elseif ($bgOptions == "image") {
        $bgModifier = '';
        $parallax = get_sub_field('parallax');
        $img = get_sub_field('bg_image');
        $image = $img['sizes']['full'];
        $img = $img['url'];
        $style = ' style="background-image: url('.$img.');"';
        if($parallax) {
            $bgModifier = " trustbar--parallax";
        } else {
            $bgModifier = " trustbar--image";
        }
    }
?>
<section class="trust-bar<?php echo $bgModifier; ?><?php echo $classes; ?>"<?php echo $style; ?>>
    <div class="trust-bar__overlay">
        <div class="trust-bar__inner">
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
                <div class="trust-bar__intro">
                    <?php echo $intro_text; ?>
                </div> <!-- // content__intro -->
            <?php endif; ?>
            <?php 
                $logos = get_sub_field('logo_repeater');
                $logo_count = count($logos);
                $count_mod = ' trust-bar__logos--' . $logo_count;
            ?>
            <div class="trust-bar__logos<?php echo $count_mod; ?>">
                <?php while(have_rows('logo_repeater')) : the_row(); ?>
                    <?php 
                        $logo = get_sub_field('logo');
                    ?>
                    <figure class="trust-bar__logo">
                        <img src="<?php echo $logo['url']; ?>" alt="Partner Logo" />
                    </figure> <!-- // trust-bar__logo -->
                <?php endwhile; ?>
            </div> <!-- // trust-bar__logos -->
        </div> <!-- // trustbar__inner -->
    </div> <!-- // trustbar__overlay -->
</section> <!-- // trustbar -->
