 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' slider-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' slider-block--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' slider-block--' . $pad;
        }
    }
    // Layout Ootions
    $layout = get_sub_field('layout_options');
    if($layout){
        $classes .= ' slider-block--' . $layout;
    }
    $slide_count = count( get_sub_field('slides') );
 ?>
<article class="slider-block main-torso__module<?php echo $classes; ?>">
    <?php if( have_rows('slides') ) : ?>
        <div class="slider-block__wrap owl-carousel owl-carousel--slider">
            <?php 
                $i = 0;
                while ( have_rows('slides') ) : the_row(); 
                $i++;
                // Image Vars
                $image_style = '';
                $image_array = get_sub_field('image');
                $image_size = $image_array['sizes']['hero_grid_large'];
                $image_caption = $image_array['caption'];
                $image_style = ' style="background-image: url('.$image_size.');"';
            ?>
                <div class="slider-block__image slider-block__image--<?php echo $i; ?>"<?php echo $image_style ?>>
                    <?php if($image_caption) : ?>
                        <div class="slider-block__overlay"></div>
                        <span class="slider-block__caption"><strong><?php echo $i; ?>/<?php echo $slide_count; ?></strong><?php echo $image_caption; ?></span>
                    <?php endif; ?>
                </div>
            <?php endwhile; ?>
        </div> <!-- // slider-block__wrap --> 
    <?php endif; ?>
</article> <!-- // slider-block -->  
