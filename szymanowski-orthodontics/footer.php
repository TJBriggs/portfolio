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
        <div class="foot__top">
            <div class="top__inner">
                <div class="cta">
                    <div class="text-desktop">Ready to get started?</div>
                    <div class="text-mobile">Ready?</div>
                    <div class="button"><a class="btn" href="<?php bloginfo('template_url'); ?>/contact-us">Free Consultation</a></div>
                </div> <!-- //cta --> 
                <div class="social">
                    <div class="facebook__wrap">
                        <aside>
                             <object>
                                <svg class="icon shape-logo">
                                    <use xlink:href="#shape-facebook-circle"></use>
                                </svg>
                            </object>
                        </aside>
                        <article id="facebook-feed">
                            <?php echo do_shortcode('[custom-facebook-feed]'); ?>
                        </article> <!-- //facebook-feed --> 
                    </div><!-- //facebook__wrap -->
                    <div class="google__wrap">
                        <aside>
                            <object>
                                <svg class="icon shape-logo">
                                    <use xlink:href="#shape-google-circle"></use>
                                </svg>
                            </object>
                        </aside>
                        <article id="review-text">
                            <h3>Review us on Google</h3>
                            <p>See what other patients are saying about us! Or let us know how we're doing!</p>
                            <a href="https://plus.google.com/103079833642530139722/about" target="_blank">Write a review</a>
                        </article> <!-- //facebook-feed --> 
                    </div><!-- //google__wrap -->
                </div> <!-- //social --> 
                <hr>
            </div> <!-- //top__inner --> 
        </div> <!-- //foot__top --> 
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
                <div id="foot__map"></div>
            </div> <!-- //nav__inner --> 
        </div> <!-- //main-foot__nav --> 
        <div class="foot__bottom">
            <div class="bottom__inner">
            <hr>
                <div class="copyright">&copy; <?php echo date('Y'); ?> Szymanowski Orthodontics</div>
                    <ul class="social-icons">
                        <li><a class="facebook" href="https://www.facebook.com/SzymanowskiOrthodontics/" target="_blank"></a></li>
                        <li><a class="twitter" href="https://www.twitter.com" target="_blank"></a></li>
                        <li><a class="google" href="https://plus.google.com/103079833642530139722/posts" target="_blank"></a></li>
                        <li><a class="instagram" href="https://www.instagram.com" target="_blank"></a></li>
                        <!-- <li><a class="pinterest" href="https://www.pinterest.com" target="_blank"></a></li> -->
                        <li><a class="youtube" href="https://www.youtube.com/channel/UCLL54-Yh_jWI4E54gKKL9dg" target="_blank"></a></li>
                    </ul> <!-- //social-icons -->
                <div class="design"><a href="<?php echo site_url(); ?>/privacy-policy">Privacy Policy</a> &nbsp; | &nbsp; Site by <a target="_blank" rel="nofollow" href="http://www.zenman.com">Zenman Web Design</a></div>
            </div> <!-- //bottom__inner --> 
        </div> <!-- //foot__bottom --> 
    </footer> <!-- // main-foot -->
<!-- sticky footer will fail if anything goes between the closing footer and .wrap -->
</div><!-- // wrap-all-the-things -->

<?php wp_footer(); //mandatory ?>

</body>
</html>