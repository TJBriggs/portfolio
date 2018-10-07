<footer class="main-foot">
  <div class="main-foot__inner">
    <div class="main-foot__wrap">
    	<div class="main-foot__nav">
    		<?php
              $attr = array(
                  'theme_location'  => 'foot-menu',
                  'container'       => 'nav',
                  'container_class' => 'foot-nav',
                  'menu_class'      => 'menu'
              );
              wp_nav_menu($attr);
          ?>
          <?php if( have_rows('social_links', 'option') ) : ?>
            <div class="main-foot__social">
                <?php while ( have_rows('social_links', 'option') ) : the_row();  ?>
                <a href="<?php echo esc_url(the_sub_field('social_link', 'option')); ?>" alt="Social Icon"><?php esc_html_e(the_sub_field('social_icon')); ?></a>
                <?php endwhile; ?>
            </div>
          <?php endif; ?>
    	</div>
      <div class="main-foot__text">
        <div class="main-foot__text-wrap">
          <h6 class="main-foot__copy">&copy; Copyright <?php echo esc_html(date('Y')); ?>&nbsp;<?php esc_html_e(the_field('copyright_text', 'option')); ?></h6>
          <div class="main-foot__disclosure"><?php esc_html_e(the_field('disclosure_text', 'option')); ?></div>
        </div>
      </div>
    </div>
  </div> <!-- // main-foot__inner --> 	
</footer> <!-- // main-foot --> 
<!-- sticky footer will fail if anything goes between the closing footer and main-wrap -->
</div><!-- // main-wrap -->

