 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' column-layout--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' column-layout--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' column-layout--' . $pad;
        }
    }
    // Column Count Modifier
    $col_mod = '';
    $col_count = count( get_sub_field('columns') );
    $col_mod = ' columns--' . $col_count;
 ?>
<article class="column-layout main-torso__module<?php echo $classes; ?>">
    <div class="column-layout__inner">
        <div class="column-layout__intro-wrap">
            <?php if( get_sub_field('title') ) : ?>
                <h2><?php the_sub_field('title'); ?></h2>
            <?php endif; ?>
            <?php if( get_sub_field('intro_text') ) : ?>
                <div class="column-layout__intro">
                    <?php the_sub_field('intro_text'); ?>
                </div> 
            <?php endif; ?>
        </div> <!-- // column_layout__intro-wrap -->  
        <?php if(have_rows('columns')) : ?>
            <div class="column-layout__columns <?php echo $col_mod; ?>">
                <?php while(have_rows('columns')) : the_row(); ?>
                    <div class="column-layout__column">
                        <?php if( get_sub_field('column_title') ) : ?>
                            <h3><?php the_sub_field('column_title'); ?></h3>
                        <?php endif; ?>
                        <?php if( get_sub_field('column_text') ) : ?>
                            <div><?php the_sub_field('column_text'); ?></div>
                        <?php endif; ?>
                    </div> <!-- // column-layout__column -->  
                <?php endwhile; ?>
            </div> <!-- // column-layout__columns -->  
        <?php endif; ?>
    </div> <!-- // column-layout__inner -->  
</article> <!-- // column-layout -->  