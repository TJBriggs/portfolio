import React from 'react'
import BlogItem from '../blog-item/blog-item'
import { animate, arrayChunk, debounce } from '../../utils/helpers.js'
import loadingIcon from '../../images/loading-icon.gif'
import './blog-grid-styles.css'

class BlogGrid extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			groupCount: '',
			posts: props.blogPosts.edges,
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

	// Customize the number of posts to show up based on screen size
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
		let triggerVisibility = ''
		return (
			<section className='blog-grid'>
				<div className="blog-grid__inner">
					{ null !== postGroups ?
						postGroups.map( ( group, index ) => {
							// Show or hide elements based on hashIndex and the groups index
							if( 0 === hashIndex && ( index + 1) === 1 ) {
								wrapVisibility = ' visible';
								triggerVisibility = ' hidden';
							} else if( hashIndex > index + 1 ) {
								wrapVisibility = ' visible';
								triggerVisibility = ' loaded';
							} else if( hashIndex < index + 1 ) {
								wrapVisibility = ' hidden';
								triggerVisibility = ' hidden';
							} else {
								wrapVisibility = ' visible';
								triggerVisibility = ' hidden';
							}
							return (
								<div className={ `blog-grid__wrap${ wrapVisibility } ${ hashIndex } ${ index + 1 } ` } key={ index } id={ `blog-page-${ index + 1 }` }>
									{ group.map( ( post ) =>
										<BlogItem itemElements={ post.node } key={ post.node.wordpress_id } itemSlug='blog' />
									) }
									{	// Don't last group's trigger since there is no more posts to load
										totalGroups !== ( index + 1 ) &&
										<div className={ `blog-grid__trigger${ triggerVisibility } ${ index + 1 } ${ totalGroups }` } data-page={ index + 2 }>
											<img src={ loadingIcon } alt='Loading Icon' />
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

export default BlogGrid
