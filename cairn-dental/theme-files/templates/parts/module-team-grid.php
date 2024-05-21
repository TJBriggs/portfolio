<?php
    wp_enqueue_script('team');
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' team-grid--' . $title;
        }
    }
?>
<section class="team-grid<?php echo $classes; ?>">
    <div class="team-grid__grid">
        <div class="team-grid__inner">
            <?php if(have_rows('team_repeater')) : ?>
                <?php while(have_rows('team_repeater')) : the_row(); ?>
                    <?php // Define Category and slug
                        $member_category = get_sub_field('team_members');
                        $member_slug = $member_category->slug;                  
                        $args = array(
                            'posts_per_page' => -1,
                            'orderby' => 'none',
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
                            // Main Image Vars
                            $main_array = get_field('main_image');
                            $main_lg = $main_array['sizes']['team-large'];
                            $main_sm = $main_array['sizes']['team-small'];
                            $large_style = ' style="background-image: url('.$main_lg.');"';
                            $small_style = ' style="background-image: url('.$main_sm.');"';
                            // Hidden Image Vars
                            $hover_array = get_field('hover_image');
                            $hover_sm = $hover_array['sizes']['team-small'];
                            $hover_style = ' style="background-image: url('.$hover_sm.');"';
                        ?>       
                        <div class="team-grid__wrap">
                            <a class="member theLink" href="#team-row-<?php echo $tr; ?>"<?php echo $hover_style; ?>>
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
                                    <div class="member-info__content-left">
                                        <h3 class="member-info__name"><?php the_field('member_name'); ?></h3><!-- //member__name -->
                                        <h6 class="member-info__title"><?php the_field('member_title'); ?></h6><!-- //member___title -->
                                        <div class="member-info__bio">
                                            <?php the_field('member_bio'); ?>
                                        </div><!-- //member__bio -->
                                    </div> <!-- // content__left -->   
                                    <div class="member-info__content-right"<?php echo $large_style; ?>>
                                    </div><!-- // content__right -->       
                                </div> <!-- // member__details -->
                            </div> <!-- // member__info -->
                        </div><!-- // team__wrap -->
                        <?php if($i%4 == 0 || $i == $count): ?>
                            <div id="team-row-<?php echo $tr; $tr++; ?>" class="team-grid__row-wrap"></div>
                        <?php endif; ?>
                    <?php endwhile; wp_reset_query();?> <!-- // Loop While -->  
                <?php endwhile; ?>
            <?php endif; ?>
        </div><!-- //image-grid__inner -->
    </div> <!-- // image-grid -->
</section> <!-- // project-grid -->