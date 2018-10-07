<?php wp_enqueue_script('snap'); ?>
<?php wp_enqueue_script('pizza'); ?>
<?php //special modification classes
    $special_class = get_sub_field('special_classes');
    if($special_class){
        $special_class_array = explode(" ", $special_class);
        foreach ($special_class_array as $class) {
            $classes .= ' page__group--' . $class;
        }
    } ?>
<?php if(get_sub_field('section_bg_color')): ?>
<?php $section_bg = get_sub_field('section_bg_color'); ?>
<section class="stats <?php echo $special_class; ?> <?php echo $section_bg; ?>">
<?php endif; ?>
    <div class="stats__inner">
    	<div class="section__title-wrap">
            <h2 class="section__title"><?php the_sub_field('section_title') ?></h2> 
        </div>
        
        <?php if(have_rows( 'stat_item')): ?>
          <?php while(have_rows( 'stat_item')): the_row(); ?>
            <?php $stat_title = get_sub_field('stat_title'); ?>
            <?php if(get_sub_field( 'stat_item_type')=="Circle" ): ?>
              <div class="circle">
              <?php if($stat_title) : ?>
                <h3 class="graph-title"><?php echo $stat_title; ?></h3>
              <?php endif; ?> 
                  <div class="circle__stat">
                      <div class="circle__per">
                          <?php the_sub_field( 'circle_stat_amount'); ?>
                      </div>
                      <svg class="circle__svg"></svg>
                  </div>
                  <div class="circle__caption">
                      <?php the_sub_field( 'circle_stat_caption'); ?>
                  </div>
              </div> <!-- //circle -->

            <!-- Pie Char -->
            <?php elseif(get_sub_field( 'stat_item_type')=="Pie" ): ?>
              <?php if(have_rows( 'pie_stat_content')): $j=0 ; $j=$j++;?>
              <div class="chart__wrap pie-chart"> 
                  <?php if($stat_title) : ?>
                    <h3 class="graph-title"><?php echo $stat_title; ?></h3>
                  <?php endif; ?> 
                  <!-- <h3 class="graph-title">Treatments</h3> -->
                        
                  <ul class="chart" data-pie-id="pie<?php echo  $j; ?>" data-options='{"show_text" : "false", "percent_offset" : 2}'>
                      <?php while(have_rows( 'pie_stat_content')): the_row(); ?>
                      <li data-value="<?php the_sub_field('pie_stat_amount'); ?>">
                          <?php the_sub_field( 'pie_stat_caption'); ?>
                      </li>
                      <?php endwhile; ?>
                  </ul>
                  <div id="pie<?php echo  $j; ?>"></div>  
              </div> <!-- //chart__wrap -->
              <?php endif; ?>

            <!-- I like donut charts, I think they're super rad. -->
            <?php elseif(get_sub_field( 'stat_item_type')=="Donut" ): ?>
              <?php if(have_rows( 'donut_stat_content')): $i=10; $i=$i++?>
              <div class="chart__wrap donut-chart">
                  <?php if($stat_title) : ?>
                    <h3 class="graph-title"><?php echo $stat_title; ?></h3>
                  <?php endif; ?> 
                  <div id="donut<?php echo  $i; ?>"></div>
                  <ul class="chart" data-pie-id="donut<?php echo  $i; ?>" data-options='{"donut" : "true", "show_text" : "false", "percent_offset" : 2}'>
                      <?php while(have_rows( 'donut_stat_content')): the_row(); ?>
                      <li data-value="<?php the_sub_field('donut_stat_amount'); ?>">
                          <?php the_sub_field( 'donut_stat_caption'); ?>
                      </li>
                      <?php endwhile; ?>
                  </ul>
              </div> <!-- //chart__wrap -->
              <?php endif; ?>

            <!-- Line Graph -->
            <?php elseif(get_sub_field( 'stat_item_type')=="Line" ): ?>
              <?php if(have_rows( 'line_stat_content')): $i=20; $i=$i++?>
              <div class="chart__wrap line-chart">
                  <?php if($stat_title) : ?>
                    <h3 class="graph-title"><?php echo $stat_title; ?></h3>
                  <?php endif; ?> 
                  <div id="line<?php echo  $i; ?>" style="height:150px;"></div>
                  <!-- Pizza Pie needs fixed, inline height to draw this type of graph initially -->
                  <ul class="chart chart--line" data-line-id="line<?php echo  $i; ?>">
                      <?php while(have_rows( 'line_stat_content')): the_row(); ?>
                      <li data-y="<?php the_sub_field('line_y_point'); ?>" data-x="<?php the_sub_field('line_x_point'); ?>">
                          <?php the_sub_field( 'line_stat_caption'); ?>
                      </li>
                      <?php endwhile; ?>
                  </ul>
              </div> <!-- //chart__wrap -->
              <?php endif; ?>

            <!-- Bar Graph -->
            <?php elseif(get_sub_field( 'stat_item_type')=="Bar" ): ?>
              <?php if(have_rows( 'bar_stat_content')): $i=30; $i=$i++?>
              <div class="chart__wrap bar-chart">
                  <?php if($stat_title) : ?>
                    <h3 class="graph-title"><?php echo $stat_title; ?></h3>
                  <?php endif; ?>    
                  <div id="bar<?php echo  $i; ?>" style="height:150px;"></div>
                  <!-- Pizza Pie needs fixed, inline height to draw this type of graph initially -->
                  <ul class="chart" data-bar-id="bar<?php echo  $i; ?>">
                      <?php while(have_rows( 'bar_stat_content')): the_row(); ?>
                      <li data-value="<?php the_sub_field('bar_stat_amount'); ?>">
                          <?php the_sub_field( 'bar_stat_caption'); ?>
                      </li>
                      <?php endwhile; ?>
                  </ul>
              </div> <!-- //chart__wrap -->
          <?php endif; ?>
        <?php endif; ?>
      <?php endwhile; ?>
    <?php endif; ?>
  </div> <!-- //__inner -->
</section> <!-- //stats -->



























