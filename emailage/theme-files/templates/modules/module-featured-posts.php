<?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' blog-feed--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' blog-feed--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' blog-feed--' . $pad;
        }
    }
 ?>
<article class="blog-feed blog-feed--featured main-torso__module<?php echo $classes; ?>">
    <div class="blog-feed__inner">  
        <h4 class="blog-feed__colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4> 
        <?php 
            $post_count = get_sub_field('number_of_posts');
            $article_type = get_sub_field('article_type');
            if( $article_type == 'category' ) {
                $category = get_sub_field('category');
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
                            $image_array = get_field('featured_image');
                            $image_size = $image_array['sizes']['blog-feature'];
                            $image_style = ' style="background-image: url('.$image_size.');"';
                        ?>
                        <div class="blog-feed__image"<?php echo $image_style; ?>>
                        </div>
                        <div class="blog-feed__text">
                            <?php 
                                $cat = get_the_category();
                                $cat = $cat[0]->name;
                                $title = get_the_title();
                            ?>
                            <h6><?php echo $cat; ?></h6>
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