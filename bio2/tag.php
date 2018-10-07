<?php
/**
 * The template for displaying tag archive pages.
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
                <li class="tag-title"><?php single_tag_title(); ?></li>
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

<?php get_footer(); ?>