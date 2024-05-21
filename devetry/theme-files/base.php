<?php

use Roots\Sage\Setup;
use Roots\Sage\Wrapper;

?>

<!doctype html>
<html <?php language_attributes(); ?>>
  <?php get_template_part('templates/components/head'); ?>
  <body <?php body_class(); ?>>
    <!--[if IE]>
      <div class="alert alert-warning">
        <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'sage'); ?>
      </div>
    <![endif]-->
    <div class="main-wrap" role="document">
    <?php
      if( is_page_template('template-landing-page.php') ) {
            get_template_part('templates/components/header-landing-page');
        } else {
            do_action('get_header');
            get_template_part('templates/components/header');
        }
    ?>
        <?php include Wrapper\template_path(); ?>
    <?php
      if( is_page_template('template-landing-page.php') ) {
            get_template_part('templates/components/footer-landing-page');
      } else {
          do_action('get_footer');
        get_template_part('templates/components/footer');
      }
      wp_footer();
    ?>
  </body>
</html>
