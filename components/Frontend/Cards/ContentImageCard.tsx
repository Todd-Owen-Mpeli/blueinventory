// Imports
import {
	initial,
	stagger,
	fadeInUp,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import {motion} from "framer-motion";
import styled from "styled-components";
import {IContentImageCard} from "@/types/components/public";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const ContentImageCard = styled.div`
	ol,
	ul {
		padding-left: 30px;

		li {
			padding: 0px 10px;
			position: relative;
			list-style-type: decimal;

			strong {
				font-family: $main;
				@apply text-darkBlue font-bold tracking-wider uppercase text-medium py-4;
			}
		}
	}
`;

const contentImageCard: FC<IContentImageCard> = ({
	title,
	paragraph,
	contentLocation,
	backgroundImage,
}) => {
	let svgPath: string;
	let clipPath: string;
	let svgStyling: string;

	switch (contentLocation) {
		case "Left":
			svgPath = "stacked-waves-haikei-blue-darkblue";
			clipPath = "polygon(0% 0%, 100% 0%, 96.2% 91.8%, 0% 97.8%)";
			svgStyling =
				"border-l-[10px] border-r-[10px] lg:border-r-[20px] border-t-[10px] border-b-0 border-pinkRed";
			break;
		case "Right":
			svgPath = "stacked-waves-haikei-orange-yellow";
			clipPath = "polygon(0% 0%, 100% 0%, 100% 97.3%, 4.4% 90.3%)";
			svgStyling =
				"border-l-[10px] border-r-[10px] lg:border-r-[20px] border-t-[10px] border-b-0 border-purple";
			break;
		default:
			svgPath = "stacked-waves-haikei-blue-darkblue";
			clipPath = "polygon(0% 0%, 100% 0%, 96.2% 91.8%, 0% 97.8%)";
			svgStyling =
				"border-l-[10px] border-r-[10px] lg:border-r-[20px] border-t-[10px] border-b-0 border-pinkRed";
	}

	return (
		<div
			className="bg-center bg-no-repeat bg-cover"
			style={{
				backgroundImage: `url("/svg/backgroundSVG/${svgPath}.svg")`,
			}}
		>
			<ContentImageCard
				className={`relative min-h-[450PX] px-8 py-20 bg-center bg-no-repeat bg-cover ${svgStyling}`}
				style={{
					clipPath: clipPath,
					backgroundImage: `linear-gradient(
							0deg,
							rgba(9, 39, 94, 0),
							rgba(9, 39, 94, 0.65)
						),url("${
							backgroundImage
								? backgroundImage
								: `/svg/backgroundSVG/stacked-waves-haikei-blue.svg`
						}")`,
				}}
			>
				<motion.div
					initial={
						contentLocation === "Left"
							? slideInLeftInitial
							: slideInRightInitial
					}
					whileInView={slideInRightFinish}
					viewport={{once: true}}
					className={
						contentLocation === "Left"
							? `flex flex-col items-baseline justify-center mx-auto max-w-7xl`
							: `flex flex-col items-end justify-center mx-auto max-w-7xl`
					}
				>
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="max-w-2xl p-10 bg-white"
					>
						<motion.h2
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-flatGreen text-center lg:text-left tracking-normal leading-[2.75rem] font-semibold text-3xl md:text-4xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="w-full lg:max-w-2xl mx-auto mt-6 text-black text-left "
						/>
					</motion.div>
				</motion.div>
			</ContentImageCard>
		</div>
	);
};

export default contentImageCard;
