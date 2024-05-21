import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { ToolbarGroup, ToolbarDropdownMenu } from '@wordpress/components';
import { flipHorizontal, flipVertical } from '@wordpress/icons';

export default function Orientation({ setAttributes, itemOrientation, orientationIcon }) {

	useEffect(() => {
		// Set vertical alignment icon on load
		if (itemOrientation === 'horizontal') {
			setAttributes({ orientationIcon: flipHorizontal });
		} else {
			setAttributes({ orientationIcon: flipVertical });
		}
	}, []);

	return (
		<ToolbarGroup>
			<ToolbarDropdownMenu
				icon={orientationIcon}
				label={__('Change item orientation', 'mx-blocks-plugin')}
				controls={[
					{
						title: 'Vertical',
						icon: flipVertical,
						onClick: () => {
							setAttributes({
								itemOrientation: 'vertical',
								orientationIcon: flipVertical
							});
						}
					},
					{
						title: 'Horizontal',
						icon: flipHorizontal,
						onClick: () => {
							setAttributes({
								itemOrientation: 'horizontal',
								orientationIcon: flipHorizontal
							});
						}
					}
				]}
			/>
		</ToolbarGroup>
	);
}