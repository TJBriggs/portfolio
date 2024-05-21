<?php 
	// Modifier Classes
	$classes = '';
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' hover-boxes--' . $title;
        }
    }
    $boxes = get_sub_field('hover_repeater');
    $box_count = count($boxes);
    $mod = '';
    $mod = ' hover-boxes--' . $box_count;
?>
<article class="hover-boxes<?php echo $mod; ?><?php echo $classes; ?>">
	<?php while(have_rows('hover_repeater')) : the_row(); ?>
		<?php 
			// Set Image Vars
			$image_array = get_sub_field('bg_image');
			$image_size = $image_array['sizes']['hover-box'];
			$image_style = ' style="background-image: url('.$image_size.');"';
		?>
		<div class="hover-box__box"<?php echo $image_style; ?>>
			<div class="hover-box__content">
				<h2 class="hover-box__title"><?php the_sub_field('box_title'); ?></h2>
				<p class="hover-box__text"><?php the_sub_field('box_text'); ?></p>
				<a class="hover-box__button" href="<?php the_sub_field('btn_link'); ?>"><?php the_sub_field('btn_text'); ?><span>></span></a>
			</div>
		</div>
	<?php endwhile; ?>
</article>