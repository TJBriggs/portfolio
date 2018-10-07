 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' stat-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' stat-block--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' stat-block--' . $pad;
        }
    }
 ?>
<article class="stat-block main-torso__module<?php echo $classes; ?>">
    <div class="stat-block__narrow-inner">
        <?php 
            // Image Vars
            $image_array = get_sub_field('image');
            $image_url = $image_array['url'];
            $image_style = ' style="background-image: url('.$image_url.');"';

        ?>
        <div class="stat-block__content"<?php echo $image_style; ?>>
            <div class="stat-block__stat stat__frame">
                <h1><span class="stat__number"><?php the_sub_field('stat_number'); ?></span></h1>
                <h4><?php the_sub_field('stat_caption'); ?></h4>
            </div>
        </div>
    </div>
</article> <!-- // stat-block -->  