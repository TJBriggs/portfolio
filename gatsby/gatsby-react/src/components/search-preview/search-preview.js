import React from 'react'
import { Link } from 'gatsby'
import { Highlight } from 'react-instantsearch-dom';
import './search-preview-styles.css'

const SearchPreview = ( { hit } ) => {
	let linkURL = '';
	const type = hit.type;
	if( 'post' === type ) {
		linkURL = `/blog/${ hit.path }`;
	} else {
		linkURL = hit.path;
	}
	return (
		<article className='hit-content' key={ hit.wordpress_id }>
			<h3 className='hit-content__title'>
				<Link to={ linkURL }>
					<Highlight
						hit={ hit }
						attribute="title"
						tagName="mark"
					/>
				</Link>
			</h3>
			<h6 className='hit-content__category'>Content Type: { hit.type }</h6>
			<p className='hit-content__text'>
				<Highlight
					hit={ hit }
					attribute="content"
					tagName="mark"
				/>
			</p>
		</article>
	)
}

export default SearchPreview;
