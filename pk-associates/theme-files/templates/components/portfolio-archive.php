<?php get_template_part('templates/components/portfolio', 'hero'); ?>
<section class="main-torso page-torso portfolio-torso">
    <article class="portfolio-grid">
        <div class="portfolio-grid__inner">
            <div class="grid">      
                <?php $i = 0; ?>    
                <?php echo facetwp_display( 'template', 'portfolio_grid' ); ?>
            </div>
        </div>
    </article>
    <article class="additional-projects">
        <?php $id = 18; ?>
        <div class="additional-projects__wide-inner">
            <h2><?php the_field('headline_text', $id) ?></h2>
            <div class="additional-project__intro"><?php the_field('intro_text', $id) ?></div>
            <div id="js-ajax-content"></div>        
        </div>
    </article>
</section>