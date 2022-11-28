/* eslint-disable @next/next/no-img-element */
import styles from "../styles/components/CTAOne.module.scss";
import TextImage from "./TextImage";

const HowItWorks = (props) => {
	// Calculates How many iterations and sets the Icons Background Color a different color per iteration
	let iterationCount = 0;

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
							<span className="text-white text-xl font-bold">
								{props?.subtitle}
							</span>
							<h2 className="mb-6 mt-8 text-4xl md:text-6xl text-center text-white md:text-black lg:text-white font-bold font-heading tracking-px-n leading-none md:max-w-5xl mx-auto">
								{props?.title}
							</h2>
						</div>
						<div className="flex flex-col gap-10 lg:gap-20 xl:gap-36 mt-10 lg:mt-36">
							{props.content.map((keys) => (
								<TextImage
									key={keys.id}
									icon={keys?.icon}
									image={keys?.image}
									title={keys?.title}
									subtitle={keys?.subtitle}
									paragraph={keys?.paragraph}
									iterationCount={iterationCount++}
									displayImageLocation={keys?.displayImageLocation}
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
