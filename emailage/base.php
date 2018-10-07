<?php

use Roots\Sage\Setup;
use Roots\Sage\Wrapper;

?>

<!doctype html>
<html <?php language_attributes(); ?>>
  <?php get_template_part('templates/components/head'); ?>
  <body <?php body_class(); ?>>
    <?php if(get_field('open_body_scripts', 'option')) : ?>
        <?php the_field('open_body_scripts', 'option'); ?>
    <?php endif; ?>
    <!--[if IE]>
      <div class="alert alert-warning">
        <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'sage'); ?>
      </div>
    <![endif]-->
    <div class="main-wrap" role="document">
    <?php
        if( is_front_page() ) {
            get_template_part('templates/components/header-home');
        } else {
            do_action('get_header');
            get_template_part('templates/components/header');
        }
    ?>
        <?php include Wrapper\template_path(); ?>
    <?php
        do_action('get_footer');
        get_template_part('templates/components/footer');
        wp_footer();
    ?>
    <?php if(get_field('closing_body_scripts', 'option')) : ?>
        <?php the_field('closing_body_scripts', 'option'); ?>
    <?php endif; ?>
  </body>
</html>
