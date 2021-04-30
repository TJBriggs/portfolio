import React, { useEffect } from 'react';
import { graphql } from 'gatsby'
import { setObserver } from '../utils/helpers.js'
import Layout from '../components/layout'

// Import all components that correspond with flexible content fields
import Hero from '../components/hero/hero'
import BlogGrid from '../components/blog-grid/blog-grid'

const blogPage = ( { data } ) => {
	const acfFields = data.wordpressPage.acf
	const blogPosts = data.allWordpressPost

	useEffect( () => {
		// Set timeout to ensure all components load before firing functions
		window.setTimeout( function() {
			// Set intersection observer on infinite scroll triggers
			const element = document.querySelectorAll( '.blog-grid__trigger.hidden' )
			setObserver( element, null, 0, 0.025 )
		}, 1000 );
	} );

	return (
		<Layout pageTitle={ data.wordpressPage.title }>
			<Hero acfFields={ acfFields } />
			<BlogGrid blogPosts={ blogPosts } />
		</Layout>
	)
}

export default blogPage

export const query = graphql`
	query {
		allWordpressPost {
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
		wordpressPage( slug: { eq: "blog" } ) {
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
