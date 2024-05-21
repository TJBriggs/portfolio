import { __ } from '@wordpress/i18n';
import { PanelBody, CheckboxControl } from '@wordpress/components';

export default function BorderControls({ borderAll, borderBottom, borderLeft, borderRight, borderTop, setAttributes }) {

	return (
		<PanelBody title={__('Border Settings', 'mx-blocks-plugin')} initialOpen={false}>
			<div className="padding-controls">
				{(borderAll !== undefined) && (
					<>
						<CheckboxControl
							label="Add Border"
							checked={borderAll}
							onChange={(borderAll) => setAttributes({ borderAll })}
						/>
					</>
				)}
				{(borderTop !== undefined) && (
					<>
						<CheckboxControl
							label="Add Top Border"
							checked={borderTop}
							onChange={(borderTop) => setAttributes({ borderTop })}
						/>
					</>
				)}
				{(borderRight !== undefined) && (
					<>
						<CheckboxControl
							label="Add Right Border"
							checked={borderRight}
							onChange={(borderRight) => setAttributes({ borderRight })}
						/>
					</>
				)}
				{(borderBottom !== undefined) && (
					<>
						<CheckboxControl
							label="Add Bottom Border"
							checked={borderBottom}
							onChange={(borderBottom) => setAttributes({ borderBottom })}
						/>
					</>
				)}
				{(borderLeft !== undefined) && (
					<>
						<CheckboxControl
							label="Add Left Border"
							checked={borderLeft}
							onChange={(borderLeft) => setAttributes({ borderLeft })}
						/>
					</>
				)}
			</div>
		</PanelBody >
	);
}