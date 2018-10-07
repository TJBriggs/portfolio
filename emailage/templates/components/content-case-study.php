<?php 
    // Accent Mod For Entire Page
    $accent_mod = '';
    $accent_color = get_field('cs_accent_color');
    if($accent_color) {
        $accent_mod = ' landing-page--' . $accent_color[0]->post_name;
    }
    // ACF Hero Object
    $hero = get_field('cs_hero_section');
    // Hero Curved Accent Mod
    $curve_mod = '';
    $curve = $hero['cs_curved_accent'];
    if($curve) {
        $curve_mod = ' hero-block--' . $curve;
    }
?>
<div class="case-study-page<?php esc_attr_e($accent_mod); ?>">
    <article class="hero-block hero-block--landing hero-block--case-study hero-block--figure<?php esc_attr_e($curve_mod); ?>">
        <div class="hero-block__inner">
            <div class="hero-block__case-text">
                <h4 class="hero-block__colored-title"><?php esc_html_e($hero['cs_colored_title']); ?></h4>
                <h1><?php esc_html_e($hero['cs_large_title']); ?></h1>
               
                <?php if( $hero['cs_hero_text'] ) : ?>
                    <p><?php esc_html_e($hero['cs_hero_text']); ?></p>
                <?php endif; ?>
            </div>
            <div class="hero-block__form-wrap">
                <div id="captcha-center" class="hero-block__form-container">
                    <?php 
                        $form_id = $hero['cs_form_id'];
                        echo do_shortcode('[gravityform id=' . $form_id . ' title="false" description="false"]'); 
                    ?>
                </div>
            </div>
        </div> <!-- // hero-block__inner -->  
    </article> <!-- // hero-block -->  
    <article class="case-study__content">
        <div class="case-study__inner">
            <?php $content_obj = get_field('cs_main_content'); ?>
            <div class="case-study__main-content">
                <h4 class="main-content__colored-title"><?php esc_html_e($content_obj['main_colored_title']); ?></h4>
                <?php if( $content_obj['main_lead_text'] ) : ?>
                    <h3 class="main-content__lead-text"><?php esc_html_e($content_obj['main_lead_text']); ?></h3>
                <?php endif; ?>
                <?php if( $content_obj['main_paragraph_text'] ) : ?>
                    <div class="main-content__paragraph-text">
                        <?php echo $content_obj['main_paragraph_text']; ?>
                    </div>
                <?php endif; ?>
                <?php if( $content_obj['caption_text'] ) : ?>
                    <div class="main-content__caption-text">
                        <strong><?php echo $content_obj['caption_text']; ?></strong>
                    </div>
                <?php endif; ?>
            </div>
            <?php $testimonial_obj = get_field('testimonial_content'); ?>
            <div class="case-study__testimonial testimonial-block">
                <div class="testimonial-block__inner">
                    <div class="testimonial-block__wrap">
                        <h3 class="testimonial-block__testimonial"><?php esc_html_e($testimonial_obj['testimonial_text']); ?></h3>
                        <h4 class="testimonial-block__source"><?php esc_html_e($testimonial_obj['source_text']); ?></h4>
                        <h5 class="testimonial-block__title"><?php esc_html_e($testimonial_obj['source_title']); ?></h5>
                    </div>
                </div> <!-- // testimonial-block__inner -->
            </div>
        </div>
    </article>
</div> <!-- // landing-page -->    