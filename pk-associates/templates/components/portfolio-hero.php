<?php 
    $id = 18; // Portfolio Page
    // Image Vars
    $image_array = get_field('hero_image', $id);
    $image_size = $image_array['sizes']['basic_hero'];
    $image_style = ' style="background-image: url('.$image_size.');"';
    // Text vars
    $text_mod = '';
    $hero_text = get_field('hero_text', $id);
    if($hero_text) {
        $text_mod = ' basic-hero--text';
    }
?>
<section class="portfolio-archive-hero basic-hero<?php echo $text_mod; ?>"<?php echo $image_style; ?>>
    <div class="basic-hero__overlay">
            <div class="basic-hero__content-wrap">
                <div class="basic-hero__content">
                    <?php if( get_field('hero_title', $id) ) : ?>
                        <h1><?php the_field('hero_title', $id); ?></h1>
                    <?php endif; ?>
                    <?php if( $hero_text ) : ?>
                        <h4><?php echo $hero_text; ?></h4>
                    <?php endif; ?>
                    <div class="basic-hero__filters">
                        <div class="basic-hero__sector-wrap">
                            <?php echo facetwp_display( 'facet', 'market_sectors' ); ?>
                        </div>
                        <div class="basic-hero__search-wrap">
                            <?php echo facetwp_display( 'facet', 'search_box' ); ?>
                        </div>
                    </div>
                </div>
            </div> <!-- // basic-hero__content-wrap -->  
    </div> <!-- // basic-hero__overlay -->  
</section> <!-- // basic-hero -->  