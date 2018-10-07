<?php //special modification classes
    $special_class = get_sub_field('special_classes');
    if($special_class){
        $special_class_array = explode(" ", $special_class);
        foreach ($special_class_array as $class) {
            $special_class = ' page__group--' . $class;
        }
    } 
?>
<?php if(get_sub_field('add_cta_bar')): ?>
	<?php $cta_bg_img = get_sub_field('cta_bg_img'); ?> 
	<section class="cta-bar<?php echo $special_class; ?>" style="background-image:url(<?php echo $cta_bg_img['sizes']['hero']; ?>);">
		<div class="cta-bar__inner">
			<div class="cta-bar__text">
				<?php the_sub_field('cta_text') ?>
			</div>
			<a class="cta-bar__button btn-clear" href="<?php the_sub_field('cta_btn_link') ?>"><?php the_sub_field('cta_btn_text') ?></a>
		</div><!-- cta-bar__inner -->
	</section> <!-- // cta-bar -->
<?php endif; ?>