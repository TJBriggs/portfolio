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
    // Title Modifier
    $title_mod = '';
    $title = get_sub_field('section_title');
    if ($title) {
        $title_mod = " content-block--title";
    }
    // Background Modifiers
    $bg_mod = '';
    $parallax_mod = '';
    $bg_options = get_sub_field('bg_options');
    if($bg_options == "gray") {
        $bg_mod = " content-block--bg-gray";
    } elseif($bg_options == "topo") {
        $bg_mod = " content-block--bg-topo";
        $parallax = get_sub_field('parallax');
        if($parallax) {
            $parallax_mod = " content-block--parallax";
        }
    } elseif($bg_options == "image") {
        $image_options = get_sub_field('image_options');
        // Img Vars
        $image_style = '';
        $image_array = get_sub_field('bg_image');
        $image_size = $image_array['sizes']['hover-box'];
        $image_style = ' style="background-image: url('.$image_size.');"';
        if($image_options == "cover") {
            $bg_mod = " content-block--bg-image-cover";
            $parallax = get_sub_field('parallax');
            if($parallax) {
                $parallax_mod = " content-block--parallax";
            }
        } elseif($image_options == "repeat") {
            $bg_mod = " content-block--bg-image-repeat";
            $parallax = get_sub_field('parallax');
            if($parallax) {
                $parallax_mod = " content-block--parallax";
            }
        }
    }
?>
<section class="content-block content<?php echo $title_mod; ?><?php echo $bg_mod; ?><?php echo $parallax_mod; ?><?php echo $classes; ?>"<?php echo $image_style; ?>>
    <div class="content-block__overlay">
        <div class="content-block__inner">
            <?php if(get_sub_field('section_title')) : ?>
                <h2 class="section-title"><?php the_sub_field('section_title'); ?></h2>
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
                            <?php if(get_sub_field('button_options') == "one") : ?>
                                <a class="btn btn--one" href="<?php the_sub_field('btn_one_lnk'); ?>"><?php the_sub_field('btn_one_txt'); ?></a>
                            <?php elseif(get_sub_field('button_options') == "two") : ?>
                                <a class="btn btn--one" href="<?php the_sub_field('btn_one_lnk'); ?>"><?php the_sub_field('btn_one_txt'); ?></a>
                                <a class="btn btn--two" href="<?php the_sub_field('btn_two_lnk'); ?>"><?php the_sub_field('btn_two_txt'); ?></a>
                            <?php endif; ?>
                        </div> <!-- // content__group -->
                    <?php endif; //wp_reset_query(); ?>
                <?php endwhile; ?>
            <?php endif; ?> 
        </div> <!-- // content-block__inner -->
    </div> <!-- // content-block__overlay -->
</section> <!-- // content-block -->
