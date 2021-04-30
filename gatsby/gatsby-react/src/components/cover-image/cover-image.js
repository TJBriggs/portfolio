import React from 'react'
import styled from 'styled-components'
import './cover-image-styles.css'

const CoverImage = ( props ) => {
	let imgSRC = '';

	if( undefined !== props.image.source_url ) {
		imgSRC = props.image.source_url;
	} else {
		imgSRC = props.image.url;
	}

	const Section = styled.section`
		background-image: url( '${ imgSRC }' );
	`

	return (
		<Section className="cover-image">
			<div className="cover-image__inner">
				<h1>{ props.headline }</h1>
				<p>{ props.text }</p>
			</div>
		</Section>
	)
}

export default CoverImage
