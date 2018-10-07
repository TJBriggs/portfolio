<?php
    $classes = ''; 
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' text-block--' . $title;
        }
    }
    //spacing classes
    $spacing = get_sub_field('spacing');
    if($spacing){
        foreach ($spacing as $space) {
            $classes .= ' text-block--' . $space;
        }
    }
    // Background Modifiers
    $bg_mod = '';
    $bg_options = get_sub_field('bg_options');
    $bg_image = null;
    if($bg_options == "gray") {
        $bg_mod = ' text-block--bg-gray';
    } elseif($bg_options == "blue") {
        $bg_mod = ' text-block--bg-blue';
    }
?>
<article class="text-block <?php echo $classes; ?><?php echo $bg_mod; ?>">
    <div class="text-block__inner">
        <?php if(get_sub_field('section_title')) : ?>
            <h1 class="section-title"><?php the_sub_field('section_title'); ?></h1>
        <?php endif; ?>
        <?php if(get_sub_field('intro_text')) : ?>
            <p class="text-block__intro"><?php the_sub_field('intro_text'); ?></p>
        <?php endif; ?>
        <?php if(get_sub_field('add_intro_button')) : ?>
            <a class="text-block__intro-btn btn" href="<?php the_sub_field('intro_button_link'); ?>"><?php the_sub_field('intro_button_text'); ?></a>
        <?php endif; ?>
        <?php if(have_rows('text_repeater')) : ?>
            <div class="text-block__items">
                <?php while(have_rows('text_repeater')) : the_row(); ?>
                    <div class="text-block__item">
                        <?php if(get_sub_field('subtitle')) : ?>
                            <h5><?php the_sub_field('subtitle'); ?></h5>
                        <?php endif; ?>
                        <?php if(get_sub_field('text')) : ?>
                            <p><?php the_sub_field('text'); ?></p>
                        <?php endif; ?>
                        <?php if(get_sub_field('link_options') == 'button') : ?>
                            <?php 
                                $link_mod = '';
                                if(get_sub_field('external_link')) {
                                    $link_mod = ' target="blank"';
                                }
                            ?>
                            <a class="text-block__item-btn btn" href="<?php the_sub_field('link_url'); ?>"<?php echo $link_mod; ?>><?php the_sub_field('link_text'); ?></a>
                        <?php elseif(get_sub_field('link_options') == 'text') : ?>
                            <?php 
                                $link_mod = '';
                                if(get_sub_field('external_link')) {
                                    $link_mod = ' target="blank"';
                                }
                            ?>
                            <a class="text-block__item-link" href="<?php the_sub_field('link_url'); ?>"<?php echo $link_mod; ?>><?php the_sub_field('link_text'); ?></a>
                        <?php endif; ?>
                    </div>
                <?php endwhile ?>
            </div>
        <?php endif; ?>
        <?php if(have_rows('btn_repeater')) : ?>
            <div class="text-block__foot-btns">
                <?php while(have_rows('btn_repeater')) : the_row(); ?>  
                    <a class="btn" href="<?php the_sub_field('foot_btn_link'); ?>"><?php the_sub_field('foot_btn_text'); ?></a>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
    </div> <!-- // text-block__inner -->
</article> <!-- // text-block -->
