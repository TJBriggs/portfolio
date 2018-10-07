<?php
/**
 * The template for displaying tag archive pages.
 *
 * @package WordPress
 * @subpackage Lu
 * @since Lu 2.0
 */

get_header(); ?>

<section class="main-torso blog-torso">
    <?php get_template_part('templates/components/newsletter-cta'); ?>
    <article class="blog-content">
        <div class="blog-content__inner">
            <div class="blog-articles">
                <?php
                    while (have_posts()) : the_post();
                        include(locate_template('templates/components/blog-excerpt.php'));
                    endwhile;
                ?>
            </div>
            <?php get_template_part('templates/components/blog','pagination'); ?>
        </div><!-- // blog-content__inner -->
    </article><!-- // blog-content -->
</section><!-- // blog-torso -->

<?php get_footer(); ?>