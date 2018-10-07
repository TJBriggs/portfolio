<?php 
	// Modifier Classes
    $classes = '';
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' icon-callouts--' . $title;
        }
    }
    // Count Mod
    $icons = get_sub_field('callout_repeater');
    $icon_count = count($icons);
    $mod = '';
    $mod = ' icon-callouts--' . $icon_count;
    // Title Mod
    $title = get_sub_field('section_title');
    $mod_title = '';
    if($title) {
        $mod_title = ' icon-callouts--title';
    }
?>
<article class="icon-callouts<?php echo $mod; ?><?php echo $mod_title; ?><?php echo $classes; ?>">
    <div class="icon-callouts__inner">
        <?php if(get_sub_field('section_title')) : ?>
            <h2 class="section-title"><?php the_sub_field('section_title'); ?></h2>
        <?php endif; ?>
        <?php while(have_rows('callout_repeater')) : the_row(); ?>
            <?php 
                // Set Icon Vars
                $icon_array = get_sub_field('callout_icon');
                $icon_url = $icon_array['url'];
            ?>
            <div class="icon-callouts__callout">
                <img class="icon-callouts__icon" src="<?php echo $icon_url; ?>" alt="Icon">
                <h5><?php the_sub_field('callout_title'); ?></h5>
                <p><?php the_sub_field('callout_text'); ?></p>
            </div>
        <?php endwhile; ?>
    </div>
</article>