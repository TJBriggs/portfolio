import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import SearchBlock from '../components/search-block/search-block'

const SearchPage = ( { data } ) => {
	const acfFields = data.wordpressPage.acf
	return (
		<Layout pageTitle={ data.wordpressPage.title }>
			<Hero acfFields={ acfFields } />
			<SearchBlock />
		</Layout>
	)
}

export default SearchPage

export const query = graphql`
	query {
		wordpressPage( slug: { eq: "search" } ) {
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
