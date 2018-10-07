<?php
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' infographic--' . $title;
        }
    }
    // Background Modifiers
    $bgColor = get_sub_field('bg_color');
    $bgModifier = ' infographic--' . $bgColor;
?>
<section class="infographic<?php echo $bgModifier; ?><?php echo $classes; ?>">
    <div class="infographic__inner">
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
            <div class="infographic__intro">
                <?php echo $intro_text; ?>
            </div> <!-- // infographic__intro -->
        <?php endif; ?>
        <?php if(get_sub_field('subtitle')): ?>
            <?php $subtitle = get_sub_field('subtitle'); ?>
            <h1 class="infographic__subtitle">
                <?php echo $subtitle; ?>
            </h1> <!-- // infographic__subtitle -->
        <?php endif; ?>
        <div class="icon-wrap">
            <?php while(have_rows('icons_repeater')) : the_row(); ?>
                <?php 
                    $icon = get_sub_field('icon');
                    $icon_title = get_sub_field('icon_title');
                ?>
                <figure class="icon">
                    <img src="<?php echo $icon['url']; ?>" alt="<?php echo $icon['alt']; ?>" />
                    <figcaption>
                        <?php echo $icon_title; ?>
                    </figcaption>
                </figure> <!-- // icon -->
            <?php endwhile; ?>
        </div> <!-- // infographic__wrap -->
    </div> <!-- // infographic__inner -->
</section> <!-- // infographic -->