import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout'

// Import all components that correspond with flexible content fields
import Hero from '../components/hero/hero'
import CptGrid from '../components/cpt-grid/cpt-grid'

const CptPage = ( { data } ) => {
	const acfFields = data.wordpressPage.acf
	const cptPosts = data.allWordpressWpExampleCpt

	return (
		<Layout pageTitle={ data.wordpressPage.title }>
			<Hero acfFields={ acfFields } />
			<CptGrid cptPosts={ cptPosts } />
		</Layout>
	)
}

export default CptPage

export const query = graphql`
	query {
		allWordpressWpExampleCpt {
			edges {
				node {
					title
					wordpress_id
					excerpt
					path
					date(formatString: "MMMM DD, YYYY")
					featured_media {
						alt_text
						source_url
					}
				}
			}
		}
		wordpressPage( slug: { eq: "example-cpt" } ) {
			title
			wordpress_id
			slug
			content
			excerpt
			acf {
				hero_image {
					source_url
					alt_text
				}
				hero_headline
				hero_text
				modules_page {
					__typename
					... on WordPressAcf_cover_image {
						image {
							source_url
							alt_text
						}
						headline
						text
					}
					... on WordPressAcf_cta_block {
						headline
						ctas {
							icon {
								source_url
								alt_text
							}
							headline
							text
							button_text
							button_url
						}
					}
				}
			}
		}
	}
`
