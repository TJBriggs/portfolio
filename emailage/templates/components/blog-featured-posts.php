<?php 
    $id = 520;
?>
<article class="blog-feed blog-feed--featured blog-feed--accent-green blog-feed--pad-top blog-feed--pad-bot">
    <div class="blog-feed__inner">  
        <h4 class="blog-feed__colored-title"><?php esc_html_e(the_field('colored_title', $id)); ?></h4> 
        <?php 
            $count_mod = '';
            $post_count = get_field('number_posts', $id);
            $article_type = get_field('article_type', $id);
            if( $article_type == 'category' ) {
                $category = get_field('category', $id);
                $blog_args = array(
                    'post_type' => 'post',
                    'posts_per_page' => $post_count,
                    'orderby' => 'date', 
                    'order' => 'DESC',
                    'category__in' => $category
                );
            } elseif( $article_type == 'featured') {
                $sticky = get_option('sticky_posts');
                $blog_args = array(
                    'post__in' => $sticky,
                    'post_type' => 'post',
                    'posts_per_page' => $post_count,
                    'ignore_sticky_posts' => 1,
                    'orderby' => 'date', 
                    'order' => 'DESC'
                );
            }
            $blog_query = new WP_Query( $blog_args ); 
        ?>
        <?php if ( $blog_query->have_posts() ) : ?>
            <div class="blog-feed__wrap">
                <?php while ( $blog_query->have_posts() ) : $blog_query->the_post(); ?>
                    <a class="blog-feed__post" href="<?php echo esc_url(the_permalink()); ?>">
                        <?php $post_id = get_the_id(); ?>
                        <?php 
                            // Image Vars
                            $image_array = get_field('featured_image', $post_id);
                            $image_size = $image_array['sizes']['blog-feature'];
                            $image_style = ' style="background-image: url('.$image_size.');"';
                        ?>
                        <?php if($image_array) : ?>
                            <div class="blog-feed__image"<?php echo $image_style; ?>></div>
                        <?php endif; ?>
                        <div class="blog-feed__text">
                            <?php 
                                $cat = '';
                                $cat = get_the_category();
                                if($cat){
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
            <h2>Sorry, no results were found.</h2>
        <?php endif; ?>
    </div>
</article>