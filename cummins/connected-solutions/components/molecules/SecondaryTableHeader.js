import PropTypes from 'prop-types';
import Heading from '../atoms/Heading';
import ViewSwitcher from '../atoms/ViewSwitcher';

/**
 * @example
 * <SecondaryTableHeader
 *    @param {string}  - upperTitle (Title in red section of the table header, is required)
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {string} colOneTitle - (Firt title in dark gray section, is required)
 *    @param {string} colOneTag - (optional tag text for the title)
 *    @param {string} colTwoTitle - (Second title in dark gray section, is required)
 *    @param {string} colTwoTag - (optional tag text for the title)
 *    @param {string} colThreeTitle - (Second title in dark gray section)
 *    @param {string} colThreeTag - (optional tag text for the title)
 *    @param {string} mobileHeading - (This heading is prepended to the colTwo and colThree titles)
 *    @param {func} getMobileActiveCol - (Function to set active state when clicing view switcher)
 *    @param {string} mobileActiveCol - (This is the column that will be displayed by default in mobile view)
 * />
 */
const SecondaryTableHeader = ({
	upperTitle,
	classes,
	colOneTitle,
	colOneTag,
	colTwoTitle,
	colTwoTag,
	colThreeTitle,
	colThreeTag,
	mobileHeading,
	getMobileActiveCol,
	mobileActiveCol,
	columnCount,
	viewSwitcherOptions
}) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	return (
		<div className={`secondary-table__header${specialClasses}`}>
			<div className='secondary-table__header-upper'>
				<Heading level='3' text={upperTitle} />
			</div>
			<div className={`secondary-table__header-lower columns--${columnCount}`}>
				<div className={`secondary-table__header-col col-1${mobileActiveCol === 'col-1' ? ' active' : ''}`}>
					<div className="secondary-table__heading-wrap">
						<Heading level='4' classNames='compact' text={colOneTitle} tagText={colOneTag} />
					</div>
					<ViewSwitcher
						text='View'
						getMobileActiveCol={getMobileActiveCol}
						options={viewSwitcherOptions}
					/>
				</div>
				<div className={`secondary-table__header-col col-2${mobileActiveCol === 'col-2' ? ' active' : ''}`}>
					<div className="secondary-table__heading-wrap">
						{(mobileHeading !== null && columnCount === 3) &&
							<Heading level='4' classNames='compact mobile-heading' text={`${mobileHeading} - ${colTwoTitle}`} />
						}
						{(mobileHeading !== null && columnCount === 3) &&
							<Heading level='4' classNames='compact desktop-heading' text={mobileHeading} tagText={colTwoTag} />
						}
						{(mobileHeading === null && colTwoTitle) &&
							<Heading level='4' classNames='compact' text={colTwoTitle} tagText={colTwoTag} />
						}
					</div>
					<ViewSwitcher
						text='View'
						getMobileActiveCol={getMobileActiveCol}
						options={viewSwitcherOptions}
					/>
				</div>
				{columnCount === 3 &&
					<div className={`secondary-table__header-col col-3${mobileActiveCol === 'col-3' ? ' active' : ''}`}>
						<div className="secondary-table__heading-wrap">
							{(mobileHeading !== null) &&
								<Heading level='4' classNames='compact mobile-heading' text={`${mobileHeading} - ${colThreeTitle}`} />
							}
							{(mobileHeading === null && colThreeTitle) &&
								<Heading level='4' classNames='compact desktop-visible' text={colThreeTitle} tagText={colThreeTag} />
							}
						</div>
						<ViewSwitcher
							text='View'
							getMobileActiveCol={getMobileActiveCol}
							options={viewSwitcherOptions}
						/>
					</div>
				}
			</div>
		</div>
	);
};

SecondaryTableHeader.defaultProps = {
	upperTitle: 'Upper Title',
	classes: null,
	colOneTitle: 'Column One Title',
	colOneTag: null,
	colTwoTag: null,
	mobileHeading: null,
	columnCount: 2,
};

SecondaryTableHeader.propTypes = {
	upperTitle: PropTypes.string.isRequired,
	classes: PropTypes.array,
	colOneTitle: PropTypes.string.isRequired,
	colOneTag: PropTypes.string,
	colTwoTitle: PropTypes.string,
	colTwoTag: PropTypes.string,
	colThreeTitle: PropTypes.string,
	colThreeTag: PropTypes.string,
	desktopHeading: PropTypes.string,
	desktopTag: PropTypes.string,
	getMobileActiveCol: PropTypes.func,
	mobileActiveCol: PropTypes.string,
	columnCount: PropTypes.number
};

export default SecondaryTableHeader;
