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
		mottoMediaAlt,
		mottoMediaID,
		mottoMediaURL,
		mottoMediaLabelText,
		personMediaAlt,
		personMediaID,
		personMediaURL,
		personMediaLabelText,
		productMediaAlt,
		productMediaID,
		productMediaURL,
		productMediaLabelText,
		boxMediaAlt,
		boxMediaID,
		boxMediaURL,
		boxMediaLabelText,
		statIconMediaAlt,
		statIconMediaID,
		statIconMediaURL,
		statIconMediaLabelText
	},
	setAttributes,
}) {
	const postType = useSelect(
		(select) => select('core/editor').getCurrentPostType(),
		[]
	);
	let defaultTitle = select('core/editor').getEditedPostAttribute('title');
	if (!defaultTitle) {
		defaultTitle = 'Success Story Name';
	}
	const [meta, setMeta] = useEntityProp('postType', postType, 'meta');
	const ssMottoImage = meta['ss_motto_image'];
	const ssMottoImageAlt = meta['ss_motto_image_alt'];
	const ssPersonImage = meta['ss_person_image'];
	const ssPersonImageAlt = meta['ss_person_image_alt'];
	const ssProductImage = meta['ss_product_image'];
	const ssProductImageAlt = meta['ss_product_image_alt'];
	const ssBoxImage = meta['ss_box_image'];
	const ssBoxImageAlt = meta['ss_box_image_alt'];
	const ssQuote = meta['ss_quote'];
	const ssName = meta['ss_name'];
	const ssTitle = meta['ss_title'];
	const ssDealership = meta['ss_dealership'];
	const ssVideoUrl = meta['ss_video_url'];
	const ssStatText = meta['ss_stat_text'];
	const ssStatIcon = meta['ss_stat_icon'];
	const ssStatIconAlt = meta['ss_stat_icon_alt'];
	const ssStatCaption = meta['ss_stat_caption'];
	const ssCategoryText = meta['ss_category_text'];
	const ssCategoryCaption = meta['ss_category_caption'];
	const ssProductsUsed = meta['ss_products_used'];
	const ssBio = meta['ss_bio'];

	const prevMottoMediaID = useRef();
	useEffect(() => {
		prevMottoMediaID.current = mottoMediaID;
		if (prevMottoMediaID !== mottoMediaID) {
			setMeta({
				ss_motto_image: mottoMediaURL,
				ss_motto_image_alt: mottoMediaAlt
			});
		}

	}, [mottoMediaID]);

	const prevPersonMediaID = useRef();
	useEffect(() => {
		prevPersonMediaID.current = personMediaID;
		if (prevPersonMediaID !== personMediaID) {
			setMeta({
				ss_person_image: personMediaURL,
				ss_person_image_alt: personMediaAlt
			});
		}

	}, [personMediaID]);

	const prevProductMediaID = useRef();
	useEffect(() => {
		prevProductMediaID.current = productMediaID;
		if (prevProductMediaID !== productMediaID) {
			setMeta({
				ss_product_image: productMediaURL,
				ss_product_image_alt: productMediaAlt
			});
		}

	}, [productMediaID]);

	const prevBoxMediaID = useRef();
	useEffect(() => {
		prevBoxMediaID.current = boxMediaID;
		if (prevBoxMediaID !== boxMediaID) {
			setMeta({
				ss_box_image: boxMediaURL,
				ss_box_image_alt: boxMediaAlt
			});
		}

	}, [boxMediaID]);

	const prevStatIconMediaID = useRef();
	useEffect(() => {
		prevStatIconMediaID.current = statIconMediaID;
		if (prevStatIconMediaID !== statIconMediaID) {
			setMeta({
				ss_stat_icon: statIconMediaURL,
				ss_stat_icon_alt: statIconMediaAlt
			});
		}

	}, [statIconMediaID]);

	const blockProps = useBlockProps({
		className: `success-story`,
	});

	let styleBG = { backgroundImage: `url("/wp-content/themes/vauto/dist/images/card-overlay.png"), url("${ssPersonImage}"), url("/wp-content/themes/vauto/dist/images/accent-line.png")` };

	return (
		<section {...useBlockProps(blockProps)}>
			<div className='success-story__default-inner'>
				<div className='meta-fields'>
					<div className='meta-fields__group'>
						<div className='meta-fields__item fourth'>
							<MediaPicker allowedMediaTypes={allowedMediaTypes} mediaKey='motto' mediaLabelText={mottoMediaLabelText} mediaAlt={mottoMediaAlt} mediaID={mottoMediaID} mediaURL={mottoMediaURL} setAttributes={setAttributes} />
							<p><em>{__('Optimal image size is 775px by 500px.', 'mx-blocks-plugin')}</em></p>
						</div>
						<div className='meta-fields__item fourth'>
							<MediaPicker allowedMediaTypes={allowedMediaTypes} mediaKey='person' mediaLabelText={personMediaLabelText} mediaAlt={personMediaAlt} mediaID={personMediaID} mediaURL={personMediaURL} setAttributes={setAttributes} />
							<p><em>{__('Optimal image size is 325px by 500px.', 'mx-blocks-plugin')}</em></p>
						</div>
						<div className='meta-fields__item fourth'>
							<MediaPicker allowedMediaTypes={allowedMediaTypes} mediaKey='product' mediaLabelText={productMediaLabelText} mediaAlt={productMediaAlt} mediaID={productMediaID} mediaURL={productMediaURL} setAttributes={setAttributes} />
							<p><em>{__('Optimal image size is 238px by 80px.', 'mx-blocks-plugin')}</em></p>
						</div>
						<div className='meta-fields__item fourth last'>
							<MediaPicker allowedMediaTypes={allowedMediaTypes} mediaKey='box' mediaLabelText={boxMediaLabelText} mediaAlt={boxMediaAlt} mediaID={boxMediaID} mediaURL={boxMediaURL} setAttributes={setAttributes} />
							<p><em>{__('Optimal image size is 884px by 500px.', 'mx-blocks-plugin')}</em></p>
						</div>
					</div>
					<div className='meta-fields__group'>
						<div className='meta-fields__item fourth'>
							<RichText
								tagName='p'
								value={ssName}
								placeholder={__('Name...', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									ss_name: value
								})}
							/>
						</div>
						<div className='meta-fields__item fourth'>
							<RichText
								tagName='p'
								value={ssTitle}
								placeholder={__('Title...', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									ss_title: value
								})}
							/>
						</div>
						<div className='meta-fields__item fourth'>
							<RichText
								tagName='p'
								value={ssDealership}
								placeholder={__('Dealership...', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									ss_dealership: value
								})}
							/>
						</div>
						<div className='meta-fields__item fourth last'>
							<RichText
								tagName='p'
								value={ssQuote}
								placeholder={__('Quote...', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									ss_quote: value
								})}
							/>
						</div>
					</div>
					<div className='meta-fields__group'>
						<div className='meta-fields__item'>
							<RichText
								tagName='div'
								multiline='p'
								value={ssBio}
								placeholder={__('Bio...', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									ss_bio: value
								})}
							/>
						</div>
					</div>
					<div className='meta-fields__group'>
						<div className='meta-fields__item half'>
							<RichText
								tagName='p'
								value={ssProductsUsed}
								placeholder={__('Products Used...', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									ss_products_used: value
								})}
							/>
						</div>
						<div className='meta-fields__item half last'>
							<RichText
								tagName='p'
								value={ssVideoUrl}
								placeholder={__('Video URL (optional)', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									ss_video_url: value
								})}
							/>
						</div>
					</div>
					<div className='meta-fields__group'>
						<div className='meta-fields__item third'>
							<RichText
								tagName='p'
								value={ssStatText}
								placeholder={__('Stat...', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									ss_stat_text: value
								})}
							/>
						</div>
						<div className='meta-fields__item third'>
							<RichText
								tagName='p'
								value={ssStatCaption}
								placeholder={__('Stat Caption...', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									ss_stat_caption: value
								})}
							/>
						</div>
						<div className='meta-fields__item third last'>
							<MediaPicker allowedMediaTypes={allowedMediaTypes} mediaKey='statIcon' mediaLabelText={statIconMediaLabelText} mediaAlt={statIconMediaAlt} mediaID={statIconMediaID} mediaURL={statIconMediaURL} setAttributes={setAttributes} />
							<p><em>{__('Optimal image size is 700px by 700px.', 'mx-blocks-plugin')}</em></p>
						</div>
					</div>
					<div className='meta-fields__group'>
						<div className='meta-fields__item half'>
							<RichText
								tagName='p'
								value={ssCategoryText}
								placeholder={__('Category...', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									ss_category_text: value
								})}
							/>
						</div>
						<div className='meta-fields__item half last'>
							<RichText
								tagName='p'
								value={ssCategoryCaption}
								placeholder={__('Category Caption...', 'mx-blocks-plugin')}
								onChange={(value) => setMeta({
									ss_category_caption: value
								})}
							/>
						</div>
					</div>
				</div>
				<div className='ss-header__preview-wrap'>
					{(ssPersonImage || ssName || ssLocation) &&
						<>
							<label>{__('Header Preview', 'mx-blocks-plugin')}</label>
							<div className='ss-header'>
								<div className='ss-header__upper'>
									<div className='ss-header__image-wrap'>
										<figure className='wp-block-mx-image size-full ss-header__motto-image'>
											<img src={ssMottoImage} alt={ssMottoImageAlt} />
										</figure>
										<figure className='wp-block-mx-image size-full ss-header__person-image'>
											<img src={ssPersonImage} alt={ssPersonImageAlt} />
										</figure>
									</div>
									<div className='ss-header__copy'>
										<blockquote className='ss-card__quote'>{ssQuote}</blockquote>
										<h3 className='ss-card__name'>{(ssName) ? ssName : defaultTitle}</h3>
										<p className='ss-card__title-dealership'>
											<span dangerouslySetInnerHTML={{ __html: ssTitle }} />,&nbsp;
											<span dangerouslySetInnerHTML={{ __html: ssDealership }} />
										</p>
										{ssProductImage &&
											<figure className='wp-block-mx-image size-full ss-card__product-logo'>
												<img src={ssProductImage} alt={ssProductImageAlt} />
											</figure>
										}
										{(ssVideoUrl !== '') &&
											<div className='wp-block-mx-buttons card__links'>
												<div className='wp-block-mx-button ss-header__link is-style-secondary-button is-style-full-width-button'>
													<a className='wp-block-button__link'>Watch the Video</a>
												</div>
											</div>
										}
									</div>
								</div>
								<div className='ss-header__lower'>
									<div className='ss-header__stats'>
										<div className='ss-header__stat'>
											<div className='ss-header__stat-text'>
												<span>{ssStatText}</span>
												<figure className='wp-block-mx-image size-full ss-header__stat-icon'>
													<img src={ssStatIcon} alt={ssStatIcon} />
												</figure>
											</div>
											<p className='ss-header__stat-caption'>{ssStatCaption}</p>
										</div>
										<div className='ss-header__stat'>
											<span>{ssCategoryText}</span>
											<p className='ss-header__stat-caption'>{ssCategoryCaption}</p>
										</div>
									</div>
									<div className='ss-header__text'>
										<p className='ss-header__products-used'>Products Used: <span dangerouslySetInnerHTML={{ __html: ssProductsUsed }} /></p>
										<div dangerouslySetInnerHTML={{ __html: ssBio }} />
									</div>
								</div>
							</div>
						</>
					}
				</div>
				<div className='ss-card__preview-wrap'>
					{(ssPersonImage || ssName || ssLocation) &&
						<>
							<label>{__('Card Preview', 'mx-blocks-plugin')}</label>
							<div className='ss-card'>
								<div className='ss-card__image-content' style={styleBG}>
									{ssProductImage &&
										<img className='ss-card__mobile-logo' src={ssProductImage} alt={ssProductImageAlt} />
									}
									{ssPersonImage &&
										<>
											<div className='ss-card__overlay-wrap'>
												<div className='ss-card__overlay-inner'>
													<img className='ss-card__motto-image' src={ssMottoImage} alt={ssMottoImageAlt} />
													<div className='ss-card__mobile-text'>
														<h3 className='ss-card__mobile-name has-small-font-size bold'>{(ssName) ? ssName : defaultTitle}</h3>
														<p className='ss-card__mobile-title-dealership has-small-font-size'>
															<span dangerouslySetInnerHTML={{ __html: ssTitle }} />, <span dangerouslySetInnerHTML={{ __html: ssDealership }} />
														</p>
														<div className='wp-block-mx-buttons ss-card__links'>
															<div className='wp-block-mx-button ss-card__mobile-link is-style-secondary-button is-style-xsmall-button'>
																<a className='wp-block-button__link'>View</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</>
									}
								</div>
								<div className='ss-card__desktop-content'>
									<blockquote className='ss-card__quote thinweight'>{ssQuote}</blockquote>
									<h3 className='ss-card__name has-small-font-size bold'>{(ssName) ? ssName : defaultTitle}</h3>
									<p className='ss-card__title-dealership has-medium-font-size thinweight'>
										<span dangerouslySetInnerHTML={{ __html: ssTitle }} />, <span dangerouslySetInnerHTML={{ __html: ssDealership }} />
									</p>
									{ssProductImage &&
										<figure className='wp-block-mx-image size-full ss-card__product-logo'>
											<img src={ssProductImage} alt={ssProductImageAlt} />
										</figure>
									}
									<div className='wp-block-mx-buttons ss-card__links'>
										<div className='wp-block-mx-button ss-card__link is-style-secondary-button is-style-xsmall-button'>
											<a className='wp-block-button__link'>View</a>
										</div>
									</div>
								</div>
							</div>
						</>
					}
				</div>
				{ssBoxImage &&
					<div className='ss-box__preview-wrap'>
						<label>{__('Box Preview', 'mx-blocks-plugin')}</label>
						<div className='wp-block-cover cta-box'>
							<span aria-hidden='true' className='wp-block-cover__background has-background-dim-0 has-background-dim'></span>
							<img loading='lazy' className='wp-block-cover__image-background' src={ssBoxImage} alt={ssBoxImageAlt} data-object-fit='cover' />
							<div className='wp-block-cover__inner-container'>
								<div className='wp-block-group'>
									<h2>{ssQuote}</h2>
									<p>{`${(ssName) ? ssName : defaultTitle}, `} <span dangerouslySetInnerHTML={{ __html: ssDealership }} /></p>
								</div>
								<div className='wp-block-mx-buttons'>
									<div className='wp-block-mx-button'>
										<a className='wp-block-button__link' href='#'>See the Full Story</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				}
			</div>
		</section >
	);
}
