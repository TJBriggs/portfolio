import Link from 'next/link';
import Heading from '../atoms/Heading';
import Logo from '../../public/logos/logo.svg';
import NavToggle from '../../public/icons/nav-toggle.svg';

const Header = ({ pageSlug }) => {
	return (
		<header className='app-header'>
			<Link href='/'>
				<a className='app-header__logo-link'>
					<Logo />
				</a>
			</Link>
			<Link href='#'>
				<a className='app-header__toggle'>
					<NavToggle />
				</a>
			</Link>
			<div className="app-header__header-wrap">
				<div className="app-header__default-inner">
					<div className='app-header__header-flex'>
						<Heading level='h2' text='Administration' />
						<nav className='app-header__nav'>
							<ul className='app-header__menu'>
								<li className='app-header__menu-item'>
									<a>Pages</a>
									<ul className='app-header__submenu atoms'>
										<li className='app-header__submenu-item'>
											<Link href='/manage-assets/'>
												<a className={pageSlug === 'manage-assets' ? 'active' : ''}>Manage Assets</a>
											</Link>
										</li>
										<li className='app-header__submenu-item'>
											<Link href='/asset-details/'>
												<a className={pageSlug === 'asset-details' ? 'active' : ''}>Asset Details</a>
											</Link>
										</li>
										<li className='app-header__submenu-item'>
											<Link href='/manage-users/'>
												<a className={pageSlug === 'manage-users' ? 'active' : ''}>Manage Users</a>
											</Link>
										</li>
										<li className='app-header__submenu-item'>
											<Link href='/notifications/'>
												<a className={pageSlug === 'notifications' ? 'active' : ''}>Notifications</a>
											</Link>
										</li>
										<li className='app-header__submenu-item'>
											<Link href='/fleet-health/'>
												<a className={pageSlug === 'fleet-health' ? 'active' : ''}>Fleet Health</a>
											</Link>
										</li>
										<li className='app-header__submenu-item'>
											<Link href='/customer-support/'>
												<a className={pageSlug === 'customer-support' ? 'active' : ''}>Customer Support</a>
											</Link>
										</li>
										<li className='app-header__submenu-item'>
											<Link href='/faq/'>
												<a className={pageSlug === 'faq' ? 'active' : ''}>FAQ</a>
											</Link>
										</li>
									</ul>
								</li>
								<li className='app-header__menu-item'>
									<a>Atoms</a>
									<ul className='app-header__submenu atoms'>
										<li className='app-header__submenu-item'>
											<Link href='/component-library/atoms/typography/'>
												<a className={pageSlug === 'typography' ? 'active' : ''}>Typography</a>
											</Link>
										</li>
										<li className='app-header__submenu-item'>
											<Link href='/component-library/atoms/color/'>
												<a className={pageSlug === 'color' ? 'active' : ''}>Colors</a>
											</Link>
										</li>
										<li className='app-header__submenu-item'>
											<Link href='/component-library/atoms/buttons/'>
												<a className={pageSlug === 'buttons' ? 'active' : ''}>Buttons</a>
											</Link>
										</li>
										<li className='app-header__submenu-item'>
											<Link href='/component-library/atoms/forms/'>
												<a className={pageSlug === 'forms' ? 'active' : ''}>Forms</a>
											</Link>
										</li>
										<li className='app-header__submenu-item'>
											<Link href='/component-library/atoms/icons/'>
												<a className={pageSlug === 'icons' ? 'active' : ''}>Icons</a>
											</Link>
										</li>
										<li className='app-header__submenu-item'>
											<Link href='/component-library/atoms/miscellaneous/'>
												<a className={pageSlug === 'miscellaneous' ? 'active' : ''}>Misc.</a>
											</Link>
										</li>
									</ul>
								</li>
								<li className='app-header__menu-item'>
									<a>Molecules</a>
									<ul className='app-header__submenu molecules'>
										<li className='app-header__submenu-item'>
											<Link href='/component-library/molecules/rounded-elements/'>
												<a className={pageSlug === 'rounded-elements' ? 'active' : ''}>Rounded Elements</a>
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header >
	);
};

export default Header;
