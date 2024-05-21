

<section class="your-team">
	<div class="your-team__inner">
		<?php if(get_sub_field('section_title')): ?>
			<?php $section_title = get_sub_field('section_title'); ?>
			<div class="section__title-wrap">
				<h2 class="section__title"><?php echo $section_title; ?></h2>	
			</div> <!-- // section__title-wrap -->
		<?php endif; ?>

		<?php if(get_sub_field('section_intro')): ?>
			<?php $section_intro = get_sub_field('section_intro'); ?>
			<article class="section-intro">
				<div class="section-intro__inner">
					<?php echo $section_intro; ?>
				</div> <!-- // section-intro__inner --> 
			</article>
		<?php endif; ?>

		<?php if(have_rows('team_repeater')) : ?>
			<?php while(have_rows('team_repeater')) : the_row(); ?>
				<?php $name = get_sub_field('employee_name'); ?>
				<?php $day = get_sub_field('employee_day'); ?>
				<?php $night = get_sub_field('employee_night'); ?>
				<?php $main_img = get_sub_field('main_image'); ?>
				<?php $hover_img = get_sub_field('hover_image'); ?>
				
				<div class="employee-wrap">
					<div class="img-wrap">
						<div class="main-img">
							<img src="<?php echo $main_img['url']; ?>" alt="<?php echo $main_img['alt']; ?>">
						</div> <!-- // main-img -->
						<div class="hover-img">
							<img src="<?php echo $hover_img['url']; ?>" alt="<?php echo $hover_img['alt']; ?>">
						</div> <!-- // hover-img -->
					</div> <!-- // img-wrap -->
					<article class="info-wrap">
						<h4><?php echo $name; ?></h4>
						<p><span>By Day...</span><?php echo $day; ?></p>
						<p><span>By Night...</span><?php echo $night; ?></p>
					</article> <!-- // info-wrap -->
				</div> <!-- // employee-wrap -->
			<?php endwhile; ?>
		<?php endif; ?>
	</div> <!-- // your-team__inner -->
</section> <!-- // your-team -->