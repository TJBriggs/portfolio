import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero/hero'

const IndexPage = ( { data } ) => {
	const acfFields = data.wordpressPage.acf
	return (
		<Layout pageTitle={ data.wordpressPage.title }>
			<Hero acfFields={ acfFields } />
			<section className="gutenburg-content">
				<div className="gutenburg-content__inner">
					<h1>Gutenburg Content</h1>
					<div dangerouslySetInnerHTML={ { __html: data.wordpressPage.content } } />
				</div>
			</section>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query {
		wordpressPage( slug: { eq: "home" } ) {
			title
			content
			wordpress_id
			acf {
				hero_image {
					source_url
					alt_text
				}
				hero_headline
				hero_text
			}
		}
	}
`
