import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { ToolbarGroup, ToolbarDropdownMenu } from '@wordpress/components';
import { ReactComponent as alignTop } from '../../icons/alignTop.svg';
import { ReactComponent as alignMiddle } from '../../icons/alignMiddle.svg';
import { ReactComponent as alignBottom } from '../../icons/alignBottom.svg';

export default function VerticalAlign ( { setAttributes, verticalIcon, verticalOption } ) {

	useEffect(() => {
		// Set vertical alignment icon on load
		if (verticalOption === 'top') {
			setAttributes({ verticalIcon: alignTop });
		} else if (verticalOption === 'bottom') {
			setAttributes({ verticalIcon: alignBottom });
		} else {
			setAttributes({ verticalIcon: alignMiddle });
		}
	}, []);

	return (
		<ToolbarGroup>
			<ToolbarDropdownMenu
				icon={verticalIcon}
				label={ __('Change vertical alignment', 'mx-blocks-plugin') }
				controls={ [
					{
						title: 'Align top',
						icon: alignTop,
						onClick: () => {
							setAttributes({
								verticalOption: 'top',
								verticalIcon: alignTop
							});
						}
					},
					{
						title: 'Align middle',
						icon: alignMiddle,
						onClick: () => {
							setAttributes({
								verticalOption: 'middle',
								verticalIcon: alignMiddle
							});
						}
					},
					{
						title: 'Align bottom',
						icon: alignBottom,
						onClick: () => {
							setAttributes({
								verticalOption: 'bottom',
								verticalIcon: alignBottom
							});
						}
					}
				] }
			/>
		</ToolbarGroup>
	);
}