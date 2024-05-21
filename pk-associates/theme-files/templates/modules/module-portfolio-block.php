 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' portfolio-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' portfolio-block--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' portfolio-block--' . $pad;
        }
    }
 ?>
<article class="portfolio-block  main-torso__module<?php echo $classes; ?>">
    <div class="portfolio-block__inner">
        <div class="portfolio-block__wrap">
            <div class="portfolio-block__column-left">
                <?php if( have_rows('left_content') ) : ?>
                    <?php while ( have_rows('left_content') ) : the_row();  ?>
                        <?php
                            $content_type = get_sub_field('content_type');
                            if($content_type == 'text') :
                        ?>
                            <div class="portfolio-block__text"><?php the_sub_field('text'); ?></div>
                        <?php elseif($content_type == 'blockquote') : ?>
                            <div class="portfolio-block__quote">
                                <h3><?php the_sub_field('blockquote'); ?></h3>
                                <h5><?php the_sub_field('byline'); ?></h5>
                                <p><?php the_sub_field('caption'); ?></p>
                            </div>
                        <?php else : ?>
                            <div class="portfolio-block__award">
                                <div class="portfolio-block__image-wrap">
                                    <?php 
                                        // Image Vars
                                        $image_array = get_sub_field('award_image');
                                        $image_url = $image_array['url'];
                                        $image_alt = $image_array['alt'];
                                    ?>
                                    <img src="<?php echo $image_url; ?>" alt="<?php echo $image_alt; ?>">
                                </div>
                                <div class="portfolio-block__caption-wrap">
                                    <h5><?php the_sub_field('award_title'); ?></h5>
                                    <p><?php the_sub_field('award_caption'); ?></p>
                                </div>
                            </div>
                        <?php endif; ?>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
            <div class="portfolio-block__column-right">
                <?php if( have_rows('right_content') ) : ?>
                    <?php while ( have_rows('right_content') ) : the_row();  ?>
                        <?php
                            $content_type = get_sub_field('content_type');
                            if($content_type == 'blockquote') :
                        ?>
                            <div class="portfolio-block__quote">
                                <h3><?php the_sub_field('blockquote'); ?></h3>
                                <h5><?php the_sub_field('byline'); ?></h5>
                                <p><?php the_sub_field('caption'); ?></p>
                            </div>
                        <?php else : ?>
                            <div class="portfolio-block__award">
                                <div class="portfolio-block__image-wrap">
                                    <?php 
                                        // Image Vars
                                        $image_array = get_sub_field('award_image');
                                        $image_url = $image_array['url'];
                                        $image_alt = $image_array['alt'];
                                    ?>
                                    <img src="<?php echo $image_url; ?>" alt="<?php echo $image_alt; ?>">
                                </div>
                                <div class="portfolio-block__caption-wrap">
                                    <h5><?php the_sub_field('award_title'); ?></h5>
                                    <p><?php the_sub_field('award_caption'); ?></p>
                                </div>
                            </div>
                        <?php endif; ?>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</article> <!-- // portfolio-block -->  