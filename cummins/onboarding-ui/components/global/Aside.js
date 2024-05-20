import Link from 'next/link';
import { motion } from 'framer-motion';
import LogoSVG from '../../public/logos/logo.svg';
import ProgressBar from './ProgressBar';

/**
 * @example
 * <Aside
 *    @param {func} getStep - (optional, allows you to trigger a step change)
 *    @param {string} step - (optional, tracks current step)
 * />
 */
const Aside = ({ getStep, step }) => {
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
		<aside className='app-sidebar' aria-label='Progress'>
			<div className='app-sidebar__inner'>
				<div className='app-sidebar__logo-wrap'>
					<motion.div
						initial='hidden'
						animate='visible'
						variants={variants}
					>
						<Link href='/'>
							<a className='app-sidebar__logo-link'>
								<LogoSVG />
							</a>
						</Link>
					</motion.div>
				</div>

				<ProgressBar getStep={getStep} step={step} />
			</div>
		</aside>
	);
};

export default Aside;
