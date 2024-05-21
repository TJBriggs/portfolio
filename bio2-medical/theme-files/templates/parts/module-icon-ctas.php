<?php
    $classes = '';
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' icon-ctas--' . $title;
        }
    }
    //spacing classes
    $spacing = get_sub_field('spacing');
    if($spacing){
        foreach ($spacing as $space) {
            $classes .= ' icon-ctas--' . $space;
        }
    }
    // Background Modifiers
    $bg_mod = '';
    $bg_options = get_sub_field('bg_options');
    $bg_image = null;
    //$attr = null;
    if($bg_options == "gray") {
        $bg_mod = ' icon-ctas--bg-gray';
    } elseif($bg_options == "blue") {
        $bg_mod = ' icon-ctas--bg-blue';
    }
?>
<article class="icon-ctas<?php echo $classes; ?><?php echo $bg_mod; ?>">
    <div class="icon-ctas__inner">
    <?php if(get_sub_field('section_title')) : ?>
        <h1 class="section-title"><?php the_sub_field('section_title'); ?></h1>
    <?php endif; ?>
    <?php if(get_sub_field('layout_options') == 'center') : ?>
        <?php 
            $cta_mod = '';
            $cta_count = count(get_sub_field('cta_c_repeater'));
            if($cta_count === 4) {
                $cta_mod = ' icon-ctas--4';
            }
        ?>
        <div class="icon-ctas__wrap icon-ctas--center<?php echo $cta_mod; ?>">
            <?php while(have_rows('cta_c_repeater')) : the_row(); ?>
                <div class="icon-ctas__cta">
                    <?php  
                        $img_array_c = get_sub_field('icon_c');
                        $img_url_c = $img_array_c['url'];
                        $img_alt_c = $img_array_c['alt'];
                    ?>
                    <img class="js-ajax-replace" src="<?php echo $img_url_c; ?>" alt="<?php echo $img_alt_c; ?>">
                    <h1><?php the_sub_field('title'); ?></h1>
                    <a class="btn" href="<?php the_sub_field('button_link'); ?>"><?php the_sub_field('button_text'); ?></a>
                </div> <!-- // icon-ctas__cta -->
            <?php endwhile; ?>
    <?php elseif(get_sub_field('layout_options') == 'left') : ?>
        <div class="icon-ctas__wrap icon-ctas--left">
            <?php while(have_rows('cta_l_repeater')) : the_row(); ?>
                <div class="icon-ctas__cta">
                    <?php  
                        $img_array_l = get_sub_field('icon_l');
                        $img_url_l = $img_array_l['url'];
                        $img_alt_l = $img_array_l['alt'];
                    ?>
                    <img class="js-ajax-replace" src="<?php echo $img_url_l; ?>" alt="<?php echo $img_alt_l; ?>">
                    <h1><?php the_sub_field('title'); ?></h1><br>
                    <a class="btn" href="<?php the_sub_field('button_link'); ?>"><?php the_sub_field('button_text'); ?></a>
                </div> <!-- // icon-ctas__cta -->
            <?php endwhile; ?>
    <?php endif; ?>
            
        </div> <!-- // icon-ctas__wrap -->
    </div> <!-- // icon-ctas__inner -->
</article> <!-- // icon-ctas -->
