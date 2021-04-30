const { __ } = wp.i18n;
const { SelectControl } = wp.components;

const TwoColumnLayout = (props) => {
	const { twoColumnLayout, setAttributes } = props;

	return (
		<div className="components-panel__item layout-options">
			<SelectControl
				value={twoColumnLayout}
				options={[
					{ value: 'default', label: __('50% | 50%') },
					{ value: 'layout-1', label: __('25% | 75%') },
					{ value: 'layout-2', label: __('75% | 25%') },
					{ value: 'layout-3', label: __('33.3% | 66.6%') },
					{ value: 'layout-4', label: __('66.6% | 33.3%') },
					{ value: 'layout-5', label: __('40% | 60%') },
					{ value: 'layout-6', label: __('60% | 40%') },
				]}
				onChange={(twoColumnLayout) => setAttributes({ twoColumnLayout })}
			/>
		</div>
	);
};

export default TwoColumnLayout;
