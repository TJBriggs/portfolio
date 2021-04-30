require( 'dotenv' ).config( {
	path: `.env.${ process.env.NODE_ENV }`
} );

// Algolia Search Queries
const pageQuery = `{
	allWordpressPage {
		edges {
			node {
				title
				wordpress_id
				path
				slug
				excerpt
				content
				type
				acf {
					hero_headline
					hero_text
					modules_page {
						... on WordPressAcf_cover_image {
							headline
							text
						}
						... on WordPressAcf_cta_block {
						headline
							ctas {
								headline
								text
							}
						}
					}
				}
			}
		}
	}
}`;

const postQuery = `{
	allWordpressPost {
		edges {
			node {
				title
				wordpress_id
				path
				slug
				excerpt
				content
				type
				acf {
					modules_post {
						... on WordPressAcf_cover_image {
							headline
							text
						}
						... on WordPressAcf_cta_block {
							headline
							ctas {
								headline
								text
							}
						}
					}
				}
			}
		}
	}
}`;

const cptQuery = `{
	allWordpressWpExampleCpt {
		edges {
			node {
				title
				wordpress_id
				slug
				path
				excerpt
				content
				type
				acf {
					modules_example_cpt {
						headline
						text
					}
				}
			}
		}
	}
}`;

const queries = [
	{
		query: pageQuery,
		transformer: ( { data } ) => data.allWordpressPage.edges.map( ( { node } ) => node ),
	},
	{
		query: postQuery,
		transformer: ( { data } ) => data.allWordpressPost.edges.map( ( { node } ) => node ),
	},
	{
		query: cptQuery,
		transformer: ( { data } ) => data.allWordpressWpExampleCpt.edges.map( ( { node } ) => node ),
	},
];

// Supposed to set relationship between CPT and CPT Taxonomy, but doesn't seem to be working
// function mapTaxToCPT( { entities } ) {
// 	const tax = entities.filter( e => e.__type === `wordpress__wp_example_tax` )
// 	return entities.map( e => {
// 		if ( e.__type === `wordpress__wp_example_cpt` ) {
// 			let hasTax = e.tax && Array.isArray( e.tax ) && e.tax.length
// 			// Replace tax with links to their nodes.
// 			if ( hasTax ) {
// 			e.tax___NODE = e.tax.map(
// 				c => tax.find( gObj => c === gObj.wordpress_id ).id
// 			)
// 			delete e.tax
// 			}
// 		}
// 		return e
// 	} )
// }

module.exports = {
	siteMetadata: {
		title: `Gatsby React`,
		description: `Frontend starter for a Headless WordPress CMS.`,
		viewport: `width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover`,
		siteUrl: `http://thadbriggs.com`,
		image: `image-path`,
		author: `@tbriggs`,
		social: {
			twitter: `@ithad820`,
		},
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				baseUrl: `test-gatsby-admin.pantheonsite.io`,
				protocol: `http`,
				hostingWPCOM: false,
				useACF: true,
				acfOptionPageIds: [],
				auth: {
					jwt_user: process.env.JWT_USERNAME,
					jwt_pass: process.env.JWT_PASSWORD,
					jwt_base_path: "/jwt-auth/v1/token",
				},
				// Set cookies that should be send with requests to wordpress as key value pairs
				cookies: {},
				verboseOutput: true,
				concurrentRequests: 10,
				searchAndReplaceContentUrls: {
					sourceUrl: `test-gatsby-admin.pantheonsite.io`,
					replacementUrl: `test-gatsby-admin.pantheonsite.io`,
				},
				concurrentRequests: 10,
				includedRoutes: [
					"**/categories",
					"**/posts",
					"**/pages",
					"**/media",
					"**/menus",
					"**/tags",
					"**/taxonomies",
					"**/users",
					"**/example-cpt",
					"**/example-tax",
					"**/jwt-auth/",
				],
				excludedRoutes: [],
				//normalizer: mapTaxToCPT,
			},
		},
		{
			resolve: `gatsby-plugin-algolia`,
			options: {
				appId: process.env.ALGOLIA_APP_ID,
				apiKey: process.env.ALGOLIA_API_KEY,
				indexName: process.env.ALGOLIA_INDEX_NAME,
				queries,
				chunkSize: 10000, // default: 1000
			},
		},
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [
					require(`postcss-import`),
					require(`postcss-simple-vars`),
					require(`postcss-nested`),
					require(`postcss-mixins`),
					require(`postcss-extend-rule`),
					require(`postcss-preset-env`)({
						stage: 0,
						autoprefixer: {
							grid: true
						}
					}),
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
				ignore: [`**/\.*`], // ignore files starting with a dot
			},
		},
	],
}
