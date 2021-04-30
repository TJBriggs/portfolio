import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import './header-nav-styles.css'
import './footer-nav-styles.css'
//import PropTypes from 'prop-types'

const Navigation = ( { navType, data } ) => {
	const menus = data.allWordpressWpApiMenusMenusItems.edges;
	let menuClass = ''
	let navItems = ''

	if( 'header-nav' === navType ) {
		menuClass = 'site-header'
		menus.map( function( menu ) {
			if( 'Main Menu' === menu.node.name ) {
				navItems = menu.node.items
			}
			return navItems
		} );
	} else {
		menuClass = 'site-footer'
		menus.map( function( menu ) {
			if( 'Footer Menu' === menu.node.name ) {
				navItems = menu.node.items
			}
			return navItems
		} );
	}

	const toggleSubmenu = ( e ) => {
		e.preventDefault()
		console.log( 'Submenu Toggle Clicked' );
	}

	return (
		<nav className={ menuClass + '__nav' } role='navigation'>
			<ul className={ menuClass + '__menu' } role='menubar'>
			{ navItems.map( ( item ) =>
				<li key={ `${ menuClass }-${ item.object_slug }` } role='none'>
					{ null === item.wordpress_children ?
						<Link to={ `/${ item.object_slug }` } role='menuitem'>{ item.title }</Link>
					:
						<>
							<Link to={ `/${ item.object_slug }` } role='menuitem' className='submenu-link' aria-haspopup='true'>{ item.title }</Link>
							<button
								className='toggle toggle--primary'
								aria-expanded='false'
								aria-controls='sub-menu'
								aria-label='Submenu Toggle'
								onClick={ toggleSubmenu }>
									<span className='bar top'></span>
									<span className='bar bottom'></span>
							</button>
							<ul className='sub-menu sub-menu--primary' role='menu'>
								{ item.wordpress_children.map( ( child ) =>
									<li key={ `${ menuClass }-${ child.object_slug }` } role='none'>
										{ null === child.wordpress_children ?
											<Link to={ `/${ item.object_slug }/${ child.object_slug }` } role='menuitem'>{ child.title }</Link>
										:
											<>
												<Link to={ `/${ item.object_slug }/${ child.object_slug }` } role='menuitem' className='submenu-link' aria-haspopup='true'>{ child.title }</Link>
												<button
													className='toggle toggle--secondary'
													aria-expanded='false'
													aria-controls='sub-menu'
													aria-label='Submenu Toggle'
													onClick={ toggleSubmenu }>
														<span className='bar top'></span>
														<span className='bar bottom'></span>
												</button>
												<ul className='sub-menu sub-menu--secondary' role='menu'>
													{ child.wordpress_children.map( ( subChild ) =>
														<li key={ `${ item.object_slug }/${ child.object_slug }/${ subChild.object_slug }` } role='none'>
															<Link to={ `/${ item.object_slug }/${ child.object_slug }/${ subChild.object_slug }` }role='menuitem'>{ subChild.title }</Link>
														</li>
													) }
												</ul>
											</>
										}
									</li>
								) }
							</ul>
						</>
					}
				</li>
			) }
			</ul>
		</nav>
	)
}

export default props => (
	<StaticQuery
		query={ graphql`
			query {
				allWordpressWpApiMenusMenusItems {
					edges {
						node {
							name
							items {
								title
								object_slug
								wordpress_children {
									title
									object_slug
									wordpress_children {
										title
										object_slug
									}
								}
							}
						}
					}
				}
			}
		`}
		render={ ( data ) => (
			<Navigation data={ data } { ...props } />
		) }
	/>
)
