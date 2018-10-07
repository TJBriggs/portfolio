 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' callouts-intro--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' callouts-intro--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' callouts-intro--' . $pad;
        }
    }
 ?>
<article class="callouts-intro main-torso__module<?php echo $classes; ?>">
	<div class="callouts-intro__inner">
        <div class="callouts-intro__intro-wrap">
            <?php if( get_sub_field('colored_title') ) : ?>
    		  <h4 class="callouts-intro__colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
            <?php endif; ?>
            <?php if( get_sub_field('large_title') ) : ?>
              <h2 class="callouts-intro__large-title"><?php esc_html_e(the_sub_field('large_title')); ?></h2>
            <?php endif; ?>
            <?php if( get_sub_field('lead_text') ) : ?>
              <h3 class="callouts-intro__lead-text"><?php esc_html_e(the_sub_field('lead_text')); ?></h3>
            <?php endif; ?>
            <?php if( get_sub_field('paragraph_text') ) : ?>
              <div class="callouts-intro__intro-text"><?php esc_html_e(the_sub_field('paragraph_text')); ?></div>
            <?php endif; ?>
        </div>
        <?php 
            $callout_type = get_sub_field('callout_type');
            $callout_mod = '';
            if( $callout_type ) {
                $callout_mod = ' callouts--' . $callout_type;
            }
            if(have_rows('callouts')) : 
        ?>
            <div class="callouts<?php esc_html_e($callout_mod); ?>">
                <?php while (have_rows('callouts')) : the_row(); ?>
                    <div class="callouts__callout">
                        <div class="callouts__callout-content">
                            <?php if( $callout_type == 'icons-left' || $callout_type == 'icons-center') : ?>
                                <?php $icon = get_sub_field('icon'); ?>
                               <img src="<?php echo esc_url($icon['url']); ?>" alt="<?php esc_html_e($icon['alt']); ?>">
                            <?php endif; ?>
                            <h2><?php esc_html_e(the_sub_field('title')); ?></h2>
                            <p><?php esc_html_e(the_sub_field('text')); ?></p>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
        <?php if( get_sub_field('add_button') ) : ?>
            <div class="callouts-intro__btn-wrap">
                <a class="btn" href="<?php echo esc_url(the_sub_field('button_link')); ?>"><?php esc_html_e(get_sub_field('button_text')); ?></a>
            </div>
        <?php endif; ?>
	</div> <!-- // callouts-intro__inner -->  
</article> <!-- // callouts-intro -->  