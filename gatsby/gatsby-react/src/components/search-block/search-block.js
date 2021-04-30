import React from 'react'
import SearchPreview from '../search-preview/search-preview'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import './search-block-styles.css'

const searchClient = algoliasearch( '1CYSZBLN43', '21f1dfb87586652496327891dcfc8f0a' );

const SearchBlock = () => {
	return (
		<section className='search-block'>
			<div className='search-block__inner'>
				<InstantSearch searchClient={ searchClient } indexName='test_GATSBY'>
					<SearchBox />
					<Hits hitComponent={ SearchPreview } />
				</InstantSearch>
			</div>
		</section>
	)
}

export default SearchBlock
