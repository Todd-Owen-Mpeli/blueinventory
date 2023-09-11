// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IJumboCard} from "@/types/components/public";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const JumboCard: FC<IJumboCard> = ({title, subtitle, paragraph}) => {
	return (
		<div className="w-full p-3 md:w-1/2">
			<motion.div
				initial={initial}
				viewport={{once: true}}
				whileInView={stagger}
				className="h-full p-10 rounded-sm bg-purple"
			>
				<motion.div
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className="flex flex-wrap items-center mb-5"
				>
					<h4 className="text-lg font-semibold tracking-wide text-goldPrime">
						{subtitle}
					</h4>
				</motion.div>
				<motion.h3
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className="mb-4 text-3xl font-semibold text-white"
				>
					{title}
				</motion.h3>
				<Paragraph content={paragraph} tailwindStyling="mb-10 text-white" />
			</motion.div>
		</div>
	);
};

export default JumboCard;
