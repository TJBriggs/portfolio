import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { createComponentName } from '../utils/helpers.js'

// Import all components that correspond with flexible content fields
import PasswordBlock from '../components/password-block/password-block'
import CtaBlock from '../components/cta-block/cta-block'
import CoverImage from '../components/cover-image/cover-image'
import NoModules from '../components/no-modules/no-modules'

class passwordTemplate extends Component {
	state = {
		pages: {},
		authenticated: false,
		content: {}
	};
	// This method is run when the password form is submitted
	addPageData = ( page ) => {
		// 1. Take a copy of the existing state
		const pages = { ...this.state.pages }
		// 2. Add new page to pages setting page id as key
		pages[ this.props.pageContext.id ] = page;
		// 3. Update state
		this.setState( {
			pages: pages,
			authenticated: true,
			content: page.content.modules
		} );
		// Set the page content to a string and add to session storage
		const authenticatedPages = JSON.stringify( this.state.pages );
		sessionStorage.setItem( 'authenticatedPages', authenticatedPages );
	}

	componentDidMount() {
		// Get this pages ID
		const pageID = this.props.pageContext.id;
		const storedIDs = [];
		// Get data from session storage
		const authenticatedPages = sessionStorage.getItem( 'authenticatedPages' );
		// Convert data from string to an object
		const pagesObject = JSON.parse( authenticatedPages );
		// If pagesObject has data, loop through the object keys (wordpress_id's)
		// to determine which pages have been authenticated
		if( null !== pagesObject ) {
			Object.keys( pagesObject ).map( function( key ) {
				// Push ids to an array for comparison later
				return storedIDs.push( parseFloat( key ) );
			} );
		}
		// If there are authenticated pages and this pageID is included in storedIDs
		// in the storedIDs, then this page has already been authenticated
		if( null !== pagesObject && storedIDs.includes( pageID ) ) {
			// Grab the content from the stored object and update state
			const theseModules = pagesObject[ pageID ].content.modules;
			this.setState( {
				pages: pagesObject,
				authenticated: true,
				content: theseModules
			} );
		} else if( null !== pagesObject ) {
			this.setState( {
				pages: pagesObject
			} );
		} else {
			return false;
		}
	}

	// Reset state after exiting page
	// componentWillUnmount() {
	// 	this.setState( {
	// 		pages: {},
	// 		authenticated: false,
	// 		content: {}
	// 	} );
	// }

	render() {
		const pageID = this.props.pageContext.id;
		const authenticated = this.state.authenticated;
		const modules = this.state.content;
		// If modules are not empty
		if( null !== modules ) {
			// Pull in each modules corresponding React component
			const getModuleComponent = ( module, index ) => {
				// Get raw Flexible Content Field names
				const moduleType = module.acf_fc_layout
				// Convert rest API flexible content names ie: WordPressAcf_flexibile_content
				// to a hyphenated name that will match our React component naming convention
				const componentName = createComponentName( moduleType )
				// Add a case statement for each flexible content field below
				// and return the corresponding React component
				switch ( componentName ) {
					case 'cta-block':
						return <CtaBlock key={ index } { ...module } />

					case 'cover-image':
						return <CoverImage key={ index } { ...module } />

					default:
						return <NoModules />
				}
			}
			// Return the password protected content
			return (
				<Layout pageTitle={ this.props.data.wordpressPage.title }>
					{ ! authenticated ?
						<PasswordBlock addPageData={ this.addPageData } pageID={ pageID } />
					:
						<>
							{ modules.map( ( module, index ) => getModuleComponent( module, index ) ) }
						</>
					}
				</Layout>
			)
		} else {
			return (
				<Layout pageTitle={ this.props.data.wordpressPage.title }>
					{ ! authenticated ?
						<PasswordBlock addPageData={ this.addPageData } pageID={ pageID } />
					:
						<section className="gutenberg-content">
							<div className="gutenberg-content__inner">
								<div className='gutenburg-content__content' dangerouslySetInnerHTML={ { __html: this.props.data.wordpressPage.content } } />
							</div>
						</section>
					}
				</Layout>
			)
		}
	}
}

export default passwordTemplate

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
			content
			excerpt
		}
	}
`
