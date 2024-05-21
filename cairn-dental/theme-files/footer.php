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
            <div class="main-foot__blog">
                <?php
                    $recentPosts = new WP_Query();
                    $recentPosts->query('showposts=1');
                    while ($recentPosts->have_posts()) : $recentPosts->the_post(); 
                ?>
                    <?php 
                        // Image Options
                        $options = get_field('image_options');
                        // Placeholder Var
                        $place_url = get_site_url();
                        $image_alt = "Blog Image";
                        if($options == "custom") {
                            $image_array = get_field('hero_image');
                            $image_size = $image_array['sizes']['foot-thumb'];
                            $image_alt = $image_array['alt'];
                        } elseif($options == "one") {
                            $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/foot-placeholder-1.jpg';
                            $image_size = $placeholder;
                        } elseif($options == "two") {
                            $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/foot-placeholder-2.jpg';
                            $image_size = $placeholder;
                        } elseif($options == "three") {
                            $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/foot-placeholder-3.jpg';
                            $image_size = $placeholder;
                        } elseif($options == "four") {
                            $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/foot-placeholder-4.jpg';
                            $image_size = $placeholder;
                        } elseif($options == "five") {
                            $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/foot-placeholder-5.jpg';
                            $image_size = $placeholder;
                        } elseif($options == "six") {
                            $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/foot-placeholder-6.jpg';
                            $image_size = $placeholder;
                        }
                    ?>
                    <div class="blog__image">
                        <img src="<?php echo $image_size; ?>" alt="<?php echo $image_alt; ?>">
                    </div>
                    <div class="blog__content">
                        <h6 class="blog__title"><?php echo tow_title(37); ?></h6>
                        <h6 class="blog__date"><?php echo get_the_date('n.j.y');?></h6>
                        <p class="blog__text"><?php echo tow_excerpt(210); ?></p>
                        <a class="btn btn-alt" href="<?php the_permalink(); ?>">Read More</a>
                    </div>
                <?php endwhile; wp_reset_query();?>
            </div>
            <div class="main-foot__content">
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
                <div class="main-foot__logo">
                    <?php $logo = get_field('footer_logo', 'option'); ?>
                    <a class="logo" href="<?php echo get_site_url(); ?>">
                        <img src="<?php echo $logo; ?>" alt="Cairn Dental Logo">
                    </a>
                    <div class="social-share">
                        <div class="fb-like btn-social" data-href="https://www.cairndental.com" data-width="1" data-layout="button" data-action="like" data-show-faces="true" data-share="false"></div>
                        <div class="btn-social">
                            <a class="twitter-share-button" href="https://twitter.com/intent/tweet" target="_blank">Tweet</a>
                        </div>
                        <div class="btn-social">
                            <script src="//platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script>
                            <script type="IN/Share" data-url="http://www.cairndental.com"></script>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-foot__copy-wrap">
                <span class="copyright">&copy; All rights reserved Cairn Dental</span>
                    <span class="separator">|</span>
                <span class="privacy"><a href="<?php echo get_site_url(); ?>/privacy-policy">Privacy Policy</a></span>
                    <span class="separator privacy-pipe">|</span>
                <span class="credits"><a href="<?php echo get_site_url(); ?>/credits">Credits</a></span>
                    <span class="separator credit-pipe">|</span>
                <span class="design">Site by <a target="_blank" rel="nofollow" href="https://www.zenman.com">Zenman</a></span>
            </div>  
        </div>
    </footer><!-- // main-foot -->
<!-- sticky footer will fail if anything goes between the closing footer and .wrap -->
</div><!-- // wrap-all-the-things -->

<?php wp_footer(); //mandatory ?>

</body>
</html>