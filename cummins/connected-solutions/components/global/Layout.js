import Link from 'next/link';
import SidebarNav from './SidebarNav';
import Header from './Header';
import LibraryHeader from './LibraryHeader';

const Layout = ({ children, pageSlug, siteSection }) => {
	return (
		<div className={`app-container page-${pageSlug}${siteSection ? ' ' + siteSection : ''}`}>
			<Link href={`#main-content`}>
				<a id='skip-link' className='screen-reader-text'>Skip to content</a>
			</Link>
			<SidebarNav pageSlug={pageSlug} />
			<main role="main" id='main-content' className='app-torso'>
				{siteSection !== 'component-library' ?
					<Header pageSlug={pageSlug} />
					:
					<LibraryHeader pageSlug={pageSlug} />
				}
				{children}
			</main>
		</div>
	);
};

export default Layout;
