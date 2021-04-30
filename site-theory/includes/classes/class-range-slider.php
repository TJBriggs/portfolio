<?php
/**
 * Range Slider Class
 *
 * @package MxBlocks\Range_Slider_Class;
 *
 */
if ( class_exists( 'WP_Customize_Control' ) ) {

	/**
	 * Slider Custom Control
	 *
	 * @author Anthony Hortin <http://maddisondesigns.com>
	 * @license http://www.gnu.org/licenses/gpl-2.0.html
	 * @link https://github.com/maddisondesigns
	 */
	class Mx_Slider_Custom_Control extends WP_Customize_Control {
		/**
		 * The type of control being rendered
		 */
		public $type = 'slider_control';

		/**
		 * Render the control in the customizer
		 */
		public function render_content() {
		?>
			<div class="range-slider">
				<span class="range-slider__title customize-control-title"><?php echo esc_html( $this->label ); ?></span>
				<div class="range-slider__wrap">
					<input
						type="range"
						class="range-slider__slider"
						min="<?php echo esc_attr( $this->input_attrs['min'] ); ?>"
						max="<?php echo esc_attr( $this->input_attrs['max'] ); ?>"
						step="<?php echo esc_attr( $this->input_attrs['step'] ); ?>"
						value="<?php echo esc_attr( $this->value() ); ?>"
						<?php $this->link(); ?>
					>
					<input
						type="number"
						id="<?php echo esc_attr( $this->id ); ?>"
						class="range-slider__value"
						name="<?php echo esc_attr( $this->id ); ?>"
						min="<?php echo esc_attr( $this->input_attrs['min'] ); ?>"
						max="<?php echo esc_attr( $this->input_attrs['max'] ); ?>"
						value="<?php echo esc_attr( $this->value() ); ?>"
						<?php $this->link(); ?>
					/>
					<strong class="range-slider__units">px</strong>
				</div>
			</div>
		<?php
		}
	}
}
