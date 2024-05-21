 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' content-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' content-block--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' content-block--' . $pad;
        }
    }
    // Layout Ootions
    $layout = get_sub_field('layout_options');
    if($layout){
            $classes .= ' content-block--' . $layout;
    }
    // Content Type
    $content_type = get_sub_field('content_type');
    if( $content_type == 'image' ) :
 ?>
    <article class="content-block content-block--image main-torso__module<?php echo $classes; ?>">
        <?php 
            // Image Vars
            $image_array = get_sub_field('image');
            $image_url = $image_array['url'];
            $image_style = ' style="background-image: url('.$image_url.');"';
        ?>
        <div class="content-block__image"<?php echo $image_style; ?>></div>
        <div class="content-block__content">
            <?php if( get_sub_field('title') ) : ?>
                <h2><?php the_sub_field('title'); ?></h2>
            <?php endif; ?>
            <?php if( get_sub_field('text') ) : ?>
                <div class="content-block__text"><?php the_sub_field('text'); ?></div>
            <?php endif; ?>
        </div>
    </article> <!-- // content-block -->  
<?php elseif( $content_type == 'video') : ?>
    <article class="content-block content-block--video main-torso__module<?php echo $classes; ?>">
        <div class="content-block__inner">
            <div class="content-block__main-wrap">
                <?php 
                    $video_mod = '';
                    $video_spacing = get_sub_field('video_spacing');
                    if($video_spacing) {
                        $video_mod = ' style="padding-top:' . $video_spacing . 'px;"';
                    }
                ?>
                <div class="content-block__wrap-video"<?php echo $video_mod; ?>>
                    <div class="content-block__video">
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
                        <iframe class="content-block__iframe" src="<?php echo $video_url; ?>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div> <!-- // content-block__video -->  
                </div> <!-- // content-block__video-wrap -->  
                <div class="content-block__content">
                    <?php if( get_sub_field('title') ) : ?>
                        <h2><?php the_sub_field('title'); ?></h2>
                    <?php endif; ?>
                    <?php if( get_sub_field('text') ) : ?>
                        <div class="content-block__text"><?php the_sub_field('text'); ?></div>
                    <?php endif; ?>
                </div> <!-- // content-block__content -->  
            </div> <!-- // content-block__main-wrap -->  
        </div> <!-- // content-block__inner -->  
    </article> <!-- // content-block -->  
<?php endif; ?>