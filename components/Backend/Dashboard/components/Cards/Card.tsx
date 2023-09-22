// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ICard} from "@/types/Dashboard/components/Cards";
import {initial, stagger, fadeInUp} from "@/animations/animations";

const Card: FC<ICard> = ({
	text,
	value,
	paragraph,
	backgroundImageOption,
	displayBackgroundImage,
}) => {
	let backgroundImage: string;
	const tailwindStyling = {
		h3: "text-sm md:text-medium ",
		h4: "text-3xl font-bold lg:text-6xl ",
		paragraph: "text-sm md:text-medium ",
	};

	switch (backgroundImageOption) {
		case "One":
			backgroundImage = "stacked-waves-haikei-blue-darkblue";
			break;
		case "Two":
			backgroundImage = "stacked-waves-haikei-blue-pink-red-yellow";
			break;
		case "Three":
			backgroundImage = "stacked-waves-haikei-orange-yellow";
			break;
		case "Four":
			backgroundImage = "stacked-waves-haikei-blue";
			break;
		case "Five":
			backgroundImage = "stacked-waves-haikei-pinkRed";
			break;
		default:
			backgroundImage = "stacked-waves-haikei-orange-yellow";
	}

	return (
		<>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="p-6 bg-white bg-center bg-no-repeat bg-cover shadow-lg rounded-2xl"
				style={{
					backgroundImage: `url(${
						displayBackgroundImage
							? `/svg/backgroundSVG/${backgroundImage}.svg`
							: "none"
					})`,
				}}
			>
				<motion.h3
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className={
						displayBackgroundImage
							? tailwindStyling.h3 + " text-white"
							: tailwindStyling.h3 + " text-darkGrey"
					}
				>
					{text}
				</motion.h3>
				<motion.h4
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className={
						displayBackgroundImage
							? tailwindStyling.h4 + " text-white"
							: tailwindStyling.h4 + " text-blue"
					}
				>
					{value ? (
						value
					) : (
						<h4
							className={
								displayBackgroundImage
									? tailwindStyling.h4 + " text-white"
									: tailwindStyling.h4 + " text-blue"
							}
						>
							Loading...
						</h4>
					)}
				</motion.h4>
				<motion.p
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className={
						displayBackgroundImage
							? tailwindStyling.paragraph + " text-white"
							: tailwindStyling.paragraph + " text-darkBlue"
					}
				>
					{paragraph ? (
						paragraph
					) : (
						<p
							className={
								displayBackgroundImage
									? tailwindStyling.paragraph + " text-white"
									: tailwindStyling.paragraph + " text-darkBlue"
							}
						>
							Loading...
						</p>
					)}
				</motion.p>
			</motion.div>
		</>
	);
};

export default Card;
