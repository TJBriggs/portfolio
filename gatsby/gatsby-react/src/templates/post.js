import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { createComponentName } from '../utils/helpers.js'


// Import all components that correspond with flexible content fields
import CtaBlock from '../components/cta-block/cta-block'
import CoverImage from '../components/cover-image/cover-image'
import NoModules from '../components/no-modules/no-modules'

const postTemplate = ( { data } ) => {
	let acfFields = ''
	let flexContent = ''
	if( null !== data.wordpressPost.acf ) {
		acfFields = data.wordpressPost.acf
		if( null !== data.wordpressPost.acf.modules_post ) {
			flexContent = data.wordpressPost.acf.modules_post
		}
	}
	// If ACF flexible content exists
	if( '' !== acfFields && '' !== flexContent ) {
		const getModuleComponent = ( module ) => {
			// Get raw Flexible Content Field names
			const moduleType = module.__typename
			// Convert "WordPressAcf_flexibile_content" to hyphenated name
			// this will match our component naming convention
			const componentName = createComponentName( moduleType )
			// Add a case statement for each flexible content field below
			switch ( componentName ) {
				case 'cta-block':
					return <CtaBlock key={ module.id } { ...module } />

				case 'cover-image':
					return <CoverImage key={ module.id } { ...module } />

				default:
					return <NoModules />
			}
		}
		return (
			<Layout pageTitle={ data.wordpressPost.title }>
				{ data.wordpressPost.acf.modules_post.map( ( module ) => getModuleComponent( module ) ) }
			</Layout>
		)
	} else { // Return Gutenburg content or empty page
		return (
			<Layout pageTitle={ data.wordpressPost.title }>
				<section className="gutenberg-content">
					<div className="gutenberg-content__inner">
						<div className='gutenburg-content__content' dangerouslySetInnerHTML={ { __html: data.wordpressPost.content } } />
					</div>
				</section>
			</Layout>
		)
	}
}

export default postTemplate

/**
 *
 * Graphql query for flexible content fields and subfields
 * Add flexible content fields as necessary
 *
 * $id is passed from gatsby-node.js
 *
 */
export const query = graphql`
	query( $id: Int! ) {
		wordpressPost( wordpress_id: {eq: $id } ) {
			wordpress_id
			title
			content
			excerpt
			acf {
				modules_post {
					__typename
					... on WordPressAcf_cover_image {
						id
						image {
							source_url
							alt_text
						}
						headline
						text
					}
					... on WordPressAcf_cta_block {
						id
						ctas {
							headline
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
