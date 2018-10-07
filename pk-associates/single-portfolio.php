<?php 
    $post_id = get_the_id();
    // Image Vars
    $image_array = get_field('featured_image');
    $image_size = $image_array['sizes']['basic_hero'];
    $image_style = ' style="background-image: url('.$image_size.');"';
?>
<section class="main-torso page-torso portfolio-torso">
    <article class="portfolio-hero"<?php echo $image_style; ?>>
        <div class="portfolio-hero__overlay">
        </div> <!-- // portfolio-hero__overlay -->  
    </article> <!-- // portfolio-hero -->  
    <article class="portfolio-intro main-torso__module">
        <div class="portfolio-intro__portfolio-inner">
            <a class="portfolio-intro__breadcrumb" href="/portfolio/">Return to Portfolio</a>
            <h1 class="portfolio-intro__title"><?php the_field('portfolio_title'); ?></h1>
            <div class="portfolio-intro__wrap">
                <div class="portfolio-intro__categories">
                    <?php 
                        $ms_terms = get_the_terms( $post_id, 'market_sectors');
                        $loc_terms = get_the_terms( $post_id, 'locations');
                        $own_terms = get_the_terms( $post_id, 'owners');
                        $arc_terms = get_the_terms( $post_id, 'architects');
                        $cont_terms = get_the_terms( $post_id, 'contractors');
                        $cons_terms = get_the_terms( $post_id, 'construction_type');
                        $loc_count = count($loc_terms);
                    ?>
                    <div class="portfolio-intro__category-wrap">
                        <?php if($ms_terms) : ?>
                            <div>
                                <h5>Market Sector</h5>
                                <?php 
                                    foreach( $ms_terms as $ms ) {
                                        echo '<p>' . $ms->name . '</p>';
                                    }
                                ?>
                            </div>
                        <?php endif; ?>
                        <?php if($loc_terms) : ?>
                            <div>
                                <h5>Location</h5>
                                <?php 
                                    $z = 0;
                                    echo '<p>';
                                    foreach( $loc_terms as $loc ) {
                                        $z++;
                                        
                                        if( $z == $loc_count ) {
                                            echo $loc->name;
                                        } else {
                                            echo $loc->name . ', ';
                                        }
                                    }
                                    echo '</p>';
                                ?>
                            </div>
                        <?php endif; ?>
                    </div> <!-- // portfolio-category-wrap --> 
                    <div class="portfolio-intro__category-wrap">
                        <?php if($own_terms) : ?>
                            <div>
                                <h5>Owner</h5>
                                <?php 
                                    foreach( $own_terms as $own ) {
                                        echo '<p>' . $own->name . '</p>';
                                    }
                                ?>
                            </div>
                        <?php endif; ?>
                        <?php if($arc_terms) : ?>
                            <div>
                                <h5>Architect</h5>
                                <?php 
                                    foreach( $arc_terms as $arc ) {
                                        echo '<p>' . $arc->name . '</p>';
                                    }
                                ?>
                            </div>
                        <?php endif; ?>
                    </div> <!-- // portfolio-category-wrap --> 
                    <div class="portfolio-intro__category-wrap">
                        <?php if($cont_terms) : ?>
                            <div>
                                <h5>Contractor</h5>
                                <?php 
                                    foreach( $cont_terms as $cont ) {
                                        echo '<p>' . $cont->name . '</p>';
                                    }
                                ?>
                            </div>
                        <?php endif; ?>
                        <?php if($cons_terms) : ?>
                            <div>
                                <h5>Construction Type</h5>
                                <?php 
                                    foreach( $cons_terms as $cons ) {
                                        echo '<p>' . $cons->name . '</p>';
                                    }
                                ?>
                            </div>
                        <?php endif; ?>
                    </div> <!-- // portfolio-category-wrap --> 
                </div> <!-- // portfolio-categories --> 
                <div class="portfolio-intro__text"><?php the_field('portfolio_intro'); ?></div> 
            </div> <!-- // portfolio-intro__wrap -->  
        </div>
    </article>
    <?php // If ACF Flexible Content field is active on page loop through and build modules ?>
    <?php if(get_field('portfolio_modules')) : ?>
        <?php while(has_sub_field('portfolio_modules')) : ?>
            <?php echo get_template_part('templates/modules/module', get_row_layout()); ?>
        <?php endwhile; ?>
    <?php endif; ?>
</section>