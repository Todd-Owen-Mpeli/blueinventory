// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {initial, fadeInUp} from "@/animations/animations";

// Components
import {IFaqCard} from "@/types/components/public";
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const FAQCard: FC<IFaqCard> = ({title, paragraph}) => {
	return (
		<motion.div
			initial={initial}
			whileInView={fadeInUp}
			viewport={{once: true}}
			className="px-6 py-4"
		>
			<motion.h3
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
				className="mb-3 text-lg font-semibold tracking-tight"
			>
				{title}
			</motion.h3>
			<Paragraph
				content={paragraph}
				tailwindStyling="text-base tracking-tight font-medium text-black mb-16"
			/>
		</motion.div>
	);
};

export default FAQCard;
