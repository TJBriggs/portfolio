<?php wp_enqueue_script('flexslider'); ?>
<?php //special modification classes
    $special_class = get_sub_field('special_classes');
    if($special_class){
        $special_class_array = explode(" ", $special_class);
        foreach ($special_class_array as $class) {
            $special_class = ' page__group--' . $class;
        }
    } ?>
 <section class="tabs<?php echo $special_class; ?>">
    <article class="tabs__nav">
        <div class="tabs-nav__inner">
            <div class="tabby__nav">
                <?php if(have_rows('tab_slide')): ?>
                    <?php while(have_rows('tab_slide')): the_row(); ?>
                        <?php $tab_title = get_sub_field('tab_title'); ?>
                        <div class="tabby__nav-item">
                                <span><?php echo $tab_title; ?></span>
                        </div> <!-- //__tabby__nav-item -->
                    <?php endwhile; ?>
                <?php endif; ?>
            </div> <!-- // tabby__nav -->
        </div> <!-- // tabs-nav__inner -->
    </article> <!-- // tabs__nav -->
    <div class="slider--tabs flexslider">
        <div class="tab-content__inner">
            <div class="tab__slides">
                <?php while(have_rows('tab_slide')): the_row();
                    $tab_content = get_sub_field('tab_content');
                    $fb_content = get_sub_field('fb_content');
                    $fb_text = get_sub_field('fb_text');
                ?>
                    <div class="tab__item">
                        <?php echo $tab_content; ?>
                        <?php if(get_sub_field('fb_content')): ?>
                            <div class="content-right">
                                <?php echo $fb_text; ?>
                                <a class="fb-btn btn" target="_blank" href="https://www.facebook.com/pages/Proctor-Productions/336380906591">like us on facebook</a>
                            </div> <!-- // content-right -->
                        <?php endif; ?>
                    </div> <!-- //tab__item -->
                <?php endwhile; ?>
            </div> <!-- // tab__slides -->
        </div> <!-- // tab-content__inner -->
    </div> <!-- // slider--tabs -->
</section> <!-- // tabs --> 