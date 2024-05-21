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
    <?php if( have_rows('slides') ) : ?>
        <div class="figure-block__wrap owl-carousel owl-carousel--slider">
        <?php 
            while ( have_rows('slides') ) : the_row(); 
            $figure_mod = '';
            $figure_type = get_sub_field('figure_type');
            if($figure_type) {
                $figure_mod = ' figure--' . $figure_type;
            }
        ?>
            <?php 
                // Accent Color Modifier
                $accent_mod = '';
                $accent_color = get_sub_field('accent_color');
                if($accent_color) {
                    $accent_mod = ' figure-block--' . $accent_color[0]->post_name;
                }
            ?>
            <div class="figure-block__slide<?php echo $accent_mod; ?>">
                <div class="figure-block__inner">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php endwhile; ?>
        </div>
    <?php endif; ?>
</article> <!-- // figure-block -->  