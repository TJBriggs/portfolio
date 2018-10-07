<?php wp_enqueue_script('isotope'); ?>
<?php //wp_enqueue_script('imagesloaded'); ?>
<?php wp_enqueue_script('lazyload'); ?>
<?php wp_enqueue_script('fancybox'); ?>
<?php //special modification classes
    $special_class = get_sub_field('special_classes');
    if($special_class){
        $special_class_array = explode(" ", $special_class);
        foreach ($special_class_array as $class) {
            $special_class = ' page__group--' . $class;
        }
    } 
?>
<section class="project-iso<?php echo $special_class; ?>">
	<div class="project-iso__inner">
		<div class="iso-intro">
			<div class="iso-intro__inner">
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
			</div> <!-- // iso-intro__inner -->
		</div>
		<div id="filters" class="filter-nav">
			<a class="project-filter actifilter" data-filter="*">All</a>
			<a class="project-filter" data-filter=".Exhibits">Exhibits</a>
			<a class="project-filter" data-filter=".Mobile">Mobile</a>
			<a class="project-filter" data-filter=".Events">Events</a>
			<a class="project-filter" data-filter=".Services">Services</a>
		</div><!-- //filter-nav -->
		<!--  Project Reapeter Loop -->	
		<div class="iso__container">
			<?php if(have_rows('iso_repeater')) : ?>
				<?php while(have_rows('iso_repeater')) : the_row(); ?>
					<?php // Define Category and slug
						$project_category = get_sub_field('our_work');
					    $project_slug = $project_category->slug;				    
					    $args = array(
					    	'post_type' => 'projects',
			                'posts_per_page' => -1,
			                'orderby' => 'rand',
			                'tax_query' => array(
			                    array(
			                        'taxonomy' => 'project-type',
			                        'field' => 'slug',
			                        'terms' => $project_slug
		                        )
		                    )
						);
						$loop = new WP_Query( $args );
						$count = $loop->post_count;
	                    $i = 0;
	                    $group = 1;
	                    while ( $loop->have_posts() ) : $loop->the_post(); $i++;

	                    if($group)
			        ?>	
			        	<?php $project_title = get_field('project_title'); ?>
			        	<?php $project_blurb = get_field('project_blurb'); ?>  
			        	<?php $project_cat = get_field('project_cat'); ?>   			 
                		<?php $project_img = get_field('project_image'); ?>
						<div class="project__wrap item <?php echo $project_cat; ?>" data-visible="true">
							<div class="holder">
								<a class="project-tile fancybox" rel="group<?php echo $group; ?>" href="<?php echo $project_img['sizes']['projects']; ?>" style="background-image:url(<?php echo $project_img['sizes']['projects']; ?>);">
									<div class="project__text">
										<h3 class="project__title"><?php echo $project_title; ?></h3>
										<div class="project__blurb"><?php echo $project_blurb; ?></div>
									</div><!-- //project__info -->
								</a> <!-- // main fancybox -->
							</div><!-- //holder -->
							<?php if(have_rows('slider_repeater')) : ?>
				    			<?php while(have_rows('slider_repeater')) : the_row(); ?>
					    			<?php $slide_img = get_sub_field('slide_image'); ?>
					    			<a class="fancybox" rel="group<?php echo $group; ?>" href="<?php echo $slide_img['sizes']['projects']; ?>"></a>
					    		<?php endwhile; ?>
					    	<?php endif; ?>
						</div><!-- //project__wrap -->
						<?php $group++; ?>
					<?php endwhile; wp_reset_query();?> <!-- // Loop While -->
				<?php endwhile; ?> <!-- // Repeater While -->
			<?php endif; ?> <!-- // Repeater If -->
		</div> <!-- // iso__container -->
	</div><!-- //project-iso__inner -->
</section> <!-- // project-iso -->



