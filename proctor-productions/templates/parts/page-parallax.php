<?php //special modification classes
    $special_class = get_sub_field('special_classes');
    if($special_class){
        $special_class_array = explode(" ", $special_class);
        foreach ($special_class_array as $class) {
            $special_class = ' page__group--' . $class;
        }
} ?>
<section class="parallax<?php echo $special_class; ?>">
	<?php if(get_sub_field('para_img')): ?>
		<?php $para_img = get_sub_field('para_img'); ?> 
		<div class="parallax__image" style="background-image:url(<?php echo $para_img['sizes']['parallax']; ?>);"></div>
		<?php 
			if(get_sub_field('content_layout')):
			$layout = get_sub_field('content_layout'); 
			endif;
			
			if($layout === "left"):
				$modifier = "left";
			elseif($layout === "right"):
				$modifier = "right";
			elseif($layout === "center"):
				$modifier = "center";
			endif;
		?> 
		<div class="parallax__content--<?php echo $modifier ?>">
			<div class="parallax-content__inner">
				<div class="content-wrapper">
				<?php if(get_sub_field('para_title')): ?>
					<h3 class="parallax__title"><?php the_sub_field('para_title') ?></h3>
				<?php endif; ?>
				<?php if(get_sub_field('para_text')): ?>
					<div class="parallax__text">
						<?php the_sub_field('para_text') ?>
					</div> <!-- // parallax__text -->
				<?php endif; ?>
				<?php if(get_sub_field('add_para_cta')): ?>
					<a class="parallax__button btn" href="<?php the_sub_field('cta_btn_link') ?>"><?php the_sub_field('cta_btn_text') ?></a>
				<?php endif; ?>
				</div><!-- //content-wrapper -->
			</div><!-- //parallax-content__inner -->
		</div><!-- //parallax__content -->
	<?php endif; ?>
</section> <!-- // parallax -->