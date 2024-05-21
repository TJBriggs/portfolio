import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { ToolbarGroup, ToolbarDropdownMenu } from '@wordpress/components';
import { addSubmenu, customLink, gallery, stack, video } from '@wordpress/icons';

export default function LinkTypes({ setAttributes, linkIcon, linkType }) {

	useEffect(() => {
		// Set vertical alignment icon on load
		if (linkType === 'scroll') {
			setAttributes({ linkIcon: addSubmenu });
		} else if (linkType === 'modal') {
			setAttributes({ linkIcon: stack });
		} else if (linkType === 'modal-gallery') {
			setAttributes({ linkIcon: gallery });
		} else if (linkType === 'video') {
			setAttributes({ linkIcon: video });
		} else {
			setAttributes({ linkIcon: customLink });
		}
	}, []);

	return (
		<ToolbarGroup>
			<ToolbarDropdownMenu
				icon={linkIcon}
				label={__('Change link type', 'mx-blocks-plugin')}
				controls={[
					{
						title: 'Basic Link',
						icon: customLink,
						onClick: () => {
							setAttributes({
								linkType: 'basic',
								linkIcon: customLink
							});
						}
					},
					{
						title: 'Scroll Link',
						icon: addSubmenu,
						onClick: () => {
							setAttributes({
								linkType: 'scroll',
								linkIcon: addSubmenu
							});
						}
					},
					{
						title: 'Modal Link',
						icon: stack,
						onClick: () => {
							setAttributes({
								linkType: 'modal',
								linkIcon: stack
							});
						}
					},
					{
						title: 'Gallery Link',
						icon: gallery,
						onClick: () => {
							setAttributes({
								linkType: 'modal-gallery',
								linkIcon: gallery
							});
						}
					},
					{
						title: 'Video Link',
						icon: video,
						onClick: () => {
							setAttributes({
								linkType: 'video',
								linkIcon: video
							});
						}
					}
				]}
			/>
		</ToolbarGroup>
	);
}