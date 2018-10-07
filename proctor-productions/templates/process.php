<?php /*
Template Name: Process
*/
get_header(); ?>
<?php wp_enqueue_script('scrollin'); ?>
<?php wp_enqueue_script('inview'); ?>
<nav class="process__nav">
	<ul>
		<li><a class="active__process" href="#ideation">Ideation</a></li>
		<li><a href="#design-step">Design</a></li>
		<li><a href="#production">Production</a></li>
		<li><a href="#activation">Activation</a></li>
	</ul>
</nav>

    <section id="ideation" class="process-step touchy process--video vid-vignette" style="background-image:url(<?php bloginfo('template_url'); ?>/video/process/ideation.jpg);">
        <div class="video__inner">
            <div class="video__cta">
                <?php the_field('step_1') ?>
            </div> <!-- //video__cta -->
        </div> <!-- //video__inner -->
    </section>


    <section id="design-step" class="process-step touchy process--video vid-vignette" style="background-image:url(<?php bloginfo('template_url'); ?>/video/process/design.jpg);">
        <div class="video__inner">
            <div class="video__cta">
                <?php the_field('step_2') ?>
            </div> <!-- //video__cta -->
        </div> <!-- //video__inner -->
    </section>


    <section id="production" class="process-step touchy process--video vid-vignette" style="background-image:url(<?php bloginfo('template_url'); ?>/video/process/production.jpg);">
        <div class="video__inner">
            <div class="video__cta">
               <?php the_field('step_3') ?>
            </div> <!-- //video__cta -->
        </div> <!-- //video__inner -->
    </section>

    <section id="activation" class="process-step touchy process--video vid-vignette" style="background-image:url(<?php bloginfo('template_url'); ?>/video/process/activation.jpg);">
        <div class="video__inner">
            <div class="video__cta">
               <?php the_field('step_4') ?>
            </div> <!-- //video__cta -->
        </div> <!-- //video__inner -->
    </section>
    


    <?php while(has_sub_field("content")): ?>
        <?php echo get_template_part('templates/parts/page', get_row_layout()); ?>
    <?php endwhile; ?>
    <div class="main"></div><!-- //main -->


<?php get_footer(); ?>