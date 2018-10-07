<?php 
    // Accent Mod For Entire Page
    $accent_mod = '';
    $accent_color = get_field('lp_accent_color');
    if($accent_color) {
        $accent_mod = ' landing-page--' . $accent_color[0]->post_name;
    }
    // ACF Hero Object
    $hero = get_field('hero_section');
    // Hero Curved Accent Mod
    $curve_mod = '';
    $curve = $hero['hero_curved_accent'];
    if($curve) {
        $curve_mod = ' hero-block--' . $curve;
    }
?>
<div class="landing-page<?php esc_attr_e($accent_mod); ?>">
    <article class="hero-block hero-block--landing hero-block--figure<?php esc_attr_e($curve_mod); ?>">
        <div class="hero-block__inner">
            <div class="hero-block__landing-text">
                <h4 class="hero-block__colored-title"><?php esc_html_e($hero['hero_colored_title']); ?></h4>
                <h1><?php esc_html_e($hero['hero_large_title']); ?></h1>
                <p><?php esc_html_e($hero['hero_hero_text']); ?></p>
            </div>
            <div class="hero-block__form-wrap">
                <div id="captcha-center" class="hero-block__form-container">
                    <?php 
                        $form_id = $hero['hero_form_id'];
                        echo do_shortcode('[gravityform id=' . $form_id . ' title="false" description="false"]'); 
                    ?>
                </div>
            </div>
        </div> <!-- // hero-block__inner -->  
    </article> <!-- // hero-block -->  
    <article class="landing-page__content">
        <div class="landing-page__inner">
            <?php $icons_obj = get_field('icon_section'); ?>
            <div class="landing-page__icons">
                <h4 class="landing-page__colored-title"><?php esc_html_e($icons_obj['icon_colored_title']); ?></h4>
                <div class="landing-page__icon-container">
                    <?php 
                        $icons = $icons_obj['icon_icons'];
                        foreach($icons as $icon) {
                            $icon_url = $icon['icon_icon']['url'];
                            $icon_alt = $icon['icon_icon']['alt'];
                            echo '<div class="landing-page__icon-wrap"><img src="'. $icon_url .'" alt="'. $icon_alt .'"></div>';
                        }
                    ?>
                </div>
            </div>
            <?php $stats = get_field('circle_stats_section'); ?>
            <div class="landing-page__stats">
                <div class="landing-page__stat stat__frame">
                    <div class="landing-page__stat-content">
                        <h1>
                            <span class="stat__number"><?php esc_html_e($stats['statistic_1']); ?></span>
                            <?php if($stats['trailing_text_1']) : ?>
                                <span class="stat__text"><?php esc_html_e($stats['trailing_text_1']); ?></span>
                            <?php endif; ?>
                        </h1>
                        <?php if($stats['caption_1']) : ?>
                            <h4><?php esc_html_e($stats['caption_1']); ?></h4>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="landing-page__stat stat__frame">
                    <div class="landing-page__stat-content">
                        <h1>
                            <span class="stat__number"><?php esc_html_e($stats['statistic_2']); ?></span>
                            <?php if($stats['trailing_text_2']) : ?>
                                <span class="stat__text"><?php esc_html_e($stats['trailing_text_2']); ?></span>
                            <?php endif; ?>
                        </h1>
                        <?php if($stats['caption_2']) : ?>
                            <h4><?php esc_html_e($stats['caption_2']); ?></h4>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </article>
</div> <!-- // landing-page -->
    