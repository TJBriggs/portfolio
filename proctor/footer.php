<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the wrap div and all content
 *
 * @package WordPress
 * @subpackage Zemplate
 * @since Zemplate 1.0
 */
?>

    <footer class="main-foot">
        <div class="footer__image">
            <div class="main-foot__wrap">
            <div class="social">
                <div><a target="_blank" class="facebook" href="https://www.facebook.com/pages/Proctor-Productions/336380906591?sk=wall"></a></div>
                <div><a target="_blank" class="twitter" href="https://www.facebook.com/pages/Proctor-Productions/336380906591?sk=wall"></a></div>
                <div><a target="_blank" class="flick" href="http://www.flickr.com/photos/proctordenver/collections/"></a></div>
                <div><a target="_blank" class="pinterest" href="http://www.pinterest.com/proctordenver/"></a></div>
            </div>
            <div class="main-foot__nav">
                <div class="nav__inner">
                    <?php
                        $attr = array(
                            'theme_location'  => 'foot-menu',
                            'container'       => 'nav',
                            'container_class' => 'foot-nav',
                            'menu_class'      => 'menu'
                        );
                        wp_nav_menu($attr);
                    ?>
                </div>
            </div>
            <div class="main-foot__logo">
                <div class="foot-logo__inner">
                    <a class="logo" href="<?php echo get_site_url(); ?>">
                        <img class="logo--desktop" src="<?php bloginfo('template_url'); ?>/images/global/logo-text.png" alt="Proctor">
                    </a>
                    <a class="wordmark" href="<?php echo get_site_url(); ?>">
                        <object>
                            <svg class="icon shape-wordmark">
                                <use xlink:href="#shape-wordmark"></use>
                            </svg>
                        </object>
                    </a>
                </div> <!-- // wordmark__inner -->
            </div> <!-- // main-foot__wordmark -->
            <div class="foot__bottom">
                <div class="foot__inner">
                    <div class="copy-wrap">
                        <span class="address">
                            501 Raritan Way Denver, CO 80204
                        </span>
                        <span class="copyright">
                            Proctor Productions Inc. &copy; Copyright <?php echo date('Y'); ?>.
                        </span>
                        <span class="privacy"><a href="<?php echo get_site_url(); ?>/privacy-policy">Privacy Policy</a></span>
                    </div> <!-- // copy-wrap -->
                    <div class="design-wrap">
                        <span class="web">Kick Ass site by <a target="_blank" href="http://www.zenman.com">Zenman Web Design</a></span>
                    </div> <!-- // design-wrap -->
                </div> <!-- // foot__inner -->
            </div> <!-- // foot__bottom -->
            </div> <!-- // main-foot__wrap -->
        </div><!-- //footer__image -->
    </footer><!-- // main-foot -->
<!-- sticky footer will fail if anything goes between the closing footer and .wrap -->
<?php if(!is_page('process')): ?>
    </div><!-- // wrap-all-the-things -->
<?php endif; ?>

<?php wp_footer(); //mandatory ?>

</body>
</html>