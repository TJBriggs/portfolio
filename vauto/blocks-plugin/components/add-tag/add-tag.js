import { __ } from '@wordpress/i18n';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { heading } from '@wordpress/icons';

export default function AddTag({ addTag, setAttributes }) {
	const handleClick = () => {
		if (addTag) {
			setAttributes({
				addTag: false
			});
		} else {
			setAttributes({
				addTag: true
			});
		}
	};
	return (
		<ToolbarGroup>
			<ToolbarButton
				icon={heading}
				label={__('Display Tag', 'mx-blocks-plugin')}
				isPressed={addTag}
				onClick={handleClick}
			/>
		</ToolbarGroup>
	);
}