import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import {fadeInUp} from "../animations/animations";
import styles from "../styles/components/FeaturesBanner.module.scss";
import FeaturesBannerCard from "./Cards/FeaturesBannerCard";

interface IProps {
	title: string;
	content: [
		{
			id: string;
			title: string;
			icon: {
				altText: string;
				sourceUrl: string;
			};
		}
	];
}

const FeaturesBanner: FunctionComponent<IProps> = ({title, content}) => {
	return (
		<section className={styles.featuresBanner}>
			<div className="container px-0 mx-auto">
				<div className="flex flex-col justify-center items-center px-4">
					<motion.h2
						variants={fadeInUp}
						className="w-full lg:w-[45rem] mb-10 lg:mb-20 mx-auto text-black text-center leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl"
					>
						{title}
					</motion.h2>
					<div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
						{content.map((keys) => (
							<FeaturesBannerCard
								key={keys?.id}
								title={keys?.title}
								icon={keys?.icon}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesBanner;
