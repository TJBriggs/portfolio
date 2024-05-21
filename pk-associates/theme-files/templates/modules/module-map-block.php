 <?php 
    // call/set up the scripts
    wp_enqueue_script('gmap');
    wp_enqueue_script('map');
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' map-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' map-block--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' map-block--' . $pad;
        }
    }
    // Layout Ootions
    $layout = get_sub_field('layout_options');
    if($layout){
            $classes .= ' map-block--' . $layout;
    }
 ?>
<article class="map-block main-torso__module<?php echo $classes; ?>">
    <?php if( get_sub_field('main_title') ) : ?>
        <div class="map-block__title-wrap">
            <h2 class="map-block__title"><?php the_sub_field('main_title'); ?></h2>
        </div>
    <?php endif; ?>
        <div class="map-block__content-wrap">
            <div class="map-block__shadow">
                <div class="map-block__content">
                    <?php if( get_sub_field('headline_text') ) : ?>
                        <h4><?php the_sub_field('headline_text'); ?></h4>
                    <?php endif; ?>
                    <h1><?php the_sub_field('city_state'); ?></h1>
                    <div class="map-block__data-wrap">
                        <div>
                            <span>
                                <h4>Address</h4>
                                <p><?php the_sub_field('address'); ?></p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <h4>Phone</h4>
                                <?php 
                                    $phone = get_sub_field('phone');
                                    $phone_numbers = preg_replace('/[^0-9]/', '', $phone); 
                                ?>
                                <p><a href="tel:<?php echo $phone_numbers; ?>"><?php the_sub_field('phone'); ?></a></p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <h4>Fax</h4>
                                <p class="no-phone-link"><?php the_sub_field('fax'); ?></p>
                            </span>
                        </div>
                    </div> <!-- // map-block__data-wrap -->  
                </div> <!-- // map-block__content -->  
        <?php 
            $map = get_sub_field('map');
            if( $map ) :
        ?>
            <div class="map-block__map-wrap">
                <div class="map-block__map">
                    <div class="map-block__marker marker" data-lat="<?php echo $map['lat']; ?>" data-lng="<?php echo $map['lng']; ?>"><?php the_sub_field('marker_content'); ?></div>
                </div> <!-- // map-block__map -->  
            </div>
        <?php endif; ?>
        </div> <!-- // map-block__shadow --> 
    </div> <!-- // map-block__content-wrap -->  
</article> <!-- // map-block -->  