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
        <a href="http://pinterest.com/pin/create/button/?url=<?php the_permalink(); ?>&amp;media=<?php echo $post_thumbnail_url; ?>&amp;description=<?php echo $excerpt; ?>" target="_blank">
            <svg class="pinterest-icon">
                <use xlink:href="#pinterest-icon"></use>
            </svg>
        </a>
    </li>
</ul>