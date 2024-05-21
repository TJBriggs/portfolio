 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' quadrant-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' quadrant-block--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' quadrant-block--' . $pad;
        }
    }
 ?>
<article class="quadrant-block quadrant-block--icons main-torso__module<?php echo $classes; ?>">
	<div class="quadrant-block__inner">
		<div class="quadrant-block__text">
            <?php if(get_sub_field('colored_title')) : ?>
                <h4 class="quadrant-block__colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
            <?php endif; ?>
            <?php if(get_sub_field('lead_text')) : ?>
                <h3><?php esc_html_e(get_sub_field('lead_text')); ?></h3>
            <?php endif; ?>
        </div>
        <?php if( have_rows('text_blocks') ) : ?>
            <div class="quadrant-block__text-blocks">
                <?php while ( have_rows('text_blocks') ) : the_row(); ?>
                    <div class="quadrant-block__text-block">
                        <div class="quadrant-block__icon-wrap">
                            <?php
                                $icon_array = get_sub_field('icon');
                                $icon_url = $icon_array['url'];
                                $icon_alt = $icon_array['alt'];
                            ?>
                            <img src="<?php echo esc_url($icon_url); ?>" alt="<?php esc_html_e($icon_alt); ?>">
                        </div>
                        <div class="quadrant-block__text-wrap">
                            <h2><?php esc_html_e(the_sub_field('title')); ?></h2>
                            <p><?php esc_html_e(the_sub_field('text')); ?></p>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
	</div> <!-- // quadrant-block__inner -->  
</article> <!-- // quadrant-block -->  