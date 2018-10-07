 <?php 
    // Enqueue Tooltip Animations
    wp_enqueue_script('tooltips');
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' leadership-grid--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' leadership-grid--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' leadership-grid--' . $pad;
        }
    }
 ?>
<article class="leadership-grid main-torso__module<?php echo $classes; ?>">
	<div class="leadership-grid__inner">
        <div class="leadership-grid__intro-wrap">
            <?php if( get_sub_field('colored_title') ) : ?>
    		  <h4 class="leadership-grid__colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
            <?php endif; ?>
            <?php if( get_sub_field('lead_text') ) : ?>
              <h3 class="leadership-grid__lead-text"><?php esc_html_e(the_sub_field('lead_text')); ?></h3>
            <?php endif; ?>
            <?php if( get_sub_field('paragraph_text') ) : ?>
              <div class="leadership-grid__intro-text"><?php esc_html_e(the_sub_field('paragraph_text')); ?></div>
            <?php endif; ?>
        </div>
        <?php 
            $feat_args = array(
                'post_type' => 'leadership',
                'posts_per_page' => -1,
                'orderby' => 'date', 
                'order' => 'ASC',
                'tax_query' => array(
                    array(
                        'taxonomy' => 'leadership-category',
                        'field'    => 'slug',
                        'terms'    => 'featured-leadership'
                    ),
                )
            );
            $feat_query = new WP_Query( $feat_args );  
            if ( $feat_query->have_posts() ) :
        ?>
            <div class="leadership-grid__featured-wrap">
                <?php while ( $feat_query->have_posts() ) : $feat_query->the_post();  ?>
                    <div class="leadership-grid__feature-item grid-item">
                        <?php 
                            // Image Vars
                            $f_image_array = get_field('image');
                            $f_image_size = $f_image_array['sizes']['leadership-grid'];
                            $f_image_style = ' style="background-image: url('.$f_image_size.');"';
                        ?>
                        <div class="leadership-grid__image"<?php echo $f_image_style; ?>>
                            <div class="leadership-grid__bio-wrap">
                                <div class="leadership-grid__bio"><?php esc_html_e(the_field('bio')); ?></div>
                            </div>
                        </div>
                        <div class="leadership-grid__text">
                            <h3><?php esc_html_e(the_title()); ?></h3>
                            <h5><?php esc_html_e(the_field('title')); ?></h5>
                            <?php if(get_field('linkedin_url')) : ?>
                                <a href="<?php echo esc_url(the_field('linkedin_url')); ?>" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endwhile; wp_reset_query(); ?>
            </div>
        <?php else : ?>
            <h2>Sorry, no featured members found.</h2>
        <?php endif; ?>
        <?php 
            $team_args = array(
                'post_type' => 'leadership',
                'posts_per_page' => -1,
                'orderby' => 'date', 
                'order' => 'ASC',
                'tax_query' => array(
                    array(
                        'taxonomy' => 'leadership-category',
                        'field'    => 'slug',
                        'terms'    => 'featured-leadership',
                        'operator' => 'NOT IN'
                    ),
                )
            );
            $team_query = new WP_Query( $team_args ); 
            if ( $team_query->have_posts() ) :
        ?>
        <div class="leadership-grid__grid-wrap">
            <?php while ( $team_query->have_posts() ) : $team_query->the_post(); ?>
                <div class="leadership-grid__grid-item grid-item">
                    <?php 
                        // Image Vars
                        $l_image_array = get_field('image');
                        $l_image_size = $l_image_array['sizes']['leadership-grid'];
                        $l_image_style = ' style="background-image: url('.$l_image_size.');"';
                    ?>
                    <div class="leadership-grid__image"<?php echo $l_image_style; ?>>
                        <div class="leadership-grid__bio-wrap">
                            <div class="leadership-grid__bio"><?php esc_html_e(the_field('bio')); ?></div>
                        </div>
                    </div>
                    <div class="leadership-grid__text">
                        <h3><?php esc_html_e(the_title()); ?></h3>
                        <h5><?php esc_html_e(the_field('title')); ?></h5>
                        <?php if(get_field('linkedin_url')) : ?>
                            <a href="<?php echo esc_url(the_field('linkedin_url')); ?>" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endwhile; wp_reset_query(); ?>
        </div>
        <?php else : ?>
            <h2>Sorry, no team members found.</h2>
        <?php endif; ?>
	</div> <!-- // leadership-grid__inner -->  
</article> <!-- // leadership-grid -->  