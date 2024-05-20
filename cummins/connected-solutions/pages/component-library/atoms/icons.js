import Image from 'next/image';
import Icon from '../../../components/atoms/Icon';

const icons = () => {
	return (
		<>
			<section className='cl-header'>
				<div className='cl-header__wide-inner'>
					<h1 className='cl-header__heading h3 small'>Atoms - Icons</h1>
				</div>
			</section>
			<section className='icomoon-group'>
				<div className="icomoon-group__wide-inner">
					<h2 className='hero section-heading'>Icomoon Font Icon Kit</h2>
					<p>Icomoon font files are stored at the following path of this project: <strong>/public/font-icons/</strong></p>
				</div>
			</section>
			<section className='icons-group dark'>
				<div className='icons-group__wide-inner'>
					<h2 className='hero section-heading'>Icons - Dark</h2>
					<div className="icons-group__grid">
						<div className="icons-group__item">
							<Icon iconName='angry' />
							<span className="icons-group__text">angry</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='caret-down' />
							<span className="icons-group__text">caret-down</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='caret-left' />
							<span className="icons-group__text">caret-left</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='caret-right' />
							<span className="icons-group__text">caret-right</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='caret-up' />
							<span className="icons-group__text">caret-up</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='check' />
							<span className="icons-group__text">check</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='close' />
							<span className="icons-group__text">close</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='close-thick' />
							<span className="icons-group__text">close-thick</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='derate' />
							<span className="icons-group__text">derate</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='disabled' />
							<span className="icons-group__text">disabled</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='download' />
							<span className="icons-group__text">download</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='download-box' />
							<span className="icons-group__text">download-box</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='download-underline' />
							<span className="icons-group__text">download-underline</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='edit' />
							<span className="icons-group__text">edit</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='edit-underline' />
							<span className="icons-group__text">edit-underline</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='email' />
							<span className="icons-group__text">email</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='engine' />
							<span className="icons-group__text">engine</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='engine-fill' />
							<span className="icons-group__text">engine-fill</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='eye' />
							<span className="icons-group__text">eye</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='eye-thick' />
							<span className="icons-group__text">eye-thick</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='fan' />
							<span className="icons-group__text">fan</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='feedback-icon' />
							<span className="icons-group__text">feedback-icon</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='filter' />
							<span className="icons-group__text">filter</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='fire-truck' />
							<span className="icons-group__text">fire-truck</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='frown' />
							<span className="icons-group__text">frown</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='happy' />
							<span className="icons-group__text">happy</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='heavy-equipment' />
							<span className="icons-group__text">heavy-equipment</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='immediate-action' />
							<span className="icons-group__text">immediate-action</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='inactive' />
							<span className="icons-group__text">inactive</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='magnifying-glass' />
							<span className="icons-group__text">magnifying-glass</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='map-marker' />
							<span className="icons-group__text">map-marker</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='mobile-device' />
							<span className="icons-group__text">mobile-device</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='neutral' />
							<span className="icons-group__text">neutral</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='okay' />
							<span className="icons-group__text">okay</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='placeholder' />
							<span className="icons-group__text">placeholder</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='planned-maintenance' />
							<span className="icons-group__text">planned-maintenance</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='question-mark' />
							<span className="icons-group__text">question-mark</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='service-3days' />
							<span className="icons-group__text">service-3days</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='service-7days' />
							<span className="icons-group__text">service-7days</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='shutdown' />
							<span className="icons-group__text">shutdown</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='smile' />
							<span className="icons-group__text">smile</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='sort-asc' />
							<span className="icons-group__text">sort-asc</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='sort-default' />
							<span className="icons-group__text">sort-default</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='sort-desc' />
							<span className="icons-group__text">sort-desc</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='stopwatch' />
							<span className="icons-group__text">stopwatch</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='thumbs-up' />
							<span className="icons-group__text">thumbs-up</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='transmission' />
							<span className="icons-group__text">transmission</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='trash' />
							<span className="icons-group__text">trash</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='truck' />
							<span className="icons-group__text">truck</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='undo' />
							<span className="icons-group__text">undo</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='upload' />
							<span className="icons-group__text">upload</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='upload-box' />
							<span className="icons-group__text">upload-box</span>
						</div>
					</div>
				</div>
			</section>
			{/* eslint-disable */}
			<section className='icons-group light'>
				<div className='icons-group__wide-inner'>
					<h2 className='hero section-heading'>Icons - Light</h2>
					<div className="icons-group__grid">
						<div className="icons-group__item">
							<Icon iconName='angry' />
							<span className="icons-group__text">angry</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='caret-down' />
							<span className="icons-group__text">caret-down</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='caret-left' />
							<span className="icons-group__text">caret-left</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='caret-right' />
							<span className="icons-group__text">caret-right</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='caret-up' />
							<span className="icons-group__text">caret-up</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='check' />
							<span className="icons-group__text">check</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='close' />
							<span className="icons-group__text">close</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='close-thick' />
							<span className="icons-group__text">close-thick</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='derate' />
							<span className="icons-group__text">derate</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='disabled' />
							<span className="icons-group__text">disabled</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='download' />
							<span className="icons-group__text">download</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='download-box' />
							<span className="icons-group__text">download-box</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='download-underline' />
							<span className="icons-group__text">download-underline</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='edit' />
							<span className="icons-group__text">edit</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='edit-underline' />
							<span className="icons-group__text">edit-underline</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='email' />
							<span className="icons-group__text">email</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='engine' />
							<span className="icons-group__text">engine</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='engine-fill' />
							<span className="icons-group__text">engine-fill</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='eye' />
							<span className="icons-group__text">eye</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='eye-thick' />
							<span className="icons-group__text">eye-thick</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='fan' />
							<span className="icons-group__text">fan</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='feedback-icon' />
							<span className="icons-group__text">feedback-icon</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='filter' />
							<span className="icons-group__text">filter</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='fire-truck' />
							<span className="icons-group__text">fire-truck</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='frown' />
							<span className="icons-group__text">frown</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='happy' />
							<span className="icons-group__text">happy</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='heavy-equipment' />
							<span className="icons-group__text">heavy-equipment</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='immediate-action' />
							<span className="icons-group__text">immediate-action</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='inactive' />
							<span className="icons-group__text">inactive</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='magnifying-glass' />
							<span className="icons-group__text">magnifying-glass</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='map-marker' />
							<span className="icons-group__text">map-marker</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='mobile-device' />
							<span className="icons-group__text">mobile-device</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='neutral' />
							<span className="icons-group__text">neutral</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='okay' />
							<span className="icons-group__text">okay</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='placeholder' />
							<span className="icons-group__text">placeholder</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='planned-maintenance' />
							<span className="icons-group__text">planned-maintenance</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='question-mark' />
							<span className="icons-group__text">question-mark</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='service-3days' />
							<span className="icons-group__text">service-3days</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='service-7days' />
							<span className="icons-group__text">service-7days</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='shutdown' />
							<span className="icons-group__text">shutdown</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='smile' />
							<span className="icons-group__text">smile</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='sort-asc' />
							<span className="icons-group__text">sort-asc</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='sort-default' />
							<span className="icons-group__text">sort-default</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='sort-desc' />
							<span className="icons-group__text">sort-desc</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='stopwatch' />
							<span className="icons-group__text">stopwatch</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='thumbs-up' />
							<span className="icons-group__text">thumbs-up</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='transmission' />
							<span className="icons-group__text">transmission</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='trash' />
							<span className="icons-group__text">trash</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='truck' />
							<span className="icons-group__text">truck</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='undo' />
							<span className="icons-group__text">undo</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='upload' />
							<span className="icons-group__text">upload</span>
						</div>
						<div className="icons-group__item">
							<Icon iconName='upload-box' />
							<span className="icons-group__text">upload-box</span>
						</div>
					</div>
				</div>
			</section>
			{/* eslint-enable */}
			<section className='icons-group mulit-color'>
				<div className='icons-group__wide-inner'>
					<h2 className='hero section-heading'>Icons - Multicolor</h2>
					<div className="icons-group__grid">
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='available'
									src={`/icons/multicolor/available.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">available</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='cancelled'
									src={`/icons/multicolor/cancelled.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">cancelled</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='completed'
									src={`/icons/multicolor/completed.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">completed</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='disabled'
									src={`/icons/multicolor/disabled.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">disabled</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='immediate-action'
									src={`/icons/multicolor/immediate-action.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">immediate-action</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='in-progress'
									src={`/icons/multicolor/in-progress.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">in-progress</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='inactive'
									src={`/icons/multicolor/inactive.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">inactive</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='information'
									src={`/icons/multicolor/information.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">information</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='interrupted'
									src={`/icons/multicolor/interrupted.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">interupted</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='mismatch'
									src={`/icons/multicolor/mismatch.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">mismatch</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='ok'
									src={`/icons/multicolor/ok.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">ok</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='planned-maintenance'
									src={`/icons/multicolor/planned-maintenance.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">planned-maintenance</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='service-3days'
									src={`/icons/multicolor/service-3days.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span>service-3days</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='service-7days'
									src={`/icons/multicolor/service-7days.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">service-7days</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='stopwatch'
									src={`/icons/multicolor/stopwatch.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">stopwatch</span>
						</div>
						<div className="icons-group__item">
							<span className="icons-group__image">
								<Image
									alt='up-to-date'
									src={`/icons/multicolor/up-to-date.svg`}
									layout="responsive"
									width={32}
									height={32}
								/>
							</span>
							<span className="icons-group__text">up-to-date</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default icons;
