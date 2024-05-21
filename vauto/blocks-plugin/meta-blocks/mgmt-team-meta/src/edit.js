import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { select, useSelect } from '@wordpress/data';
import { useEffect, useRef } from '@wordpress/element';
import { useEntityProp } from '@wordpress/core-data';
import MediaPicker from '../../../components/media-pickers/media-picker.js';
import './editor.scss';

export default function Edit({
	attributes: {
		allowedMediaTypes,
		personMediaAlt,
		personMediaID,
		personMediaURL,
		personMediaLabelText,
	},
	setAttributes,
}) {
	const postType = useSelect(
		(select) => select('core/editor').getCurrentPostType(),
		[]
	);
	let defaultTitle = select('core/editor').getEditedPostAttribute('title');
	if (!defaultTitle) {
		defaultTitle = 'Team Member Name';
	}
	const [meta, setMeta] = useEntityProp('postType', postType, 'meta');
	const mtPersonImage = meta['mt_person_image'];
	const mtPersonImageAlt = meta['mt_person_image_alt'];
	const mtName = meta['mt_name'];
	const mtTitle = meta['mt_title'];
	const mtBio = meta['mt_bio'];
	const mtLinkedIn = meta['mt_linkedin'];
	const mtEmail = meta['mt_email'];
	const mtPhone = meta['mt_phone'];
	const mtButtonText = meta['mt_button_text'];

	const prevPersonMediaID = useRef();

	useEffect(() => {
		prevPersonMediaID.current = personMediaID;
		if (prevPersonMediaID !== personMediaID) {
			setMeta({
				mt_person_image: personMediaURL,
				mt_person_image_alt: personMediaAlt
			});
		}

	}, [personMediaID]);

	const blockProps = useBlockProps({
		className: `management-team`,
	});

	return (
		<section {...useBlockProps(blockProps)}>
			<div className='management-team__default-inner'>
				<div className='meta-fields'>
					<div className="meta-fields__item">
						<MediaPicker allowedMediaTypes={allowedMediaTypes} mediaKey='person' mediaLabelText={personMediaLabelText} mediaAlt={personMediaAlt} mediaID={personMediaID} mediaURL={personMediaURL} setAttributes={setAttributes} />
						<p><em>{__('Optimal image size is XXXpx by XXXpx.', 'mx-blocks-plugin')}</em></p>
					</div>
					<div class='meta-fields__group'>
						<div className="meta-fields__item third">
							<RichText
								tagName='p'
								value={mtName}
								placeholder={__('Name...', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									mt_name: value
								})}
							/>
						</div>
						<div className="meta-fields__item third">
							<RichText
								tagName='p'
								value={mtTitle}
								placeholder={__('Title...', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									mt_title: value
								})}
							/>
						</div>
						<div className="meta-fields__item third last">
							<RichText
								tagName='p'
								value={mtLinkedIn}
								placeholder={__('LinkedIn URL (optional)', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									mt_linkedin: value
								})}
							/>
						</div>
					</div>
					<div class='meta-fields__group'>
						<div className="meta-fields__item third">
							<RichText
								tagName='p'
								value={mtEmail}
								placeholder={__('Email Address (optional)', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									mt_email: value
								})}
							/>
						</div>
						<div className="meta-fields__item third">
							<RichText
								tagName='p'
								value={mtPhone}
								placeholder={__('Phone # (xxx) xxx-xxxx (optional)', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									mt_phone: value
								})}
							/>
						</div>
						<div className="meta-fields__item third last">
							<RichText
								tagName='p'
								value={mtButtonText}
								placeholder={__('Button Text...', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									mt_button_text: value
								})}
							/>
						</div>
					</div>
					<div class='meta-fields__group'>
						<div className="meta-fields__item">
							<RichText
								tagName='p'
								value={mtBio}
								placeholder={__('Bio...', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									mt_bio: value
								})}
							/>
						</div>
					</div>
				</div>
				<div className='mt-card__preview-wrap'>
					{(mtPersonImage || mtName || mtTitle) &&
						<>
							<label>{__('Card Preview', 'mx-blocks-plugin')}</label>
							<div className='mt-card card'>
								<div className='mt-card__image'>
									{mtPersonImage &&
										<img className='mt-card__person' src={mtPersonImage} alt={mtPersonImageAlt} />
									}
								</div>
								<div className="mt-card__copy">
									<h3 className='mt-card__name h1'>{(mtName) ? mtName : defaultTitle}</h3>
									<p className='mt-card__title' dangerouslySetInnerHTML={{ __html: mtTitle }} />
									<div className="wp-block-mx-buttons mt-card__links">
										<div className="wp-block-mx-button mt-card__link is-style-underline-button is-style-small-button">
											<a className="wp-block-button__link">{mtButtonText}</a>
										</div>
									</div>
								</div>
							</div>
						</>
					}
				</div>
				{(mtPersonImage || mtName || mtBio) &&
					<div className='mt-modal__preview-wrap'>
						<label>{__('Modal Preview', 'mx-blocks-plugin')}</label>
						<div className='mt-modal'>
							<div class='mt-modal__meta'>
								{mtPersonImage &&
									<img class='mt-modal__person' src={mtPersonImage} alt={mtPersonImageAlt} />
								}
								<h3>{(mtName) ? mtName : defaultTitle}</h3>
								<h4>{mtTitle}</h4>
								{mtLinkedIn &&
									<p>
										<a href='#' taget='_blank' rel='noopener noreferrer'>LinkedIn</a>
									</p>
								}
								{mtEmail &&
									<p>
										<a href='#'>{mtEmail}</a>
									</p>
								}
								{mtPhone &&
									<p>
										<span>Phone: </span><a href='#'>{mtPhone}</a>
									</p>
								}
							</div>
							<div class='mt-modal__bio'><p dangerouslySetInnerHTML={{ __html: mtBio }} /></div>
						</div>
					</div>
				}
			</div>
		</section >
	);
}
