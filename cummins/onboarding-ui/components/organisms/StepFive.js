import { useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import ButtonGroup from '../molecules/ButtonGroup';


/**
 * @example
 * <StepFive
 *    @param {func} getStep - (optional, allows you to trigger a step change)
 *    @param {func} getModalState - (change modal state on click of button)
 *    @param {boolean} modalState - (represents whether modal is open or closed)
 * />
 */
const StepFive = ({ getStep, getModalState, modalState }) => {
	const handleClick = (event) => {
		event.preventDefault();
		const targetStep = parseInt(event.target.dataset.step);
		getStep(targetStep);
	}
	const handleModal = () => {
		getModalState(!modalState);
	}
	return (
		<section className='step step--five'>
			<header className='step__header'>
				<h2>Review and submit registation</h2>
			</header>
			<div className="edit-info company-info">
				<header className='edit-info__header'>
					<h3>Company Information</h3>
					<a className='edit-info__edit' data-step={2} onClick={handleClick} role='button'>Back to Edit</a>
				</header>
				<div className="edit-info__content">
					<div className='edit-info__item'>
						<h4>Market</h4>
						<p>On-Highway</p>
					</div>
					<div className='edit-info__item'>
						<h4>Phone Number</h4>
						<p>(317) 382-2999</p>
					</div>
					<div className='edit-info__item'>
						<h4>Job Title</h4>
						<p>Fleet Manager</p>
					</div>
					<div className='edit-info__item'>
						<h4>Address</h4>
						<p>23011 N. Hague Road</p>
						<p>Indianapolis, IN 46240</p>
						<p>United States</p>
					</div>
					<div className='edit-info__item'>
						<h4>Cummins Contact</h4>
						<p>Barbara Cadstrom</p>
						<p>barbara.cadstrom@cummins.com</p>
					</div>
				</div>
			</div>
			<div className="edit-info terms-info">
				<header className='edit-info__header'>
					<h3>Terms of service</h3>
					<a className='edit-info__edit' data-step={3} onClick={handleClick} role='button'>Back to Edit</a>
				</header>
				<div className="edit-info__content">
					<div className="edit-info__item">
						<h4>Date Accepted</h4>
						<p><span className='checkmark'><Icon iconName='check' /></span> Agreement signed at 11:32 AM on 05/05/20</p>
					</div>
				</div>
			</div>
			<div className="edit-info telematics-info">
				<header className='edit-info__header'>
					<h3>Telematics providers</h3>
					<a className='edit-info__edit' data-step={4} onClick={handleClick} role='button'>Back to Edit</a>
				</header>
				<div className="edit-info__content">
					<h4>Telematics Service Providers</h4>
					<div className="edit-info__item">
						<h5>DriverTech</h5>
						<p>#44-5968599</p>
					</div>
					<div className="edit-info__item">
						<h5>GeoTab</h5>
						<p>50980349, 56987903</p>
					</div>
					<div className="edit-info__item">
						<h5>Lorem Ipsum</h5>
						<p>#44-5968599</p>
					</div>
					<div className="edit-info__item">
						<h5>Lorem Ipsum</h5>
						<p>50980349</p>
					</div>
				</div>
			</div>
			<div className="edit-info__instructions">
				<p>Once information above is correct, please press “Submit Registration” below.</p>
			</div>
			<ButtonGroup layout='vertical'>
				<Button text='Submit Registration' width='full' linkType='trigger' onClick={handleModal} />
			</ButtonGroup>
		</section>
	);
};

export default StepFive;
