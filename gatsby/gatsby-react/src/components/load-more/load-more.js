import React from 'react'
import loadMorePosts from './load-more-posts'
import loadingIcon from '../../images/loading-icon.gif'
import './load-more-styles.css'

class LoadMore extends React.Component {
	// On click of load more button, capture neccessary
	// elements to show more posts and neccesary buttons
	handleClick = ( event ) => {
		event.preventDefault();
		const elemIndex = this.props.pageIndex + 1
		const targetIndex = this.props.pageIndex + 2
		const elem = document.getElementById( `cpt-button-` + elemIndex )
		const nextElem = document.getElementById( `cpt-button-` + targetIndex )
		const target = document.getElementById( `cpt-page-` + targetIndex )

		loadMorePosts( elemIndex, elem, nextElem, target )
	}

	render() {
		return (
			<button
				className= { `cpt-grid__button${ this.props.visibility }` }
				id={ `cpt-button-${ this.props.pageIndex + 1 }` }
				data-page={ this.props.pageIndex + 2 }
				onClick={ this.handleClick }
			>
				<span>Load More</span>
				<img src={ loadingIcon } alt='Loading Icon' />
			</button>
		)
	}
}

export default LoadMore
