import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { createComponentName } from '../utils/helpers.js'


// Import all components that correspond with flexible content fields
import CtaBlock from '../components/cta-block/cta-block'
import CoverImage from '../components/cover-image/cover-image'
import NoModules from '../components/no-modules/no-modules'

const pageTemplate = ( { data } ) => {
	let acfFields = ''
	let flexContent = ''
	// If ACF fields are not null store them in a variable
	if( null !== data.wordpressPage.acf ) {
		acfFields = data.wordpressPage.acf
		// If Flexible Content fields are present store them in a variable
		if( null !== data.wordpressPage.acf.modules_page ) {
			flexContent = data.wordpressPage.acf.modules_page
		}
	}
	// If ACF fields are not empty and flexible content exists
	if( '' !== acfFields && '' !== flexContent ) {
		// Pull in each modules corresponding React component
		const getModuleComponent = ( module ) => {
			// Get raw Flexible Content Field names
			const moduleType = module.__typename
			// Convert rest API flexible content names ie: WordPressAcf_flexibile_content
			// to a hyphenated name that will match our React component naming convention
			const componentName = createComponentName( moduleType )
			// Add a case statement for each flexible content field below
			// and return the corresponding React component
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
			<Layout pageTitle={ data.wordpressPage.title }>
				{ data.wordpressPage.acf.modules_page.map( ( module ) => getModuleComponent( module ) ) }
			</Layout>
		)
	} else { // Return Gutenburg content or empty page
		return (
			<Layout pageTitle={ data.wordpressPage.title }>
				<section className="gutenberg-content">
					<div className="gutenberg-content__inner">
						<div className='gutenburg-content__content' dangerouslySetInnerHTML={ { __html: data.wordpressPage.content } } />
					</div>
				</section>
			</Layout>
		)
	}
}

export default pageTemplate

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
		wordpressPage( wordpress_id: { eq: $id } ) {
			wordpress_id
			title
			excerpt
			acf {
				# modules_page - this name can vary and should match the name of your flexible content field
				modules_page {
					# __typename is the auto-generated name of each flexible content subfield example: "WordPressAcf_subfield_name"
					# this field is used to generate dynamic component names in page.js
					__typename
					# This section queries a flexible content subfield and all nested fields within
					# Update the subfield name in the line below and add all nested fields needed in your component
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
