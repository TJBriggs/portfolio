<?php wp_enqueue_script('flexslider'); ?>
<?php //special modification classes
    $special_class = get_sub_field('special_classes');
    if($special_class){
        $special_class_array = explode(" ", $special_class);
        foreach ($special_class_array as $class) {
            $special_class .= ' page__group--' . $class;
        }
    } 
?>
<section class="team <?php echo $special_class; ?>">
	<div class="team__inner">
		<h3 class="section-title"><?php the_sub_field('section_title'); ?></h3>
		<ul>
			<?php if(have_rows('team_repeater')) : ?>
				<?php while(have_rows('team_repeater')) : the_row(); ?>
			        <?php $member_img = get_sub_field('member_image'); ?>
			        <?php $member_name = get_sub_field('member_name'); ?>
					<li class="member" style="background-image:url(<?php echo $member_img['sizes']['carousel']; ?>);">
						<p><?php echo $member_name; ?></p>
					</li> <!-- // carousel__slide-item -->
				<?php endwhile; ?>
			<?php endif; ?>
		</ul>
	</div><!-- carousel__inner -->
</section> <!-- // carousel -->