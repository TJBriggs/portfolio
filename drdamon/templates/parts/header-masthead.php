<div class="masthead">
    <?php 
        $rows = get_field('masthead_content' ); // get all the rows
        $rand_row = $rows[ array_rand( $rows ) ]; // get a random row
            $rand_row_image = $rand_row['masthead_image' ]; // get the sub field value 
            $rand_row_quote = $rand_row['masthead_quote' ]; // get the sub field value 
            $rand_row_cta = $rand_row['masthead_cta' ]; // get the sub field value 
    ?>                    
        <div class="masthead__image" style="background-image:url(<?php echo $rand_row_image['sizes']['masthead']; ?>);">
            <?php if($rand_row_quote) : ?>
                <div class="masthead-text__inner">
                    <div class="masthead-text__quote">
                        <h2><span>"</span><?php echo $rand_row_quote; ?><span>"</span></h2>
                    </div> <!-- //masthead-text__quote -->
                </div> <!-- //masthead-text__inner -->
            <?php endif; ?>

            <?php if($rand_row_cta) : ?>
                <div class="masthead-cta__inner">
                    <div class="masthead-cta__buttons">
                        <?php echo $rand_row_cta; ?>
                    </div> <!-- //masthead-cta__buttons -->
                </div> <!-- //masthead-cta__inner -->
            <?php endif; ?>
        </div> <!-- //masthead__image -->
</div> <!-- //masthead -->


