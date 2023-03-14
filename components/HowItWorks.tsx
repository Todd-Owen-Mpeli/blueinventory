/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {FunctionComponent} from "react";
import TextImage from "./Cards/TextImage";

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
					mediaDetails: {
						width: number;
						height: number;
					};
				};
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
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
		<section className="" id="HowItWorks">
			<div className="relative backgroundSVG">
				<Image
					width={550}
					height={550}
					alt="Background Wave One Image"
					src="/svg/backgroundSVG/backgroundWaveOne.svg"
					className="absolute w-full h-[550px] object-cover object-center"
				/>
			</div>
			<div className="container relative z-50 px-0 mx-auto">
				<div className="">
					<div className="px-6 py-12 md:py-28 xl:py-28 md:px-10 xl:px-12">
						<div className="mx-auto mb-16 text-center">
							<span className="max-w-sm text-white text-medium">
								{subtitle}
							</span>
							<h2 className="mb-6 mt-8 text-4xl md:text-5xl text-center text-white font-[600] max-w-xl mx-auto leading-[2.75rem]">
								{title}
							</h2>
						</div>
						<div className="flex flex-col gap-10 mt-10 lg:gap-20 xl:gap-36 lg:mt-36">
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
