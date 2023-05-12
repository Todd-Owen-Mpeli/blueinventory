// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../../animations/animations";

// Components
import Paragraph from ".././Elements/Paragraph";

interface IProps {
	title: string;
	subtitle: string;
	paragraph: string;
}

const JumboCard: FC<IProps> = ({title, subtitle, paragraph}) => {
	return (
		<div className="w-full p-3 md:w-1/2">
			<motion.div
				variants={stagger}
				className="h-full p-10 rounded-sm bg-lightGrey"
			>
				<motion.div
					variants={fadeInUp}
					className="flex flex-wrap items-center mb-10"
				>
					<h4 className="text-lg font-semibold text-goldPrimeDark">
						{subtitle}
					</h4>
				</motion.div>
				<motion.h3
					variants={fadeInUp}
					className="mb-4 text-3xl font-semibold font-heading"
				>
					{title}
				</motion.h3>
				<Paragraph
					content={paragraph}
					tailwindStyling="mb-10 text-base text-black"
				/>
			</motion.div>
		</div>
	);
};

export default JumboCard;
