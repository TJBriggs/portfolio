<section class="main-torso page-torso events-single">
    <div class="blog-single">
        <div class="blog-single__inner">
            <div class="blog-single__wrap">
                <div class="blog-single__nested-wrap">
                    <?php get_template_part('templates/components/blog-single', get_post_type()); ?>
                    <?php get_template_part('templates/components/events-sidebar-left'); ?>
                </div>
                <?php get_template_part('templates/components/blog-sidebar-right'); ?>
            </div>
        </div>
    </div>
</section>
