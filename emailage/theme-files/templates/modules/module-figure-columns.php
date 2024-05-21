 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' figure-columns--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' figure-columns--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' figure-columns--' . $pad;
        }
    }
    // Layout classes
    $content_layout = get_sub_field('content_layout');
    if($content_layout) {
        $classes .= ' figure-columns--' . $content_layout;
    }
 ?>
<article class="figure-columns main-torso__module<?php echo $classes; ?>">
	<div class="figure-columns__inner">
        <div class="figure-columns__figure-container">
            <?php 
                // Figure Image
                $figure_image = get_sub_field('figure_image');
                $figure_size = $figure_image['sizes']['figure-circle'];
                $figure_alt = $figure_image['alt'];
            ?>
            <img src="<?php echo esc_url($figure_size); ?>" alt="<?php echo $figure_alt; ?>">
        </div>
        <div class="figure-columns__content-wrap">
            <div class="figure-columns__text-wrap">
                <div class="figure-columns__text">
                    <h4 class="figure-columns__colored-title"><?php esc_html_e(the_sub_field('colored_title')); ?></h4>
                    <?php if(get_sub_field('lead_text')) : ?>
                        <h3><?php esc_html_e(get_sub_field('lead_text')); ?></h3>
                    <?php endif; ?>
                    <?php if( have_rows('text_blocks') ) : ?>
                        <div class="figure-columns__text-blocks">
                            <?php while ( have_rows('text_blocks') ) : the_row(); ?>
                                <div class="figure-columns__text-block">
                                    <h2><?php esc_html_e(the_sub_field('title')); ?></h2>
                                    <p><?php esc_html_e(the_sub_field('text')); ?></p>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
	</div> <!-- // figure-columns__inner -->  
</article> <!-- // figure-columns -->  