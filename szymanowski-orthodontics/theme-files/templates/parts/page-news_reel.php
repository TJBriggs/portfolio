<?php wp_enqueue_script('flexslider'); ?>
<?php if(get_sub_field('section_bg_color')): ?>
	<?php $news_bg = get_sub_field('section_bg_color'); ?>
<section class="news-reel <?php echo $news_bg; ?>">
<?php endif; ?>
	<?php if(get_sub_field('add_news_reel')) : ?>
		<div class="news-slider">
			<div class="news-slider__inner flexslider--news">
                <ul class="slides">
                	<?php
					    $recentPosts = new WP_Query();
					    $recentPosts->query('showposts=3');
					?>
					<?php while ($recentPosts->have_posts()) : $recentPosts->the_post(); ?>
	                    <li class="news__slide-item">
	                		<div class="news__image">
	                			<?php if ( has_post_thumbnail()): ?>
									<?php the_post_thumbnail('large'); ?>
								<?php else: ?>
									<img src="<?php bloginfo('template_directory'); ?>/images/news-placeholder.png" alt="Dr Damon Logo" />
								<?php endif; ?>
	                		</div> <!-- // news__image -->
	                        <div class="news__text">
	                        	<article class="news-text__inner">
	                        		<h2>In the News</h2>
	                                <div class="post__content">
	                                	<a href="<?php the_permalink(); ?>">
											<h3><?php the_title(); ?></h3>
	                                    	<h3><?php the_date(); ?></h3>
	                                	</a>
	                                    <?php the_excerpt(); ?>
	                                </div> <!-- // post__content -->
	                        	</article> <!-- // news-text__inner-->
	                        </div> <!-- // news__text -->
	                    </li> <!-- // news__slide-item -->
					<?php endwhile; 
					wp_reset_query();?>
                </ul> <!-- // slides -->
            </div> <!-- // news-slider__inner -->
        </div> <!-- // news-slider -->
	<?php endif; ?>
</section> <!-- // news-reel -->




