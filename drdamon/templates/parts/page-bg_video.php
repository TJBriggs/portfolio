
<?php $bg_img = get_sub_field('bg_image'); ?>
<section class="parallax-wrap" style="background-image:url(<?php echo $bg_img['sizes']['masthead']; ?>);">
    <?php if(get_sub_field('bg_video')): ?>
        <div class="bg-video"></div>
    <?php endif; ?>
</section> <!-- //parallax-wrap -->
