import { __ } from '@wordpress/i18n';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { check } from '@wordpress/icons';

export default function PrimaryAccordion({ primaryAccordion, setAttributes }) {
	const handleClick = () => {
		if (primaryAccordion) {
			setAttributes({
				primaryAccordion: false
			});
		} else {
			setAttributes({
				primaryAccordion: true
			});
		}
	};
	return (
		<ToolbarGroup>
			<ToolbarButton
				icon={check}
				label={__('Primary Accordion', 'mx-blocks-plugin')}
				isPressed={primaryAccordion}
				onClick={handleClick}
			/>
		</ToolbarGroup>
	);
}