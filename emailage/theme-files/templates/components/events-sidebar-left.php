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
</aside>