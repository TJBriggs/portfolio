<?php
    // Layout classes
    $content_section = get_sub_field('columns_repeater');
    $classes = '';
    $group_count = count($content_section);
    if($group_count <= 3){
        $classes .= ' content--' . $group_count;
        if($group_count == 2){
            $classes .= ' content__two-col--' . get_sub_field('column_handling');
        }
    } else {
        $classes .= ' content--slider';
    }
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' content-block--' . $title;
        }
    }
    // Emptyness Handling
    $empty_div_array = array();
    if($group_count <= 3){
        for($i = 0; $i < $group_count; $i++) {
            $emptyness = 'full';
            $columns = get_sub_field('columns_repeater');
            $type = $columns[$i]['editor_type'];
            if(($type == "rich_text" && $columns[$i]['column_content'] == '')){
                $emptyness = 'empty';
            } elseif(($type == "code" && $columns[$i]['column_code'] == '')){
                $emptyness = 'empty';
            }
            $empty_div_array[$i] = $emptyness;
        }
    }
    // Background Modifiers
    $bgOptions = get_sub_field('bg_options');
    $bgColor = get_sub_field('bg_color');
    $style = '';
    if ($bgOptions == "color") {
        $bgModifier = ' content-block--' . $bgColor;
    } elseif ($bgOptions == "image") {
        $bgModifier = '';
        $parallax = get_sub_field('parallax');
        $img = get_sub_field('bg_image');
        $image = $img['sizes']['full'];
        $img = $img['url'];
        $style = ' style="background-image: url('.$img.');"';
        if($parallax) {
            $bgModifier = " content-block--parallax";
        } else {
            $bgModifier = " content-block--image";
        }
    }
?>
<section class="content-block content<?php echo $bgModifier; ?><?php echo $classes; ?>"<?php echo $style; ?>>
    <div class="content-block__overlay">
        <div class="content-block__inner">
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
                <div class="content-block__intro">
                    <?php echo $intro_text; ?>
                </div> <!-- // content__intro -->
            <?php endif; ?>
            <?php if(count($content_section) <= 3) : $i = 0; //if normal 1-3 groups of content ?>
                <?php while(has_sub_field('columns_repeater')) : $i++; ?>
                    <?php 
                        $type = get_sub_field('editor_type');
                        $text = '';
                        if($type == 'rich_text') {
                            $rich_text = get_sub_field('column_content');
                            $text = $rich_text;
                        } elseif($type == 'code') {
                            $code = get_sub_field('column_code');
                            $text = $code;
                        }
                    ?>
                    <?php if($text != '') : ?>
                        <?php
                            $empty_class = '';
                            if($i == 2) {
                                if($empty_div_array[$i - 2] == 'empty'){
                                    $empty_class .=' content__group--no-prev';
                                }
                            } elseif ($i == 3){
                                if($empty_div_array[$i - 2] == 'empty'){
                                    $empty_class .=' content__group--no-prev';
                                }
                                if($empty_div_array[$i - 3] == 'empty' && $empty_div_array[$i - 2] == 'empty'){
                                    $empty_class .=' content__group--no-prev-2';
                                }
                            }
                        ?>
                        <div class="content__group content__group--<?php echo $i . $empty_class; ?>">
                            <?php echo $text; ?>
                            <?php if(get_sub_field('add_cta_button')): ?>
                                <?php $btn_text = get_sub_field('button_text'); ?>
                                <?php $btn_link = get_sub_field('button_link'); ?>
                                <a class="btn" href="<?php echo $btn_link; ?>"><?php echo $btn_text; ?></a>
                            <?php endif; ?>
                        </div> <!-- // content__group -->
                    <?php endif; //wp_reset_query(); ?>
                <?php endwhile; ?>
            <?php endif; ?> 
        </div> <!-- // content-block__inner -->
    </div> <!-- // content-block__overlay -->
</section> <!-- // content-block -->
