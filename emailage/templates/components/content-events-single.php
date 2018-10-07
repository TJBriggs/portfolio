<?php 
    // Accent Mod For Entire Page
    $accent_mod = '';
    $accent_color = get_field('ep_accent_color');
    if($accent_color) {
        $accent_mod = ' landing-page--' . $accent_color[0]->post_name;
    }
    // ACF Hero Object
    $hero = get_field('ep_hero_section');
    // Hero Curved Accent Mod
    $curve_mod = '';
    $curve = $hero['ep_curved_accent'];
    if($curve) {
        $curve_mod = ' hero-block--' . $curve;
    }
?>
<div class="event-page<?php esc_attr_e($accent_mod); ?>">
    <?php
        $image_array = $hero['ep_hero_image'];
        $image_size = $image_array['sizes']['event-hero'];
        $image_style = ' style="background-image: url('.$image_size.');"';
    ?>
    <article class="hero-block hero-block--landing hero-block--event hero-block--figure<?php esc_attr_e($curve_mod); ?>"<?php echo $image_style; ?>>
        <div class="hero-block__inner">
            <div class="hero-block__event-text">
                <h4 class="hero-block__colored-title"><?php esc_html_e($hero['ep_colored_title']); ?></h4>
                <h1><?php esc_html_e($hero['ep_large_title']); ?></h1>
                <p><?php esc_html_e($hero['location_name']); ?>&nbsp;|&nbsp;<?php esc_html_e($hero['location_city_state']); ?>&nbsp;|&nbsp;<?php esc_html_e($hero['event_dates']); ?></p>
            </div>
            <div class="hero-block__form-wrap">
                <div id="captcha-center" class="hero-block__form-container">
                    <?php 
                        $form_id = $hero['ep_form_id'];
                        echo do_shortcode('[gravityform id=' . $form_id . ' title="false" description="false"]'); 
                    ?>
                </div>
            </div>
        </div> <!-- // hero-block__inner -->  
    </article> <!-- // hero-block -->  
    <article class="event-page__content">
        <div class="event-page__inner">
            <?php $content_obj = get_field('ep_main_content'); ?>
            <div class="event-page__main-content">
                <h4 class="main-content__colored-title"><?php esc_html_e($content_obj['main_colored_title']); ?></h4>
                <h3 class="main-content__lead-text"><?php esc_html_e($content_obj['main_lead_text']); ?></h3>
                <div class="main-content__paragraph-text">
                    <?php echo $content_obj['main_paragraph_text']; ?>
                </div>
            </div>
            <?php $icons_obj = get_field('ep_icon_section'); ?>
            <div class="event-page__icons">
                <h4 class="event-page__colored-title"><?php esc_html_e($icons_obj['ep_icon_colored_title']); ?></h4>
                <h2 class="event-page__large-title"><?php esc_html_e($icons_obj['ep_large_title']); ?></h2>
                <div class="event-page__icon-container">
                    <?php 
                        $icons = $icons_obj['ep_icon_icons'];
                        foreach($icons as $icon) {
                            $icon_url = $icon['ep_icon_icon']['url'];
                            $icon_alt = $icon['ep_icon_icon']['alt'];
                            echo '<div class="event-page__icon-wrap"><img src="'. $icon_url .'" alt="'. $icon_alt .'"></div>';
                        }
                    ?>
                </div>
            </div>
        </div>
    </article>
</div> <!-- // landing-page -->    