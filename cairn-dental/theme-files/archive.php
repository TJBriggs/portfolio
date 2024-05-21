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

<section class="main-torso">
    <div class="cat-torso__inner">
        <div class="category__wrap">
            <ul>
                <?php wp_list_categories('title_li='); ?>
            </ul>
        </div>
        <article class="cat-torso__content">
            <?php
                while (have_posts()) : the_post();
                    include(locate_template('templates/parts/blog-excerpt.php'));
                endwhile;
            ?>
        </article><!-- //cat-torso__content -->
        <?php get_template_part('templates/parts/blog','pagination'); ?>
    </div><!-- //cat-torso__inner -->
</section><!-- //cat-torso -->
<?php if(is_category() || is_archive()) : ?>
    <?php get_template_part('templates/parts/blog','testimonial'); ?>
<?php endif; ?>

<?php get_footer(); ?>