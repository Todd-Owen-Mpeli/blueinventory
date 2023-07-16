// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IJumboCard} from "@/types/components/public";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const JumboCard: FC<IJumboCard> = ({title, subtitle, paragraph}) => {
	return (
		<div className="w-full p-3 md:w-1/2">
			<motion.div
				initial={initial}
				viewport={{once: true}}
				whileInView={stagger}
				className="h-full p-10 rounded-sm bg-lightGrey"
			>
				<motion.div
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className="flex flex-wrap items-center mb-10"
				>
					<h4 className="text-lg font-semibold text-goldPrimeDark">
						{subtitle}
					</h4>
				</motion.div>
				<motion.h3
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className="mb-4 text-3xl font-semibold"
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
