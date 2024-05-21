import { __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { PanelBody, } from '@wordpress/components';

export default function BlockLink({ blockLink, blockTarget, setAttributes }) {

	const handleLinkChange = (value) => {
		setAttributes({
			blockLink: value.url,
			blockTarget: value.opensInNewTab
		});
	};

	return (
		<PanelBody title="Block Link" initialOpen={true}>
			<div className="inspector-link-control">
				<LinkControl
					onChange={handleLinkChange}
					value={{ url: blockLink, opensInNewTab: blockTarget }}
				/>
			</div>
		</PanelBody>
	);
}