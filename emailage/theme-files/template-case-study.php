<?php
/**
 * Template Name: Case Study
 */
?>
<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/components/content', 'case-study'); ?>
<?php endwhile; ?>
