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
        <div class="main-foot__inner">
            <div class="main-foot__logo">
                <a href="<?php echo get_site_url(); ?>">
                    <object>
                        <svg class="logo-foot">
                          <use xlink:href="#logo-foot"></use>
                        </svg>
                    </object>
                </a> 
            </div> <!-- // main-head__logo -->
            <div class="main-foot__nav">
                <?php
                    $attr = array(
                        'theme_location'  => 'foot-menu',
                        'container'       => 'nav',
                        'container_class' => 'foot-nav',
                        'menu_class'      => 'menu'
                    );
                    wp_nav_menu($attr);
                ?>
            </div> <!-- // main-foot__nav -->
            <div class="main-foot__copy">
                <div class="copy-text">
                    <p>ami partners copyright <?php echo date('Y'); ?><span>|</span><a href="<?php echo get_site_url(); ?>/privacy-policy/">privacy policy</a></p>
                </div>
                <div class="social-icons">
                    <div class="icon-wrap">
                        <a class="twitter" href="https://twitter.com/AMI_mediaaudits" target="_blank">
                            <object>
                                <svg class="twitter-icon">
                                  <use xlink:href="#twitter-icon"></use>
                                </svg>
                            </object>
                        </a> 
                        <a class="linkedin" href="https://www.linkedin.com/company/advantage-media-management-inc.?trk=fc_badge" target="_blank">
                            <object>
                                <svg class="linkedin-icon">
                                  <use xlink:href="#linkedin-icon"></use>
                                </svg>
                            </object>
                        </a>
                    </div>
                </div>
                <div class="design-text">
                    <p>web development by <a target="_blank" rel="nofollow" href="http://www.zenman.com">zenman</a></p>
                </div>
            </div> <!-- // main-foot__copy -->
        </div> <!-- // main-foot__inner -->
    </footer><!-- // main-foot -->
<!-- sticky footer will fail if anything goes between the closing footer and .wrap -->
</div><!-- // wrap-all-the-things -->

<?php wp_footer(); //mandatory ?>

</body>
</html>