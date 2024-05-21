import { __ } from '@wordpress/i18n';
import { Button, Dashicon, Icon, Tooltip } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import './picker-styles.scss';

const MediaPicker = (props) => {
	const {
		allowedFileTypes,
		fileAlt,
		fileID,
		fileURL,
		fileLabelText,
		setAttributes
	} = props;

	const onSelectFile = (media) => {
		setAttributes({
			fileAlt: media.alt,
			fileID: media.id,
			fileURL: media.url
		});
	};

	const onRemoveFile = () => {
		setAttributes({
			fileAlt: null,
			fileID: null,
			fileURL: null
		});
	};

	return (
		<>
			{!fileID ? (
				<div className='picker'>
					<label htmlFor='file-picker'>{__(fileLabelText, 'mx-blocks-plugin')}</label>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={allowedFileTypes}
							onSelect={onSelectFile}
							value={fileID}
							id='media-picker'
							render={({ open }) => (
								<Tooltip text='Add file'>
									<Button className='picker__add-button' onClick={open}>
										<Icon icon='media-text' />
										&nbsp;&nbsp;{__('Add file', 'mx-blocks-plugin')}
									</Button>
								</Tooltip>
							)}
						/>
					</MediaUploadCheck>
				</div>
			) : (
				<div className='picker'>
					<label htmlFor='file-picker'>{__(fileLabelText, 'mx-blocks-plugin')}</label>
					<div className='picker__preview-wrap'>
						<div className='picker__preview-icon'>
							<Icon icon='media-text' />
						</div>
						<div className='picker__preview-url'>
							<a href={fileURL} className='picker__preview-link' target='_blank' rel='noopener noreferrer'>{fileURL} <Dashicon icon='external' /></a>
							<Tooltip text='Remove file'>
								<Button className='picker__preview-remove' onClick={onRemoveFile}>
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
