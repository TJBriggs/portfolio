import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../atoms/Icon';

/**
 * @example
 * <ProgressBar
 *    @param {func} getStep - (optional, allows you to trigger a step change)
 *    @param {string} step - (optional, tracks current step)
 * />
 */
const ProgressBar = ({ getStep, step }) => {

	const variants = {
		hidden: {
			x: -150,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				delay: 0.25,
				duration: 1,
				damping: 11,
				mass: 0.8,
				stiffness: 120,
			}
		}
	}

	useEffect(() => {
		/* Get current step */
		getStep(step);
	}, [getStep, step]);

	const handleStep = (event) => {
		const target = event.target;
		let stepID;
		if (target.classList.contains('progress-bar__number') || target.classList.contains('progress-bar__check')) {
			stepID = parseInt(target.parentNode.dataset.stepid);
		} else if (target.classList.contains('icon')) {
			stepID = parseInt(target.parentNode.parentNode.dataset.stepid);
		} else {
			stepID = parseInt(target.dataset.stepid);
		}
		getStep(stepID);
	}
	return (
		<div className='progress-bar'>
			<header className="progress-bar__header">
				{step != 6 &&
					<h5 className='progress-bar__eyebrow'>Your Progress</h5>
				}
				{step === 1 &&
					<motion.h4
						initial='hidden'
						animate='visible'
						variants={variants}
						className='progress-bar__heading'
					>
						Create Company Account
					</motion.h4>
				}
				{step === 2 &&
					<motion.h4
						initial='hidden'
						animate='visible'
						variants={variants}
						className='progress-bar__heading'
					>
						Share Company Information
					</motion.h4>
				}
				{step === 3 &&
					<motion.h4
						initial='hidden'
						animate='visible'
						variants={variants}
						className='progress-bar__heading'
					>
						Review Terms Of Service
					</motion.h4>
				}
				{step === 4 &&
					<motion.h4
						initial='hidden'
						animate='visible'
						variants={variants}
						className='progress-bar__heading'
					>
						Select Telematics Provider
					</motion.h4>
				}
				{step === 5 &&
					<motion.h4
						initial='hidden'
						animate='visible'
						variants={variants}
						className='progress-bar__heading'
					>
						Review Registration
					</motion.h4>
				}
				{step === 6 &&
					<motion.div
						className="progress-callouts"
						initial='hidden'
						animate='visible'
						variants={variants}
					>
						<h1 className='progress-callouts__heading'>Better Insights Are Just The Beginning</h1>
						<ul>
							<li><span className='progress-callouts__icon'><Icon iconName='updates' /></span>Real-time updates</li>
							<li><span className='progress-callouts__icon'><Icon iconName='eye-thick' /></span>Complete fleet visibility</li>
							<li><span className='progress-callouts__icon'><Icon iconName='mobile-device' /></span>On-the-go access</li>
						</ul>
					</motion.div>
				}
			</header>
			{step != 6 &&
				<div className="progress-bar__wrap">
					<div className={`progress-bar__step${step === 1 ? ' active' : ' complete'}`}>
						<span className="progress-bar__ring" data-stepid={1} onClick={handleStep}>
							<span className="progress-bar__number">1</span>
							<span className="progress-bar__check">
								<Icon iconName='check' />
							</span>
						</span>
					</div>
					<div className={`progress-bar__step${step === 2 ? ' active' : ''}${step >= 3 ? ' complete' : ''}`}>
						<span className="progress-bar__ring" data-stepid={2} onClick={handleStep}>
							<span className="progress-bar__number">2</span>
							<span className="progress-bar__check">
								<Icon iconName='check' />
							</span>
						</span>
					</div>
					<div className={`progress-bar__step${step === 3 ? ' active' : ''}${step >= 4 ? ' complete' : ''}`}>
						<span className="progress-bar__ring" data-stepid={3} onClick={handleStep}>
							<span className="progress-bar__number">3</span>
							<span className="progress-bar__check">
								<Icon iconName='check' />
							</span>
						</span>
					</div>
					<div className={`progress-bar__step${step === 4 ? ' active' : ''}${step >= 5 ? ' complete' : ''}`}>
						<span className="progress-bar__ring" data-stepid={4} onClick={handleStep}>
							<span className="progress-bar__number">4</span>
							<span className="progress-bar__check">
								<Icon iconName='check' />
							</span>
						</span>
					</div>
					<div className={`progress-bar__step${step === 5 ? ' active' : ''}${step > 5 ? ' complete' : ''}`}>
						<span className="progress-bar__ring" data-stepid={5} onClick={handleStep}>
							<span className="progress-bar__number">5</span>
							<span className="progress-bar__check">
								<Icon iconName='check' />
							</span>
						</span>
					</div>
				</div>
			}
		</div>
	);
};

export default ProgressBar;
