<article class="blog-article">
	<a href="<?php the_permalink(); ?>">
		<?php
			// Image Vars
			$image_array = get_field('blog_hero_image');
			$image_url = $image_array['url'];
			$image_style = ' style="background-image: url('.$image_url.');"';
		?>
		<div class="blog-article__image"<?php echo $image_style; ?>></div>
		<div class="blog-article__text">
			<p><strong><?php the_title(); ?></strong></p>
			<span><?php echo get_the_date('n.j.y');?></span>
		</div>
	</a>
</article> <!-- // blog-article -->