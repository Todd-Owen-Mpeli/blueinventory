import {FC} from "react";
import {motion} from "framer-motion";
import Paragraph from "./../Elements/Paragraph";
import {fadeInUp, stagger} from "../../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	contentLocation: string;
	backgroundImage: string;
}

const ContentImageCard: FC<IProps> = ({
	title,
	paragraph,
	contentLocation,
	backgroundImage,
}) => {
	return (
		<div
			className="relative min-h-[450PX] px-8 py-20 bg-center bg-no-repeat bg-cover"
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(9, 39, 94, 0),
							rgba(9, 39, 94, 0.65)
						),url("${backgroundImage}")`,
			}}
		>
			<div
				className={
					contentLocation === "Left"
						? `flex flex-col items-baseline justify-center mx-auto max-w-7xl`
						: `flex flex-col items-end justify-center mx-auto max-w-7xl`
				}
			>
				<motion.div variants={stagger} className="max-w-2xl p-10 bg-white">
					<motion.h2
						variants={fadeInUp}
						className="text-flatGreen text-center lg:text-left tracking-normal leading-[2.75rem] font-semibold text-3xl md:text-4xl"
					>
						{title}
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="w-full lg:max-w-2xl mx-auto mt-6 text-black text-left text-base"
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default ContentImageCard;
