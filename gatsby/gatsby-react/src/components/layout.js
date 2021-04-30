/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SEO from './seo'
import Header from './header/header'
import Footer from './footer/footer'

const Layout = ( { children, pageTitle } ) => (
	<StaticQuery
		query={ graphql`
			query GlobalElements {
				site {
					siteMetadata {
						title
					}
				}
				file( relativePath: {eq: "gatsby-icon.png"} ) {
					childImageSharp {
						fluid( maxWidth: 200 ) {
							...GatsbyImageSharpFluid_noBase64
						}
					}
				}
			}
		` }
		render={ data => (
			<div className='site-container'>
				<SEO title={ pageTitle } defer={ false } />
				<Header siteLogo={ data.file.childImageSharp.fluid } />
				<main role='main' className='main-container'>{ children }</main>
				<Footer siteLogo={ data.file.childImageSharp.fluid } />
			</div>
		) }
	/>
)

export default Layout
