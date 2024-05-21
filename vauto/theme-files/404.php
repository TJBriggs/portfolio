<?php
/**
 * 404 Template
 *
 * @package mx-theme
 */

get_header(); ?>

<article id="main-content" class="main-content main-content--404">
	<section class="fourofour">
		<div class="fourofour__inner">
			<h1><?php esc_html_e( '404', 'mx-theme' ); ?></h1>
			<h2><?php esc_html_e( 'Page Not Found', 'mx-theme' ); ?></h2>
			<p class="p--med"><?php esc_html_e( 'You seem to have veered off the path. Let’s get you back to a working page.', 'mx-theme' ); ?></p>
			<a href="<?php echo esc_url( get_home_url() ) ?>" class="button--primary"><?php esc_html_e( 'Return to Homepage', 'mx-theme' ); ?></a>
		</div>
	</section><!-- // fourofour -->
</article><!-- // site-torso -->

<?php get_footer(); ?>
