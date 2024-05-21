<?php 
    $title = get_the_title();
    $title_strip = strip_tags($title);
    $id = get_the_id();
    $perm = get_site_url() . "/?p=" . $id;
?>
<ul class="social-links">
    <li>
        <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo $perm; ?>&amp;title=<?php echo tow_title(85); ?>&amp;summary=<?php echo $excerpt; ?>" target="_blank">
            <svg class="linkedin-icon">
                <use xlink:href="#linkedin-icon"></use>
            </svg>
        </a>
    </li>
    <li>
        <a href="http://twitter.com/home?status=<?php echo tow_title(85); ?> <?php echo $perm; ?> @bio2medical" target="_blank">
            <svg class="twitter-icon">
                <use xlink:href="#twitter-icon"></use>
            </svg>
        </a>
    </li>
    <li>
        <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $perm; ?>" target="_blank">
            <svg class="facebook-icon">
                <use xlink:href="#facebook-icon"></use>
            </svg>
        </a>
    </li>
    <!-- <li>
        <a href="https://plus.google.com/share?url=<?php echo tow_title(85); ?><?php echo $perm; ?>" target="_blank">
            <svg class="google-icon">
                <use xlink:href="#google-icon"></use>
            </svg>
        </a>
    </li> -->    
    <!-- <li>
        <?php 
            // Image Options
            $options = get_field('image_options');
            // Placeholder Var
            $place_url = get_site_url();
            $image_alt = "Blog Image";
            if($options == "custom") {
                $image_array = get_field('hero_image');
                $image_size = $image_array['sizes']['single-hero'];
                $image_alt = $image_array['alt'];
            } else {
                $placeholder = $place_url . '/wp-content/themes/bio2/images/placeholders/blog-placeholder-'.$options.'.jpg';
                $image_size = $placeholder;
            } 
        ?>
        <a href="http://pinterest.com/pin/create/button/?url=<?php echo $perm; ?>&amp;media=<?php echo $image_size; ?>&amp;description=<?php echo $excerpt; ?>" target="_blank">
            <svg class="pinterest-icon">
                <use xlink:href="#pinterest-icon"></use>
            </svg>
        </a>
    </li> -->
</ul>