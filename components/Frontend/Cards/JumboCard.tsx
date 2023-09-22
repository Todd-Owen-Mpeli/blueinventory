// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IJumboCard} from "@/types/components/public";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const JumboCard: FC<IJumboCard> = ({
	title,
	subtitle,
	paragraph,
	backgroundColor,
}) => {
	let titleStyling: string;
	let subtitleStyling: string;
	let paragraphStyling: string;
	let backgroundColorStyling: string;
	let backgroundWaveStyling: string;

	switch (backgroundColor) {
		case "Purple":
			titleStyling = "text-white";
			subtitleStyling = "text-goldPrime";
			paragraphStyling = "text-white";
			backgroundWaveStyling = "none";
			backgroundColorStyling = "bg-purple";

			break;
		case "Grey":
			titleStyling = "text-darkBlue";
			subtitleStyling = "text-goldPrime";
			paragraphStyling = "text-black";
			backgroundWaveStyling = "none";
			backgroundColorStyling = "bg-lightGrey";
			break;
		case "BlueWave":
			titleStyling = "text-white";
			subtitleStyling = "text-goldPrime";
			paragraphStyling = "text-white";
			backgroundColorStyling = "bg-transparent";
			backgroundWaveStyling = "stacked-waves-haikei-blue-darkblue";
			break;
		case "YellowWave":
			titleStyling = "text-white";
			subtitleStyling = "text-white";
			paragraphStyling = "text-white";
			backgroundColorStyling = "bg-transparent";
			backgroundWaveStyling = "stacked-waves-haikei-orange-yellow";
			break;
		default:
			titleStyling = "text-darkBlue";
			subtitleStyling = "text-goldPrime";
			paragraphStyling = "text-black";
			backgroundWaveStyling = "none";
			backgroundColorStyling = "bg-lightGrey";
	}
	return (
		<div className="w-full p-3 md:w-1/2">
			<motion.div
				initial={initial}
				viewport={{once: true}}
				whileInView={stagger}
				className={`h-full p-10 rounded-sm bg-cover bg-no-repeat bg-center ${backgroundColorStyling}`}
				style={{
					backgroundImage: `url(${
						backgroundColor
							? `/svg/backgroundSVG/${backgroundWaveStyling}.svg`
							: "none"
					})`,
				}}
			>
				<motion.div
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className="flex flex-wrap items-center justify-center mb-5 lg:justify-start"
				>
					<motion.h4
						initial={initial}
						viewport={{once: true}}
						whileInView={fadeInUp}
						className={`text-lg font-semibold tracking-wide text-center ${subtitleStyling} lg:text-left`}
					>
						{subtitle}
					</motion.h4>
				</motion.div>
				<motion.h3
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className={`mb-4 text-3xl font-semibold text-center ${titleStyling} lg:text-left`}
				>
					{title}
				</motion.h3>
				<Paragraph
					content={paragraph}
					tailwindStyling={`mb-10 ${paragraphStyling} text-center lg:text-left`}
				/>
			</motion.div>
		</div>
	);
};

export default JumboCard;
