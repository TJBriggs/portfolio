import Heading from '../atoms/Heading';
import Button from '../atoms/Button';

const NotificationsHeader = () => {
	return (
		<div className='notifications-header'>
			<div className="notifications-header__default-inner">
				<div className='notifications-header__wrap'>
					<div className="notifications-header__heading-wrap">
						<Heading level='h1' text='PrevenTech Notifications' tagText='New' />
						<p>For kate.owens@gmail.com</p>
					</div>
					<div className="notifications-header__button-wrap">
						<Button
							size='small'
							linkType='modal'
							text='+ Add Recipient'
							url='add-recipient'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotificationsHeader;
