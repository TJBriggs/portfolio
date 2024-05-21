<article class="hero-block hero-block--single hero-block--centered hero-block--accent-green hero-block--accent-up">
	<div class="hero-block__inner">
        <div class="hero-block__text">
            <?php 
                $cat = '';
                $cat = get_the_category();
                if($cat) {
                    $cat = $cat[0]->name;
                }
            ?>
            <?php if($cat) : ?>
                <h4 class="hero-block__colored-title"><?php echo $cat; ?></h4>
            <?php endif; ?>
            <h1><?php esc_html_e(the_title()); ?></h1>
            <h4 class="hero-block__colored-title date"><?php the_date(); ?></h4>
        </div>
	</div> <!-- // hero-block__inner -->  
</article> <!-- // hero-block -->  