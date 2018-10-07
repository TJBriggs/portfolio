<section class="hero-grid">
    <div class="hero-grid__wrap">
        <div class="hero-grid__main">
            <h3><span><?php the_field('grid_title'); ?></span></h3>
            <?php 
                $args = array(
                    'post_type' => 'portfolio',
                    'posts_per_page' => 1,
                    'orderby' => 'rand',
                    'tax_query' => array(
                        array(
                            'taxonomy' => 'portfolio_type',
                            'field'    => 'slug',
                            'terms'    => 'detailed-portfolio'
                        ),
                    ),
                );
                $query = new WP_Query( $args ); 
            ?>
            <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>
                <?php 
                    // Image Vars
                    $image_array = get_field('featured_image');
                    $image_size = $image_array['sizes']['hero_grid_large'];
                    $image_style = ' style="background-image: url('.$image_size.');"';
                ?>
                <a href="<?php the_permalink(); ?>" class="hero-grid__box"<?php echo $image_style; ?>>
                    <div>
                        <h4>Featured Project</h4>
                        <h1><?php the_field('portfolio_title'); ?></h1>
                    </div>
                </a>
                <?php endwhile; wp_reset_query(); ?>
            <?php else : ?>
                <div class="hero-grid__box">
                    <div><h1>No Portfolio Items to display</h1></div>
                </div>
            <?php endif; ?>
        </div> <!-- // hero-grid__main -->  
        <div class="hero-grid__aside">
            <?php 
                // Image Vars
                $b_one_array = get_field('box_one_image');
                $b_one_size = $b_one_array['sizes']['hero_grid_small'];
                $b_one_style = ' style="background-image: url('.$b_one_size.');"';
                $b_two_array = get_field('box_two_image');
                $b_two_size = $b_two_array['sizes']['hero_grid_small'];
                $b_two_style = ' style="background-image: url('.$b_two_size.');"';
            ?>
            <a href="<?php the_field('box_one_link'); ?>" class="hero-grid__box"<?php echo $b_one_style; ?>>
                <h2><?php the_field('box_one_title'); ?></h2>
            </a>
            <a href="<?php the_field('box_two_link'); ?>" class="hero-grid__box"<?php echo $b_two_style; ?>>
                <h2><?php the_field('box_two_title'); ?></h2>
            </a>
        </div> <!-- // hero-grid__aside -->  
    </div> <!-- // hero-grid__wrap -->  
</section> <!-- // hero-grid -->  
