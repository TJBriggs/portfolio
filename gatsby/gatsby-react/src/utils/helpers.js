require( 'intersection-observer' );

/**
 *
 * createComponentName()
 *
 * Convert rest API module naming to React Component naming convention
 *
 * @param module.__typename from Graphql query
 *
 */
export function createComponentName( moduleType ) {
	let moduleNameRaw = '';
	// If string starts with 'WordPressAcf_'
	if( moduleType.startsWith( 'WordPressAcf_' ) ) {
		// Remove these unnecessary characters
		moduleNameRaw = moduleType.slice( 13 );
	} else {
		moduleNameRaw = moduleType;
	}
	// Replace underscore with hyphen
	const componentName = moduleNameRaw.replace( '_', '-' );
	// Return
	return componentName;
};

/**
 *
 * truncateText()
 *
 * Helper function to truncate text
 *
 * @params ( text to truncate, length to truncate )
 *
 */
export function truncateText( a, b ) {
	const text = a
	const textLength = b
	let trimmedText = text.substr( 0, textLength )
	trimmedText = trimmedText.substr( 0, Math.min( trimmedText.length, trimmedText.lastIndexOf(' ') ) ) + '...'
	return trimmedText
};

/**
 *
 * debounce()
 *
 * Helper function to debounce GPU intensive tasks like resize and scroll
 *
 * @params ( funtion to debounce, optional wait time, or optional immediate )
 *
 */
export function debounce( func, wait, immediate ) {
	let timeout;
	return function() {
		let context = this, args = arguments;

		/**
		 * Set timeout for debounce
		 */
		let later = function() {
			timeout = null;
			if ( !immediate ) func.apply( context, args );
		};

		let callNow = immediate && !timeout;

		clearTimeout( timeout );
		timeout = setTimeout( later, wait );
		if ( callNow ) func.apply( context, args );

	};
}

/**
 *
 * arrayChunk()
 *
 * Helper function to chunk array into groups
 *
 * @params ( array to chunk, number of items in each chunk )
 *
 */
export function arrayChunk( arr, size ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'Input should be Array' );
	}

	if ( 'number' !== typeof size ) {
		throw new TypeError( 'Size should be a Number' );
	}

	let result = [];
	for ( let i = 0; i < arr.length; i += size ) {
		result.push( arr.slice( i, size + i ) );
	}
	return result;
};

/**
 *
 * animate()
 *
 * Helper function to animate scrollTo Hash
 *
 * @params ( element to scrollto )
 *
 */
export function animate( elem, style, unit, from, to, time, prop ) {
	if ( !elem ) {
		return;
	}
	let start = new Date().getTime(),
		timer = setInterval( function () {
			let step = Math.min( 1, ( new Date().getTime() - start ) / time );
			if ( prop ) {
				elem[ style ] = ( from + step * ( to - from ) ) + unit;
			} else {
				elem.style[ style ] = ( from + step * ( to - from ) ) + unit;
			}
			if (step === 1) {
				clearInterval( timer );
			}
		}, 25 );
	if ( prop ) {
		elem[ style ] = from + unit;
	} else {
		elem.style[ style ] = from + unit;
	}
};

/**
 *
 * infiniteScroll
 *
 * Intersection Observer callback function to be ran when the element is in view
 * This may need to be customized for different use cases
 *
 * @params ( entries, observer )
 *
 */
const infiniteScroll = function( entries, observer ) {
	entries.forEach( ( entry ) => {
		if ( entry.isIntersecting ) {
			const elem = entry.target;
			const elemIndex = elem.getAttribute( 'data-page' );
			const target = document.getElementById( `blog-page-` + elemIndex );

			if ( null !== target ) {
				// 1. Show loading icon
				elem.classList.remove( 'hidden' );
				elem.classList.add( 'loading' );
				// Set delay to show loading icon for 2 seconds
				window.setTimeout( function() {
					// 2. Hide loading icon
					elem.classList.remove( 'loading' );
					target.classList.remove( 'hidden' );
					// 3. Fade in content
					if ( ! target.classList.contains( 'fade-in' ) ) {
						target.classList.add( 'fade-in' );
					}
					// 4. Set trigger to loaded and wrapper to visible
					elem.classList.add( 'loaded' );
					target.classList.remove( 'fade-in' );
					target.classList.add( 'visible' );
					// 3. Turn off Observer for this element
					observer.unobserve( entry.target );
					// 4. Add #hash pushState to URL for deep linking
					window.history.pushState( null, null, `/blog/#blog-page-` + elemIndex );
				}, 2000 );
			}
		}
	} );
};

/**
 *
 * setObserver()
 *
 * Set up Intersection Observer to trigger callback when element is in view
 *
 * @params ( element to observe, element to base intersection, optional margins on rootElement, threshold trigger )
 *
 */
export function setObserver( element, rootElement, rootMargin, threshold ) {
	// Define observer for later use
	let observer;
	// Convert argument from node elements to array
	const elements = Array.from( element );

	// Options for observer
	const options = {
		root: rootElement,
		rootMargin: rootMargin + 'px',
		threshold: threshold
	};

	// Set new Observer and pass callback function and options
	observer = new IntersectionObserver( infiniteScroll, options );

	// Loop through the passed agruments and call the observer on each
	if ( 0 < elements.length ) {
		elements.forEach( item => {
			observer.observe( item );
		} );
	}
};

/* function capFirstconstter( s ) {
	if ( typeof s !== 'string' ) return ''
	return s.charAt( 0 ).toUpperCase() + s.slice( 1 )
} */
