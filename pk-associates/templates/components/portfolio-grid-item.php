<?php 
    $post_id = get_the_id();
    $pt_terms = get_the_terms( $post_id, 'portfolio_type');
    $slug = $pt_terms[0]->slug;
    if( $slug == 'detailed-portfolio' ) :
?>
    <?php 
        // Image Vars
        $image_array = get_field('featured_image');
        $image_url = $image_array['url'];
        $image_style = ' style="background-image: url('.$image_url.');"';
        // Reset loop
        if($i == 10) {
            $i = 1;
        }
    ?>
    <a class="grid__item grid__item--<?php echo $i; ?>" href="<?php the_permalink(); ?>">
        <div class="grid__content"<?php echo $image_style; ?>>
            <div class="grid__overlay">
                <h3><?php the_field('portfolio_title'); ?></h3>
                <div class="grid__categories">
                    <?php 
                        // $post_id = get_the_id();
                        $ms_terms = get_the_terms( $post_id, 'market_sectors');
                        if($ms_terms) {
                            $j = 0;
                            foreach( $ms_terms as $ms ) {
                                $j++;
                                if($j < 4) {
                                    echo '<h5>'. $ms->name . '</h5>';
                                }
                            }
                        }
                    ?>
                </div>
            </div>
        </div>
    </a>
<?php endif; ?>