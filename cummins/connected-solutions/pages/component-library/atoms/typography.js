import Heading from '../../../components/atoms/Heading';

const typography = () => {
	return (
		<>
			<section className='cl-header'>
				<div className='cl-header__wide-inner'>
					<Heading level='h1' text='Atoms - Typography' />
				</div>
			</section>
			<section className='font-family'>
				<div className='font-family__wide-inner'>
					<div className='font-family__grid'>
						<div className='font-family__family'>
							<Heading level='h2' text='Open Sans' />
							<p><em>Open Sans is popular in flat design-style web design.</em></p>
							<p>Open Sans is used in some of Google&apos;s web pages as well as its print and web advertisements. It is used as Mozilla&apos;s default typeface for websites until 2019, and in the Telegram Desktop app.</p>
							<div className='font-tiles'>
								<div className='font-tile'>
									<div className='font-tile__tile weight-extra-bold'>Aa</div>
									<div className='font-tile__text'>
										<Heading level='h4' classNames='compact' text='Open Sans' />
										<p className='label'>Extra-bold - 800</p>
										<p className='label'>--font-extra-bold</p>
									</div>
								</div>
								<div className='font-tile'>
									<div className='font-tile__tile weight-bold'>Aa</div>
									<div className='font-tile__text'>
										<Heading level='h4' text='Open Sans' />
										<p className='label'>Bold - 700</p>
										<p className='label'>--font-bold</p>
									</div>
								</div>
								<div className='font-tile'>
									<div className='font-tile__tile weight-semi-bold'>Aa</div>
									<div className='font-tile__text'>
										<Heading level='h4' text='Open Sans' />
										<p className='label'>Semi-bold - 600</p>
										<p className='label'>--font-semi-bold</p>
									</div>
								</div>
								<div className='font-tile'>
									<div className='font-tile__tile weight-medium'>Aa</div>
									<div className='font-tile__text'>
										<Heading level='h4' text='Open Sans' />
										<p className='label'>Medium - 500</p>
										<p className='label'>--font-medium</p>
									</div>
								</div>
								<div className='font-tile'>
									<div className='font-tile__tile weight-regular'>Aa</div>
									<div className='font-tile__text'>
										<Heading level='h4' text='Open Sans' />
										<p className='label'>Regular - 400</p>
										<p className='label'>--font-regular</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='font-styles'>
				<div className='font-styles__wide-inner'>
					<Heading level='h2' classNames='main-heading' text='Font Styles' />
					<div className="font-styles__header-row">
						<Heading level='h4' text='Element/Classes' />
						<Heading level='h4' text='Styles' />
						<Heading level='h4' text='Example' />
					</div>
					<div className='font-styles__wrap'>
						<div className='font-styles__item'>
							<div className='font-styles__style-name'>
								<Heading level='h1' text='Heading 1' />
								<Heading level='h3' classNames='compact code' text='h1, .h1' />
							</div>
							<ul className='font-styles__styles'>
								<Heading level='h4' classNames='compact text-underline' text='Desktop' />
								<li>font-size: 28px;</li>
								<li>font-weight: 400;</li>
								<li>letter-spacing: 0px;</li>
								<li>line-height: 1.285;</li>
								<Heading level='h4' classNames='mobile compact text-underline' text='Mobile' />
								<li>font-size: 24px;</li>
							</ul>
							<div className='font-styles__example'>
								<Heading level='h1' text='Integer posuere erat a ante venenatis dapibus posuere velit aliquet.' />
							</div>
						</div>
						<div className='font-styles__item'>
							<div className='font-styles__style-name'>
								<Heading level='h2' text='Heading 2' />
								<Heading level='h3' classNames='compact code' text='h2, .h2' />
							</div>
							<ul className='font-styles__styles'>
								<Heading level='h4' classNames='compact text-underline' text='Desktop' />
								<li>font-size: 20px;</li>
								<li>font-weight: 400;</li>
								<li>letter-spacing: 0.32px;</li>
								<li>line-height: 1.4;</li>
								<Heading level='h4' classNames='mobile compact text-underline' text='Mobile' />
								<li>font-size: 18px;</li>
							</ul>
							<div className='font-styles__example'>
								<Heading level='h2' text='Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in.' />
							</div>
						</div>
						<div className='font-styles__item'>
							<div className='font-styles__style-name'>
								<Heading level='h3' text='Heading 3' />
								<Heading level='h3' classNames='compact code' text='h3, .h3' />
							</div>
							<ul className='font-styles__styles'>
								<Heading level='h4' classNames='compact text-underline' text='Desktop' />
								<li>font-size: 16px;</li>
								<li>font-weight: 600;</li>
								<li>letter-spacing: 0.32px;</li>
								<li>line-height: 1.5;</li>
								<Heading level='h4' classNames='mobile compact text-underline' text='Mobile' />
								<li>font-size: 16px;</li>
							</ul>
							<div className='font-styles__example'>
								<Heading level='h3' text='Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna.' />
							</div>
						</div>
						<div className='font-styles__item'>
							<div className='font-styles__style-name'>
								<Heading level='h3' classNames='compact' text='Heading 3 - Compact' />
								<Heading level='h3' classNames='compact code' text='h3.compact' />
							</div>
							<ul className='font-styles__styles'>
								<li>font-size: 16px;</li>
								<li>font-weight: 600;</li>
								<li>letter-spacing: 0px;</li>
								<li>line-height: 1.375;</li>
							</ul>
							<div className='font-styles__example'>
								<Heading level='h3' classNames='compact' text='Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam.' />
							</div>
						</div>
						<div className='font-styles__item'>
							<div className='font-styles__style-name'>
								<Heading level='h4' text='Heading 4' />
								<Heading level='h3' classNames='compact code' text='h4, .h4' />
							</div>
							<ul className='font-styles__styles'>
								<li>font-size: 14px;</li>
								<li>font-weight: 600;</li>
								<li>letter-spacing: 0.16px;</li>
								<li>line-height: 1.428;</li>
							</ul>
							<div className='font-styles__example'>
								<Heading level='h4' text='Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod.' />
							</div>
						</div>
						<div className='font-styles__item'>
							<div className='font-styles__style-name'>
								<Heading level='h4' classNames='compact' text='Heading 4 - Compact' />
								<Heading level='h3' classNames='compact code' text='h4.compact' />
							</div>
							<ul className='font-styles__styles'>
								<li>font-size: 28px;</li>
								<li>font-weight: 600;</li>
								<li>letter-spacing: 0.16px;</li>
								<li>line-height: 1.285;</li>
							</ul>
							<div className='font-styles__example'>
								<Heading level='h4' classNames='compact' text='Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.' />
							</div>
						</div>
						<div className='font-styles__item'>
							<div className='font-styles__style-name'>
								<p>Paragraph - Default</p>
								<Heading level='h3' classNames='compact code' text='p' />
							</div>
							<ul className='font-styles__styles'>
								<li>font-size: 14px;</li>
								<li>font-weight: 400;</li>
								<li>letter-spacing: 0.16px;</li>
								<li>line-height: 1.428;</li>
							</ul>
							<div className='font-styles__example'>
								<p>Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum.</p>
							</div>
						</div>
						<div className='font-styles__item'>
							<div className='font-styles__style-name'>
								<p>Paragraph - Compact</p>
								<Heading level='h3' classNames='compact code' text='p.compact' />
							</div>
							<ul className='font-styles__styles'>
								<li>font-size: 14px;</li>
								<li>font-weight: 400;</li>
								<li>letter-spacing: 0.16px;</li>
								<li>line-height: 1.285;</li>
							</ul>
							<div className='font-styles__example'>
								<p className='compact'>Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum.</p>
							</div>
						</div>
						<div className='font-styles__item'>
							<div className='font-styles__style-name'>
								<p className='label'>Label or Legal Text</p>
								<Heading level='h3' classNames='compact code' text='label, .label, .legal' />
							</div>
							<ul className='font-styles__styles'>
								<li>font-size: 12px;</li>
								<li>font-weight: 400;</li>
								<li>letter-spacing: 0.32px;</li>
								<li>line-height: 1.3;</li>
							</ul>
							<div className='font-styles__example'>
								<p className='label'>Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
							</div>
						</div>
						<div className='font-styles__item'>
							<div className='font-styles__style-name'>
								<p className='label large'>Label - Large</p>
								<Heading level='h3' classNames='compact code' text='label.large' />
							</div>
							<ul className='font-styles__styles'>
								<li>font-size: 14px;</li>
								<li>font-weight: 400;</li>
								<li>letter-spacing: 0.16px;</li>
								<li>line-height: 1.285;</li>
							</ul>
							<div className='font-styles__example'>
								<p className='label large'>Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
							</div>
						</div>
						<div className='font-styles__item'>
							<div className='font-styles__style-name'>
								<p className='button-text'>Button &amp; Link Text</p>
								<Heading level='h3' classNames='compact code' text='.button-text' />
							</div>
							<ul className='font-styles__styles'>
								<li>font-size: 14px;</li>
								<li>font-weight: 600;</li>
								<li>letter-spacing: 0.16px;</li>
								<li>line-height: 1.285;</li>
							</ul>
							<div className='font-styles__example'>
								<p className='button-text'>Cras mattis consectetur</p>
							</div>
						</div>
						<div className='font-styles__item'>
							<div className='font-styles__style-name'>
								<p className='button-text large'>Button &amp; Link Text - Large</p>
								<Heading level='h3' classNames='compact code' text='.button-text.large' />
							</div>
							<ul className='font-styles__styles'>
								<li>font-size: 16px;</li>
								<li>font-weight: 600;</li>
								<li>letter-spacing: 0px;</li>
								<li>line-height: 1.375;</li>
							</ul>
							<div className='font-styles__example'>
								<p className='button-text'>Cras mattis consectetur</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default typography;
