import Image from 'next/image';
import Heading from '../atoms/Heading';

const SingleColTable = ({ data, tableHeading }) => {
	let sum = 0;

	return (
		<div className='single-table'>
			<ul className={`single-table__list${tableHeading ? '' : ' no-heading'}`}>
				{tableHeading && (
					<Heading level='h3' classNames='compact' text={tableHeading} />
				)}
				{data.map((item, index) => {
					sum += parseInt(item.count);
					return (
						<li className='single-table__list-item' key={index}>
							{/* <a className={`single-table__icon ${item.status}`}><Icon iconName={item.status} /></a> */}
							<a className={`single-table__icon ${item.status}`} href="#">
								<Image
									alt={item.status}
									src={`/icons/multicolor/${item.status}.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</a>
							<a className='single-table__link h4 compact no-underline' href="#">{item.label}</a>
							<span className='single-table__count'>{item.count}</span>
						</li>
					);
				})}
				<li className='single-table__list-item total-count'>
					<span className='total h3 compact'>Total</span>
					<span className='single-table__count'>{sum}</span>
				</li>
			</ul>
		</div>
	);
};

export default SingleColTable;
