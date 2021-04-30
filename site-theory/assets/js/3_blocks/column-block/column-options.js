const { __ } = wp.i18n;
const { SelectControl } = wp.components;

const ColumnOptions = (props) => {
	const { columnOption, setAttributes } = props;

	return (
		<div className="components-panel__item column-options">
			<SelectControl
				value={columnOption}
				options={[
					{ value: 'two-column', label: __('Two Column') },
					{ value: 'three-column', label: __('Three Column') },
					{ value: 'four-column', label: __('Four Column') },
				]}
				onChange={(columnOption) => setAttributes({ columnOption })}
			/>
		</div>
	);
};

export default ColumnOptions;
