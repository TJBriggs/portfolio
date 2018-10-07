 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' global-cta--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' global-cta--' . $margin;
        }
    }
 ?>
<article class="global-cta main-torso__module<?php echo $classes; ?>">
    <div class="global-cta__inner">
        <div class="global-cta__wrap">
            <h3><?php the_sub_field('title'); ?></h3>
            <h4><?php the_sub_field('text'); ?></h4>
            <a href="<?php the_sub_field('button_link'); ?>" class="global-cta__btn btn"><span><?php the_sub_field('button_text'); ?></span></a>
        </div> <!-- // global-cta__wrap -->  
    </div> <!-- // global-cta__inner -->  
</article> <!-- // global-cta -->  