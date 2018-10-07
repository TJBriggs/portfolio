<?php //special modification classes
    $special_class = get_sub_field('special_classes');
    if($special_class){
        $special_class_array = explode(" ", $special_class);
        foreach ($special_class_array as $class) {
            $special_class = ' page__group--' . $class;
        }
    } ?>
<section class="services<?php echo $special_class; ?>">
    <?php if(get_sub_field('section_title')): ?>
        <!-- <h3 class="section-title__services"><?php the_sub_field('section_title'); ?></h3> -->
    <?php endif; ?>

    <?php if(have_rows('services_repeater')) : ?>
        <?php while(have_rows('services_repeater')) : the_row(); ?>
        <?php $img_services = get_sub_field('image'); ?>
            <div class="service" style="background-image:url(<?php echo $img_services['sizes']['services']; ?>);">
                <div class="front">
                    <h1><?php the_sub_field('title'); ?></h1>
                </div>
                <div class="content">
                    <div class="text">
                        <div><?php the_sub_field('description'); ?></div>
                        <a class="services-cta btn-clear" href="<?php echo get_sub_field('cta_button_link'); ?>" ><?php the_sub_field('cta_button_text') ?></a>
                    </div>
                </div>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>
</section>