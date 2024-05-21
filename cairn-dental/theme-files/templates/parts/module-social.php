<ul class="social-links">
    <li>
        <a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank">
            <svg class="facebook-icon">
                <use xlink:href="#facebook-icon"></use>
            </svg>
        </a>
    </li>
    <li>
        <a href="https://plus.google.com/share?url=<?php the_title(); the_permalink(); ?>" target="_blank">
            <svg class="google-icon">
                <use xlink:href="#google-icon"></use>
            </svg>
        </a>
    </li>
    <li>
        <a href="http://twitter.com/home?status=<?php the_title(); ?> <?php the_permalink(); ?> @AMI_mediaaudits" target="_blank">
            <svg class="twitter-icon">
                <use xlink:href="#twitter-icon"></use>
            </svg>
        </a>
    </li>
    <li>
        <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php the_permalink(); ?>&amp;title=<?php the_title(); ?>&amp;summary=<?php echo $excerpt; ?>" target="_blank">
            <svg class="linkedin-icon">
                <use xlink:href="#linkedin-icon"></use>
            </svg>
        </a>
    </li>
    <li>
        <?php 
            // Image Options
            $options = get_field('image_options');
            // Placeholder Var
            $place_url = get_site_url();
            $image_alt = "Blog Image";
            if($options == "custom") {
                $image_array = get_field('hero_image');
                $image_size = $image_array['sizes']['foot-thumb'];
                $image_alt = $image_array['alt'];
            } elseif($options == "one") {
                $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/foot-placeholder-1.jpg';
                $image_size = $placeholder;
            } elseif($options == "two") {
                $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/foot-placeholder-2.jpg';
                $image_size = $placeholder;
            } elseif($options == "three") {
                $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/foot-placeholder-3.jpg';
                $image_size = $placeholder;
            } elseif($options == "four") {
                $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/foot-placeholder-4.jpg';
                $image_size = $placeholder;
            } elseif($options == "five") {
                $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/foot-placeholder-5.jpg';
                $image_size = $placeholder;
            } elseif($options == "six") {
                $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/foot-placeholder-6.jpg';
                $image_size = $placeholder;
            }
        ?>
        <a href="http://pinterest.com/pin/create/button/?url=<?php the_permalink(); ?>&amp;media=<?php echo $image_size; ?>&amp;description=<?php echo $excerpt; ?>" target="_blank">
            <svg class="pinterest-icon">
                <use xlink:href="#pinterest-icon"></use>
            </svg>
        </a>
    </li>
</ul>