<?php //special modification classes
    $special_class = get_sub_field('special_classes');
    if($special_class){
        $special_class_array = explode(" ", $special_class);
        foreach ($special_class_array as $class) {
            $special_class = ' page__group--' . $class;
        }
    } 
?>
<?php if(get_sub_field('add_centered_cta')): ?>
	<section class="cta-centered<?php echo $special_class; ?>">
		<div class="cta-centered__inner">
			<div class="cta-centered__text">
				<?php the_sub_field('cta_text') ?>
			</div>
			<a class="cta-centered__button btn" href="<?php the_sub_field('cta_btn_link') ?>"><?php the_sub_field('cta_btn_text') ?></a>
		</div><!-- cta-bar__inner -->
	</section> <!-- // cta-bar -->
<?php endif; ?>