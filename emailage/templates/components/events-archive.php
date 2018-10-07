<article class="blog-feed blog-feed--events-upcoming blog-feed--accent-green blog-feed--pad-top blog-feed--pad-bot blog-feed--lg-dn blog-feed--cv-gray">
    <div class="blog-feed__inner">  
        <h4 class="blog-feed__colored-title">Past Events</h4> 
        <?php 
            wp_reset_query();
            $event_args = array(
                'post_type' => 'events',
                'posts_per_page' => -1,
                'orderby' => 'date', 
                'order' => 'DESC',
                'post_status' => 'publish'
            );
            $event_query = new WP_Query( $event_args ); 
        ?>
        <?php if ( $event_query->have_posts() ) : ?>
            <div class="blog-feed__wrap">
                <?php while ( $event_query->have_posts() ) : $event_query->the_post(); ?>
                    <a class="blog-feed__post" href="<?php echo esc_url(the_permalink()); ?>">
                        <?php $post_id = get_the_id(); ?>
                        <?php 
                            // Image Vars
                            $image_array = get_field('featured_image', $post_id);
                            $image_size = $image_array['sizes']['blog-feature'];
                            $image_style = ' style="background-image: url('.$image_size.');"';
                        ?>
                        <div class="blog-feed__image"<?php echo $image_style; ?>></div>
                        <div class="blog-feed__text">
                            <h6><?php echo get_the_date(); ?></h6>
                            <h3><?php esc_html_e( the_title() ); ?></h3>
                        </div>
                    </a>
                <?php endwhile; wp_reset_query(); ?>
            </div>
        <?php else : ?>
            <h2 style="text-align: center;">Sorry, no passed events to display at this time.</h2>
        <?php endif; ?>
    </div>
</article>