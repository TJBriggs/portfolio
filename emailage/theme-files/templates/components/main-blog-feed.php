<article id="blog-feed" class="blog-feed blog-feed--main blog-feed--accent-green blog-feed--lg-dn blog-feed--cv-gray">
    <div class="blog-feed__inner">
        <h4 class="blog-feed__colored-title">Browse Articles</h4>
        <div class="blog-feed__filters">
            <?php echo facetwp_display( 'facet', 'search' ); ?>
            <?php echo facetwp_display( 'facet', 'categories' ); ?>
        </div>
        <?php echo facetwp_display( 'template', 'blog' ); ?>
        <?php echo facetwp_display( 'pager' ); ?>
    </div>
</article>
