<h5>Share</h5>
<ul class="social-links">
    <li>
        <a href="http://twitter.com/home?status=<?php the_title(); ?> <?php the_permalink(); ?> @Emailage" target="_blank">
            <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
    </li>
    <li>
        <a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank">
            <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
    </li>
    <li>
        <a href="https://plus.google.com/share?url=<?php the_title(); the_permalink(); ?>" target="_blank">
            <i class="fa fa-google-plus" aria-hidden="true"></i>
        </a>
    </li>
    
    <li>
        <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php the_permalink(); ?>&amp;title=<?php the_title(); ?>&amp;summary=<?php echo the_excerpt(); ?>" target="_blank">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
    </li>
</ul>