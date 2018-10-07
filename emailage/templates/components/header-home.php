<header class="main-head">
    <?php if(get_field('add_banner', 'option')) : ?>
        <a class="main-head__banner" href="<?php echo esc_url( the_field('banner_link', 'option') ); ?>">
            <div class="banner__inner">
                <span>
                    <?php esc_html_e( the_field('banner_text', 'option') ); ?>
                    <?php if( get_field('link_symbol', 'option') ) : ?>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    <?php endif; ?>
                </span>
            </div>  
        </a>
    <?php endif; ?>
    <div class="main-head__wrap">
        <div class="main-head__inner">
            <a class="main-head__logo" href="<?php echo esc_url(home_url('/')); ?>">
                <?php $logo = get_field('header_logo', 'option'); ?>
                <img src="<?php echo esc_url($logo['url']); ?>" alt="<?php echo esc_html($logo['alt']); ?>">
            </a>
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
        <?php if( is_active_sidebar( 'header-language-switcher' ) ) : ?>
            <style type="text/css">
                .language-switcher {
                    opacity: 0;
                    transition: opacity 100ms;
                }
                .language-switcher.visible {
                    display: inline-block;
                    height: 45px;
                    padding: 9px 10px;
                    position: absolute;
                    right: 15px;
                    bottom: -45px;
                    z-index: 500;
                    background-color: #687983;
                    border-bottom-right-radius: 10px;
                    border-bottom-left-radius: 10px;
                    box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.25);

                    opacity: 1;
                }
                .language-switcher__wrap {
                    width: 100%;
                }
                .language-switcher .widgettitle {
                    display: inline-block;
                    padding-top: 7px;
                    padding-right: 3px;
                    font-family: 'MuseoSansRounded-300', sans-serif;
                    font-weight: normal;
                    font-style: normal;
                    letter-spacing: 0.06em;
                    font-size: 12px;
                    color: #FFF;
                }
                .wpml-ls {
                    float: right;
                    display: inline-block;
                    width: 104px;
                }
                .wpml-ls-legacy-dropdown .wpml-ls-current-language a {
                    width: 104px;
                    padding: 7px 7px 6px!important;
                    background-color: #687983!important;
                    border: 1px solid #FFF;
                    border-radius: 5px;
                    color: #FFF;
                    font-family: 'MuseoSansRounded-300', sans-serif;
                    font-weight: normal;
                    font-style: normal;
                    letter-spacing: 0.06em;
                    font-size: 12px;
                }
                .wpml-ls-legacy-dropdown .wpml-ls-current-language:hover a {
                    color: #FFF!important;
                    text-decoration: none!important;
                }
                .wpml-ls-legacy-dropdown .wpml-ls-current-language:hover .wpml-ls-sub-menu .wpml-ls-item > a {
                    padding: 10px 10px 8px!important;
                    background-color: #687983!important;
                    border: none!important;
                    border-bottom: 1px solid #F8F9F9!important;
                    border-radius: 0!important;
                    color: #FFF!important;
                    transition: background-color 400ms!important;
                }
                .wpml-ls-legacy-dropdown .wpml-ls-current-language:hover .wpml-ls-sub-menu {
                    border-top: none!important;
                    box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.25);
                }
                .wpml-ls-legacy-dropdown .wpml-ls-current-language:hover .wpml-ls-sub-menu .wpml-ls-item:hover > a {
                    text-decoration: none!important;
                    background-color: #7D8C94!important;
                }
                .wpml-ls-legacy-dropdown .wpml-ls-current-language:hover .wpml-ls-sub-menu .wpml-ls-last-item > a {
                    border: none!important;
                }
                @media (max-width: 960px) {
                    .language-switcher {
                        right: 0px!important;
                        border-bottom-right-radius: 0px!important;
                    }
                }
                @media (max-width: 640px) {
                    .language-switcher .widgettitle {
                       display: none!important;
                    }
                }
            </style>
            <div class="language-switcher visible">
                <?php dynamic_sidebar( 'header-language-switcher' ); ?>
            </div>
        <?php endif; ?>
    </div> <!-- // main-head__wrap --> 
</header> <!-- // main-head --> 
<?php if( is_singular('careers') ) : ?>
    <?php get_template_part('templates/modules/module','hero-block-career-single'); ?>
<?php elseif( is_singular('events') ) : ?>
    <?php get_template_part('templates/modules/module','hero-block-event-single'); ?>
<?php elseif( is_single() ) : ?>	
    <?php get_template_part('templates/modules/module','hero-block-single'); ?>
<?php else : ?>
    <?php 
        $hero_type = get_field('hero_layout');
        if( $hero_type == 'none') :
    ?> 
        <section class="hero-block hero-block--none"></section>
    <?php else : ?>
        <?php if( !is_archive() ) : ?>
            <?php get_template_part('templates/modules/module','hero-block'); ?>
        <?php endif; ?>
    <?php endif; ?>
<?php endif; ?>