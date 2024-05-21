<?php query_posts('posts_per_page=-1&post_type=patterns&orderby=title&order=ASC'); ?>
<?php if(have_posts()) : ?>
    <h1>Pattern Library</h1>
    <ul class="patterns">
        <?php while(have_posts()) : the_post(); ?>
            <li class="patterns__pattern">
                <a href="<?php the_permalink(); ?>">
                    <?php the_title(); ?>
                </a>
            </li>
        <?php endwhile; ?>
    </ul>
<?php endif; ?>

