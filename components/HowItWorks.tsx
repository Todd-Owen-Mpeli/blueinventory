/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {FunctionComponent} from "react";
import TextImage from "./Cards/TextImage";
import styles from "../styles/components/CTAOne.module.scss";

interface IProps {
	title: string;
	subtitle: string;
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				subtitle: string;
				paragraph: string;
				icon: {
					altText: string;
					sourceUrl: string;
				};
				image: {
					altText: string;
					sourceUrl: string;
				};
				displayImageLocation: string;
			};
		}
	];
}

const HowItWorks: FunctionComponent<IProps> = ({
	title,
	subtitle,
	gridContent,
}) => {
	// Calculates How many iterations and sets the Icons Background Color a different color per iteration
	let iterationCount: number = 0;

	return (
		<section className={styles.HowItWorks} id="HowItWorks">
			<div className="backgroundSVG relative">
				<img
					src="/svg/backgroundSVG/backgroundWaveOne.svg"
					className="absolute w-full object-cover"
					alt=""
					width="75px"
					height="75px"
				/>
			</div>
			<div className="container mx-auto px-0 z-50 relative">
				<div className={styles.content}>
					<div className="py-12 md:py-28 xl:py-28 px-6 md:px-10 xl:px-12">
						<div className="mb-16 text-center mx-auto">
							<span className="text-white text-xl font-bold">{subtitle}</span>
							<h2 className="mb-6 mt-8 text-4xl md:text-6xl text-center text-white md:text-black lg:text-white font-bold font-heading tracking-px-n leading-none md:max-w-5xl mx-auto">
								{title}
							</h2>
						</div>
						<div className="flex flex-col gap-10 lg:gap-20 xl:gap-36 mt-10 lg:mt-36">
							{gridContent.map((keys) => (
								<TextImage
									key={keys?.card?.id}
									icon={keys?.card?.icon}
									image={keys?.card?.image}
									title={keys?.card?.title}
									subtitle={keys?.card?.subtitle}
									paragraph={keys?.card?.paragraph}
									iterationCount={iterationCount++}
									displayImageLocation={keys?.card?.displayImageLocation}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
