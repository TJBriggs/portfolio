const { __ } = wp.i18n;
const { SelectControl } = wp.components;

const ThreeColumnLayout = (props) => {
	const { threeColumnLayout, setAttributes } = props;

	return (
		<div className="components-panel__item layout-options">
			<SelectControl
				value={threeColumnLayout}
				options={[
					{ value: 'default', label: __('33.3% | 33.3% | 33.3%') },
					{ value: 'layout-1', label: __('50% | 25% | 25%') },
					{ value: 'layout-2', label: __('25% | 25% | 50%') },
				]}
				onChange={(threeColumnLayout) => setAttributes({ threeColumnLayout })}
			/>
		</div>
	);
};

export default ThreeColumnLayout;
