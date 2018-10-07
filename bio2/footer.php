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
        <a class="main-foot__logo" href="<?php the_field('logo_link', 'option'); ?>">
            <?php $logo = get_field('logo', 'option'); ?>
            <img src="<?php echo $logo; ?>" alt="Bio2 Medical Logo">
        </a> <!-- // main-head__logo -->
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
        </div>
        <div class="main-foot__content">
            <div class="main-foot__copy">
                <p>&copy;&nbsp;<?php echo date('Y'); ?>&nbsp;<?php the_field('copyright_text', 'option'); ?></p>
            </div>
            <div class="main-foot__caution">
                <img src="<?php bloginfo('template_url'); ?>/images/global/caution-icon.png" alt="Caution Icon">
                <p><?php the_field('caution_text', 'option'); ?></p>
            </div>
        </div>
        <ul class="main-foot__social">
            <li>
                <a href="https://www.linkedin.com/company/bio2-medical-inc" target="_blank">
                    <svg class="linkedin-icon">
                        <use xlink:href="#linkedin-icon"></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/pages/BiO2-Medical/161372763906276" target="_blank">
                    <svg class="facebook-icon">
                        <use xlink:href="#facebook-icon"></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/bio2medical" target="_blank">
                    <svg class="twitter-icon">
                        <use xlink:href="#twitter-icon"></use>
                    </svg> 
                </a>
            </li>
        </ul>
    </div>
    <div class="main-foot__design">
        <a class="language-link" href="<?php the_field('site_select_url', 'option'); ?>"><?php the_field('site_select_text', 'option'); ?></a><span class="seperator">|</span>
        <a class="privacy-policy" href="<?php echo get_site_url(); ?>/privacy-policy">Privacy Policy</a>
    </div>
</footer><!-- // main-foot -->
<!-- sticky footer will fail if anything goes between the closing footer and .wrap -->
</div><!-- // wrap-all-the-things -->

<?php wp_footer(); //mandatory ?>

<?php the_field('before_closing_body', 'option'); ?>
</body>
</html>