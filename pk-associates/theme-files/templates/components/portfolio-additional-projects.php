<?php 
    $parts = '';
    $new_url = $_REQUEST['new_url']; 
    $parts = parse_url($new_url);
    parse_str($parts['query'], $query_string);
    $selected_sector = $query_string['fwp_market_sectors']; 
    $search_term = $query_string['fwp_search_box']; 
    if( $selected_sector && $search_term ) {
        $ap_args = array(
            'post_type' => 'portfolio',
            'posts_per_page' => -1,
            'orderby' => 'ASC',
            'meta_query' => array(
                array(
                    'key' => 'portfolio_title',
                    'value'    => $search_term,
                    'compare'    => 'LIKE'
                )
            ),
            'tax_query' => array(
                array(
                    'taxonomy' => 'portfolio_type',
                    'field'    => 'slug',
                    'terms'    => 'additional-project'
                ),
                array(
                    'taxonomy' => 'market_sectors',
                    'field'    => 'slug',
                    'terms'    => $selected_sector
                )
            )
        );
    } elseif( $selected_sector ) {
        $ap_args = array(
            'post_type' => 'portfolio',
            'posts_per_page' => -1,
            'orderby' => 'ASC',
            'tax_query' => array(
                array(
                    'taxonomy' => 'portfolio_type',
                    'field'    => 'slug',
                    'terms'    => 'additional-project'
                ),
                array(
                    'taxonomy' => 'market_sectors',
                    'field'    => 'slug',
                    'terms'    => $selected_sector
                )
            )
        );
    } elseif( $search_term ) {
        $ap_args = array(
            'post_type' => 'portfolio',
            'posts_per_page' => -1,
            'orderby' => 'ASC',
            'meta_query' => array(
                array(
                    'key' => 'portfolio_title',
                    'value'    => $search_term,
                    'compare'    => 'LIKE'
                )
            ),
            'tax_query' => array(
                array(
                    'taxonomy' => 'portfolio_type',
                    'field'    => 'slug',
                    'terms'    => 'additional-project'
                )
            )
        );
    } else {
        $ap_args = array(
            'post_type' => 'portfolio',
            'posts_per_page' => 10,
            'orderby' => 'rand',
            'tax_query' => array(
                array(
                    'taxonomy' => 'portfolio_type',
                    'field'    => 'slug',
                    'terms'    => 'additional-project'
                )
            )
        );
    }
    $ap_query = new WP_Query( $ap_args ); 
    $count = $ap_query->post_count;
    if ( $ap_query->have_posts() ) : 
?>
    <?php $ap_array = array(); ?>
    <div class="additional-projects__wrap">
        <?php  
            while ( $ap_query->have_posts() ) {
                $ap_query->the_post();
                // Store title in array 
                $title = get_field('portfolio_title');
                $ap_array[] = $title;
            }
            wp_reset_query();
            $half = ceil($count / 2);
            for ($i = 0; $i < $half; $i++) {
                if ( $i == 0 ) {
                    echo '<ul>';
                } 
                    echo '<li class="'. $i .'">' . $ap_array[$i] . '</li>';
                if ( $i == $half - 1) {
                    echo '</ul>';
                }
            }
            for ($j = $half; $j <= $count - 1; $j++) {
                if ( $j == $half ) {
                    echo '<ul>';
                } 
                    echo '<li class="'. $j .'">' . $ap_array[$j] . '</li>';
                if ( $j == $count - 1) {
                    echo '</ul>';
                }
            }  
        ?>
    </div>
<?php else : ?>
    <div class="additional-projects__wrap"><h3>No additional projects match your current search paramaters.</h3></div>
<?php endif; ?>

   