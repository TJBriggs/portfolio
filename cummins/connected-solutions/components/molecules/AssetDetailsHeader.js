import PropTypes from 'prop-types';
import BackLink from '../atoms/BackLink';
import Heading from '../atoms/Heading';
import CircleIcon from '../atoms/CircleIcon';
import ExportLink from '../atoms/ExportLink';

/**
 * @example
 * <AssetDetailHeader
 *    @param {string} assetName - (Name of asset, is required)
 * />
 */
const AssetDetailsHeader = ({ assetName }) => {
	return (
		<div className='page-header details-header'>
			<div className="page-header__default-inner">
				<div className='page-header__wrap'>
					<BackLink
						url='/'
					/>
					<div className="details-header__heading">
						<CircleIcon iconName='immediate-action' backgroundColor='red' />
						<Heading level='h1' text={assetName} />
						<ExportLink />
					</div>
				</div>
			</div>
		</div>
	);
};

AssetDetailsHeader.propTypes = {
	assetName: PropTypes.string.isRequired
};

export default AssetDetailsHeader;
