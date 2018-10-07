<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package WordPress
 * @subpackage Zemplate
 * @since Zemplate 3.0
 */

get_header(); ?>

<section class="main-torso fourofour-torso main">
    <div class="fourofour__inner">
        <article class="fourofour__content">
            <aside>
        		<img src="<?php bloginfo('template_url'); ?>/images/global/404.jpg" alt="Proctor Productions">
        	</aside>
        	<div>
        		<h1>These aren't the pages you're looking for</h1>
            	<h3>Please use the navigation to steer you back in the direction of a real page!</h3>
        	</div>
        </article><!-- //fourofour__content -->
    </div><!-- //fourofour__inner -->
</section><!-- //fourofour-torso -->

<?php get_footer(); ?>