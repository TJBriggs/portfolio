import Heading from '../atoms/Heading';
import RoundedBox from './RoundedBox';

const FleetHealthSummary = () => {
	return (
		<RoundedBox>
			<div className="summary-wrap">
				<Heading level='h4' classNames='compact' text='Immediate Action' />
				<p className='compact'>Ensure equipment is in a safe location and shut down your engine. Contact a Cummins certified repair location for immediate repair assistance.</p>
				<Heading level='h4' classNames='compact' text='Service within 3 Days' />
				<p className='compact'>Contact a Cummins certified repair location for repair assistance. Equipment may continue to be operated until end of shift, but may be subject to performance and/or road speed limitations.</p>
				<Heading level='h4' classNames='compact' text='Service within 7 Days' />
				<p className='compact'>Schedule service with a Cummins certified repair location as soon as convenient. Vehicle may still be operated until scheduled service.</p>
				<Heading level='h4' classNames='compact' text='Planned Maintenance' />
				<p className='compact'>Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum..</p>
				<Heading level='h4' classNames='compact' text='Ok' />
				<p className='compact'>Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum..</p>
				<Heading level='h4' classNames='compact' text='Inactive' />
				<p className='compact'>Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.</p>
			</div>
		</RoundedBox>
	);
};

export default FleetHealthSummary;
