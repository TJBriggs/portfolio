/**
 *
 * loadMorePosts()
 *
 * Determine targeted group of posts to show, fade in, and set pushState for deep linking
 *
 * @params ( targetIndex )
 *
 */
export default function loadMorePosts( elemIndex, elem, nextElem, target ) {
	if ( null !== target ) {
		// 1. Show loading icon
		elem.classList.add( 'loading' );
		// Set delay to show loading icon for 1 second
		window.setTimeout( function() {
			// 2. Hide loading icon
			elem.classList.remove( 'loading' );
			target.classList.remove( 'hidden' );
			// 3. Fade in target content
			if ( ! target.classList.contains( 'fade-in' ) ) {
				target.classList.add( 'fade-in' );
			}
			// 4. Fade out trigger and set trigger to loaded to hide
			elem.classList.add( 'fade-out' );
			window.setTimeout( function() {
				elem.classList.remove( 'fade-out' );
				target.classList.remove( 'fade-in' );
				elem.classList.add( 'loaded' );
				elem.parentNode.classList.remove( 'visible' );
				elem.parentNode.classList.add( 'hidden' );
				if( null !== nextElem ) {
					nextElem.classList.remove( 'hidden' );
					nextElem.classList.add( 'visible' );
					nextElem.parentNode.classList.remove( 'hidden' );
					nextElem.parentNode.classList.add( 'visible' );
				}
				target.classList.add( 'visible' );
			}, 500 );

			// 4. Add #hash pushState to URL for deep linking
			window.history.pushState( null, null, `/example-cpt/#cpt-page-` + ( elemIndex + 1 ) );

		}, 1000 );
	}
};
