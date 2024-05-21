import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { ToolbarGroup, ToolbarDropdownMenu } from '@wordpress/components';
import { ReactComponent as widthCenter } from '../../icons/widthCenter.svg';
import { ReactComponent as widthFull } from '../../icons/widthFull.svg';

export default function BlockWidth({ setAttributes, widthIcon, widthOption }) {

	useEffect(() => {
		// Set the layout icon on load
		if (widthOption === 'centered') {
			setAttributes({ widthIcon: widthCenter });
		} else {
			setAttributes({ widthIcon: widthFull });
		}
	}, []);

	return (
		<ToolbarGroup>
			<ToolbarDropdownMenu
				icon={widthIcon}
				label={__('Change block width', 'mx-blocks-plugin')}
				controls={[
					{
						title: 'Centered',
						icon: widthCenter,
						onClick: () => {
							setAttributes({
								widthOption: 'centered',
								widthIcon: widthCenter
							});
						}
					},
					{
						title: 'Full Width',
						icon: widthFull,
						onClick: () => {
							setAttributes({
								widthOption: 'full',
								widthIcon: widthFull
							});
						}
					},
				]}
			/>
		</ToolbarGroup>
	);
}