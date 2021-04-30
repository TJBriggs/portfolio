import React from 'react'
import styled from 'styled-components'

const Hero = ( props ) => {
	const acfFields = props.acfFields
	const imgSource = acfFields.hero_image.source_url

	const Section = styled.section`
		background-image: url( '${ imgSource }' );
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		color: #FFF;
		padding: 5rem 0;
	`

	return (
		<Section className='hero-block hero-block--home'>
			<div className='hero-block__inner'>
				<h1>{ acfFields.hero_headline }</h1>
				<p>{ acfFields.hero_text }</p>
			</div>
		</Section>
	)
}

export default Hero
