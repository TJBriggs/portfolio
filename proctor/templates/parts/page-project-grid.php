<?php wp_enqueue_script('flexslider'); ?>
<?php //special modification classes
    $special_class = get_sub_field('special_classes');
    if($special_class){
        $special_class_array = explode(" ", $special_class);
        foreach ($special_class_array as $class) {
            $special_class = ' page__group--' . $class;
        }
    } 
?>
<section class="project-grid<?php echo $special_class; ?>">
		<div class="grid-intro">
			<div class="grid-intro__inner">
				<?php if(get_sub_field('section_title')): ?>
		            <?php $section_title = get_sub_field('section_title'); ?>
		            <h3 class="section-title"><?php echo $section_title; ?></h3>   
		        <?php endif; ?>
		        <?php if(get_sub_field('section_blurb')): ?>
		            <?php $section_blurb = get_sub_field('section_blurb'); ?>
		            <div class="section__blurb">
		                <p><?php echo $section_blurb; ?></p>
		            </div>
		        <?php endif; ?> 
			</div>
		</div>
		<!--  Project Reapeter Loop -->
		<div class="image__grid">
			<?php if(have_rows('project_repeater')) : ?>
				<?php while(have_rows('project_repeater')) : the_row(); ?>
					<?php // Define Category and slug
						$project_category = get_sub_field('service');
					    $project_slug = $project_category->slug;				    
					    $args = array(
			                'posts_per_page' => 16,
			                'order_by' => 'modified',
                            'order' => 'ASC',
			                'tax_query' => array(
			                    array(
			                        'taxonomy' => 'project-type',
			                        'field' => 'slug',
			                        'terms' => $project_slug
		                        )
		                    ),
		                    'meta_query' => array(
			                    array(
			                        'key' => 'sticky',
			                        'value' => true,
			                        'compare' => 'LIKE'
			                    )
			                )
						);
						$loop = new WP_Query( $args );
						$count = $loop->post_count;
	                    $i = 0;
	                    $tr = 1;
	                    while ( $loop->have_posts() ) : $loop->the_post(); $i++;
			        ?>	
			        	<?php $project_title = get_field('project_title'); ?>   			 
						<?php $project_icon = get_field('project_icon'); ?>
                		<?php $project_img = get_field('project_image'); ?>
						<div class="project__wrap">
							<a class="project theLink" href="#project-row-<?php echo $tr; ?>" style="background-image:url(<?php echo $project_img['sizes']['projects']; ?>);">
				                <div class="overlay">
				                    <img src="<?php echo $project_icon['url']; ?>" alt="<?php echo $project_icon['alt']; ?>"/>
				                </div> <!-- // overlay -->
				                <div class="content"></div>
			                </a> <!-- // project -->
			                <div aria-hidden="true" class="project__info">
                                <div class="info__details--project">
                                    <a href="javascript:void(0)" class="closer"><svg class="icon shape-cancel"><use xlink:href="#shape-cancel"></use></svg><span class="screen-reader-text" aria-hidden="true">Cancel</span></a>
                                    <div class="project--flexslider">
							    		<div class="project__slides">
		                                    <?php if(have_rows('slider_repeater')) : ?>
				    							<?php while(have_rows('slider_repeater')) : the_row(); ?>
					    							<?php $slide_title = get_sub_field('slide_title'); ?>
					    							<?php $slide_text = get_sub_field('slide_text'); ?>
					    							<?php $slide_img = get_sub_field('slide_image'); ?>
					    							<div class="project__slide">
												    	<div class="content__left">
															<div class="slide__image" style="background-image:url(<?php echo $slide_img['sizes']['sliderFull']; ?>);"></div><!-- //slide-image -->
												    	</div>
												    	<div class="content__right">
												    		<h3 class="project__title"><?php echo $project_title; ?></h3><!-- // project-title -->
												    		<div class="slide__content">
											    				<h4 class="slide__content--slide-title"><?php the_sub_field('slide_title'); ?></h4>
											    				<div class="slide__content--slide-text">
											    					<?php the_sub_field('slide_text'); ?>
											    				</div> <!-- // slide__content--slide-text -->
										    				</div> <!-- // slide__content -->
												    	</div><!-- // content__right -->
												    </div>
				    							<?php endwhile; ?>
				    						<?php endif; ?>
			    						</div> <!-- // project__slides -->
		    						</div> <!-- // project--flexslider -->
                                </div> <!-- // info__details -->
                        	</div> <!-- // project__info -->
						</div><!-- //project__wrap -->
			            <?php if($i%4 == 0 || $i == $count): ?>
                        	<div id="project-row-<?php echo $tr; $tr++; ?>" class="info_wrappin"></div>
                    	<?php endif; ?>
					<?php endwhile; wp_reset_query();?> <!-- // Loop While -->
				<?php endwhile; ?> <!-- // Repeater While -->
			<?php endif; ?> <!-- // Repeater If -->
		</div> <!-- // grid -->
		<div class="see-all-projects">
			<a href="<?php bloginfo('template_url'); ?>/our-work">view all of our projects<span>&gt;&nbsp;&gt;</span></a>
		</div> <!-- // see-all-projects -->
</section> <!-- // project-grid -->



