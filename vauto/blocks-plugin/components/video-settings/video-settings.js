import { __ } from '@wordpress/i18n';
import { PanelBody, RadioControl, TextControl, ToggleControl } from '@wordpress/components';

export default function VideoSettings({ videoLink, videoID, videoType, setAttributes }) {
	return (
		<PanelBody title={__('Video Settings', 'mx-blocks-plugin')} initialOpen={true}>
			<div className="mx-video-feature-settings">
				<label className="custom-label"><strong>{__('Video Type', 'mx-blocks-plugin')}</strong></label>
				<RadioControl
					selected={videoType}
					options={[
						{ label: 'YouTube', value: 'youtube' },
						{ label: 'Vimeo', value: 'vimeo' },
					]}
					onChange={(videoType) => setAttributes({ videoType })}
				/>
				<label className="custom-label"><strong>{__('Video ID', 'mx-blocks-plugin')}</strong></label>
				<TextControl
					onChange={(videoID) => setAttributes({ videoID })}
					value={videoID}
				/>
				<p className="field-caption">{__('Enter the YouTube or Vimeo ID for the video.', 'mx-blocks-plugin')}</p>
				{(videoLink !== undefined) && (
					<>
						<label className="custom-label"><strong>{__('Open video with link?', 'mx-blocks-plugin')}</strong></label>
						<ToggleControl
							label={
								videoLink
									? 'yes'
									: 'no'
							}
							checked={videoLink}
							onChange={(videoLink) => setAttributes({ videoLink })}
						/>
						<p className="field-caption">{__('If this toggle is on, a video pop-up will override the existing button/link functionality. Only applicable if a link or button exists within the text section.', 'mx-blocks-plugin')}</p>
					</>
				)}

			</div>
		</PanelBody >
	);
}