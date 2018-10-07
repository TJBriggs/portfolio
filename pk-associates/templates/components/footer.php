<footer class="main-foot">
    <div class="main-foot__inner">
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
        </div>
        <div class="main-foot__copy">
            <?php 
                $copy_text = get_field('copyright_text', 'option'); 
                $address = get_field('address', 'option'); 
            ?>
            <h5>&copy;<?php echo date('Y'); ?>&nbsp;<?php echo $copy_text; ?></h5>
            <p><?php echo $address;?></p>
        </div>
    </div> <!-- // main-foot__inner --> 	
</footer> <!-- // main-foot --> 
<!-- sticky footer will fail if anything goes between the closing footer and main-wrap -->
</div><!-- // main-wrap -->

