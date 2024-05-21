<?php 
	// Modifier Classes
	$classes = '';
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' content-block-slider--' . $title;
        }
    }
    // Layout Mod
    $layout = get_sub_field('layout');
    $mod_layout = '';
    if($layout == "left") {
        $mod_layout = ' content-block-slider--left';
    } elseif ($layout == "right") {
        $mod_layout = ' content-block-slider--right';
    }
?>
<article class="content-block-slider<?php echo $mod_layout; ?><?php echo $classes; ?>">
    <div class="block__inner">
        <div class="block__content-wrap">
            <div class="block__slider-wrap">
                <div class="owl-carousel js-owl-carousel--image-slider">
                    <?php while(have_rows('image_repeater')) : the_row(); ?>
                        <?php 
                            // Set Image Vars
                            $image_array = get_sub_field('slide_image');
                            $image_size = $image_array['sizes']['content-slide'];
                            $image_style = ' style="background-image: url('.$image_size.');"';
                        ?>
                        <div class="slider__image"<?php echo $image_style; ?>></div>
                    <?php endwhile; ?>
                </div>
            </div> <!-- // block__slider-wrap -->  
            <div class="block__text-wrap">
                <h3><?php the_sub_field('title'); ?></h3>
                <?php if(get_sub_field('subtitle')) : ?>
                    <h6><?php the_sub_field('subtitle'); ?></h6>
                <?php endif; ?>
                <p><?php the_sub_field('text'); ?></p>
                <?php if(get_sub_field('add_button')) : ?>
                    <a class="btn" href="<?php the_sub_field('btn_lnk'); ?>"><?php the_sub_field('btn_txt'); ?></a>
                <?php endif; ?>
            </div> <!-- // block__text-wrap -->
        </div>
    </div> <!-- // block__inner -->  
</article>