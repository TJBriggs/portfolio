import { __ } from '@wordpress/i18n';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { check } from '@wordpress/icons';

export default function AddActive({ addActive, setAttributes }) {
	const handleClick = () => {
		if (addActive) {
			setAttributes({
				addActive: false
			});
		} else {
			setAttributes({
				addActive: true
			});
		}
	};
	return (
		<ToolbarGroup>
			<ToolbarButton
				icon={check}
				label={__('Display Tag', 'mx-blocks-plugin')}
				isPressed={addActive}
				onClick={handleClick}
			/>
		</ToolbarGroup>
	);
}