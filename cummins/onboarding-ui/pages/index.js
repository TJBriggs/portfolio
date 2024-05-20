import { motion, AnimatePresence } from 'framer-motion';

// Atoms

// Molecules

// Organisms
import StepOne from '../components/organisms/StepOne';
import StepTwo from '../components/organisms/StepTwo';
import StepThree from '../components/organisms/StepThree';
import StepFour from '../components/organisms/StepFour';
import StepFive from '../components/organisms/StepFive';
import StepSix from '../components/organisms/StepSix';

export default function Home({ getStep, step, modalState, getModalState }) {

	const variants = {
		hidden: {
			x: 500,
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
		},
	}
	return (
		<>
			<AnimatePresence>
				{step === 1 && (
					<motion.div
						key='step-one'
						initial='hidden'
						animate='visible'
						variants={variants}
					>
						<StepOne getStep={getStep} step={step} />
					</motion.div>
				)}
			</AnimatePresence>

			{step === 2 && (
				<motion.div
					key='step-two'
					initial='hidden'
					animate='visible'
					variants={variants}
				>
					<StepTwo getStep={getStep} step={step} />
				</motion.div>
			)}


			{step === 3 && (
				<motion.div
					key='step-three'
					initial='hidden'
					animate='visible'
					variants={variants}
				>
					<StepThree getStep={getStep} step={step} />
				</motion.div>
			)}


			{step === 4 && (
				<motion.div
					initial='hidden'
					animate='visible'
					variants={variants}
				>
					<StepFour getStep={getStep} step={step} />
				</motion.div>
			)}


			{step === 5 && (
				<motion.div
					key='step-five'
					initial='hidden'
					animate='visible'
					variants={variants}
				>
					<StepFive getStep={getStep} getModalState={getModalState} modalState={modalState} />
				</motion.div>
			)}


			{step === 6 && (
				<motion.div
					key='step-six'
					initial='hidden'
					animate='visible'
					variants={variants}
				>
					<StepSix />
				</motion.div>
			)}

		</>
	)
}
