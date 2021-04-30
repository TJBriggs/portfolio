import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import './header-styles.css'
import Navigation from '../navigation/navigation'

const Header = ( { siteLogo } ) => (
	<header className='site-header'>
		<a href='#main-content' className='screen-reader-text'>Skip to main content</a>
		<div className='site-header__inner'>
			<div className="site-header__wrap">
				<Link to="/" className='site-header__logo'>
					<Img fluid={ siteLogo } alt='Gatsby Logo' />
				</Link>
				<Navigation navType='header-nav' />
			</div>
		</div>
	</header>
)

export default Header
