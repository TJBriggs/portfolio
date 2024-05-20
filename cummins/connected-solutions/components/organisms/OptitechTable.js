import { useState } from 'react';
import SecondaryTable from '../molecules/SecondaryTable';
import SecondaryTableHeader from '../molecules/SecondaryTableHeader';
import SingleColTable from '../molecules/SingleColTable';

const OptitechTable = ({ fleetHealth, calibrationUpdates, trimShield, trimStatus }) => {
	const [mobileActiveCol, setMobileActiveCol] = useState('col-1');
	const getMobileActiveCol = (col) => {
		setMobileActiveCol(col);
	}
	return (
		<div>
			<SecondaryTable getMobileActiveCol={getMobileActiveCol}>
				<SecondaryTableHeader
					upperTitle='OptiTech'
					colOneTitle='Calibration Updates'
					colTwoTitle='Trim Shield'
					colThreeTitle='Trim Status'
					getMobileActiveCol={getMobileActiveCol}
					mobileHeading='Parameter Updates'
					mobileActiveCol={mobileActiveCol}
					columnCount={3}
					viewSwitcherOptions={[
						{
							'value': 'calibration-updates',
							'col': 'col-1',
							'label': 'Calibration Updates',
							'linkType': 'trigger',

						},
						{
							'value': 'trim-shield',
							'col': 'col-2',
							'label': 'Trim Shield',
							'linkType': 'trigger',
						},
						{
							'value': 'trim-status',
							'col': 'col-3',
							'label': 'Trim Status',
							'linkType': 'trigger',
						}
					]}
				/>
				<div className="secondary-table__wrap columns--3">
					<div className={`secondary-table__table-col col-1${mobileActiveCol === 'col-1' ? ' active' : ''}`}>
						<SingleColTable data={calibrationUpdates} />
					</div>
					<div className={`secondary-table__table-col col-2${mobileActiveCol === 'col-2' ? ' active' : ''}`}>
						<SingleColTable data={trimShield} tableHeading='Trim Shield' />
					</div>
					<div className={`secondary-table__table-col col-3${mobileActiveCol === 'col-3' ? ' active' : ''}`}>
						<SingleColTable data={trimStatus} tableHeading='Trim Status' />
					</div>
				</div>
			</SecondaryTable>
		</div>
	);
};

export default OptitechTable;
