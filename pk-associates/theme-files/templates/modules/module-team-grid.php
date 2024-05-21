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
 ?>
<article class="team-grid main-torso__module<?php echo $classes; ?>">
    <div class="team-grid__wide-inner">
        <h1 class="team-grid__title"><?php the_sub_field('title'); ?></h1>
        <div class="team-grid__intro"><?php the_sub_field('text'); ?></div>
        <?php if( get_sub_field('add_team_grid') ) : ?>
            <?php 
                $feat_args = array(
                    'post_type' => 'team-members',
                    'posts_per_page' => -1,
                    'orderby' => 'title',
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
            <div id="scroll-back" class="team-grid__feature-wrap">
                <?php $i=0; ?>
                <?php while ( $feat_query->have_posts() ) : $feat_query->the_post(); $i++ ;?>
                    <?php 
                        $f = $i . 'a';
                        // Image Vars
                        $feat_style = '';
                        $feat_array = get_field('member_image');
                        $feat_size = $feat_array['sizes']['team_grid'];
                        $feat_style = ' style="background-image: url('.$feat_size.');"';
                    ?>
                    <a href="#lightbox-<?php echo $f; ?>" class="team-grid__member team-grid__member--featured"<?php echo $feat_style; ?>>
                        <div class="team-grid__overlay">
                            <div class="team-grid__text">
                                <h2><?php the_field('first_name'); ?> <?php the_field('last_name'); ?></h2>
                                <?php if( get_field('certifications') ) : ?>
                                    <h2><?php the_field('certifications'); ?></h2>
                                <?php endif; ?>
                                <h5><?php the_field('full_title'); ?></h5>
                                <p>Read Full Bio</p>
                            </div>
                        </div>
                    </a>
                    <div id="lightbox-<?php echo $f; ?>" class="lightbox" style="display: none;">
                        <a class="lightbox__close" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                        <header>
                            <div class="lightbox__image"<?php echo $feat_style; ?>></div>
                            <div class="lightbox__text-wrap">
                                <div class="lightbox__text">
                                    <h5>
                                        <?php the_field('full_title'); ?>
                                        <?php if( get_field('certifications') ) : ?>
                                            | <?php the_field('certifications'); ?>
                                        <?php endif; ?>
                                    </h5>
                                    <h1><?php the_field('first_name'); ?> <br><?php the_field('last_name'); ?></h1>
                                    <?php if( get_field('add_linkedin') ) : ?>
                                        <a href="<?php the_field('linkedin_url'); ?>" target="_blank">
                                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </header>
                        <footer>
                            <div class="lightbox__bio-wrap"><?php the_field('bio_text') ?></div>
                            <?php if( get_field('column_one_headline') ) : ?>
                                <div class="lightbox__column-wrap">
                                    <div class="lightbox__column lightbox__column--left">
                                        <h5><?php the_field('column_one_headline') ?></h5>
                                        <?php while(have_rows('column_one_items')) : the_row(); ?>
                                            <?php if( get_sub_field('hyperlink') ) : ?>
                                                <a class="lightbox__link alt-link" href="<?php the_sub_field('link_url'); ?>"><?php the_sub_field('list_item_text'); ?></a>
                                            <?php else : ?>
                                                <p><?php the_sub_field('list_item_text'); ?></p>
                                            <?php endif; ?>
                                        <?php endwhile; ?>
                                    </div>
                                    <?php if( get_field('column_two_headline') ) : ?>
                                        <div class="lightbox__column lightbox__column--right">
                                            <h5><?php the_field('column_two_headline') ?></h5>
                                            <?php while(have_rows('column_two_items')) : the_row(); ?>
                                                <?php if( get_sub_field('hyperlink') ) : ?>
                                                    <a class="lightbox__link alt-link" href="<?php the_sub_field('link_url'); ?>"><?php the_sub_field('list_item_text'); ?></a>
                                                <?php else : ?>
                                                    <p><?php the_sub_field('list_item_text'); ?></p>
                                                <?php endif; ?>
                                            <?php endwhile; ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>
                        </footer>
                    </div>
                <?php endwhile; wp_reset_query(); ?>
            </div>
            <?php endif; ?>
            <?php 
                $main_args = array(
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
                $main_query = new WP_Query( $main_args ); 
            ?>
            <?php if ( $main_query->have_posts() ) : ?>
            <div class="team-grid__main-wrap">
                <?php $j = 0; ?>
                <?php while ( $main_query->have_posts() ) : $main_query->the_post(); $j++; ?>
                    <?php 
                        // Image Vars
                        $main_style = '';
                        $main_array = get_field('member_image');
                        $main_size = $main_array['sizes']['team_grid'];
                        $main_style = ' style="background-image: url('.$main_size.');"';
                    ?>
                    <a href="#lightbox-<?php echo $j; ?>" class="team-grid__member team-grid__member--main"<?php echo $main_style; ?>>
                        <div class="team-grid__overlay">
                            <div class="team-grid__text">
                                <h2><?php the_field('first_name'); ?> <?php the_field('last_name'); ?></h2>
                                <?php if( get_field('certifications') ) : ?>
                                    <h3><?php the_field('certifications'); ?></h3>
                                <?php endif; ?>
                                <h5><?php the_field('shortened_title'); ?></h5>
                                <p>Read Full Bio</p>
                            </div>
                        </div>
                    </a>
                    <div id="lightbox-<?php echo $j; ?>" class="lightbox" style="display: none;">
                        <a class="lightbox__close" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                        <header>
                            <div class="lightbox__image"<?php echo $main_style; ?>></div>
                            <div class="lightbox__text-wrap">
                                <div class="lightbox__text">
                                    <h5>
                                        <?php the_field('full_title'); ?>
                                        <?php if( get_field('certifications') ) : ?>
                                            | <?php the_field('certifications'); ?>
                                        <?php endif; ?>
                                    </h5>
                                    <h1><?php the_field('first_name'); ?> <br><?php the_field('last_name'); ?></h1>
                                    <?php if( get_field('add_linkedin') ) : ?>
                                        <a href="<?php the_field('linkedin_url'); ?>" target="_blank">
                                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </header>
                        <footer>
                            <div class="lightbox__bio-wrap"><?php the_field('bio_text') ?></div>
                            <?php if( get_field('column_one_headline') ) : ?>
                                <div class="lightbox__column-wrap">
                                    <div class="lightbox__column lightbox__column--left">
                                        <h5><?php the_field('column_one_headline') ?></h5>
                                        <?php while(have_rows('column_one_items')) : the_row(); ?>
                                            <?php if( get_sub_field('hyperlink') ) : ?>
                                                <a class="lightbox__link alt-link" href="<?php the_sub_field('link_url'); ?>"><?php the_sub_field('list_item_text'); ?></a>
                                            <?php else : ?>
                                                <p><?php the_sub_field('list_item_text'); ?></p>
                                            <?php endif; ?>
                                        <?php endwhile; ?>
                                    </div>
                                    <?php if( get_field('column_two_headline') ) : ?>
                                        <div class="lightbox__column lightbox__column--right">
                                            <h5><?php the_field('column_two_headline') ?></h5>
                                            <?php while(have_rows('column_two_items')) : the_row(); ?>
                                                <?php if( get_sub_field('hyperlink') ) : ?>
                                                    <a class="lightbox__link alt-link" href="<?php the_sub_field('link_url'); ?>"><?php the_sub_field('list_item_text'); ?></a>
                                                <?php else : ?>
                                                    <p><?php the_sub_field('list_item_text'); ?></p>
                                                <?php endif; ?>
                                            <?php endwhile; ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>
                        </footer>
                    </div>
                <?php endwhile; wp_reset_query(); ?>
            </div>
            <?php endif; ?>
        <?php endif; ?>
    </div> <!-- // team-grid__narrow-inner -->  
</article> <!-- // team-grid -->  