<footer class="main-foot main-foot__landing">
  <div class="main-foot__inner">
    <div class="main-foot__content">
        <p class="main-foot__address"><a href="<?php the_field('address_link', 'option'); ?>" target="_blank"><?php echo the_field('address', 'option'); ?></a></p>
        <?php if( have_rows('social_links', 'option') ) : ?>
            <div class="main-foot__social-wrap">
                <ul class="main-foot__social-links">
                    <?php while ( have_rows('social_links', 'option') ) : the_row();  ?>
                        <li><a href="<?php the_sub_field('social_link', 'option'); ?>" target="_blank"><?php the_sub_field('social_icon', 'option'); ?></a></li>
                    <?php endwhile; ?>
                </ul> 
            </div>
        <?php endif; ?>
        <p class="main-foot__copyright"><?php the_field('copyright_text', 'option'); ?>&nbsp;<?php echo date('Y'); ?></p>
    </div>
  </div> <!-- // main-foot__inner --> 	
</footer> <!-- // main-foot --> 
<!-- sticky footer will fail if anything goes between the closing footer and main-wrap -->
</div><!-- // main-wrap -->

<?php wp_footer(); //mandatory ?>
<?php //if(get_field('closing_body_scripts', 'option')) : ?>
    <?php //the_field('closing_body_scripts', 'option'); ?>
<?php //endif; ?>
</body>
</html>

