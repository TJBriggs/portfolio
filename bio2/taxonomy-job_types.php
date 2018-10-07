<?php
/**
 * The template for displaying taxonomy pages.
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
<?php 
    // Page ID for Careers 
    $page_id = 41;
?>
<section class="main-torso">
    <?php if(get_field('modules', $page_id)) : ?>
        <?php while(has_sub_field('modules', $page_id)) : ?>
            <?php echo get_template_part('templates/parts/module', get_row_layout()); ?>
        <?php endwhile; ?>
    <?php endif; ?>
    <article class="careers">
        <div class="careers__inner">
            <!-- <div class="careers__select-wrap"> -->
                <?php 
                    $tax = get_object_taxonomies('careers');
                    $taxterms = get_terms( $tax, 'orderby=count&offset=1&hide_empty=0&fields=all' );
                ?>
                <!-- <select name='tax' id='tax' onchange="window.open(tax.value, '_parent')">
                    <option value='' <?php if (!count( $names )) echo "selected"; ?>>Filter Open Positions</option>
                    <option value="<?php echo get_site_url(); ?>/contact/careers">All Positions</option>
                    <?php 
                    foreach ( $taxterms as $term ) { 
                        $term_link = get_term_link($term);
                        if(is_wp_error($term_link)) {
                            continue;
                        }
                        echo '<option value="' . esc_url( $term_link ) . '">' . $term->name . '</option>',"\n"; 
                    } ?>
                </select>
                <div id="js-career-filter" class="select-box--blue">
                    <span class="career-text">Filter Open Positions</span>
                        <span class="arrow-down">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M223 12.3L777 497 223 987.7V12.3z"/></svg>
                        </span>
                </div> -->
            <!-- </div> -->
            <?php if ( have_posts() ) : ?>
                <div class="careers__content">
                    <?php
                        while (have_posts()) : the_post();
                            include(locate_template('templates/parts/careers-excerpt.php'));
                        endwhile;
                    ?>
                </div> <!-- //cat-torso__content -->
                <?php get_template_part('templates/parts/blog','pagination'); ?>
            <?php endif; ?>
        </div> <!-- //careers__inner -->
    </article> <!-- //careers -->
</section><!-- //main-torso -->

<?php get_footer(); ?>