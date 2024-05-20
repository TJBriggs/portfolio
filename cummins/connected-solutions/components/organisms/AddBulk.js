import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BulkAssetsTable from './BulkAssetsTable';
import Icon from '../atoms/Icon';
import RoundedBox from '../molecules/RoundedBox';

/**
 * @example
 * <AddBulk
 *    @param {array} bulkAssetData - (asset data for table)
 *    @param {func} getBulkStep - (function to set current step)
 * />
 */
const AddBulk = ({ getBulkStep, bulkAssetData }) => {
	const [step, setStep] = useState(1);
	useEffect(() => {
		const anchorlinks = document.querySelectorAll('a[href^="#"]');

		/* Get Current Step */
		getBulkStep(step);

		/* Scroll To Anchor Links */
		anchorlinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				const hashval = link.getAttribute('href');
				const target = document.getElementById(hashval.substring(1));
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
					inline: 'center'
				});
				history.pushState(null, null, hashval);
				e.preventDefault();
			});
		});

	}, [getBulkStep, step]);
	const handleStep = () => {
		setStep(step + 1);
		getBulkStep(step + 1);
	}
	return (
		<>
			<div className='progress-header'>

				{step === 1 &&
					<p className='progress-header__text'>Download Asset Spreadsheet Template</p>
				}
				{step === 2 &&
					<p className='progress-header__text'>Upload Your Asset Spreadsheet</p>
				}
				{step === 3 &&
					<p className='progress-header__text'>Verify and Correct Your Asset Upload Issues</p>
				}
				<div className="progress-bar">
					<div className="progress-bar__wrap">
						<div className={`progress-bar__step${step === 1 ? ' active' : ' complete'}`}>
							<span className="progress-bar__ring">
								<span className="progress-bar__number">1</span>
								<span className="progress-bar__check">
									<Icon iconName='check' />
								</span>
							</span>
						</div>
						<div className={`progress-bar__step${step === 2 ? ' active' : ''}${step === 3 ? ' complete' : ''}`}>
							<span className="progress-bar__ring" onClick={handleStep}>
								<span className="progress-bar__number">2</span>
								<span className="progress-bar__check">
									<Icon iconName='check' />
								</span>
							</span>
						</div>
						<div className={`progress-bar__step${step === 3 ? ' active' : ''}`}>
							<span className="progress-bar__ring" onClick={handleStep}>
								<span className="progress-bar__number">3</span>
								<span className="progress-bar__check">
									<Icon iconName='check' />
								</span>
							</span>
						</div>
					</div>
				</div>
				{step === 3 &&
					<a className='button primary small disabled bulk-next'><span className='button__text'>Next</span></a>
				}
			</div>
			<div className={`progress-view step--1${step === 1 ? ' active' : ''}`}>
				<p className='instruction-text'>Please download and fill out the asset upload template</p>
				<a className='button primary large' href='#' download onClick={handleStep}><Icon iconName='download-box' classes={['icon--left']} /><span className='button__text'>Download Template</span></a>
				<p className='email-text'>Questions? Email us at <a href='mailto: connectedsol.support@cummins.com'>connectedsol.support@cummins.com</a></p>
			</div>
			<div className={`progress-view step--2${step === 2 ? ' active' : ''}`}>
				<p className='instruction-text'>Upload populated asset template</p>
				<div className='upload-box'>
					<Icon iconName='upload-box' />
					<p><a href='#' onClick={handleStep}>Browse</a> to choose a file</p>
				</div>
				<a className='button secondary large modal-close'><span className='button__text'>Cancel</span></a>
			</div>
			<div className={`progress-view step--3${step === 3 ? ' active' : ''}`}>
				<RoundedBox
					classes={['error-header', 'flush-no-bottom-round']}
					width='full'
				>
					<div className="error-header__content">
						<p>Click on colored cells to view Error Messages</p>
						<div className="error-header__buttons">
							<div className="error-header__button-wrap">
								<a href="#error-1" className='tab-button error button-prev horizontal-scroll'><Icon iconName='caret-left' /></a>
								<span className="indicator indicator--error">3 Critical Errors</span>
								<a href="#error-4" className='tab-button error button-next horizontal-scroll'><Icon iconName='caret-right' /></a>
							</div>
							<div className="error-header__button-wrap">
								<a href="#warning-1" className='tab-button warning button-prev horizontal-scroll'><Icon iconName='caret-left' /></a>
								<span className="indicator indicator--warning">2 New Groups</span>
								<a href="#warning-2" className='tab-button warning button-next horizontal-scroll'><Icon iconName='caret-right' /></a>
							</div>
						</div>
						<p>Hover over colored cell to view error message Single click to Edit</p>
					</div>
				</RoundedBox>
				<BulkAssetsTable bulkAssetData={bulkAssetData} />
			</div>
		</>
	);
};

AddBulk.propTypes = {
	getBulkStep: PropTypes.func.isRequired
};

export default AddBulk;
