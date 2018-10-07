 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' image-grid--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' image-grid--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' image-grid--' . $pad;
        }
    }
 ?>
<article class="image-grid main-torso__module<?php echo $classes; ?>">
	<div class="image-grid__wide-inner">
        <?php if( have_rows('images') ) : ?>
            <div class="image-grid__images">
                <?php while ( have_rows('images') ) : the_row(); ?>
                    <?php 
                        // Image Vars
                        $image_array = get_sub_field('image');
                        $image_url = $image_array['url'];
                        $image_style = ' style="background-image: url('.$image_url.');"';
                    ?>
                    <figure class="image-grid__image"<?php echo $image_style; ?>></figure>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
	</div> <!-- // image-grid__inner -->  
</article> <!-- // image-grid -->  