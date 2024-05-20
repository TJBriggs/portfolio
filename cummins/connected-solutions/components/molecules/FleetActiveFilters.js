import { useEffect, useState } from 'react';
import Image from 'next/image';
import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';

const FleetActiveFilters = ({ filterState, getFilterState }) => {

	const [showMore, setShowMore] = useState(false);
	const handleFilterToggle = () => {
		getFilterState(!filterState);
	}

	const handleExport = () => {
		console.log('export something');
	}

	const handleShowMore = (event) => {
		event.preventDefault();
		setShowMore(!showMore);
	}

	useEffect(() => {
		const filterLinks = document.querySelectorAll('.active-filters__filter-link');

		filterLinks.forEach((link) => {
			link.addEventListener('click', (event) => {
				event.preventDefault();
				link.classList.toggle('hidden');
			});
		});
	}, [])

	return (
		<div className="active-filters mobile-only">
			<div className="active-filters__default-inner">
				<div className="active-filters__mobile-heading">
					<Heading
						level='h1'
						text='Fleet Health'
					/>
					<a className='export-link' onClick={handleExport}>
						<Icon iconName='download' />
					</a>
				</div>
				<div className="active-filters__toggle-wrap">
					<Heading
						classeNames='compact'
						level='h3'
						text='Active Filters'
					/>
					<a className='filter-toggle' onClick={handleFilterToggle}>
						<Icon iconName='filter' />
						<span>Filter</span>
					</a>
				</div>
				<div className="active-filters__filter-wrap">
					<a className="active-filters__filter-link">
						<div className="active-filters__filter-icon">
							<Image
								alt='Immediate Action'
								src={`/icons/multicolor/immediate-action.svg`}
								layout="responsive"
								width={32}
								height={32}
							/>
						</div>
						<span className='active-filters__remove-filter'><Icon iconName='close-thick' /></span>
					</a>
					<a className="active-filters__filter-link">
						<div className="active-filters__filter-icon">
							<Image
								alt='Service Within 3 Days'
								src={`/icons/multicolor/service-3days.svg`}
								layout="responsive"
								width={32}
								height={32}
							/>
						</div>
						<span className='active-filters__remove-filter'><Icon iconName='close-thick' /></span>
					</a>
					<a className="active-filters__filter-link">
						<div className="active-filters__filter-icon">
							<Image
								alt='Service Within 7 Days'
								src={`/icons/multicolor/service-7days.svg`}
								layout="responsive"
								width={32}
								height={32}
							/>
						</div>
						<span className='active-filters__remove-filter'><Icon iconName='close-thick' /></span>
					</a>
					<a className="active-filters__filter-link">
						<span className="active-filters__filter-text">4586</span>
						<span className='active-filters__remove-filter'><Icon iconName='close-thick' /></span>
					</a>
					<a className="active-filters__filter-link">
						<span className="active-filters__filter-text">West Coast</span>
						<span className='active-filters__remove-filter'><Icon iconName='close-thick' /></span>
					</a>
					<a className="active-filters__filter-link">
						<span className="active-filters__filter-text">Trucking</span>
						<span className='active-filters__remove-filter'><Icon iconName='close-thick' /></span>
					</a>
					<a className="active-filters__filter-link">
						<span className="active-filters__filter-text">Really Long Filter Name</span>
						<span className='active-filters__remove-filter'><Icon iconName='close-thick' /></span>
					</a>
					<a className="active-filters__filter-link">
						<span className="active-filters__filter-text">Really Long Filter Name</span>
						<span className='active-filters__remove-filter'><Icon iconName='close-thick' /></span>
					</a>
					<span className={`active-filters__show-more${showMore ? ' visible' : ''}`}>
						<a className="active-filters__filter-link">
							<span className="active-filters__filter-text">5751</span>
							<span className='active-filters__remove-filter'><Icon iconName='close-thick' /></span>
						</a>
						<a className="active-filters__filter-link">
							<span className="active-filters__filter-text">East Coast</span>
							<span className='active-filters__remove-filter'><Icon iconName='close-thick' /></span>
						</a>
					</span>
				</div>
				<div className="active-filters__link-wrap">
					<a className='active-filters__show-link' onClick={handleShowMore}>
						{showMore ?
							<>
								See Less Filters
							</> :
							<>
								See All Filters (<span>10</span>)
							</>
						}

					</a>
				</div>
			</div>
		</div>
	);
};

export default FleetActiveFilters;
