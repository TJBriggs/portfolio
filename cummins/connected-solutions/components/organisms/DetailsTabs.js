import { useState } from 'react';
import PropTypes from 'prop-types';
import TabToggles from '../atoms/TabToggles';
import FaultInsightsTable from './FaultInsightsTable';
import PrognosticsTable from './PrognosticsTable';

/**
 * @example
 * <DetailsTabs
 *    @param {array} faultInsights - (insight data for table)
 *    @param {array} prognostics - (prognostics data for table)
 * />
 */
const DetailsTabs = ({ faultInsights, prognostics }) => {
	const [activeProductPanel, setActiveProductPanel] = useState();
	const [activePrevenTechPanel, setActivePrevenTechPanel] = useState();
	const [activeOptiTechPanel, setActiveOptiTechPanel] = useState();

	const getActiveProductTabs = (activePanel) => {
		setActiveProductPanel(activePanel);
	};

	const getActivePrevenTechTabs = (activePanel) => {
		setActivePrevenTechPanel(activePanel);
	};

	const getActiveOptiTechTabs = (activePanel) => {
		setActiveOptiTechPanel(activePanel);
	};

	return (
		<section className='details-tabs'>
			<div className='details-tabs__default-inner'>
				<div className='details-tabs__tabs-wrap'>
					<TabToggles
						ariaLabel='Product Tabs'
						uniqueID='product-tabs'
						options={[
							{
								'text': 'PrevenTech'
							},
							{
								'text': 'OptiTech'
							}
						]}
						onClick={getActiveProductTabs}
					/>
					<div className='tab-panels underline-tabs'>
						{activeProductPanel === 'product-tabs-panel-0' &&
							<div className='tab-panels__panel'>
								<TabToggles
									ariaLabel='PrevenTech Tabs'
									uniqueID='preventech-tabs'
									type='underline'
									options={[
										{
											'text': 'Fault Insights'
										},
										{
											'text': 'Prognostics'
										},
										{
											'text': 'Maintenance Insights'
										}
									]}
									onClick={getActivePrevenTechTabs}
								/>
							</div>
						}
						{activeProductPanel === 'product-tabs-panel-1' &&
							<div className='tab-panels__panel'>
								<TabToggles
									ariaLabel='OptiTech Tabs'
									uniqueID='optitech-tabs'
									type='underline'
									options={[
										{
											'text': 'OptiTech Tab 1'
										},
										{
											'text': 'OptiTech Tab 2'
										},
										{
											'text': 'OptiTech Tab 3'
										}
									]}
									onClick={getActiveOptiTechTabs}
								/>
							</div>
						}
					</div>
				</div>
				<div className='details-tab__content-wrap'>
					<div className='tab-panels'>
						{(activeProductPanel === 'product-tabs-panel-0' && activePrevenTechPanel === 'preventech-tabs-panel-0') &&
							<div className='tab-panels__panel fault-insights-tab'>
								<FaultInsightsTable faultInsights={faultInsights} />
							</div>
						}
						{(activeProductPanel === 'product-tabs-panel-0' && activePrevenTechPanel === 'preventech-tabs-panel-1') &&
							<div className='tab-panels__panel prognostics-tab'>
								<PrognosticsTable prognostics={prognostics} />
							</div>
						}
						{(activeProductPanel === 'product-tabs-panel-0' && activePrevenTechPanel === 'preventech-tabs-panel-2') &&
							<div className='tab-panels__panel'>
								<h1>Maintenance Insights</h1>
							</div>
						}
						{(activeProductPanel === 'product-tabs-panel-1' && activeOptiTechPanel === 'optitech-tabs-panel-0') &&
							<div className='tab-panels__panel'>
								<h1>OptiTech Panel 1</h1>
							</div>
						}
						{(activeProductPanel === 'product-tabs-panel-1' && activeOptiTechPanel === 'optitech-tabs-panel-1') &&
							<div className='tab-panels__panel'>
								<h1>OptiTech Panel 2</h1>
							</div>
						}
						{(activeProductPanel === 'product-tabs-panel-1' && activeOptiTechPanel === 'optitech-tabs-panel-2') &&
							<div className='tab-panels__panel'>
								<h1>OptiTech Panel 3</h1>
							</div>
						}
					</div>
				</div>
			</div>
		</section>
	);
};

DetailsTabs.propTypes = {
	faultInsights: PropTypes.array.isRequired,
};

export default DetailsTabs;
