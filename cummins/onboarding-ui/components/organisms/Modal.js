import Image from 'next/image';
import SpinnerImage from '../../public/images/engine-spinner-v2.png';
/**
 * @example
 * <Modal
 *    @param {boolean} modalState - (represents whether modal is open or closed)
 * />
 */
const Modal = ({ modalState }) => {
	return (
		<div className='modal' role='dialog' aria-labelledby='dialogTitle' aria-hidden={modalState ? 'false' : 'true'}>
			<div className='modal__content'>
				<h1 id='dialogTitle'>Creating your Fleet Account</h1>
				<img src='./images/engine-spinner.png' alt="Engine Spinner" />
			</div>
		</div>
	);
};

export default Modal;
