<article class="single-torso__post">
    <div class="single-torso__feat-image">
        <?php if ( has_post_thumbnail()): ?>
            <a href="<?php the_permalink(); ?>">
                <?php the_post_thumbnail('large'); ?>
            </a>
        <?php else: ?>
            <img src="<?php bloginfo('template_directory'); ?>/images/news-placeholder.png" alt="Dr Damon Logo" />
        <?php endif; ?>
    </div> <!-- //single-torso__feat-image -->
    <a class="single-torso__post-title" href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a>

    <div class="single-torso__posted">
        Posted on <?php echo get_the_date();?> by <?php the_author(); ?>. <?php //if(has_tag()):?> <?php //the_tags('Tagged: ');?> <?php //endif;?>
    </div> <!-- // singel-torso__posted -->

    <div class="single-torso__excerpt">
    	
        <?php the_excerpt(); ?>
    </div> <!-- //single-torso__excerpt -->

</article> <!-- //single__post -->