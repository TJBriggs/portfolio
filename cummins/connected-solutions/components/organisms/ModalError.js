/**
 * @example
 * <ModalError />
 */
const ModalError = () => {

	return (
		<>
			<p className='large'>Repair Instructions</p>
			<ul>
				<li className='large'>Invalid character(s) {`[ # $ % A & ( ) + = : < > ? "`}</li>
				<li className='large'>Empty or Invalid Value</li>
			</ul>
		</>
	);
};

export default ModalError;
