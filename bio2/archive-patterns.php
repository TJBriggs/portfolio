<?php
/**
 * The template for displaying archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Zemplate
 * @since Zemplate 3.0
 */

get_header(); ?>
    <style>.hero-block {display: none;}</style>
    <?php query_posts('posts_per_page=-1&post_type=patterns&orderby=title&order=ASC'); ?>
    <?php if(have_posts()) : ?>
        <ul class="patterns">
            <?php while(have_posts()) : the_post(); ?>
                <li class="patterns__pattern">
                    <a href="<?php the_permalink(); ?>">
                        <?php the_title(); ?>
                    </a>
                </li>
            <?php endwhile; ?>
        </ul>
    <?php endif; ?>
<?php wp_footer(); //mandatory ?>

<?php get_footer(); ?>
