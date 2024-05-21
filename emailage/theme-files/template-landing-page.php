<?php
/**
 * Template Name: Landing Page
 */
?>
<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/components/content', 'landing-page'); ?>
<?php endwhile; ?>
