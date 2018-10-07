 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' image-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' image-block--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' image-block--' . $pad;
        }
    }
    // Layout Ootions
    $layout = get_sub_field('layout_options');
    if($layout){
        $classes .= ' image-block--' . $layout;
    }
 ?>
<article class="image-block main-torso__module<?php echo $classes; ?>">
    <?php 
        // Image Vars
        $image_style = '';
        $image_array = get_sub_field('main_image');
        $image_size = $image_array['sizes']['hero_grid_large'];
        $image_style = ' style="background-image: url('.$image_size.');"';
    ?>
    <div class="image-block__image"<?php echo $image_style ?>></div>
</article> <!-- // image-block -->  
