// Atoms
import CircleIcon from '../components/atoms/CircleIcon';
import Heading from '../components/atoms/Heading';


// Molecules
import PageHeader from '../components/molecules/PageHeader';
import NarrowContent from '../components/molecules/NarrowContent';

const Faq = () => {

	return (
		<>
			<PageHeader />
			<NarrowContent classNames='faqs'>
				<Heading level='h1' classNames='text-center' text='How can we help you?' />
				<div className='faqs__item'>
					<Heading level='h2' text='What does the equipment status icon mean?' />
					<p className='large'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<ul className='icons-list'>
						<li className='icons-list__item'>
							<CircleIcon iconName='shutdown' backgroundColor='red' size='large' />
							<div className='icons-list__text'>
								<Heading level='h4' classNames='compact' text='Immediate Action' />
								<p className='large'>Ensure equipment is in a safe location and shut down your engine. Contact a Cummins certified repair location for immediate repair assistance. The timestamp here represents the most severe fault occurrence.</p>
							</div>
						</li>
						<li className='icons-list__item'>
							<CircleIcon iconName='service-3days' backgroundColor='orange' size='large' />
							<div className='icons-list__text'>
								<Heading level='h4' classNames='compact' text='Service within 3 days' />
								<p className='large'>Ensure equipment is in a safe location and shut down your engine. Contact a Cummins certified repair location for immediate repair assistance. The timestamp here represents the most severe fault occurrence.</p>
							</div>
						</li>
						<li className='icons-list__item'>
							<CircleIcon iconName='service-7days' backgroundColor='yellow' size='large' />
							<div className='icons-list__text'>
								<Heading level='h4' classNames='compact' text='Service within 7 days' />
								<p className='large'>Ensure equipment is in a safe location and shut down your engine. Contact a Cummins certified repair location for immediate repair assistance. The timestamp here represents the most severe fault occurrence.</p>
							</div>
						</li>
						<li className='icons-list__item'>
							<CircleIcon iconName='planned-maintenance' backgroundColor='blue' size='large' />
							<div className='icons-list__text'>
								<Heading level='h4' classNames='compact' text='Next PM' />
								<p className='large'>Ensure equipment is in a safe location and shut down your engine. Contact a Cummins certified repair location for immediate repair assistance. The timestamp here represents the most severe fault occurrence.</p>
							</div>
						</li>
						<li className='icons-list__item'>
							<CircleIcon iconName='check' backgroundColor='green' size='large' />
							<div className='icons-list__text'>
								<Heading level='h4' classNames='compact' text='Ok' />
								<p className='large'>Ensure equipment is in a safe location and shut down your engine. Contact a Cummins certified repair location for immediate repair assistance. The timestamp here represents the most severe fault occurrence.</p>
							</div>
						</li>
						<li className='icons-list__item'>
							<CircleIcon iconName='inactive' backgroundColor='gray' size='large' />
							<div className='icons-list__text'>
								<Heading level='h4' classNames='compact' text='Inactive' />
								<p className='large'>Ensure equipment is in a safe location and shut down your engine. Contact a Cummins certified repair location for immediate repair assistance. The timestamp here represents the most severe fault occurrence.</p>
							</div>
						</li>
					</ul>
				</div>
				<div className='faqs__item'>
					<Heading level='h2' text='Why can&apos;t I see the status of my equipment status or map?' />
					<p className='large'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				<div className='faqs__item'>
					<Heading level='h2' text='What are parameter updates?' />
					<p className='large'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				<div className='faqs__item'>
					<Heading level='h2' text='What calibration updates are available?' />
					<p className='large'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</NarrowContent>
		</>
	);
};

export default Faq;
