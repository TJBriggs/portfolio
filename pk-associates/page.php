<?php if ( !post_password_required() ) : ?> 

	<?php while (have_posts()) : the_post(); ?>
	  	<?php get_template_part('templates/components/content', 'page'); ?>
	<?php endwhile; ?>

<?php else : ?>
    <?php echo Lucid\my_password_form(); ?>
<?php endif; ?>
