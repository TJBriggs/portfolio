<article class="blog-article blog-article--case-study">
	<a href="<?php the_permalink(); ?>">
		<?php
			$post_id = get_the_id();
			$taxonomy = 'case-study-category';
			// Image Vars
			$image_array = get_field('cs_hero_image');
			$image_url = $image_array['url'];
			$image_style = ' style="background-image: url('.$image_url.');"';
		?>
		<div class="blog-article__image"<?php echo $image_style; ?>></div>
	</a>
	<div class="blog-article__text">
		<a href="<?php the_permalink(); ?>">
			<p><strong><?php the_title(); ?></strong></p>
		</a>
		<div class="blog-article__categories"><?php the_terms( $post_id, $taxonomy ); ?></div>
	</div>
</article> <!-- // blog-article -->