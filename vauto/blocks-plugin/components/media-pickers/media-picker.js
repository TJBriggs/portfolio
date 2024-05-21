import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Button, Dashicon, Icon, Tooltip } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import './picker-styles.scss';

const MediaPicker = (props) => {
	const {
		allowedMediaTypes,
		mediaKey,
		mediaAlt,
		mediaID,
		mediaURL,
		mediaLabelText,
		setAttributes
	} = props;

	const [currentAlt, setCurrentAlt] = useState(mediaAlt);
	const [currentID, setCurrentID] = useState(mediaID);
	const [currentURL, setCurrentURL] = useState(mediaURL);

	const onSelectMedia = (media) => {
		setAttributes({
			[mediaKey + 'MediaAlt']: media.alt,
			[mediaKey + 'MediaID']: media.id,
			[mediaKey + 'MediaURL']: media.url
		});
		setCurrentAlt(media.alt);
		setCurrentID(media.id);
		setCurrentURL(media.url);
	};

	const onRemoveMedia = () => {
		setAttributes({
			[mediaKey + 'MediaAlt']: '',
			[mediaKey + 'MediaID']: '',
			[mediaKey + 'MediaURL']: ''
		});
		setCurrentAlt('');
		setCurrentID('');
		setCurrentURL('');
	};
	return (
		<>
			{!currentID ? (
				<div className='picker'>
					<label htmlFor='media-picker'>{__(mediaLabelText, 'mx-blocks-plugin')}</label>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={allowedMediaTypes}
							onSelect={onSelectMedia}
							value={currentID}
							id='media-picker'
							render={({ open }) => (
								<Tooltip text='Add media'>
									<Button className='picker__add-button' onClick={open}>
										<Icon icon='admin-media' />
										&nbsp;&nbsp;{__('Add media', 'mx-blocks-plugin')}
									</Button>
								</Tooltip>
							)}
						/>
					</MediaUploadCheck>
				</div>
			) : (
				<div className='picker'>
					<label htmlFor='media-picker'>{__(mediaLabelText, 'mx-blocks-plugin')}</label>
					<div className='picker__preview-wrap'>
						<div className='picker__preview-image'>
							<img className='media-image' src={currentURL} alt={currentAlt} />
						</div>
						<div className='picker__preview-url'>
							<a href={currentURL} className='picker__preview-link' target='_blank' rel='noopener noreferrer'>{currentURL} <Dashicon icon='external' /></a>
							<Tooltip text='Remove file'>
								<Button className='picker__preview-remove' onClick={onRemoveMedia}>
									<Icon icon='no-alt' />
								</Button>
							</Tooltip>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MediaPicker;
