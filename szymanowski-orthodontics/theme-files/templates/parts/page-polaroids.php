<?php wp_enqueue_script('flexslider'); ?>
<section class="polaroids">
	<div class="flexslider--polaroids">
		<ul class="slides">
			<li class="mascot-slide">
				<div class="bubble">
					<img src="<?php bloginfo('template_url'); ?>/images/polaroid_section/wall_smiles.png" alt="Join the wall of smiles!">
				</div> <!-- // bubble -->
				<div class="mascot">
					<img src="<?php bloginfo('template_url'); ?>/images/polaroid_section/mascot.png" alt="Smiles Mascot">
				</div> <!-- // mascot -->
			</li>
			<?php $i = ''; ?>
			<?php if(have_rows('polaroid_repeater')) : $i = 0; ?>
				<?php while(have_rows('polaroid_repeater')) : the_row(); $i++; ?>
			        <?php $p_image = get_sub_field('polaroid_image'); ?>
			        <?php $p_caption = get_sub_field('polaroid_caption'); ?>
			        <?php $p_rotate = get_sub_field('polaroid_rotation'); ?>
					<?php $p_count = "-".$i; ?>
					<li class="polaroid__slide-item"><!-- user configurable background image url -->
						<div class="slide__inner">
							<div class="polaroid<?php echo $p_count; ?> <?php echo $p_rotate; ?>">
								<figure class="polaroid-image">
									<div class="img-wrap">
										<img src="<?php echo $p_image['url']; ?>" alt="<?php echo $p_image['alt']; ?>">
									</div>
									<figcaption><?php echo $p_caption; ?></figcaption>
								</figure> <!-- // polaroid-image -->
							</div> <!-- // polaroid -->
					     </div> <!-- // slider__inner -->
					</li> <!-- // polaroid__slide-item -->
				<?php endwhile; ?>
			<?php endif; ?>
		</ul> <!-- // slides -->
	</div>	<!-- // flexslider-polaroids -->
</section>