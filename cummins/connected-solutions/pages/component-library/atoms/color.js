import Heading from '../../../components/atoms/Heading';

const color = () => {
	return (
		<>
			<section className='cl-header'>
				<div className='cl-header__wide-inner'>
					<Heading level='h1' text='Atoms - Color' />
				</div>
			</section>
			<section className='color-group'>
				<div className="color-group__wide-inner">
					<Heading level='h2' classNames='section-heading' text='Primary Colors' />
					<div className="color-group__wrap">
						<div className='color-group__grid'>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-red-60)' }}></div>
								<Heading level='h4' classNames='compact' text='Red 60' />
								<p className='label'>#DA291C</p>
								<p className='label'>--c-red-60</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-red-70)' }}></div>
								<Heading level='h4' classNames='compact' text='Red 70' />
								<p className='label'>#BF2419</p>
								<p className='label'>--c-red-70</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-red-80)' }}></div>
								<Heading level='h4' classNames='compact' text='Red 80' />
								<p className='label'>#A41D13</p>
								<p className='label'>--c-red-80</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-red-10)' }}></div>
								<Heading level='h4' classNames='compact' text='Red 10' />
								<p className='label'>#F4ADA7</p>
								<p className='label'>--c-red-10</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-black)' }}></div>
								<Heading level='h4' classNames='compact' text='Black' />
								<p className='label'>#000000</p>
								<p className='label'>--c-black</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-gray-100)' }}></div>
								<Heading level='h4' classNames='compact' text='Gray 100' />
								<p className='label'>#131313</p>
								<p className='label'>--c-gray-100</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-gray-80)' }}></div>
								<Heading level='h4' classNames='compact' text='Gray 80' />
								<p className='label'>#393939</p>
								<p className='label'>--c-gray-80</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-gray-70)' }}></div>
								<Heading level='h4' classNames='compact' text='Gray 70' />
								<p className='label'>#4C4C4C</p>
								<p className='label'>--c-gray-70</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-gray-60)' }}></div>
								<Heading level='h4' classNames='compact' text='Gray 60' />
								<p className='label'>#6F6F6F</p>
								<p className='label'>--c-gray-60</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-gray-50)' }}></div>
								<Heading level='h4' classNames='compact' text='Gray 50' />
								<p className='label'>#8D8D8D</p>
								<p className='label'>--c-gray-50</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-gray-40)' }}></div>
								<Heading level='h4' classNames='compact' text='Gray 40' />
								<p className='label'>#A8A8A8</p>
								<p className='label'>--c-gray-40</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-gray-30)' }}></div>
								<Heading level='h4' classNames='compact' text='Gray 30' />
								<p className='label'>#C6C6C6</p>
								<p className='label'>--c-gray-30</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-gray-20)' }}></div>
								<Heading level='h4' classNames='compact' text='Gray 20' />
								<p className='label'>#E5E5E5</p>
								<p className='label'>--c-gray-20</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-gray-10)' }}></div>
								<Heading level='h4' classNames='compact' text='Gray 10' />
								<p className='label'>#F4F4F4</p>
								<p className='label'>--c-gray-10</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-white)' }}></div>
								<Heading level='h4' classNames='compact' text='White' />
								<p className='label'>#FFFFFF</p>
								<p className='label'>--c-white</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='color-group'>
				<div className="color-group__wide-inner">
					<Heading level='h2' classNames='section-heading' text='Icon Colors' />
					<div className="color-group__wrap">
						<div className='color-group__grid'>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-green)' }}></div>
								<Heading level='h4' classNames='compact' text='Green' />
								<p className='label'>#89C052</p>
								<p className='label'>--c-green</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-blue)' }}></div>
								<Heading level='h4' classNames='compact' text='Blue' />
								<p className='label'>#38ADD8</p>
								<p className='label'>--c-blue</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-red)' }}></div>
								<Heading level='h4' classNames='compact' text='Red' />
								<p className='label'>#BF2419</p>
								<p className='label'>--c-red</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-orange)' }}></div>
								<Heading level='h4' classNames='compact' text='Orange' />
								<p className='label'>#FF832B</p>
								<p className='label'>--c-orange</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-yellow)' }}></div>
								<Heading level='h4' classNames='compact' text='Yellow' />
								<p className='label'>#F1C21B</p>
								<p className='label'>--c-yellow</p>
							</div>
							<div className='color'>
								<div className='color__swatch' style={{ backgroundColor: 'var(--c-gray)' }}></div>
								<Heading level='h4' classNames='compact' text='Gray' />
								<p className='label'>#4C4C4C</p>
								<p className='label'>--c-gray</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default color;
