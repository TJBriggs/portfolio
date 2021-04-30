import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'
import { truncateText } from '../../utils/helpers.js'
import placeholder from '../../images/placeholder.jpg'
import './blog-item-styles.css'

const BlogItem = ( props ) => {
	const featuredImg = props.itemElements.featured_media
	const excerptRaw = props.itemElements.excerpt
	const excerptLength = 75
	let excerptFinal = ''
	let imgSrc = ''
	let imgAlt = ''
	let itemPath = ''

	// If a featured image exists set the src and alt
	if( null !== featuredImg ) {
		imgSrc = props.itemElements.featured_media.source_url
		imgAlt = props.itemElements.featured_media.alt_text
	} else {
		imgSrc = placeholder
		imgAlt = 'placeholder image'
	}

	// If the excerpt exists and its char count is over the max, truncate the text
	if( null !== excerptRaw && excerptLength < excerptRaw.length ) {
		excerptFinal = truncateText( excerptRaw, excerptLength )
	// If the excerpt exists, but char count is less then max, don't truncate
	} else if ( null !== excerptRaw ) {
		excerptFinal = excerptRaw
	}

	// If a custom Slug is passed via props, build custom itemPath ( Ex: /Blog/ )
	if( undefined !== props.itemSlug ) {
		itemPath = `/${ props.itemSlug }/${ props.itemElements.path }`
	// Else use original path from graphql query ( Ex: Custom Post Type Path )
	} else {
		itemPath = props.itemElements.path
	}

	// Inline style for background-image using styled-components
	const BlogImage = styled.div`
		background-image: url( '${ imgSrc }' );
	`

	return (
		<div className="blog-grid__item">
			<BlogImage className="blog-grid__image">
				<p className='screen-reader-text'>{ imgAlt }</p>
			</BlogImage>
			<Link to={ itemPath }><h3 className='blog-grid__headline'>{ props.itemElements.title }</h3></Link>
			{	// If excerpt exists diplay it
				'' !== excerptFinal &&
				<div dangerouslySetInnerHTML={ { __html: excerptFinal } } />
			}
			<Link className='blog-grid__link' to={ itemPath }>Read More</Link>
		</div>
	)
}

export default BlogItem;
