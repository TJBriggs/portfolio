// Atoms
import Icon from '../components/atoms/Icon';
import Heading from '../components/atoms/Heading';

// Molecules
import RoundedBox from '../components/molecules/RoundedBox';
import PageHeader from '../components/molecules/PageHeader';


const CustomerSupport = () => {

	return (
		<>
			<PageHeader />
			<RoundedBox
				classes={['support-box']}
				width='full'
			>
				<Heading level='h2' classNames='h1' text='PrevenTech and OptiTech Support' />
				<div className='support-box__item'>
					<Heading level='h4' classNames='compact' text='Email' />
					<a className='large' href='mailto:digital.support@cummins.com'>digital.support@cummins.com</a>
				</div>
			</RoundedBox>
			<RoundedBox
				classes={['support-box']}
				width='full'
			>
				<Heading level='h2' classNames='h1' text='Cummins CARE Support' />
				<div className='support-box__item'>
					<Heading level='h4' classNames='compact' text='Toll Free' />
					<a className='large' href='tel:18002866467'>1-800-CUMMINS<sup>&trade;</sup> (1-800-286-6467)</a>
				</div>
				<div className='support-box__item'>
					<Heading level='h4' classNames='compact' text='Direct Dial' />
					<a className='large' href='tel:18123773000'>1-812-377-3000</a>
				</div>
				<div className='support-box__item'>
					<Heading level='h4' classNames='compact' text='Find a service center' />
					<a className='location-link large' href='#' rel='noopener noreferrer' target='_blank'>
						<Icon iconName='map-marker' />
						<span>Service Locator</span>
					</a>
				</div>
			</RoundedBox>
		</>
	);
};

export default CustomerSupport;
