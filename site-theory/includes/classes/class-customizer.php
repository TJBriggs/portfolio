<?php
/**
 * Contains methods for customizing the theme customization screen.
 *
 * @link http://codex.wordpress.org/Theme_Customization_API
 * @since ThemeNameCustomizer 1.0
 */
class Theme_Name_Customizer {
	/**
	* This hooks into 'customize_register' (available as of WP 3.4) and allows
	* you to add new sections and controls to the Theme Customize screen.
	*
	* Note: To enable instant preview, we have to actually write a bit of custom
	* javascript. See live_preview() for more.
	*
	* @see add_action('customize_register',$func)
	* @param \WP_Customize_Manager $wp_customize
	* @link http://ottopress.com/2012/how-to-leverage-the-theme-customizer-in-your-own-themes/
	* @since ThemeNameCustomizer 1.0
	*/
	public static function register ( $wp_customize ) {

		// Remove core panels and sections that are unecessary
		$wp_customize->remove_panel( 'themes' );
		$wp_customize->remove_section( 'static_front_page' );
		$wp_customize->remove_section( 'custom_css' );
		$wp_customize->remove_control( 'blogname' );
		$wp_customize->remove_control( 'blogdescription' );

		// Customizer Steps
		// 1. Define new panels or sections to the Theme Customizer
		// 2. Register new settings
		// 3. Create controls and assign them to the appropriate section

		// Header Settings
		$wp_customize->add_section( 'header_settings',
			array(
				'title' => __( 'Header Settings', 'mx-blocks' ),
				'priority' => 30,
			)
		);

		$wp_customize->add_setting( 'header_logo',
			array(
				'type' => 'option',
				'capability' => 'edit_theme_options',
				'default' => '',
				'transport' => 'postMessage',
				'sanitize_callback' => 'absint'
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Media_Control(
				$wp_customize,
				'header_logo',
				array(
					'label' => __( 'Header Logo', 'mx-blocks' ),
					'description' => __( '<p>The header logo should be in <strong>SVG</strong> or <strong>PNG</strong> format. All whitepace should be trimmed from around the logo.</p>', 'mx-blocks'),
					'section' => 'header_settings',
					'settings' => 'header_logo',
					'mime_type' => 'image',
					'button_labels' => array(
						'select' => __( 'Select Logo' ),
						'change' => __( 'Change Logo' ),
						'remove' => __( 'Remove Logo' ),
						'default' => __( 'Default' ),
						'placeholder' => __( 'No image selected' ),
						'frame_title' => __( 'Select Logo' ),
						'frame_button' => __( 'Choose Logo' ),
					 )
				)
			)
		);

		$wp_customize->add_setting( 'header_logo_width',
			array(
				'default' => 250,
				'transport' => 'postMessage',
				'sanitize_callback' => 'absint'
			)
		);

		$wp_customize->add_control(
			new Mx_Slider_Custom_Control(
				$wp_customize,
				'header_logo_width',
				array(
					'label' => esc_html__( 'Logo Width', 'mx-blocks' ),
					'section' => 'header_settings',
					'type' => 'slider_control',
					'input_attrs' => array(
						'default' => 250,
						'min' => 200,
						'max' => 350,
						'step' => 1,
					),
				)
			)
		);

		$wp_customize->add_setting( 'header_layout',
			array(
				'default' => 'Default',
				'transport' => 'refresh',
				'sanitize_callback' => 'sanitize_text_field',
			)
		);

		$wp_customize->add_control( 'header_layout_select',
			array(
				'label' => __( 'Header Layout', 'mx-blocks' ),
				'description' => __( '<p>Choose from several layout options.</p>', 'mx-blocks'),
				'section' => 'header_settings',
				'settings' => 'header_layout',
				'type' => 'select',
				'choices' => array(
					'default' => 'Default',
					'layout-1' => 'Layout 1',
					'layout-2' => 'Layout 2',
					'layout-3' => 'Layout 3',
				),
			)
		);

		$wp_customize->add_setting( 'header_bg_color',
			array(
				'default' => 'FFF',
				'transport' => 'postMessage',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'header_bg_color',
				array(
					'label' => __( 'Header BG Color', 'mx-blocks' ),
					'section' => 'header_settings',
					'settings' => 'header_bg_color',
				)
			)
		);

		$wp_customize->add_setting( 'main_nav_color',
			array(
				'default' => '666',
				'transport' => 'postMessage',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'main_nav_color',
				array(
					'label' => __( 'Main Nav Font Color', 'mx-blocks' ),
					'section' => 'header_settings',
					'settings' => 'main_nav_color',
				)
			)
		);

		$wp_customize->add_setting( 'utility_bg_color',
			array(
				'default' => 'FFF',
				'transport' => 'postMessage',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'utility_bg_color',
				array(
					'label' => __( 'Utility Nav BG Color', 'mx-blocks' ),
					'section' => 'header_settings',
					'settings' => 'utility_bg_color',
				)
			)
		);

		$wp_customize->add_setting( 'utility_nav_color',
			array(
				'default' => '666',
				'transport' => 'postMessage',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'utility_nav_color',
				array(
					'label' => __( 'Utility Nav Font Color', 'mx-blocks' ),
					'section' => 'header_settings',
					'settings' => 'utility_nav_color',
				)
			)
		);


		$wp_customize->add_setting( 'button_toggle',
			array(
				'default' => 0,
				'transport' => 'postMessage',
				'sanitize_callback' => 'theme_name_checkbox_sanitization',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'button_toggle',
				array(
					'label' => __( 'Check this box to make the last nav link a button.', 'mx-blocks' ),
					'section' => 'header_settings',
					'settings' => 'button_toggle',
					'type' => 'checkbox'
				)
			)
		);

		$wp_customize->add_setting( 'button_bg_color',
			array(
				'default' => '000',
				'transport' => 'postMessage',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'button_bg_color',
				array(
					'label' => __( 'Button BG Color', 'mx-blocks' ),
					'section' => 'header_settings',
					'settings' => 'button_bg_color',
				)
			)
		);

		$wp_customize->add_setting( 'button_text_color',
			array(
				'default' => 'FFF',
				'transport' => 'postMessage',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'button_text_color',
				array(
					'label' => __( 'Button Text Color', 'mx-blocks' ),
					'section' => 'header_settings',
					'settings' => 'button_text_color',
				)
			)
		);

		// Footer Settings
		$wp_customize->add_section( 'footer_settings',
			array(
				'title' => __( 'Footer Settings', 'mx-blocks' ), //Visible title of section
				'priority' => 30, //Determines what order this appears in
				'description' => __( 'Customize the color options for the site footer.', 'mx-blocks' ), //Descriptive tooltip
			)
		);

		$wp_customize->add_setting( 'footer_logo',
			array(
				'type' => 'option',
				'capability' => 'edit_theme_options',
				'default' => '',
				'transport' => 'postMessage',
				'sanitize_callback' => 'absint'
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Media_Control(
				$wp_customize,
				'footer_logo',
				array(
					'label' => __( 'Footer Logo', 'mx-blocks' ),
					'description' => __( '<p>The footer logo should be in <strong>SVG</strong> or <strong>PNG</strong> format. All whitepace should be trimmed from around the logo.</p>', 'mx-blocks'),
					'section' => 'footer_settings',
					'settings' => 'footer_logo',
					'mime_type' => 'image',
					'button_labels' => array(
						'select' => __( 'Select Logo' ),
						'change' => __( 'Change Logo' ),
						'remove' => __( 'Remove Logo' ),
						'default' => __( 'Default' ),
						'placeholder' => __( 'No image selected' ),
						'frame_title' => __( 'Select Logo' ),
						'frame_button' => __( 'Choose Logo' ),
					 )
				)
			)
		);

		$wp_customize->add_setting( 'footer_logo_width',
			array(
				'default' => 200,
				'transport' => 'postMessage',
				'sanitize_callback' => 'absint'
			)
		);

		$wp_customize->add_control(
			new Mx_Slider_Custom_Control(
				$wp_customize,
				'footer_logo_width',
				array(
					'label' => esc_html__( 'Logo Width', 'mx-blocks' ),
					'section' => 'footer_settings',
					'type' => 'slider_control',
					'input_attrs' => array(
						'default' => 200,
						'min' => 200,
						'max' => 300,
						'step' => 1,
					),
				)
			)
		);

		$wp_customize->add_setting( 'footer_bg_color',
			array(
				'default' => 'FFF',
				'transport' => 'postMessage',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'footer_bg_color',
				array(
					'label' => __( 'Footer BG Color', 'mx-blocks' ),
					'section' => 'footer_settings',
					'settings' => 'footer_bg_color',
				)
			)
		);

		$wp_customize->add_setting( 'footer_font_color',
			array(
				'default' => '666',
				'transport' => 'postMessage',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'footer_font_color',
				array(
					'label' => __( 'Footer Font Color', 'mx-blocks' ),
					'section' => 'footer_settings',
					'settings' => 'footer_font_color',
				)
			)
		);

		$wp_customize->add_setting( 'footer_hr_color',
			array(
				'default' => '000',
				'transport' => 'postMessage',
				'sanitize_callback' => 'sanitize_hex_color',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'footer_hr_color',
				array(
					'label' => __( 'Horizontal Rule Color', 'mx-blocks' ),
					'section' => 'footer_settings',
					'settings' => 'footer_hr_color',
				)
			)
		);

		$wp_customize->add_setting( 'footer_address',
			array(
				'default' => '',
				'transport' => 'refresh',
			)
		);

		$wp_customize->add_control( 'footer_address',
			array(
				'label' => __( 'Footer Address' ),
				'section' => 'footer_settings',
				'type' => 'textarea',
				'input_attrs' => array( // Optional.
					'class' => 'foobar',
					'placeholder' => __( '7020 High Grove Blvd<br>&#13;Burr Ridge, IL 60527' ),
				),
			)
		);

		$wp_customize->add_setting( 'footer_phone',
			array(
				'default' => '',
				'transport' => 'refresh',
				'sanitize_callback' => 'wp_filter_nohtml_kses',
			)
		);

		$wp_customize->add_control( 'footer_phone',
			array(
				'label' => __( 'Phone Number' ),
				'section' => 'footer_settings',
				'type' => 'text',
				'input_attrs' => array( // Optional.
					'class' => 'foobarbaz',
					'placeholder' => __( '800.827.0170' ),
				),
			)
		);

		$wp_customize->add_setting( 'footer_tel_url',
			array(
				'default' => '',
				'transport' => 'refresh',
				'sanitize_callback' => 'wp_filter_nohtml_kses',
			)
		);

		$wp_customize->add_control( 'footer_tel_url',
			array(
				'label' => __( 'Telephone Link' ),
				'section' => 'footer_settings',
				'type' => 'text',
				'input_attrs' => array( // Optional.
					'class' => 'foobarbazzy',
					'placeholder' => __( '18008270170' ),
				),
			)
		);

		// 4. We can also change built-in settings by modifying properties
		$wp_customize->get_section( 'title_tagline')->title = __( 'Site Favicon', 'mx-blocks' );
		$wp_customize->get_control( 'site_icon' )->label = __( 'Site Favicon', 'mx-blocks' );
		$wp_customize->get_control( 'site_icon' )->description = __( '<p>The site favicon is what you see in browser tabs, bookmark bars, and within the WordPress mobile apps. Upload one here!</p><p>The favicon should be square and at least <strong>512 × 512</strong> pixels.</p>', 'mx-blocks' );


		// Sanitization Functions
		function theme_name_checkbox_sanitization( $input ) {
			if ( true === $input ) {
				return 1;
			} else {
				return 0;
			}
		}
	}

	/**
	* This will output the custom WordPress settings to the live theme's WP head.
	*
	* Used by hook: 'wp_head'
	*
	* @see add_action('wp_head',$func)
	* @since MxThemeCustomizer 1.0
	*/
	public static function header_output() {
		?>
		<!--Customizer CSS-->
		<style type="text/css">
			/* Header Logo Styles */
			<?php self::generate_css('.default .site-header__logo-wrap', 'max-width', 'header_logo_width', '', 'px' ); ?>
			<?php self::generate_css('.layout-1 .site-header__logo-wrap', 'max-width', 'header_logo_width', '', 'px' ); ?>
			<?php self::generate_css('li.site-header__logo-wrap > a', 'width', 'header_logo_width', '', 'px' ); ?>
			<?php self::generate_css('li.site-header__logo-wrap > a', 'width', 'header_logo_width', '', 'px' ); ?>
			/* Header BG and Font Colors */
			<?php self::generate_css('.site-header__main', 'background-color', 'header_bg_color' ); ?>
			<?php self::generate_css('.site-header__utility', 'background-color', 'utility_bg_color' ); ?>
			<?php self::generate_css('.site-header__utility-menu > li > a', 'color', 'utility_nav_color', '', '' ); ?>
			<?php self::generate_css('.site-header__menu > li > a', 'color', 'main_nav_color', '', '' ); ?>
			/* Button Base Styles */
			<?php self::generate_css('.nav-with-button .site-header__menu > li:last-of-type > a', 'color', 'button_text_color', '', '' ); ?>
			<?php self::generate_css('.nav-with-button .site-header__menu > li:last-of-type > a', 'background-color', 'button_bg_color', '', '' ); ?>
			<?php self::generate_css('.nav-with-button .site-header__menu > li:last-of-type > a', 'border-color', 'button_bg_color', '', '' ); ?>
			/* Button Hover, Active and Focus States */
			<?php self::generate_css('.nav-with-button .site-header__menu > li:last-of-type > a:hover', 'color', 'button_bg_color', '', '!important' ); ?>
			<?php self::generate_css('.nav-with-button .site-header__menu > li:last-of-type > a:active', 'color', 'button_bg_color', '', '!important' ); ?>
			<?php self::generate_css('.nav-with-button .site-header__menu > li:last-of-type > a:focus', 'color', 'button_bg_color', '', '!important' ); ?>
			<?php self::generate_css('.nav-with-button .site-header__menu > li:last-of-type > a:hover', 'background-color', 'button_text_color', '', '' ); ?>
			<?php self::generate_css('.nav-with-button .site-header__menu > li:last-of-type > a:active', 'background-color', 'button_text_color', '', '' ); ?>
			<?php self::generate_css('.nav-with-button .site-header__menu > li:last-of-type > a:focus', 'background-color', 'button_text_color', '', '' ); ?>
			/* Footer Logo Styles */
			<?php self::generate_css('.default .site-header__nav-wrap', 'max-width', 'header_logo_width', ' calc(100% - ', 'px)' ); ?>
			<?php self::generate_css('.layout-1 .site-header__nav-wrap', 'max-width', 'header_logo_width', ' calc(100% - ', 'px)' ); ?>
			/* Footer BG and Font Colors */
			<?php self::generate_css('.site-footer', 'background-color', 'footer_bg_color' ); ?>
			<?php self::generate_css('.site-footer', 'color', 'footer_font_color', '', '' ); ?>
			<?php self::generate_css('.site-footer__logo-link', 'width', 'footer_logo_width', '', 'px' ); ?>
			<?php self::generate_css('.site-footer hr', 'background-color', 'footer_hr_color' ); ?>
		</style>
		<!--/Customizer CSS-->
		<?php
	}

	/**
	* This outputs the javascript needed to automate the live settings preview.
	* Also keep in mind that this function isn't necessary unless your settings
	* are using 'transport'=>'postMessage' instead of the default 'transport'
	* => 'refresh'
	*
	* Used by hook: 'customize_preview_init'
	*
	* @see add_action('customize_preview_init',$func)
	* @since MxThemeCustomizer 1.0
	*/
	public static function customizer_live_preview() {
		wp_enqueue_script(
			'customizer-preview',
			THEME_NAME_TEMPLATE_URL . '/dist/js/customizer-preview.min.js',
			array( 'jquery' ),
			THEME_NAME_VERSION,
			true
		);
	}

	/**
	* This outputs the javascript needed to automate the live settings preview.
	* Also keep in mind that this function isn't necessary unless your settings
	* are using 'transport'=>'postMessage' instead of the default 'transport'
	* => 'refresh'
	*
	* Used by hook: 'customize_preview_init'
	*
	* @see add_action('customize_preview_init',$func)
	* @since MxThemeCustomizer 1.0
	*/
	public static function customizer_theme_controls() {
		wp_enqueue_script(
			'customizer-controls',
			THEME_NAME_TEMPLATE_URL . '/dist/js/customizer-controls.min.js',
			array(),
			THEME_NAME_VERSION,
			true
		);
	}

	/**
	 * This will generate a line of CSS for use in header output. If the setting
	 * ($mod_name) has no defined value, the CSS will not be output.
	 *
	 * @uses get_theme_mod()
	 * @param string $selector CSS selector
	 * @param string $style The name of the CSS *property* to modify
	 * @param string $mod_name The name of the 'theme_mod' option to fetch
	 * @param string $prefix Optional. Anything that needs to be output before the CSS property
	 * @param string $postfix Optional. Anything that needs to be output after the CSS property
	 * @param bool $echo Optional. Whether to print directly to the page (default: true).
	 * @return string Returns a single line of CSS with selectors and a property.
	 * @since MxThemeCustomizer 1.0
	 */
	public static function generate_css( $selector, $style, $mod_name, $prefix='', $postfix='', $echo=true ) {
		$return = '';
		$mod = get_theme_mod( $mod_name );
		if ( ! empty( $mod ) ) {
			$return = sprintf('%s { %s:%s; }',
				$selector,
				$style,
				$prefix.$mod.$postfix
			);
			if ( $echo ) {
				echo $return;
			}
		}
		return $return;
	}


	/**
	 * This will generate a line of CSS for use in header output. If the setting
	 * ($mod_name) has no defined value, the CSS will not be output.
	 *
	 * @uses get_theme_mod()
	 * @param string $selector CSS selector
	 * @param string $style The name of the CSS *property* to modify
	 * @param string $mod_name The name of the 'theme_mod' option to fetch
	 * @param string $prefix Optional. Anything that needs to be output before the CSS property
	 * @param string $postfix Optional. Anything that needs to be output after the CSS property
	 * @param bool $echo Optional. Whether to print directly to the page (default: true).
	 * @return string Returns a single line of CSS with selectors and a property.
	 * @since MxThemeCustomizer 1.0
	 */

	/* public static function mx_sanitize_hex_color( $hex_color, $setting ) {
		// Sanitize $input as a hex value without the hash prefix.
		$hex_color = sanitize_hex_color( $hex_color );

		// If $input is a valid hex value, return it; otherwise, return the default.
		return ( ! null( $hex_color ) ? $hex_color : $setting->default );
	} */
}

// Setup the Theme Customizer settings and controls...
add_action( 'customize_register' , array( 'Theme_Name_Customizer' , 'register' ) );

// Output custom CSS to live site
add_action( 'wp_head' , array( 'Theme_Name_Customizer' , 'header_output' ) );

// Enqueue customizer live preview javascript in Theme Customizer admin screen
add_action( 'customize_preview_init' , array( 'Theme_Name_Customizer' , 'customizer_live_preview' ) );

// Enqueue customizer controls javascript in Theme Customizer admin screen
add_action( 'customize_controls_enqueue_scripts' , array( 'Theme_Name_Customizer' , 'customizer_theme_controls' ) );
