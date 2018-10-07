<?php //special modification classes
    $special_class = get_sub_field('special_classes');
    if($special_class){
        $special_class_array = explode(" ", $special_class);
        foreach ($special_class_array as $class) {
            $special_class = ' page__group--' . $class;
        }
    } 
?>
<section class="team-grid<?php echo $special_class; ?>">
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

		<div class="image__grid">
			<div class="image-grid__inner">
				<?php if(have_rows('team_repeater')) : ?>
					<?php while(have_rows('team_repeater')) : the_row(); ?>
						<?php // Define Category and slug
							$member_category = get_sub_field('team_members');
						    $member_slug = $member_category->slug;				    
						    $args = array(
				                'posts_per_page' => -1,
				                'order_by' => 'modified',
	                            'order' => 'ASC',
				                'tax_query' => array(
				                    array(
				                        'taxonomy' => 'member-type',
				                        'field' => 'slug',
				                        'terms' => $member_slug
			                        )
			                    )
							);
							$loop = new WP_Query( $args );
							$count = $loop->post_count;
		                    $i = 0;
		                    $tr = 1;
		                    while ( $loop->have_posts() ) : $loop->the_post(); $i++;
				        ?>
				        	<?php $member_name = get_field('member_name'); ?>   			 
							<?php $member_title = get_field('member_title'); ?>
	                		<?php $member_bio = get_field('member_bio'); ?>
	                		<?php $member_img = get_field('member_image'); ?>
							<div class="team__wrap">
									<a class="team__member theLink" href="#team-row-<?php echo $tr; ?>" style="background-image:url(<?php echo $member_img['sizes']['members']; ?>);">
						                <div class="overlay">
						                	<div class="box">
						                		<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
													<!-- <line class="top" x1="0" y1="0" x2="900" y2="0"/>
													<line class="left" x1="0" y1="460" x2="0" y2="-920"/>
													<line class="bottom" x1="300" y1="460" x2="-600" y2="460"/>
													<line class="right" x1="300" y1="0" x2="300" y2="1380"/> -->

													<line class="top" x1="0" y1="0" x2="1100" y2="0"/>
													<line class="left" x1="0" y1="460" x2="0" y2="-920"/>
													<line class="bottom" x1="-640" y1="265" x2="1100" y2="265"/>
													<line class="right" x1="257" y1="0" x2="257" y2="1380"/>
												</svg>
							                    <h3 class="member__name"><?php echo $member_name; ?></h3><!-- //member__name -->
						                	</div><!-- //box -->
						                </div> <!-- // overlay -->
					              	</a> <!-- // project link -->

					                <div aria-hidden="true" class="member__info">
		                                <div class="member__details">
		                                    <a href="javascript:void(0)" class="closer"><svg class="icon shape-cancel"><use xlink:href="#shape-cancel"></use></svg><span class="screen-reader-text" aria-hidden="true">Cancel</span></a>
									    	<div class="content__left">
									    		<h3 class="member__name"><?php echo $member_name; ?></h3><!-- //member__name -->
												<h4 class="member__title"><?php echo $member_title; ?></h4><!-- //member___title -->
												<div class="member__bio">
													<?php echo $member_bio; ?>
												</div><!-- //member__bio -->
												<?php if(get_field('add_social')): ?>
													<div class="member__social">
														<ul>
															<?php if(get_field('facebook')): ?>
																<li class="social__facebook" >
																	<a href="<?php the_field('facebook'); ?>">
																		<object>
												                            <svg class="icon shape-facebook">
												                                <use xlink:href="#shape-facebook"></use>
												                            </svg>
												                        </object>
																	</a>
																</li>
															<?php endif; ?>
															<?php if(get_field('twitter')): ?>
																<li class="social__twitter" >
																	<a href="<?php the_field('twitter'); ?>">
																		<object>
												                            <svg class="icon shape-twitter">
												                                <use xlink:href="#shape-twitter"></use>
												                            </svg>
												                        </object>
																	</a>
																</li>
															<?php endif; ?>
															<?php if(get_field('instagram')): ?>
																<li class="social__instagram" >
																	<a href="<?php the_field('instagram'); ?>">
																		<object>
												                            <svg class="icon shape-instagram">
												                                <use xlink:href="#shape-instagram"></use>
												                            </svg>
												                        </object>
																	</a>
																</li>
															<?php endif; ?>
															<?php if(get_field('flickr_social')): ?>
																<li class="social__flickr" >
																	<a href="<?php the_field('flickr_social'); ?>">
																		<object>
												                            <svg class="icon shape-flickr">
												                                <use xlink:href="#shape-flickr"></use>
												                            </svg>
												                        </object>
																	</a>
																</li>
															<?php endif; ?>
															<?php if(get_field('pinterest')): ?>
																<li class="social__pinterest" >
																	<a href="<?php the_field('pinterest'); ?>">
																		<object>
												                            <svg class="icon shape-pinterest">
												                                <use xlink:href="#shape-pinterest"></use>
												                            </svg>
												                        </object>
																	</a>
																</li>
															<?php endif; ?>
														</ul>
													</div><!-- //member__social -->
												<?php endif; ?>
									    	</div>
									    	<div class="content__right" style="background-image:url(<?php echo $member_img['sizes']['members']; ?>);">
									    	</div><!-- // content__right -->	
									    	<div class="facts__bar">
									    		<div class="table">
									    			<?php if(have_rows('fact_repeater')) : ?>
														<?php while(have_rows('fact_repeater')) : the_row(); ?>
															<?php $fact = get_sub_field('fact'); ?> 
																<div class="cell">
																	<div class="container">
																		<blockquote><?php echo $fact; ?></blockquote>
																	</div><!-- //container -->
											    				</div>
										    			<?php endwhile; ?>
										    		<?php endif; ?>
									    		</div><!-- //table -->
									    	</div><!-- //facts__bar -->	    
		                                </div> <!-- // member__details -->
	                            	</div> <!-- // member__info -->
							</div><!-- // team__wrap -->
				            <?php if($i%4 == 0 || $i == $count): ?>
	                        	<div id="team-row-<?php echo $tr; $tr++; ?>" class="info_wrappin"></div>
	                    	<?php endif; ?>
						<?php endwhile; wp_reset_query();?> <!-- // Loop While -->	
					<?php endwhile; ?>
				<?php endif; ?>
			</div><!-- //image-grid__inner -->
		</div> <!-- // image-grid -->
</section> <!-- // project-grid -->



