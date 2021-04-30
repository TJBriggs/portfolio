import React, { Component } from 'react'
import CptItem from '../cpt-item/cpt-item'
import LoadMore from '../load-more/load-more'
import { animate, arrayChunk, debounce } from '../../utils/helpers.js'
import './cpt-grid-styles.css'

class CptGrid extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			groupCount: '',
			posts: props.cptPosts.edges,
			hashIndex: 0
		};
	}

	componentDidMount() {
		this._isMounted = true;
		if ( this._isMounted ) {
			// Check hash and show/hide appropriate posts based on pagination
			this.updateVisibility( window.location.hash )
			// Adjust groupCount based on settings below
			this.updateCount()
			// On resize, change groupCount based on settings below
			window.addEventListener( 'resize', this.updateCount.bind( this ) )
		}
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	// Customize the number of posts and breakpoints to
	// show appropriate number based on screen width
	updateCount = debounce( function() {
		if( 801 <= window.innerWidth ) {
			this.setState( { groupCount: 9 } )
		} else {
			this.setState( { groupCount: 10 } )
		}
	}, 250 );

	updateVisibility = ( hash ) => {
		if( '' !== hash ) {
			// Get integer at end of hash and store in state
			const hashInt = hash.split('-')[2];
			this.setState( { hashIndex: hashInt } );
			// Once state changes and render occurs, get the appropriate
			// scroll to element and animate scrollto
			window.setTimeout( function() {
				const scrollToElement = document.getElementById( hash.substring(1) );
				// Scroll to URL hash group
				animate( document.scrollingElement || document.documentElement, "scrollTop", "", 0, scrollToElement.offsetTop, 1000, true );
			}, 500 );
		}
	}

	render() {
		const posts = this.state.posts
		const groupCount = parseInt( this.state.groupCount )
		const postGroups = arrayChunk( posts, groupCount )
		const totalGroups = postGroups.length
		const hashIndex = this.state.hashIndex
		let wrapVisibility = ''
		let btnWrapVisibility = ''
		let btnVisibility = ''
		return (
			<section className='cpt-grid'>
				<div className="cpt-grid__inner">
					{ null !== postGroups ?
						postGroups.map( ( group, index ) => {
							// Show or hide elements based on hashIndex and the groups index
							if( hashIndex === 0 && index === 0) {
								wrapVisibility = ' visible';
								btnWrapVisibility = ' visible';
								btnVisibility = ' visible';
							} else if( hashIndex > index + 1 ) {
								wrapVisibility = ' visible';
								btnWrapVisibility = ' hidden';
								btnVisibility = ' hidden';
							} else if( hashIndex < index + 1 ) {
								wrapVisibility = ' hidden';
								btnWrapVisibility = ' hidden';
								btnVisibility = ' hidden';
							} else {
								wrapVisibility = ' visible';
								btnWrapVisibility = ' visible';
								btnVisibility = ' visible';
							}
							return (
								<div className={ `cpt-grid__wrap${ wrapVisibility } ${ hashIndex } ${ index }` } key={ index } id={ `cpt-page-${ index + 1 }` }>
									{ group.map( ( post ) =>
										<CptItem itemElements={ post.node } key={ post.node.wordpress_id } />
									) }
									{	// Don't show last group's button since there is no more posts to load
										totalGroups !== ( index + 1 ) &&
										<div className={ `cpt-grid__button-wrap${ btnWrapVisibility } ${ index } ${ hashIndex } ${ totalGroups } ` }>
											<LoadMore pageIndex={ index } visibility={ btnVisibility } />
										</div>
									}
								</div>
							)
						} )
					:
						<div><p>No Posts Available</p></div>
					}
				</div>
			</section>
		)
	}
}

export default CptGrid
