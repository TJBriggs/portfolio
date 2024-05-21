<?php 
    // Image Vars
    $image_array = get_field('hero_image');
    $image_size = $image_array['sizes']['basic_hero'];
    $image_style = ' style="background-image: url('.$image_size.');"';
    // Text vars
    $text_mod = '';
    $hero_text = get_field('hero_text');
    if($hero_text) {
        $text_mod = ' basic-hero--text';
    }
?>
<section class="basic-hero<?php echo $text_mod; ?>"<?php echo $image_style; ?>>
    <div class="basic-hero__overlay">
            <div class="basic-hero__content-wrap">
                <div class="basic-hero__content">
                    <?php if( get_field('hero_title') ) : ?>
                        <h1><?php the_field('hero_title'); ?></h1>
                    <?php endif; ?>
                    <?php if( $hero_text ) : ?>
                        <h4><?php echo $hero_text; ?></h4>
                    <?php endif; ?>
                </div>
            </div> <!-- // basic-hero__content -->  
    </div> <!-- // basic-hero__overlay -->  
</section> <!-- // basic-hero -->  