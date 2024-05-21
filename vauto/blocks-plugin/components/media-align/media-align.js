import { __ } from '@wordpress/i18n';
import { ToolbarGroup, ToolbarButton} from '@wordpress/components';
import { pullLeft, pullRight } from '@wordpress/icons';

export default function BlockWidth ( { mediaAlign, setAttributes } ) {

	return (
		<ToolbarGroup>
			<ToolbarButton
				icon={pullLeft}
				label={ __('Show media on left', 'mx-blocks-plugin') }
				isPressed={ (mediaAlign === 'left') ? true : false }
				onClick={ () => {
					setAttributes({
						mediaAlign: 'left'
					});
				} }
			/>
			<ToolbarButton
				icon={ pullRight }
				label={ __('Show media on right', 'mx-blocks-plugin') }
				isPressed={ (mediaAlign === 'right') ? true : false }
				onClick={ () => {
					setAttributes({
						mediaAlign: 'right'
					});
				} }
			/>
		</ToolbarGroup>
	);
}