<aside class="blog-sidebar blog-sidebar__left">
    <div class="blog-sidebar__box sidebar--author">
        <?php 
            $avatar = get_avatar( get_the_author_meta('email') , 90 );
            $name = get_the_author();
            $bio = get_the_author_meta('description');
        ?>
        <?php echo $avatar; ?>
        <h3><?php esc_html_e($name); ?></h3>
        <div><?php echo $bio; ?></div>
    </div>
    <?php  
        // $tags = get_tags(); 
        // if( $tags ) :
    ?>
       <!--  <div class="blog-sidebar__box sidebar--tags">
            <?php //foreach($tags as $tag) : ?>
                <?php //$tag_link = get_tag_link( $tag->term_id ); ?>
                <a class="tag-btn" href="<?php //echo esc_url($tag_link); ?>"><?php //esc_html_e($tag->name); ?></a>
            <?php //endforeach; ?>
        </div> -->
    <?php //endif; ?>
</aside>