 <?php 
    $id = 520;
    // Modifier Classes
    $classes = '';
    // Margin classes
    $margins = get_field('cta_margins', $id);
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' basic-cta--' . $margin;
        }
    }
    // Padding classes
    $padding = get_field('cta_padding', $id);
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' basic-cta--' . $pad;
        }
    }
 ?>
<article class="basic-cta main-torso__module basic-cta--bg-gray<?php echo $classes; ?>">
    <div class="basic-cta__inner">
        <h4><?php the_field('cta_title', $id) ?></h4>
        <div class="basic-cta__wrap">
            <p><?php the_field('cta_text', $id) ?></p>
            <a class="btn btn--primary" href="<?php echo esc_url(the_field('cta_button_link', $id)); ?>"><?php esc_html_e(the_field('cta_button_text', $id)); ?></a>
        </div>
    </div> <!-- // basic-cta__inner -->  
</article> <!-- // basic-cta -->  