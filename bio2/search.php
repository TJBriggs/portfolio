<?php
/**
 * The template for displaying search results pages.
 *
 * @package WordPress
 * @subpackage Zemplate
 * @since Zemplate 3.0
 */

get_header(); ?>

<section class="main-torso search-torso">
    <div class="search-torso__inner">
        <article class="search-torso__wrap">
            <?php if (have_posts()) : ?>
                <h1>Not what you're looking for? Search again</h1>
                <?php get_search_form(); ?>
                <h4><?php echo 'Search Results for: ' .'<strong>' . get_search_query() . '</strong>'; ?></h4>
                <?php while (have_posts()) : the_post(); ?>
                    <?php get_template_part('templates/parts/search', 'results'); ?>
                <?php endwhile; ?>
                <?php if(get_previous_posts_link() || get_next_posts_link()) : ?>
                    <div class="pagination">
                        <?php
                            global $wp_query;
                            $big = 999999999;
                            echo paginate_links(array(
                                'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
                                'format' => '?paged=%#%',
                                'prev_text'    => __('&lt;'),
                                'current' => max(1, get_query_var('paged')),
                                'total' => $wp_query->max_num_pages,
                                'next_text'    => __('&gt;'),
                           ));
                        ?>
                    </div>
                <?php endif; ?>
            <?php else : ?>
                <div class="search-torso__no-results">
                    <h1><?php echo '<strong>Nothing</strong> Found'; ?></h1>
                    <p><?php echo 'We couldn\'t find anything that matched your search criteria. Please try again with some different keywords.'; ?></p>
                    <?php get_search_form(); ?>
                </div>
            <?php endif; ?>
        </article><!-- //search-torso__content -->
    </div><!-- //search-torso__inner -->
</section><!-- //search-torso -->

<?php get_footer(); ?>
