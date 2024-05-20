import Box from '../atoms/Box';

/**
 * @example
 * <Boxes
 *    @param {object} boxes - (displays specific boxes based on checked boxes)
 * />
 */
const Boxes = ({ boxes }) => {
	if (boxes.length > 0) {
		return (
			<>
				<h3>Enter your telematics customer ID</h3>
				<p className='small'>Don&apos;t worry, you can also provide these later.</p>
				<div className="boxes boxes-scroll">
					{boxes.map((box, index) => (
						<Box box={box} key={index} />
					))}
				</div>
			</>
		);
	}
};

export default Boxes;
