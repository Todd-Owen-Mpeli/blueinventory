// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IFormIntro} from "@/types/components/public";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "../Paragraph";

const FormIntro: FC<IFormIntro> = ({title, paragraph}) => {
	return (
		<>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
			>
				<motion.h3
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="mb-4 text-lg font-semibold text-darkBlue"
				>
					{title}
				</motion.h3>
				<Paragraph
					content={paragraph}
					tailwindStyling="mb-4 text-base text-black"
				/>
			</motion.div>
		</>
	);
};

export default FormIntro;
