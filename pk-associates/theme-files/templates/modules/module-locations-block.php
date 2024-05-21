 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
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
    <div class="locations-block__wide-inner">
        <?php if(have_rows('locations')) : ?>
            <div class="locations-block__locations-wrap">
                <?php while (have_rows('locations')) : the_row(); ?>
                    <div class="locations-block__location">
                        <h5><?php the_sub_field('headline_text'); ?></h5>
                        <h3><?php the_sub_field('city_state'); ?></h3>
                        <h5>Address</h5>
                        <a href="<?php the_sub_field('directions_url'); ?>" target="_blank"><?php the_sub_field('address'); ?></a>
                        <div class="locations-block__contact-wrap">
                            <div>
                                <h5>Phone</h5>
                                <?php 
                                    $phone = get_sub_field('phone_number');
                                    $phone_numbers = preg_replace('/[^0-9]/', '', $phone); 
                                ?>
                                <a href="tel:<?php echo $phone_numbers; ?>"><?php echo $phone; ?></a>
                            </div>
                            <div>
                                <h5>Fax</h5>
                                <p><?php the_sub_field('fax_number'); ?></p>
                            </div>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
    </div>
</article> <!-- // locations-block -->  