import { useState } from 'react';
import SecondaryTable from '../molecules/SecondaryTable';
import SecondaryTableHeader from '../molecules/SecondaryTableHeader';
import SingleColTable from '../molecules/SingleColTable';
import PrognosticsCol from '../molecules/PrognosticsCol';

/**
 * @example
 * <PreventechTable
 *    @param {string}  - upperTitle (Title in red section of the table header, is required)
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {string} colOneTitle - (Firt title in dark gray section, is required)
 *    @param {string} colOneTag - (optional tag text for the title)
 *    @param {string} colTwoTitle - (Second title in dark gray section, is required)
 *    @param {string} colTwoTag - (optional tag text for the title)
 * />
 */
const PreventechTable = ({ fleetHealth }) => {
	const [mobileActiveCol, setMobileActiveCol] = useState('col-1');
	const getMobileActiveCol = (col) => {
		setMobileActiveCol(col);
	}
	return (
		<div>
			<SecondaryTable>
				<SecondaryTableHeader
					upperTitle='PrevenTech'
					colOneTitle='Fleet Health'
					colTwoTitle='Prognostics &amp; Maintenance Insights'
					colTwoTag='New'
					getMobileActiveCol={getMobileActiveCol}
					mobileActiveCol={mobileActiveCol}
					viewSwitcherOptions={[
						{
							'value': 'fleet-health',
							'col': 'col-1',
							'label': 'Fleet Health',
							'linkType': 'trigger',

						},
						{
							'value': 'prognostics',
							'col': 'col-2',
							'label': 'Prognostics and Maintenance Insights',
							'linkType': 'trigger',
						},
					]}
				/>
				<div className="secondary-table__wrap columns--2">
					<div className={`secondary-table__table-col col-1${mobileActiveCol === 'col-1' ? ' active' : ''}`}>
						<SingleColTable data={fleetHealth} />
					</div>
					<div className={`secondary-table__table-col col-2${mobileActiveCol === 'col-2' ? ' active' : ''}`}>
						<PrognosticsCol />
					</div>
				</div>
			</SecondaryTable>
		</div>
	);
};

export default PreventechTable;
