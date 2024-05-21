<?php
    // Enqueue Team Scripts 
    wp_enqueue_script( 'team' );
    $classes = '';
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' content-block--' . $title;
        }
    }
    //spacing classes
    $spacing = get_sub_field('spacing');
    if($spacing){
        foreach ($spacing as $space) {
            $classes .= ' content-block--' . $space;
        }
    }
?>
<article class="team-grid<?php echo $classes; ?>">
    <div class="team-grid__grid">
        <div class="team-grid__inner">
            <?php if(get_sub_field('section_title')) : ?>
                <h1 class="section-title"><?php the_sub_field('section_title'); ?></h1>
            <?php endif; ?>
            <?php if(get_sub_field('section_subtitle')) : ?>
                <h5 class="section-subtitle"><?php the_sub_field('section_subtitle'); ?></h5>
            <?php endif; ?>
            <?php if(have_rows('team_repeater')) : ?>
                <?php while(have_rows('team_repeater')) : the_row(); ?>
                    <?php // Define Category and slug
                        $member_category = get_sub_field('team_members');
                        $member_slug = $member_category->slug;                
                        $args = array(
                            'post_type' => 'members',
                            'posts_per_page' => -1,
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'member_types',
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
                        <?php 
                            // Slug handling - ensures scroll to works for 
                            // multiple team grids on one page
                            $link_slug = '';
                            if($member_slug == "executive") {
                                $link_slug = "executive-row-";
                            } elseif($memeber_slug == "board") {
                                $link_slug = "board-row-";
                            } elseif($memeber_slug == "clinical") {
                                $link_slug = "clinical-row-";
                            } else {
                                $link_slug = "team-row-";
                            }
                            // Main Image Vars
                            $main_array = get_field('member_image');
                            $main_lg = $main_array['sizes']['team-large'];
                            $main_sm = $main_array['sizes']['team-small'];
                            $large_style = ' style="background-image: url('.$main_lg.');"';
                            $small_style = ' style="background-image: url('.$main_sm.');"';
                        ?>   
                        <div class="team-grid__wrap">
                            <a class="member theLink" href="#<?php echo $link_slug; ?><?php echo $tr; ?>">
                                    <div class="member__main-image"<?php echo $small_style; ?>></div>
                                    <h3 class="member__hover-name"><?php the_field('member_name'); ?></h3>
                            </a> <!-- // team__member -->
                            <div class="member-info" aria-hidden="true">
                                <div class="member-info__details">
                                    <a href="javascript:void(0)" class="closer">
                                    <svg class="cancel">
                                        <use xlink:href="#cancel"></use>
                                    </svg>
                                    <span class="screen-reader-text" aria-hidden="true">Cancel</span></a>
                                      
                                    <div class="member-info__content-right"<?php echo $large_style; ?>>
                                    </div><!-- // content__right --> 
                                    <div class="member-info__content-left">
                                        <h3 class="member-info__name"><?php the_field('member_name'); ?></h3><!-- //member__name -->
                                        <h6 class="member-info__title"><?php the_field('member_title'); ?></h6><!-- //member___title -->
                                        <div class="member-info__bio">
                                            <?php the_field('member_bio_main'); ?>
                                        </div><!-- //member__bio -->
                                        <?php if(get_field('member_bio_left')) : ?>
                                            <a class="member-info__read-more" href="javascript:void(0)">Read More</a>
                                        <?php endif; ?>
                                    </div> <!-- // content__left -->       
                                    <div class="member-info__bio-wrap">
                                        <div class="member-info__bio-left"><?php the_field('member_bio_left'); ?></div>
                                        <div class="member-info__bio-right"><?php the_field('member_bio_right'); ?></div>
                                    </div>
                                </div> <!-- // member__details -->
                            </div> <!-- // member__info -->
                        </div><!-- // team__wrap -->
                        <?php if($i%4 == 0 || $i == $count): ?>
                            <div id="<?php echo $link_slug; ?><?php echo $tr; $tr++; ?>" class="team-grid__row-wrap"></div>
                        <?php endif; ?>
                    <?php endwhile; wp_reset_query();?> <!-- // Loop While -->  
                <?php endwhile; ?>
            <?php endif; ?>
            <?php if(get_sub_field('add_button')) : ?> 
                <a class="team-grid__btn btn" href="<?php the_sub_field('button_link'); ?>" ><?php the_sub_field('button_text'); ?></a>  
            <?php endif; ?>     
            </div><!-- //image-grid__inner -->
    </div> <!-- // image-grid -->
</article> <!-- // project-grid -->