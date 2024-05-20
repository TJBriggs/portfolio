import Image from 'next/image';
import ButtonAccordion from './ButtonAccordion';
import AssetMapImage from '../../public/images/asset-map.png';
const AssetMap = () => {
	return (
		<div className='asset-map'>
			<div className="asset-map__default-inner">
				<ButtonAccordion buttonText='Show Asset Map'>
					<div className="asset-map__wrap">
						<Image
							alt="Asset Map Placeholder"
							src={AssetMapImage}
							layout="responsive"
							width={1150}
							height={435}
						/>
					</div>
				</ButtonAccordion>
			</div>
		</div>
	);
};

export default AssetMap;
