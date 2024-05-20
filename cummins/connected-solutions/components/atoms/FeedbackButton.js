import { useEffect, useState } from 'react';
import Icon from './Icon';

const FeedbackButton = () => {

	useEffect(() => {
		const feedbackButton = document.querySelector('.feedback-button');
		window.onscroll = function () {
			var scrollLimit = 300;
			var scrollValue = window.scrollY;
			if (scrollValue >= scrollLimit) {
				feedbackButton.classList.add('shrink');
			} else {
				feedbackButton.classList.remove('shrink');
			}
		};
	}, []);
	return (
		<a className='feedback-button button pre-field secondary large modal-link' data-modalid='feedback-modal'>
			<Icon iconName='feedback-icon' classes={['icon--left']} />
			<span className='button__text'>Feedback</span>
		</a>
	);
};

export default FeedbackButton;
