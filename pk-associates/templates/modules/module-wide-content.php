 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' wide-content--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' wide-content--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' wide-content--' . $pad;
        }
    }
 ?>
<article class="wide-content main-torso__module<?php echo $classes; ?>">
    <div class="wide-content__wide-inner">
        <div class="wide-content__content">
            <?php if( get_sub_field('title') ) : ?>
                <?php 
                    $title_style = '';
                    $title_color = get_sub_field('title_color');
                    if($title_color) {
                        $title_style = ' style="color:' . $title_color . ';"';
                    }
                ?>
                <h2<?php echo $title_style; ?>><?php the_sub_field('title'); ?></h2>
            <?php endif; ?>
            <div>
                <?php the_sub_field('content'); ?>
            </div>  
            <?php if( get_sub_field('add_button') ) : ?>
                <a class="wide-content__btn btn" href="<?php the_sub_field('button_link') ?>"><span><?php the_sub_field('button_text'); ?></span></a>
            <?php endif; ?>
        </div> <!-- // wide-content__content -->  
    </div> <!-- // wide-content__narrow-inner -->  
</article> <!-- // wide-content -->  