import Heading from '../atoms/Heading';
import BackLink from '../atoms/BackLink';
import ComplexSearchField from './ComplexSearchField';

const FleetHealthHeader = () => {
	return (
		<div className='page-header fleet-header'>
			<div className="page-header__default-inner">
				<div className='page-header__wrap'>
					<BackLink
						url='/'
					/>
					<div className="page-header__search-wrap">
						<Heading level='h1' text='Fleet Health' />
						<ComplexSearchField placeholderText='Ex. Giga-78' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FleetHealthHeader;
