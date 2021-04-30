/**
 * External dependencies
 */
import ColumnOptions from './column-options';
import TwoColumnLayout from './two-col-layout';
import ThreeColumnLayout from './three-col-layout';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { PanelBody, PanelRow } = wp.components;
const { InnerBlocks, InspectorControls } = wp.blockEditor;
const ALLOWED_BLOCKS = ['theme-name/card-text', 'theme-name/card-image'];

export default function ColumnBlockEdit({
	attributes: { columnOption, twoColumnLayout, threeColumnLayout },
	className,
	setAttributes,
}) {
	let layoutModifier;
	if (columnOption === 'two-column') {
		layoutModifier = ` layout--${twoColumnLayout}`;
	} else if (columnOption === 'three-column') {
		layoutModifier = ` layout--${threeColumnLayout}`;
	}
	return (
		<div className={`${className} column-block column-block--${columnOption}`}>
			<InspectorControls>
				<PanelBody initialOpen={false} title={__('Block Options')}>
					<PanelRow>
						<label htmlFor="ColumnOptions">
							Column Options:
							<ColumnOptions
								columnOption={columnOption}
								setAttributes={setAttributes}
							/>
						</label>
					</PanelRow>
					{columnOption === 'two-column' && (
						<PanelRow>
							<label htmlFor="TwoColumnLayout">
								Two Column Layout:
								<TwoColumnLayout
									layoutOption={twoColumnLayout}
									setAttributes={setAttributes}
								/>
							</label>
						</PanelRow>
					)}
					{columnOption === 'three-column' && (
						<PanelRow>
							<label htmlFor="ThreeColumnLayout">
								Three Column Layout:
								<ThreeColumnLayout
									layoutOption={threeColumnLayout}
									setAttributes={setAttributes}
								/>
							</label>
						</PanelRow>
					)}
				</PanelBody>
			</InspectorControls>
			<div className={`column-block__wrap${layoutModifier}`}>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		</div>
	);
}
