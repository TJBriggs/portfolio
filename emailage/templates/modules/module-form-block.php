 <?php 
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = $class->post_name;
            $classes .= ' form-block--' . $title;
        }
    }
    // Margin classes
    $margins = get_sub_field('margins');
    if($margins){
        foreach ($margins as $margin) {
            $classes .= ' form-block--' . $margin;
        }
    }
    // Padding classes
    $padding = get_sub_field('padding');
    if($padding){
        foreach ($padding as $pad) {
            $classes .= ' form-block--' . $pad;
        }
    }
 ?>
<article class="form-block main-torso__module<?php echo $classes; ?>">
	<div class="form-block__inner">
        <div class="form-block__main-wrap">
            <div class="form-block__contact-info">
                <?php 
                    $phone = get_sub_field('phone_number');
                    $phone_numbers = preg_replace('/[^0-9]/', '', $phone); 
                ?>
                <a class="form-block__phone" href="tel:<?php esc_html_e($phone_numbers); ?>">
                    <?php 
                        // Icon Vars
                        $phone_array = get_sub_field('phone_icon');
                        $phone_url = $phone_array['url'];
                        $phone_alt = $phone_array['alt'];
                    ?>
                    <span class="icon"><img class="svg-replace" src="<?php echo esc_url($phone_url); ?>" alt="<?php esc_html_e($phone_alt); ?>"></span>
                    <span class="text"><?php esc_html_e($phone); ?></span>
                </a>
                <?php $email_address = get_sub_field('email_address'); ?>
                <a class="form-block__email" href="mailto:<?php esc_html_e($email_address); ?>">
                    <?php 
                        // Icon Vars
                        $mail_array = get_sub_field('email_icon');
                        $mail_url = $mail_array['url'];
                        $mail_alt = $mail_array['alt'];
                    ?>
                    <span class="icon"><img class="svg-replace" src="<?php echo esc_url($mail_url); ?>" alt="<?php esc_html_e($mail_alt); ?>"></span>
                    <span class="text"><?php esc_html_e($email_address); ?></span>
                </a>
            </div> 
            <div class="form-block__form-wrap">
                <?php 
                    $form_id = get_sub_field('form_id');
                    echo do_shortcode('[gravityform id=' . $form_id . ' title="false" description="false"]'); 
                ?>
            </div>
        </div>
	</div> <!-- // form-block__inner -->  
</article> <!-- // form-block -->  