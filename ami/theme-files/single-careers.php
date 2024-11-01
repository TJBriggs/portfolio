<?php
/**
 * The Template for displaying all single posts.
 *
 * @package WordPress
 * @subpackage Zemplate
 * @since Zemplate 3.0
 */

get_header(); ?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

    <section class="main-torso single-torso--sidebar hans-solo">
        <div class="single-torso__inner">
            <article class="single-torso__content">
                <div class="single-torso__posted">
                    <h4><?php the_title(); ?></h4>
                    <span class="post-date"><?php echo get_the_date('n.j.y');?></span>
                    <?php the_category(); ?>
                    <?php if(has_tag()):?>
                        <?php get_template_part('templates/parts/page', 'social'); ?>
                    <?php else : ?>
                        <span class="no-tags">
                            <?php get_template_part('templates/parts/page', 'social'); ?>
                        </span>
                    <?php endif; ?>
                    <?php if(has_tag()):?>
                        <div class="tag__wrap">
                            <img class="tag-icon" src="<?php bloginfo('template_url'); ?>/images/global/tag.svg" alt="Tag Icon">
                            <span class="post-tag"><?php the_tags('');?></span>  
                        </div>
                    <?php endif;?>
                </div> <!-- // post__posted -->
                <div class="post__text">
                    <?php the_content(); ?>
                </div> <!-- // post__text -->
                <h2 class="form__title">Apply <strong>Today!</strong></h2>
                <div class="form__wrap">
                    <?php echo do_shortcode('[contact-form-7 id="1103" title="Application Form"]'); ?>
                </div>
            </article> <!-- //single-torso__content -->
            <aside class="single-torso__sidebar">
                <?php get_sidebar(); ?>
            </aside><!-- //single-torso__sidebar -->
        </div> <!-- //single-torso__inner -->
        <div class="single-comments__inner">
            <article class="post__comments">
                <?php if(!is_attachment()): ?>
                    <?php comments_template( '', true ); ?>
                <?php endif; ?>
            </article>  <!-- //post__comments -->
        </div> <!-- //single-comments__inner -->
    </section><!-- // single-torso -->
<?php endwhile; // end of the loop. ?>
<div class="main"></div><!-- //main -->

<?php get_footer(); ?>