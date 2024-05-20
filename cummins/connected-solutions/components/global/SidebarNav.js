
import Button from '../atoms/Button';

const SidebarNav = () => {
	return (
		<nav className='sidebar-nav'>
			<ul className='sidebar-nav__menu'>
				<li className='sidebar-nav__menu-item'>
					<Button
						type='secondary'
						linkType='normal'
						size='default'
						round={true}
						url='/'
						text='Page #1'
						iconOne='placeholder'
					/>
				</li>
				<li className='sidebar-nav__menu-item'>
					<Button
						type='secondary'
						linkType='normal'
						size='default'
						round={true}
						url='/'
						text='Page #2'
						iconOne='placeholder'
					/>
				</li>
				<li className='sidebar-nav__menu-item'>
					<Button
						type='secondary'
						linkType='normal'
						size='default'
						round={true}
						url='/'
						text='Page #3'
						iconOne='placeholder'
					/>
				</li>
				<li className='sidebar-nav__menu-item'>
					<Button
						type='secondary'
						linkType='normal'
						size='default'
						round={true}
						url='/'
						text='Page #4'
						iconOne='placeholder'
					/>
				</li>
				<li className='sidebar-nav__menu-item'>
					<Button
						type='secondary'
						linkType='normal'
						size='default'
						round={true}
						url='/'
						text='Page #5'
						iconOne='placeholder'
					/>
				</li>
				<li className='sidebar-nav__menu-item'>
					<Button
						type='secondary'
						linkType='normal'
						size='default'
						round={true}
						url='/'
						text='Page #6'
						iconOne='placeholder'
					/>
				</li>
				<li className='sidebar-nav__menu-item'>
					<Button
						type='secondary'
						linkType='normal'
						size='default'
						round={true}
						url='/'
						text='Page #7'
						iconOne='placeholder'
					/>
				</li>
				<li className='sidebar-nav__menu-item'>
					<Button
						type='secondary'
						linkType='normal'
						size='default'
						round={true}
						background='none'
						color='dark'
						url='/'
						text='Page #8'
						iconOne='placeholder'
					/>
				</li>
				<li className='sidebar-nav__menu-item'>
					<Button
						type='secondary'
						linkType='normal'
						size='default'
						round={true}
						background='none'
						color='dark'
						url='/'
						text='Page #9'
						iconOne='placeholder'
					/>
				</li>
			</ul>
		</nav>
	);
};

export default SidebarNav;
