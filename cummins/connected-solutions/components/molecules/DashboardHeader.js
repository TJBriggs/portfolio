import Heading from '../atoms/Heading';
import ComplexSearchField from './ComplexSearchField';

const DashboardHeader = () => {
	return (
		<div className='page-header dashboard-header'>
			<div className="page-header__default-inner">
				<div className='page-header__wrap'>
					<Heading level='h2' text='Asset Map' />
					<ComplexSearchField placeholderText='Ex. Giga-78' />
				</div>
			</div>
		</div>
	);
};

export default DashboardHeader;
