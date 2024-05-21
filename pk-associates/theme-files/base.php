<?php

use Roots\Sage\Setup;
use Roots\Sage\Wrapper;

?>

<!doctype html>
<?php 
    $html_class = '';
    $hero_type = get_field('hero_type');
    if( $hero_type == 'grid' ) {
        $html_class = ' class="hero-grid-html"';
    }
    if( is_archive('portfolio') ) {
        $html_class = ' class="portfolio-hero-html"';
    }
?>
<html <?php language_attributes(); ?><?php echo $html_class; ?>>
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
      do_action('get_header');
      get_template_part('templates/components/header');
    ?>
    <?php if( !is_page('home') ) : ?>
        <?php include Wrapper\template_path(); ?>
    <?php endif; ?>
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
