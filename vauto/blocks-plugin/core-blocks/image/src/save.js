import classnames from 'classnames';
import { isEmpty } from 'lodash';
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		url,
		alt,
		caption,
		align,
		href,
		customHref,
		modalHref,
		videoURL,
		rel,
		linkClass,
		linkType,
		width,
		height,
		id,
		linkTarget,
		sizeSlug,
		title,
	} = attributes;
	let figure;
	const newRel = isEmpty(rel) ? undefined : rel;

	const classes = classnames({
		[`align${align}`]: align,
		[`size-${sizeSlug}`]: sizeSlug,
		'is-resized': width || height,
	});

	const image = (
		<img
			src={url}
			alt={alt}
			className={id ? `wp-image-${id}` : null}
			width={width}
			height={height}
			title={title}
		/>
	);

	if (linkType === 'basic') {
		figure = (
			<>
				{href ? (
					<a
						className={linkClass}
						href={href}
						target={linkTarget}
						rel={newRel}
					>
						{image}
					</a>
				) : (
					image
				)}
				{!RichText.isEmpty(caption) && (
					<RichText.Content tagName="figcaption" value={caption} />
				)}
			</>

		);
	} else if (linkType === 'scroll') {
		figure = (
			<>
				{customHref ? (
					<a
						className={linkClass}
						href={customHref}
					>
						{image}
					</a>
				) : (
					image
				)}
				{!RichText.isEmpty(caption) && (
					<RichText.Content tagName="figcaption" value={caption} />
				)}
			</>

		);
	} else if (linkType === 'modal' || linkType === 'modal-gallery') {
		figure = (
			<>
				{modalHref ? (
					<a
						data-fancybox={linkType === 'modal-gallery' ? 'gallery' : 'true'}
						className={linkClass}
						data-src={modalHref}
					>
						{image}
					</a>
				) : (
					image
				)}
				{!RichText.isEmpty(caption) && (
					<RichText.Content tagName="figcaption" value={caption} />
				)}
			</>

		);
	} else if (linkType === 'video') {
		figure = (
			<>
				{videoURL ? (
					<a
						data-fancybox
						className='video-modal has-play-icon'
						data-src={videoURL}
					>
						{image}
					</a>
				) : (
					image
				)}
				{!RichText.isEmpty(caption) && (
					<RichText.Content tagName="figcaption" value={caption} />
				)}
			</>

		);
	}

	if ('left' === align || 'right' === align || 'center' === align) {
		return (
			<div {...useBlockProps.save()}>
				<figure className={classes}>{figure}</figure>
			</div>
		);
	}

	return (
		<figure {...useBlockProps.save({ className: classes })}>
			{figure}
		</figure>
	);
}
