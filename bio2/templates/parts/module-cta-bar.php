<?php
    $classes = ''; 
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' cta-bar--' . $title;
        }
    }
    // Background Modifiers
    $bg_mod = '';
    $bg_options = get_sub_field('bg_options');
    if($bg_options == "gray") {
        $bg_mod = ' cta-bar--bg-gray';
    } elseif($bg_options == "blue") {
        $bg_mod = ' cta-bar--bg-blue';
    } elseif($bg_options == "lblue") {
        $bg_mod = ' cta-bar--bg-lblue';
    }
    // CTA Mod
    $cta_mod = '';
    $cta_layout = get_sub_field('center_cta');
    if($cta_layout) {
        $cta_mod = ' cta-bar--center';
    }
?>
<article class="cta-bar <?php echo $classes; ?><?php echo $bg_mod; ?><?php echo $cta_mod; ?>">
    <div class="cta-bar__inner">
        <div class="cta-bar__wrap">
            <p><?php the_sub_field('text'); ?></p>
            <a class="cta-bar__btn btn" href="<?php the_sub_field('button_link'); ?>"><?php the_sub_field('button_text'); ?></a>
        </div>
    </div> <!-- // cta-bar__inner -->
</article> <!-- // cta-bar -->
