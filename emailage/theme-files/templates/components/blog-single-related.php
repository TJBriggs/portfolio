<?php 
    $single_id = get_the_id();
    $post_cat = get_the_category($single_id);
    if($post_cat) {
        $category = $post_cat[0]->term_id; 
    }  
    wp_reset_query();                      
?>
<article class="blog-feed blog-feed--related main-torso__module blog-feed--pad-top blog-feed--pad-bot blog-feed--accent-gray">
    <h4 class="blog-feed__colored-title">Related Articles</h4> 
    <?php 
     if($post_cat) {
        $blog_args = array(
            'post_type' => 'post',
            'posts_per_page' => 3,
            'orderby' => 'date', 
            'order' => 'DESC',
            'category__in' => $category
        );
        $blog_query = new WP_Query( $blog_args ); 
     } else {
        $blog_args = array(
            'post_type' => 'post',
            'posts_per_page' => 3,
            'orderby' => 'date', 
            'order' => 'DESC'
        );
        $blog_query = new WP_Query( $blog_args ); 
     }
        
    ?>
    <?php if ( $blog_query->have_posts() ) : ?>
        <div class="blog-feed__wrap">
            <?php while ( $blog_query->have_posts() ) : $blog_query->the_post(); ?>
                <a class="blog-feed__post" href="<?php echo esc_url(the_permalink()); ?>">
                    <?php $post_id = get_the_id(); ?>
                    <?php 
                        // Image Vars
                        $image_array = get_field('featured_image');
                        $image_size = $image_array['sizes']['blog-feature'];
                        $image_style = ' style="background-image: url('.$image_size.');"';
                    ?>
                    <div class="blog-feed__image"<?php echo $image_style; ?>>
                    </div>
                    <div class="blog-feed__text">
                        <?php 
                            $cat = get_the_category();
                            if($cat) {
                                $cat = $cat[0]->name;
                            }
                            $title = get_the_title();
                        ?>
                        <?php if($cat) : ?>
                            <h6><?php echo $cat; ?></h6>
                        <?php endif; ?>
                        <h3><?php esc_html_e(the_title()); ?></h3>
                    </div>
                </a>
            <?php endwhile; wp_reset_query(); ?>
        </div>
    <?php else : ?>
        <h2>There are no related articles at this time.</h2>
    <?php endif; ?>
</article>