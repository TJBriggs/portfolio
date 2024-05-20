import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Aside from './Aside';
import Modal from '../organisms/Modal';


const Layout = ({ children, pageSlug }) => {
	const [step, setStep] = useState(1);
	const [modalState, setModalState] = useState(false);
	const getStep = (step) => {
		setStep(step);
	}
	const getModalState = (state) => {
		const body = document.querySelector('body');
		setModalState(state);
		body.classList.toggle('modal--open');
		/* Simulate Processing Request */
		setTimeout(() => {
			setStep(6);
			setModalState(false);
			body.classList.toggle('modal--open');
		}, 5000);
	}

	/* Function to determine all children */
	function recursiveMap(children, fn) {
		return React.Children.map(children, child => {
			if (!React.isValidElement(child) || typeof child.type == 'string') {
				return child;
			}
			if (child.props.children) {
				child = React.cloneElement(child, {
					children: recursiveMap(child.props.children, fn)
				});
			}
			return fn(child);
		});
	}

	/* Pass getStep and step to child element (index.js) */
	const childrenWithProps = recursiveMap(children, child => {
		/* Checking isValidElement is the safe way and avoids a TS error too. */
		if (React.isValidElement(child)) {
			/* Pass additional props here */
			return React.cloneElement(child, { getStep, step, modalState, getModalState });
		}
		return child;
	});

	const variants = {
		hidden: {
			y: -100,
			opacity: 0,
		},
		visible: {
			y: 0,
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

	return (
		<div className={`app-container page-${pageSlug}`}>
			<Link href={`#main-content`}>
				<a id='skip-link' className='screen-reader-text'>Skip to content</a>
			</Link>
			<h1 className='app-title screen-reader-text'>Cummins Onboarding &amp; Registration</h1>
			<Aside getStep={getStep} step={step} />
			<main role="main" id='main-content' className='app-torso'>
				<div className='app-torso__inner'>
					<header className="app-torso__header">
						<motion.p
							className='small'
							initial='hidden'
							animate='visible'
							variants={variants}
						>
							Questions? Email us at <a href='mailto:connectedsol.support@cummins.com'>connectedsol.support@cummins.com</a></motion.p>
					</header>
					<div className="app-torso__content">
						{childrenWithProps}
					</div>
				</div>
			</main>
			<Modal modalState={modalState} />
		</div>
	);
};

export default Layout;
