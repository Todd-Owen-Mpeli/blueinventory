import {FC, useRef} from "react";
import styled from "styled-components";
import Paragraph from "./../Elements/Paragraph";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {
	initial,
	fadeInUp,
	stagger,
	slideInRightInitial,
	slideInLeftInitial,
	slideInRightFinish,
} from "../../animations/animations";

const ContentImageCard = styled.div`
	ol,
	ul {
		padding-left: 30px;

		li {
			padding: 0px 10px;
			position: relative;
			list-style-type: decimal;

			strong {
				font-family: $fontStyle_main;
				@apply text-darkBlue font-bold tracking-wider uppercase text-medium py-4;
			}
		}
	}
`;

interface IProps {
	title: string;
	paragraph: string;
	contentLocation: string;
	backgroundImage: string;
}

const contentImageCard: FC<IProps> = ({
	title,
	paragraph,
	contentLocation,
	backgroundImage,
}) => {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	return (
		<ContentImageCard
			ref={ref}
			className="relative min-h-[450PX] px-8 py-20 bg-center bg-no-repeat bg-cover"
			style={{
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
				style={contentLocation === "Left" ? {x} : {x}}
				// initial={
				// 	contentLocation === "Left" ? slideInLeftInitial : slideInRightInitial
				// }
				// whileInView={slideInRightFinish}
				// viewport={{once: true}}
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
						tailwindStyling="w-full lg:max-w-2xl mx-auto mt-6 text-black text-left text-base"
					/>
				</motion.div>
			</motion.div>
		</ContentImageCard>
	);
};

export default contentImageCard;
