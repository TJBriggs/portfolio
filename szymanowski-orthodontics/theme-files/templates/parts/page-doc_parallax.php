<?php
    //special classes
    $content_section = get_sub_field('thirds_content');
    $classes = '';
    $group_count = count($content_section);
    if($group_count <= 3){
        $classes .= ' thirds--' . $group_count;
        if($group_count == 2){
            $classes .= ' thirds__two-col--' . get_sub_field('thirds_two_column_handling');
        }
    } else {
        $classes .= ' thirds--slider';
    }

    //special modification classes
    $special_class = get_sub_field('thirds_class');
    if($special_class){
        $special_class_array = explode(" ", $special_class);
        foreach ($special_class_array as $class) {
            $classes .= ' page__group--' . $class;
        }
    }

    //empty divs
    $empty_div_array = array();
    if($group_count <= 3){
        for($i = 0; $i < $group_count; $i++) {
            $emptyness = 'full';
            $thirds_content = get_sub_field('thirds_content');
            if(($thirds_content[$i]['thirds_text'] == '')){
                $emptyness = 'empty';
            }
            $empty_div_array[$i] = $emptyness;
        }
    }
?>
<?php $bgImage = get_sub_field('bg_image'); ?>
<section class="page__group thirds<?php echo $classes; ?>">
    <div class="parallax-img" style="background-image:url(<?php echo $bgImage['sizes']['parallax']; ?>);" data-bg="background-image:url(<?php echo $bgImage['sizes']['parallax']; ?>);">
        <div class="parallax__inner">
            <?php if(get_sub_field('thirds_title')): ?>
            <?php $thirds_title = get_sub_field('thirds_title'); ?>
                <div class="section__title-wrap">
                    <h2 class="section__title"><?php echo $thirds_title; ?></h2>   
                </div> <!-- //section__title -->
            <?php endif; ?>
            <?php if(count($content_section) <= 3) : $i = 0; //if normal 1-3 groups of content ?>
                <?php while(has_sub_field('thirds_content')) : $i++; ?>
                    <?php if(get_sub_field('thirds_text') != '') : ?>
                        <?php
                            $empty_class = '';
                            if($i == 2) {
                                if($empty_div_array[$i - 2] == 'empty'){
                                    $empty_class .=' thirds__group--no-prev';
                                }
                            } elseif ($i == 3){
                                if($empty_div_array[$i - 2] == 'empty'){
                                    $empty_class .=' thirds__group--no-prev';
                                }
                                if($empty_div_array[$i - 3] == 'empty' && $empty_div_array[$i - 2] == 'empty'){
                                    $empty_class .=' thirds__group--no-prev-2';
                                }
                            }
                        ?>
                        <div class="thirds__group thirds__group--<?php echo $i . $empty_class; ?>">
                            <?php the_sub_field('thirds_text'); ?>
                        </div> <!-- //thirds__group -->
                    <?php endif; ?>
                <?php endwhile; ?>
            <?php endif; ?>
        </div> <!-- //parallax__inner -->
    </div> <!-- //parallax-img -->
</section>