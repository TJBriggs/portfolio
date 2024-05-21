<?php
    //all columns
    $column_content = get_sub_field('columns_repeater');
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
    //spacing classes
    $spacing = get_sub_field('spacing');
    if($spacing){
        foreach ($spacing as $space) {
            $classes .= ' content-block--' . $space;
        }
    }
    //empty divs
    $empty_div_array = array();
    if($group_count <= 3){
        for($i = 0; $i < $group_count; $i++) {
            $emptyness = 'full';
            $code_format = $column_content[$i]['column_format'];
            if((!$code_format && $column_content[$i]['column_content'] == '')){
                $emptyness = 'empty';
            } elseif(($code_format && $column_content[$i]['column_code'] == '')){
                $emptyness = 'empty';
            }
            $empty_div_array[$i] = $emptyness;
        }
    }
    // Background Modifiers
    $bg_mod = '';
    $bg_options = get_sub_field('bg_options');
    $bg_image = null;
    if($bg_options == "gray") {
        $bg_mod = ' content-block--bg-gray';
    } elseif($bg_options == "blue") {
        $bg_mod = ' content-block--bg-blue';
    } elseif($bg_options == "image") {
        $bg_mod = ' content-block--bg-image';
        // Set Image Vars
        $image_array = get_sub_field('background_image');
        $attr = array(
            'images' => array(
                '(min-width: 800px)' => $image_array['sizes']['half-half-mobile'],
                '(max-width: 799px)' => $image_array['sizes']['two-third']
            )
        );
        // execute the function and store the resulting array
        $bg_image = bg_image($attr);
    }
?>
<article class="content-block content<?php echo $classes; ?><?php echo $bg_mod; ?> <?php echo $bg_image['class']; ?>">
    <?php echo $bg_image['styles']; // echo the <style> tag ?>
    <div class="content-block__overlay">
        <div class="content-block__inner">
            <?php if(get_sub_field('section_title')) : ?>
                <h1 class="section-title"><?php the_sub_field('section_title'); ?></h1>
            <?php endif; ?>
            <?php if(count($content_section) <= 3) : $i = 0; //if normal 1-3 groups of content ?>
                <?php while(has_sub_field('columns_repeater')) : $i++; ?>
                    <?php 
                        $code_format = get_sub_field('column_format');
                        $column_contents = '';
                        if(!$code_format) {
                            $column_contents = get_sub_field('column_content');
                        } else {
                            $column_contents = get_sub_field('column_code');
                        }
                    ?>
                    <?php if($column_contents != '') : ?>
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
                            <?php echo $column_contents; ?>
                            <?php if(get_sub_field('add_button')) : ?>
                                <a class="btn" href="<?php the_sub_field('button_link'); ?>"><?php the_sub_field('button_text'); ?></a>
                            <?php endif; ?>
                        </div> <!-- // content__group -->
                    <?php endif; //wp_reset_query(); ?>
                <?php endwhile; ?>
            <?php endif; ?> 
        </div> <!-- // content-block__inner -->
    </div> <!-- // content-block__overlay -->
</article> <!-- // content-block -->
