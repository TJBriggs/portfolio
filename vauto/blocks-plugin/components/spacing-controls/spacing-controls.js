import { __ } from '@wordpress/i18n';
import { PanelBody, RadioControl } from '@wordpress/components';
import './spacing-controls.scss';

/**
 * @example
 * <SpacingControls
 *    @param {string} marginBottom - (Attribute to capture the margin bottom value)
 *    @param {string} marginTop - (Attribute to capture the margin top value)
 *    @param {string} paddingBottom - (Attribute to capture the padding bottom value)
 *    @param {string} paddingTop - (Attribute to capture the padding top value)
 *    @param {func} setAttributes - (Function to set state of postID, postTitle, postType, postTypeTitle)
 * />
 */
export default function SpacingControls({ marginBottom, marginTop, paddingBottom, paddingTop, setAttributes }) {

	return (
		<PanelBody title={__('Spacing Settings', 'mx-blocks-plugin')} initialOpen={false}>
			<div className="spacing-controls">
				{(marginTop || marginBottom) &&
					<div class='spacing-controls__margin'>
						{marginTop &&
							<RadioControl
								label="Margin - Top"
								help="This spacing will be applied outside the top of the block."
								selected={marginTop}
								options={[
									{ label: 'Large', value: 'large' },
									{ label: 'Default', value: 'default' },
									{ label: 'None', value: 'none' },
								]}
								onChange={
									(marginTop) => {
										setAttributes({
											marginTop
										})
									}
								}
							/>
						}
						{marginBottom &&
							<RadioControl
								label="Margin - Bottom"
								help="This spacing will be applied outside the bottom of the block."
								selected={marginBottom}
								options={[
									{ label: 'Large', value: 'large' },
									{ label: 'Default', value: 'default' },
									{ label: 'None', value: 'none' },
								]}
								onChange={
									(marginBottom) => {
										setAttributes({
											marginBottom
										})
									}
								}
							/>
						}
					</div>
				}
				{(paddingTop || paddingBottom) &&
					<div class='spacing-controls__padding'>
						{paddingTop &&
							<RadioControl
								label="Padding - Top"
								help="This spacing will be applied inside the top of the block."
								selected={paddingTop}
								options={[
									{ label: 'Large', value: 'large' },
									{ label: 'Default', value: 'default' },
									{ label: 'None', value: 'none' },
								]}
								onChange={
									(paddingTop) => {
										setAttributes({
											paddingTop
										})
									}
								}
							/>
						}
						{paddingBottom &&
							<RadioControl
								label="Padding - Bottom"
								help="This spacing will be applied inside the bottom of the block."
								selected={paddingBottom}
								options={[
									{ label: 'Large', value: 'large' },
									{ label: 'Default', value: 'default' },
									{ label: 'None', value: 'none' },
								]}
								onChange={
									(paddingBottom) => {
										setAttributes({
											paddingBottom
										})
									}
								}
							/>
						}
					</div>
				}
			</div>
		</PanelBody >
	);
}