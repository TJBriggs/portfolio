<?php wp_enqueue_script('flexslider'); ?>
<?php //special modification classes
    $special_class = get_sub_field('special_classes');
    if($special_class){
        $special_class_array = explode(" ", $special_class);
        foreach ($special_class_array as $class) {
            $special_class = ' page__group--' . $class;
        }
    } ?>
    <section class="icon__slider<?php echo $special_class; ?>">
        <div class="icon__inner">
        <h3 class="section-title"><?php the_sub_field('section_title'); ?></h3>
        <?php if(have_rows('icon_slide')): ?>
            <div class="icon__nav">
                <?php while(have_rows('icon_slide')): the_row();
                    //vars
                    $slide_title = get_sub_field('slide_title');
                ?>
                    <div class="icon__nav-item">
                        <svg class="icon shape-<?php echo get_sub_field('icon_name'); ?>"><use xlink:href="#shape-<?php echo get_sub_field('icon_name'); ?>"></use></svg>
                        <p><?php echo $slide_title; ?></p>
                    </div> <!-- //__first -->
                <?php endwhile; ?>
            </div>
            <div class="slider--icon flexslider">
                <div class="icon__slides">
                    <?php while(have_rows('icon_slide')): the_row();
                        //vars
                        $slide_content = get_sub_field('slide_content');
                    ?>
                        <div class="slide__item">
                            <div class="icon__second">
                                <?php echo $slide_content; ?>
                            </div> <!-- //__second -->
                            <?php if(get_sub_field('add_cta_button')): ?>
                                <div class="cta">
                                    <a class="btn" href="<?php the_sub_field('slide_cta_link') ?>">learn more<span>&gt;</span></a>
                                </div>
                            <?php endif; ?>
                        </div> <!-- //slide__item -->
                    <?php endwhile; ?>
                </div> 
            </div> 
        <?php endif; ?>
        </div> 
    </section>