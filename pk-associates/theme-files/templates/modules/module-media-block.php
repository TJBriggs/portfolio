 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' media-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' media-block--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' media-block--' . $pad;
        }
    }
 ?>
<article class="media-block  main-torso__module<?php echo $classes; ?>">
    <div class="media-block__inner">
        <div class="media-block__wrap">
            <div class="media-block__media">
                <?php 
                    $media_type = get_sub_field('media_type');
                    if( $media_type == 'video' ) :
                ?>
                    <div class="media-block__video">
                        <?php 
                            // Video Vars
                            $video_url = '';
                            $video_source = get_sub_field('video_source');
                            if( $video_source == 'youtube' ) {
                                $youtube_id = get_sub_field('youtube_id');
                                if( $youtube_id ) {
                                    $video_url = 'https://www.youtube.com/embed/' . $youtube_id . '?rel=0&amp;showinfo=0?ecver=2';
                                }
                            } else {
                                $vimeo_id = get_sub_field('vimeo_id');
                                if( $vimeo_id ) {
                                    $video_url = 'https://player.vimeo.com/video/' . $vimeo_id  . '?title=0&byline=0&portrait=0';
                                }
                            }
                        ?>
                        <iframe class="media-block__iframe" src="<?php echo $video_url; ?>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                <?php else : ?>
                    <?php 
                        // Image Vars
                        $image_array = get_sub_field('image');
                        $image_url = $image_array['url'];
                        $image_alt = $image_array['alt'];
                    ?>
                    <div class="media-block__image">
                        <img src="<?php echo $image_url; ?>" alt="<?php echo $image_alt; ?>">
                    </div>
                <?php endif; ?>
            </div>
            <div class="media-block__award">
                <div class="media-block__award-content">
                    <div class="media-block__image-wrap">
                        <?php 
                            // Image Vars
                            $image_array = get_sub_field('award_image');
                            $image_url = $image_array['url'];
                            $image_alt = $image_array['alt'];
                        ?>
                        <img src="<?php echo $image_url; ?>" alt="<?php echo $image_alt; ?>">
                    </div>
                    <div class="media-block__caption-wrap">
                        <div>
                            <h5><?php the_sub_field('award_title'); ?></h5>
                            <p><?php the_sub_field('award_caption'); ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- // media-block__wrap -->  
    </div> <!-- // media-block__inner -->  
</article> <!-- // media-block -->  