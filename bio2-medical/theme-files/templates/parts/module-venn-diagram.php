<?php
    wp_enqueue_script('scroll');
    //no classes to start
    $classes = '';
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' venn-diagram--' . $title;
        }
    }
    // Count
    $i = 0;
?>
<a href="<?php the_sub_field('section_link'); ?>" class="venn-diagram__wrapper">
    <article id="fade" class="venn-diagram<?php echo $classes; ?>">
        <?php if(get_sub_field('section_title')) : ?>
            <h1 class="section-title"><?php the_sub_field('section_title'); ?></h1>
        <?php endif; ?>
        <?php 
                // Logo Vars
                $primary_logo = get_sub_field('primary_logo');
                $secondary_logo = get_sub_field('secondary_logo');
        ?>
        <img id="js-logo-2" class="venn-diagram__secondary-logo" src="<?php echo $secondary_logo['url']; ?>" alt="<?php echo $secondary_logo['alt']; ?>">
        <div class="venn-diagram__inner">
            <img id="js-logo-1" class="venn-diagram__primary-logo venn-diagram__icon--logo" src="<?php echo $primary_logo['url']; ?>" alt="<?php echo $primary_logo['alt']; ?>">
            <?php while(have_rows('circle_repeater')) : the_row(); $i++; ?>
                <?php 
                    // Image Vars
                    $img_array = get_sub_field('circle_icon');
                    $img_url = $img_array['url'];
                    $img_alt = $img_array['alt'];
                ?>
                <div id="js-circle-<?php echo $i; ?>" class="venn-diagram__part venn-diagram__part--circle-<?php echo $i; ?>">

                    <img class="venn-diagram__icon js-ajax-replace" src="<?php echo $img_url; ?>" alt="<?php echo $img_alt; ?>">
                    <span class="venn-diagram__text"><?php the_sub_field('circle_text'); ?></span>
                </div>
            <?php endwhile; ?>
        </div>
    </article>
</a>
