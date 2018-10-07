<article class="single-torso__post">
	<?php if(has_post_thumbnail()): ?>
		<div class="post__image"> 
			<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_post_thumbnail('feed_img'); ?></a>
		</div> <!-- //post__image -->
	<?php else: ?>
		<div class="detail__excerpt">
			<?php the_excerpt(); ?>
		</div> <!-- //detail__excerpt -->
	<?php endif; ?>
	<div class="post__content">
	    <h4><a class="post_title" href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h4>
	    <a href="<?php the_permalink(); ?>">Read More ></a>
    </div> <!-- //post__content -->
</article> <!-- //single__post -->