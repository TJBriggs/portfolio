<?php 
    $page_id = '';
    if(is_category('blog')) {
        $page_id = 1025;
    } elseif(is_category('careers')) {
        $page_id = 1023;
    } elseif(is_category() || is_tag()) {
        $page_id = 1025;
    } else {
        $page_id = get_the_id();
    }
?>
<?php 
    $layout = get_field('hero_layout', $page_id);
    if($layout == "full") : ?>
    <?php 
        // image vars
        $fullImg = get_field('full_hero_image', $page_id);
        $fullImage = $fullImg['sizes']['hero'];
        $fullImg = $fullImg['url'];
        $fullStyle = ' style="background-image: url('.$fullImg.');"';
        // text vars
        $text_top = get_field('text_top', $page_id);
        $text_bold = get_field('text_bold', $page_id);
        $arrow_text = get_field('arrow_text', $page_id);
    ?>
    <section class="hero-block hero-block--full"<?php echo $fullStyle; ?>>
            <div class="hero-block__text">
                <p class="hero-block__intro-text"><?php echo $text_top; ?></p>
                <h2 class="hero-block__bold-text"><?php echo $text_bold; ?></h2>
                <p class="hero-block__button-text"><?php echo $arrow_text; ?></p>
                <a class="hero-block__scroll-btn" href="#next">
                    <object>
                        <svg class="scroll-arrow">
                          <use xlink:href="#scroll-arrow"></use>
                        </svg>
                    </object>
                    <span class="screen-reader-text">scroll down</span>
                </a> <!-- // hero-block__scroll-btn  -->
            </div> <!-- // hero-block__text -->
    </section> <!-- // hero-block__full -->
<?php elseif($layout == "simple") : ?>
    <?php 
        // image vars
        $halfImg = get_field('half_hero_image', $page_id);
        $halfImage = $halfImg['sizes']['hero'];
        $halfImg = $halfImg['url'];
        $halfStyle = ' style="background-image: url('.$halfImg.');"';
    ?>
    <section class="hero-block hero-block--half"<?php echo $halfStyle; ?>>
    <?php if(is_category() || is_tag()) : ?>
        <h2 class="hero-block__title"><?php single_cat_title(); ?></h2>
    <?php else : ?>
        <h2 class="hero-block__title"><?php the_title(); ?></h2>
    <?php endif; ?>
    </section> <!-- // hero-block__half -->
<?php endif; ?>
