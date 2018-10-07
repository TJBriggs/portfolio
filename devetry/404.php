<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package Wordpress
 * @subpackage Lu
 * @since Lu 2.0
 */

get_header(); ?>

<section class="main-torso fourofour-torso">
    <div class="fourofour__inner">
        <article class="fourofour__content">
            <img src="<?php bloginfo('template_url'); ?>/assets/images/sully-404-color.png" alt="Image of Sully the dog.">
            <h3>These aren't the pages you're looking for</h3>
            <p>Please use the navigation to steer you back in the direction of a real page!</p>
        </article><!-- //fourofour__content -->
    </div><!-- //fourofour__inner -->
</section><!-- //fourofour-torso -->

<?php get_footer(); ?>