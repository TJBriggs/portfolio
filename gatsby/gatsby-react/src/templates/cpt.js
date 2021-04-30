import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { createComponentName } from '../utils/helpers.js'


// Import all components that correspond with flexible content fields
import CoverImage from '../components/cover-image/cover-image'
import NoModules from '../components/no-modules/no-modules'

const cptTemplate = ( { data } ) => {
	let acfFields = ''
	let flexContent = ''
	if( null !== data.wordpressWpExampleCpt.acf ) {
		acfFields = data.wordpressWpExampleCpt.acf
		if( null !== data.wordpressWpExampleCpt.acf.modules_example_cpt ) {
			flexContent = data.wordpressWpExampleCpt.acf.modules_example_cpt
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
				case 'cover-image':
					return <CoverImage key={ module.id } { ...module } />

				default:
					return <NoModules />
			}
		}
		return (
			<Layout pageTitle={ data.wordpressWpExampleCpt.title }>
				{ data.wordpressWpExampleCpt.acf.modules_example_cpt.map( ( module ) => getModuleComponent( module ) ) }
			</Layout>
		)
	} else { // Return Gutenburg content or empty page
		return (
			<Layout pageTitle={ data.wordpressWpExampleCpt.title }>
				<section className="gutenberg-content">
					<div className="gutenberg-content__inner">
						<div className='gutenburg-content__content' dangerouslySetInnerHTML={ { __html: data.wordpressWpExampleCpt.content } } />
					</div>
				</section>
			</Layout>
		)
	}
}

export default cptTemplate

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
		wordpressWpExampleCpt( wordpress_id: {eq: $id } ) {
			wordpress_id
			title
			content
			excerpt
			acf {
				modules_example_cpt {
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
				}
			}
		}
	}
`
