 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' figure-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' figure-block--' . $margin;
        }
    }
    // Content Layout
    $layout = get_sub_field('content_layout');
    if($layout){
        $classes .= ' figure-block--' . $layout;
    }
    // Content Type classes
    $content_type = get_sub_field('content_type');
    if($content_type){
        $classes .= ' figure-block--' . $content_type;
    }
 ?>
<article class="figure-block main-torso__module<?php echo $classes; ?>">
	<div class="figure-block__inner">
        <?php 
            $figure_mod = '';
            $figure_type = get_sub_field('figure_type');
            if($figure_type) {
                $figure_mod = ' figure--' . $figure_type;
            }
        ?>
        <div class="figure-block__figure-wrap<?php echo $figure_mod; ?>">
            <?php if($figure_type == 'image') : ?>
                <?php 
                    // Figure Image
                    $figure_image = get_sub_field('figure_image');
                    $figure_size = $figure_image['sizes']['figure-circle'];
                    $figure_alt = $figure_image['alt'];
                ?>
                <img src="<?php echo esc_url($figure_size); ?>" alt="<?php echo $figure_alt; ?>">
            <?php elseif($figure_type == 'stat') : ?>
                <div class="figure-block__stat stat__frame">
                    <h1>
                        <span class="stat__number"><?php esc_html_e(get_sub_field('figure_statistic')); ?></span>
                        <?php if(get_sub_field('trailing_text')) : ?>
                            <span class="stat__text"><?php esc_html_e(get_sub_field('trailing_text')); ?></span>
                        <?php endif; ?>
                    </h1>
                    <?php if(get_sub_field('stat_caption')) : ?>
                        <h4><?php esc_html_e(get_sub_field('stat_caption')); ?></h4>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        </div>
        <div class="figure-block__content-wrap">
            <div class="figure-block__text-wrap">
                <div class="figure-block__text">
                    <?php if($content_type == 'basic') : ?>
                        <h4 class="figure-block__colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
                        <?php if(get_sub_field('lead_text')) : ?>
                            <h3><?php esc_html_e(get_sub_field('lead_text')); ?></h3>
                        <?php endif; ?>
                        <?php if(get_sub_field('paragraph_text')) : ?>
                            <div class="figure-block__paragraph-text"><?php the_sub_field('paragraph_text'); ?></div>
                        <?php endif; ?>
                        <?php if(get_sub_field('add_button')) : ?>
                            <a class="btn" href="<?php echo esc_url(the_sub_field('button_link')); ?>"><?php esc_html_e(get_sub_field('button_text')); ?></a>
                        <?php endif; ?>
                    <?php else : ?>
                        <svg class="figure-block__quote" xmlns="http://www.w3.org/2000/svg" width="147px" height="136px" viewBox="0 0 147 136" enable-background="new 0 0 147 136"><path d="M82 81.7c0 17.3 7.5 35.5 24.8 54L147 114V94.5c-21.6-11-30.3-22-30.3-34.2 0-14.2 12-29.3 29.4-46.2L134.7 0C106.6 22 82 50.2 82 81.7zm-82 0c0 17.3 7.3 35.5 24.6 54L65 114.2V94.4c-22-11-30.5-22-30.5-34.4 0-14 12-29.2 29.5-46L52.3 0C24.3 22 0 50.2 0 81.7z"/></svg>
                        <div class="figure-block__quote-text">
                            <h3><?php esc_html_e(get_sub_field('testimonial_text')); ?></h3>
                            <h4><?php esc_html_e(get_sub_field('source_text')); ?></h4>
                            <h5><?php esc_html_e(get_sub_field('source_title')); ?></h5>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
	</div> <!-- // figure-block__inner -->  
</article> <!-- // figure-block -->  