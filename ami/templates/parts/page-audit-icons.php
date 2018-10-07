<?php
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' audit-icons--' . $title;
        }
    }
    // Background Modifiers
    $bgColor = get_sub_field('bg_color');
    $bgModifier = ' audit-icons--' . $bgColor;
?>
<section class="audit-icons<?php echo $bgModifier; ?><?php echo $classes; ?>">
    <div class="audit-icons__inner">
        <?php if(get_sub_field('content_title')): ?>
            <?php $content_title = get_sub_field('content_title'); ?>
                <div class="title-wrap">
                    <h1 class="content-title"><?php echo $content_title; ?></h1>
                </div>
        <?php endif; ?>
        <?php 
            $intro_type = get_sub_field('intro_editor_type');
            $intro_text = '';
            if($intro_type == 'rich_text') {
                $intro_rich_text = get_sub_field('content_intro');
                $intro_text = $intro_rich_text;
            } elseif($intro_type == 'code') {
                $intro_code = get_sub_field('content_intro_code');
                $intro_text = $intro_code;
            }
        ?>
        <?php if($intro_text): ?>
            <div class="audit-icons__intro">
                <?php echo $intro_text; ?>
            </div> <!-- // audit-icons__intro -->
        <?php endif; ?>
        <?php 
            $icons = get_sub_field('icon_repeater');
            $icon_count = count($icons);
            $count_mod = ' icon-wrap--' . $icon_count;
        ?>
        <div class="icon-wrap<?php echo $count_mod; ?>">
            <?php while(have_rows('icon_repeater')) : the_row(); ?>
                <?php 
                    // icon vars
                    $icon = get_sub_field('audit_icon');
                    // cta vars
                    $icon_main = get_sub_field('audit_mtitle');
                    $icon_blurb = get_sub_field('audit_text');
                ?>
                <div class="icon">
                    <div class="icon__circle">
                        <span class="icon__icon icon__icon--img">
                            <img src="<?php echo $icon['url']; ?>" alt="icon" />
                        </span> <!-- // cta__icon--img -->
                    </div> <!-- // icon__circle -->
                    <div class="icon__text">
                        <h5 class="icon__main-title"><?php echo $icon_main; ?></h5>
                        <p class="icon__blurb"><?php echo $icon_blurb; ?></p>
                    </div> <!-- // cta__text -->
                </div> <!-- // cta -->
            <?php endwhile; ?>
        </div> <!-- // cta-wrap -->
    </div> <!-- // audit-icons__inner -->
</section> <!-- // audit-icons -->