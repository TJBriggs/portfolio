<?php 
	// Modifier Classes
	$classes = '';
	$special_class = get_sub_field('modifiers');
	if($special_class){
		foreach ($special_class as $class) {
			$title = get_the_title($class->ID);
			$classes .= ' team-grid--' . $title;
		}
	}
	// Margin classes
	$margins = get_sub_field('margins');
	if($margins){
		foreach ($margins as $margin) {
			$classes .= ' team-grid--' . $margin;
		}
	}
	// Padding classes
	$padding = get_sub_field('padding');
	if($padding){
		foreach ($padding as $pad) {
			$classes .= ' team-grid--' . $pad;
		}
	}
?>
<article class="team-grid main-torso__module<?php echo $classes; ?>">
	<div class="team-grid__inner">
		<h2 class="team-grid__section-title"><?php the_sub_field('section_title'); ?></h2>
		<?php if( get_sub_field('add_team_grid') ) : ?>
			<?php 
				$feat_args = array(
					'post_type' => 'team-members',
					'posts_per_page' => -1,
					'orderby' => 'date',
					'order' => 'ASC',
					'tax_query' => array(
						array(
							'taxonomy' => 'featured-member',
							'field'    => 'slug',
							'terms'    => 'featured-member'
						),
					),
				);
				$feat_query = new WP_Query( $feat_args ); 
			?>
			<?php if ( $feat_query->have_posts() ) : ?>
				<div class="team-grid__main-wrap">
					<div class="team-grid__feature-wrap">
						<?php while ( $feat_query->have_posts() ) : $feat_query->the_post(); ?>
							<div class="team-grid__grid-featured">
								<?php 
									// Image Vars
									$image_array = get_field('image');
									$image_size = $image_array['sizes']['team-grid'];
									$image_style = ' style="background-image: url('.$image_size.');"';
								?>
								<div class="team-grid__image"<?php echo $image_style; ?>></div>
								<div class="team-grid__text">
									<h5><?php the_field('name'); ?></h5>
									<h6><?php the_field('title'); ?></h6>
									<ul>
										<li>-&nbsp;<?php the_field('bullet_1'); ?></li>
										<li>-&nbsp;<?php the_field('bullet_2'); ?></li>
										<li>-&nbsp;<?php the_field('bullet_3'); ?></li>
									</ul>
								</div>
							</div>
						<?php endwhile; wp_reset_query(); ?>
					</div>
					<a id="js-team-toggle" class="team-grid__btn btn" href="#">See the Entire Team</a>
					<?php 
						$team_args = array(
							'post_type' => 'team-members',
							'posts_per_page' => -1,
							'orderby' => 'date',
							'order' => 'ASC',
							'tax_query' => array(
								array(
									'taxonomy' => 'featured-member',
									'field'    => 'slug',
									'terms'    => 'featured-member',
									'operator' => 'NOT IN'
								),
							),
						);
						$team_query = new WP_Query( $team_args ); 
					?>
					<?php if ( $team_query->have_posts() ) : $i = 1; ?>
						<div class="team-grid__team-wrap">
							<?php while ( $team_query->have_posts() ) : $team_query->the_post(); ?>
								<div class="team-grid__grid-member member--<?php echo $i; ?>">
									<?php 
										// Image Vars
										$image_array = get_field('image');
										$image_size = $image_array['sizes']['team-grid'];
										$image_style = ' style="background-image: url('.$image_size.');"';
									?>
									<div class="team-grid__image"<?php echo $image_style; ?>></div>
									<div class="team-grid__text">
										<h5><?php the_field('name'); ?></h5>
										<h6><?php the_field('title'); ?></h6>
										<ul>
											<li>-&nbsp;<?php the_field('bullet_1'); ?></li>
											<li>-&nbsp;<?php the_field('bullet_2'); ?></li>
											<li>-&nbsp;<?php the_field('bullet_3'); ?></li>
										</ul>
									</div>
								</div>
								<?php $i++; ?>
							<?php endwhile; wp_reset_query(); ?>
						</div>
					<?php endif; ?>
				</div>
			<?php endif; ?>
		<?php endif; ?>
	</div>
</article>