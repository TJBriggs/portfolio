<header class="main-head landing-page">
    <div class="main-head__inner">
        <?php $logo = get_field('header_logo', 'option'); ?>
        <a class="main-head__logo" href="<?php echo get_site_url(); ?>">
            <?php $logo = get_field('header_logo', 'option'); ?>
            <img class="style-svg" src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>">
        </a>
    </div> <!-- // main-head__inner -->   
      
</header> <!-- // main-head --> 
<?php if( get_field('hero_type') !== 'none' ) : ?>
    <?php get_template_part('templates/modules/module','hero-block'); ?>
<?php endif; ?>
