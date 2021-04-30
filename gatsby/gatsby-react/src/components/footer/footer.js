import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import './footer-styles.css'

import Navigation from '../navigation/navigation'

const Footer = ( { siteLogo } ) => (
	<footer className='site-footer'>
		<div className='site-footer__inner'>
			<div className="site-footer__wrap">
				<Navigation navType='footer-nav' />
				<Link to="/" className='site-footer__logo'>
					<Img fluid={ siteLogo } />
				</Link>
			</div>
		</div>
	</footer>
)

Footer.propTypes = {
	siteTitle: PropTypes.string,
}

Footer.defaultProps = {
	siteTitle: ``,
}

export default Footer
