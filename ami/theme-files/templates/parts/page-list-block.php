<?php
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' list-block--' . $title;
        }
    }
    // Background Modifiers
    $bgColor = get_sub_field('bg_color');
    $bgModifier = ' list-block--' . $bgColor;

?>
<section class="list-block<?php echo $bgModifier; ?><?php echo $classes; ?>">
    <div class="list-block__inner">
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
            <div class="list-block__intro">
                <?php echo $intro_text; ?>
            </div> <!-- // list-block__intro -->
        <?php endif; ?>
        <div class="list-block__text">
            <?php $list_text = get_sub_field('list_text'); ?>
            <?php echo $list_text; ?>
        </div> <!-- // list-block__text -->
        <div class="list-block__list">
            <ul>
                <?php while(have_rows('list_repeater')) : the_row(); ?>
                    <?php $list_item = get_sub_field('list_item'); ?>
                    <li><span><?php echo $list_item; ?></span></li>
                <?php endwhile; ?>
            </ul>
        </div> <!-- // list-block__list -->
    </div> <!-- // list-block__inner -->
</section> <!-- // list-block -->
