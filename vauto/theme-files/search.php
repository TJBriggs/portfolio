<?php
/**
 * Page template for displaying search results pages.
 *
 * @package mx-theme
 */

get_header(); ?>

	<section class="mx-search-results" itemscope itemtype="https://schema.org/SearchResultsPage">
		<div class="mx-search-results__shmedium-inner">
			<h1 class="mx-search-results__heading">
				<?php printf( esc_html__( 'Search Results', 'mx-theme' ) ); ?>
			</h1>

			<div class="mx-search-results__wrap">
				<?php if ( have_posts() ) : ?>
					<p class="mx-search-results__intro has-medium-font-size"><?php printf( esc_html__( 'Showing results for: %s', 'mx-theme' ), '<span>' . esc_html( get_search_query() ) . '</span>' ); ?></p>

					<?php while ( have_posts() ) : the_post(); ?>

						<div class="mx-search-results__item" itemscope itemtype="https://schema.org/Thing">
							<?php the_title( '<h3 class="h4" itemprop="name"><a href="' . esc_url( get_permalink() ) . '" itemprop="url">', '</a></h3>' ); ?>
							<p class="mx-search-results__item-url"><?php echo esc_url( get_permalink() ); ?></p>
							<div class="mx-search-results__item-excerpt" itemprop="description">
								<?php the_excerpt(); ?>
							</div>
						</div>

					<?php endwhile; ?>
				<?php the_posts_navigation(
					array(
						'prev_text' => __('Next', 'mx-theme'),
						'next_text' => __('Previous', 'mx-theme')
					)
				); ?>
				<?php else : ?>
					<p class="mx-search-results__intro has-medium-font-size">
						<?php echo esc_html__( 'No results found. Adjust your search keyword(s) and try again.', 'mx-theme' ); ?>
					</p>
				<?php endif; ?>
			</div>

		</div>
	</section>

<?php
get_footer();
