<?php 
	// Modifier Classes
    $classes = '';
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' icon-slider--' . $title;
        }
    }
?>
<article class="icon-slider<?php echo $classes; ?>">
    <div class="icon-slider__wrap">
        <?php if(have_rows('slide_repeater')) : ?>
            <div class="nav__wrap">
                <ul class="icon-slider__nav">
                    <?php while(have_rows('slide_repeater')) : the_row(); ?>
                        <li class="nav__item">
                            <a class="nav__link" href="javascript:void(0);">
                                <?php 
                                    // Set Icon Vars For Remaining Slides
                                    $icon_array = get_sub_field('slide_icon');
                                    $icon_url = $icon_array['url'];
                                ?>
                                <img src="<?php echo $icon_url; ?>" class="nav__icon js-ajax-replace" alt="Tab icon">
                            </a>
                        </li>
                    <?php endwhile; ?>
                </ul>
            </div>
            <div class="slider__wrap">
                <div class="icon-slider__slides owl-carousel js-owl-carousel--icon-slider">
                    <?php while(have_rows('slide_repeater')) : the_row(); ?>
                        <div class="icon-slider__slide">
                            <h2><?php the_sub_field('slide_title'); ?></h2>
                            <h6><?php the_sub_field('slide_subtitle'); ?></h6>
                            <p><?php the_sub_field('slide_text'); ?></p>
                        </div>
                    <?php endwhile; ?>
                </div>
            </div>
        <?php endif; ?>
    </div> <!-- // icon-slider__inner -->  
</article>