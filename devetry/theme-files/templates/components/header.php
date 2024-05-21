<header class="main-head">
    <div class="main-head__inner">

        <a class="main-head__logo" href="<?php echo get_site_url(); ?>">
            <?php $logo = get_field('header_logo', 'option'); ?>
            <img class="style-svg" src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>">
        </a>

        <?php 
            $cta_text = get_field('header_cta_text', 'option');
            $cta_link = get_field('header_cta_link', 'option');  
            if( $cta_text && $cta_link ) :
        ?>  
            <div class="main-head__cta">
                <a class="btn btn--blue btn--rounded" href="<?php echo $cta_link; ?>"><?php echo $cta_text; ?></a>
            </div>
        <?php endif; ?>

        <div class="main-head__nav">
            <?php
                $attr = array(
                    'theme_location'  => 'head-menu',
                    'container'       => 'nav',
                    'container_class' => 'head-nav',
                    'menu_class'      => 'menu'
                );
                wp_nav_menu($attr);
            ?>
        </div> <!-- // main-head__nav --> 
        
        <div class="main-head__trigger-wrap">
            <a href="javascript:void(0);" id="js-nav-trigger" class="main-head__trigger" aria-label="Activate navigation">
                <span><!-- non-semantic (╯°□°）╯︵ ┻━┻ --></span>
                <span><!-- but what can you do? ¯\_(ツ)_/¯  --></span>
                <span><!-- it looks so cool ┻━┻︵ \(°□°)/ ︵ ┻━┻ --></span>
                <span><!-- y u no not use? (ノಠ益ಠ)ノ彡 --></span>
            </a>
        </div>

    </div> <!-- // main-head__inner -->   
      
</header> <!-- // main-head --> 
<?php if( is_404() ) : ?>

<?php elseif( is_page_template('template-blog-main.php') || is_single() ) : ?>
    <?php get_template_part('templates/modules/module','hero-block-blog'); ?>
<?php elseif( get_field('hero_type') !== 'none' ) : ?>
    <?php get_template_part('templates/modules/module','hero-block'); ?>
<?php endif; ?>
