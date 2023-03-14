import Image from "next/image";
import {FunctionComponent} from "react";
import styles from "../../styles/components/featuresBanner.module.scss";

interface IProps {
	title: string;
	icon: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
}

const FeaturesBannerCard: FunctionComponent<IProps> = ({title, icon}) => {
	return (
		<div className="w-full py-4 lg:w-1/3">
			<div className={styles.iconsWrap}>
				<div className="flex flex-row items-center justify-center gap-x-8">
					<Image
						src={icon?.sourceUrl}
						alt={`${icon?.altText} icon`}
						width={icon?.mediaDetails?.width}
						height={icon?.mediaDetails?.height}
						className="w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] lg:w-[110px] lg:h-[110px] object-contain object-center"
					/>
					<div className="p-3">
						<h3 className="text-base md:text-medium text-center text-black font-[400] lg:text-left">
							{title}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesBannerCard;
