// Import
import {FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

interface IProps {
	title: string;
	paragraph: string;
}

const titleParagraph: FC<IProps> = ({title, paragraph}) => {
	return (
		<section className="px-4 py-10 bg-white">
			<div className="container p-0 mx-auto">
				<div className="flex flex-col">
					<motion.div
						variants={fadeInUp}
						className="w-full py-16 mx-auto sm:py-20 md:py-28 lg:max-w-3xl"
					>
						<h2 className="text-black text-center tracking-normal leading-[2.75rem] font-[900] text-3xl md:text-4xl">
							{title}
						</h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="mt-4 py-8 text-black text-left"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default titleParagraph;
