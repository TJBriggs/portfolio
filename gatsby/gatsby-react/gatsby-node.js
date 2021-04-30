/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ( { graphql, actions } ) => {
	const { createPage } = actions
	const pageTemplate = path.resolve( './src/templates/page.js' )
	const postTemplate = path.resolve( './src/templates/post.js' )
	const cptTemplate = path.resolve( './src/templates/cpt.js' )
	const passwordTemplate = path.resolve( './src/templates/page-password.js' )

	return graphql(`
		{
			allWordpressPage {
				edges {
					node {
						id
						slug
						wordpress_id
						path
						template
					}
				}
			}
			allWordpressPost {
				edges {
					node {
						id
						slug
						wordpress_id
						path
						template
					}
				}
			}
			allWordpressWpExampleCpt {
				edges {
					node {
						id
						slug
						wordpress_id
						path
						template
					}
				}
			}
		}
	`).then( result => {
		if ( result.errors ) {
			throw result.errors
		}

		const pages = result.data.allWordpressPage.edges

		pages.forEach( page => {
			const template = page.node.template
			if( 'page-password.php' !== template ) {
				createPage( {
					path: `${ page.node.path }`,
					component: pageTemplate,
					context: {
						id: page.node.wordpress_id,
					},
				} )
			} else {
				createPage( {
					path: `${ page.node.path }`,
					component: passwordTemplate,
					context: {
						id: page.node.wordpress_id,
					},
				} )
			}
		} )

		const posts = result.data.allWordpressPost.edges
		posts.forEach( post => {
			createPage( {
				path: `/blog/${ post.node.slug }`,
				component: postTemplate,
				context: {
					id: post.node.wordpress_id,
				},
			} )
		} )

		const cptPosts = result.data.allWordpressWpExampleCpt.edges
		cptPosts.forEach( post => {
			createPage( {
				path: `/example-cpt/${ post.node.slug }`,
				component: cptTemplate,
				context: {
					id: post.node.wordpress_id,
				},
			} )
		} )
	} )
}

