import TableHeader from './TableHeader';

const AssetTableHeader = () => {
	return (
		<>
			<TableHeader classes={['utility-header']}>
				<div className="table-header__row">
					<div className='table-header__cell action-col border-col'></div>
					<div className='table-header__cell col-1'>Asset Details</div>
					<div className='table-header__cell col-2'>Connectivity Provider<sup>*</sup></div>
					<div className='table-header__cell ag-col'>Asset Group</div>
					<div className='table-header__cell comp-col'>Component #1<sup>*</sup></div>
					<div className='table-header__cell comp-col'>Component #2<sup>*</sup></div>
					<div className='table-header__cell comp-col'>Component #3<sup>*</sup></div>
					<div className='table-header__cell comp-col'>Component #4<sup>*</sup></div>
				</div>
			</TableHeader>
			<TableHeader classes={['primary-header']}>
				<div className="table-header__row">
					<div className='table-header__cell action-col border-col'>Actions</div>
					<div className='table-header__cell col-1'>Asset ID<sup>*</sup></div>
					<div className='table-header__cell col-2'>Serial Number<sup>*</sup></div>
					<div className='table-header__cell col-3 border-col'>Description</div>
					<div className='table-header__cell con-col-1'>Provider<sup>*</sup></div>
					<div className='table-header__cell con-col-2 border-col'>Device ID<sup>*</sup></div>
					<div className='table-header__cell ag-col border-col'>Asset Group</div>
					<div className='table-header__cell comp-col-1'>Type<sup>*</sup></div>
					<div className='table-header__cell comp-col-2'>Serial Number<sup>*</sup></div>
					<div className='table-header__cell comp-col-3'>Service Model<sup>*</sup></div>
					<div className='table-header__cell comp-col-4'>Torque<sup>*</sup></div>
					<div className='table-header__cell comp-col-5'>Horse Power<sup>*</sup></div>
					<div className='table-header__cell comp-col-6 border-col'>Fuel Rating</div>
					<div className='table-header__cell comp-col-1'>Type<sup>*</sup></div>
					<div className='table-header__cell comp-col-2'>Serial Number<sup>*</sup></div>
					<div className='table-header__cell comp-col-3'>Service Model<sup>*</sup></div>
					<div className='table-header__cell comp-col-4'>Torque<sup>*</sup></div>
					<div className='table-header__cell comp-col-5'>Horse Power<sup>*</sup></div>
					<div className='table-header__cell comp-col-6 border-col'>Fuel Rating</div>
					<div className='table-header__cell comp-col-1'>Type<sup>*</sup></div>
					<div className='table-header__cell comp-col-2'>Serial Number<sup>*</sup></div>
					<div className='table-header__cell comp-col-3'>Service Model<sup>*</sup></div>
					<div className='table-header__cell comp-col-4'>Torque<sup>*</sup></div>
					<div className='table-header__cell comp-col-5'>Horse Power<sup>*</sup></div>
					<div className='table-header__cell comp-col-6 border-col'>Fuel Rating</div>
					<div className='table-header__cell comp-col-1'>Type<sup>*</sup></div>
					<div className='table-header__cell comp-col-2'>Serial Number<sup>*</sup></div>
					<div className='table-header__cell comp-col-3'>Service Model<sup>*</sup></div>
					<div className='table-header__cell comp-col-4'>Torque<sup>*</sup></div>
					<div className='table-header__cell comp-col-5'>Horse Power<sup>*</sup></div>
					<div className='table-header__cell comp-col-6'>Fuel Rating</div>
				</div>
			</TableHeader>
		</>
	);
};

export default AssetTableHeader;
