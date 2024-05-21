<div class="hero">
    <?php if(have_rows('hero_content')) : ?>
        <?php while(have_rows('hero_content')) : the_row(); ?>
            <?php $hero_img = get_sub_field('hero_image'); ?> 
            <?php $hero_text = get_sub_field('hero_text'); ?> 
            <?php $hero_ctas = get_sub_field('add_hero_ctas'); ?>
            <div class="hero__image" style="background-image:url(<?php echo $hero_img['sizes']['hero']; ?>);">
                <?php if($hero_text) : ?>
                    <div class="hero-image__text">
                        <div class="hero-text__inner">
                            <?php echo $hero_text; ?>
                        </div> <!-- // hero-text__inner -->
                    </div> <!-- // hero-image__text -->
                <?php endif; ?>
                <?php if($hero_ctas) : ?>
                    <div class="hero-image__ctas">
                        <div class="hero-ctas__inner">
                            <div class="button-wrap">
                                <a class="cta-left btn" href="<?php bloginfo('template_url'); ?>/contact">get started</a>
                                <a class="cta-right btn-clear" href="<?php bloginfo('template_url'); ?>/our-story">learn more<span>&gt;</span></a>
                            </div> <!-- // button-wrap -->
                        </div> <!-- // hero-ctas__inner -->
                    </div> <!-- // hero-image__ctas -->
                <?php endif; ?>
            </div> <!-- // hero__image -->
        <?php endwhile; ?>
    <?php endif; ?>
</div> <!-- // hero -->