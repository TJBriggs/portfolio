<div class="social-share">
    <div class="social-share__wrap">
        <span>Share</span>
        <ul class="social-links">
            <li>
                <a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank">
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="http://twitter.com/home?status=<?php the_title(); ?> <?php the_permalink(); ?> @devetry" target="_blank">
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
            </li>            
            <li>
                <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php the_permalink(); ?>&amp;title=<?php the_title(); ?>&amp;summary=<?php echo the_excerpt(); ?>" target="_blank">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    </div>
</div>