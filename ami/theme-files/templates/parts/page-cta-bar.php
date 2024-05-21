<?php
	// Modifier Classes
	$special_class = get_sub_field('content_modifiers');
	if($special_class){
	    foreach ($special_class as $class) {
	        $title = get_the_title($class->ID);
	        $classes .= ' cta-bar--' . $title;
	    }
	}
	// Background Modifiers
	$bgColor = get_sub_field('bg_color');
	$bgModifier = ' cta-bar--' . $bgColor;
	// icon vars
	$cta_icon = get_sub_field('cta_icon');
	// cta vars
	$cta_header = get_sub_field('cta_header');
	$cta_text = get_sub_field('cta_text');
	$cta_options = get_sub_field('cta_btn_options');
	$cta_btn_text = get_sub_field('cta_btn_text');
?>
<section class="cta-bar<?php echo $bgModifier; ?><?php echo $classes; ?>">
	<div class="cta-bar__inner">
		<div class="cta-bar__icon cta-bar__icon--img">
            <img src="<?php echo $cta_icon['url']; ?>" alt="icon" />
		</div> <!-- // cta-bar__icon--img -->
		<div class="cta-bar__text">
			<h2><?php echo $cta_header; ?></h2>
			<p><?php echo $cta_text; ?></p>
		</div><!-- // cta-bar__text -->

		<?php if($cta_options == "page") : ?>
			<div class="cta-bar__button-wrap">
				<a class="btn" href="<?php echo get_site_url(); ?>/contact/"><?php echo $cta_btn_text; ?></a>
			</div>
		<?php else : ?>
			<?php 
				// set a random number between 100 and 999 for form id's
				$digits = 3;
				$rand_id = rand(pow(10, $digits-1), pow(10, $digits)-1);
			?>
			<div class="cta-bar__button-wrap">
				<a class="fancybox btn" href="#form-<?php echo $rand_id; ?>"><?php echo $cta_btn_text; ?></a>
			</div>
			<div id="form-<?php echo $rand_id; ?>" class="form__wrap" style="display: none;">
				<h2>Contact <strong>Us!</strong></h2>
			    <?php echo do_shortcode('[contact-form-7 id="50"]') ?>
			</div>
		<?php endif; ?>
	</div> <!-- // cta-bar__inner -->
</section> <!-- // cta-bar -->