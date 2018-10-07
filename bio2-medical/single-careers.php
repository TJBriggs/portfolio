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

    <section class="main-torso single-torso--sidebar">
        <div class="single-torso__inner">
            <article class="single-torso__content">
                <div class="single-torso__posted">
                    <h1><?php the_title(); ?></h1>
                </div> <!-- // post__posted -->
                <div class="post__text">
                    <?php the_field('post_content'); ?>
                </div> <!-- // post__text -->
                <div class="post__form">
                    <h1><strong>Apply</strong> Today</h1>
                    <?php echo do_shortcode('[contact-form-7 id="1033" title="Application Form"]'); ?>
                </div>
            </article> <!-- //single-torso__content -->
            <aside id="careers-sidebar" class="single-torso__sidebar">
                <h2>Other available positions:</h2>
                <ul> 
                <?php 
                    $terms = get_the_terms(get_the_ID(), 'job_types');
                    $args = array(
                            'post_type' => 'careers',
                            'posts_per_page' => 5,
                            'post__not_in' => array(
                                get_the_id()
                            ),
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'job_types',
                                    'field' => 'slug',
                                    'terms' => $terms[0],
                                )
                            )
                        );
                        $loop = new WP_Query( $args );
                        while ( $loop->have_posts() ) : $loop->the_post();
                ?>
                    <li>
                        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
                    </li>
                <?php 
                    endwhile;
                    wp_reset_postdata();
                ?>
                </ul>   
            </aside> <!-- //single-torso__sidebar -->
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