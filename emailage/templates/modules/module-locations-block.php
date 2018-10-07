 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' locations-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' locations-block--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' locations-block--' . $pad;
        }
    }
 ?>
<article class="locations-block main-torso__module<?php echo $classes; ?>">
	<div class="locations-block__inner">
		<div class="locations-block__intro-wrap">
            <?php if( get_sub_field('colored_title') ) : ?>
              <h4 class="locations-block__colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
            <?php endif; ?>
            <?php if( get_sub_field('lead_text') ) : ?>
              <h3 class="locations-block__lead-text"><?php esc_html_e(the_sub_field('lead_text')); ?></h3>
            <?php endif; ?>
        </div>
        <?php if( have_rows('locations') ) : ?>
            <div class="locations">
                <?php while ( have_rows('locations') ) : the_row(); ?>
                    <div class="locations__location">
                        <div class="locations__map"><?php esc_html_e(the_sub_field('google_map')); ?></div>
                        <div class="locations__text">
                            <h6 class="locations__colored-title"><?php esc_html_e(the_sub_field('small_title')); ?></h6>
                            <h3><?php esc_html_e(the_sub_field('large_title')); ?></h3>
                            <h5><?php esc_html_e(the_sub_field('address')); ?></h5>
                            <?php 
                                $phone = get_sub_field('phone_number');
                                $phone_numbers = preg_replace('/[^0-9]/', '', $phone); 
                            ?>
                            <a href="tel:<?php esc_html_e($phone_numbers); ?>"><?php esc_html_e($phone); ?></a>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
	</div> <!-- // locations-block__inner -->  
</article> <!-- // locations-block -->  