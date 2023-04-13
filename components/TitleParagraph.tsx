import {FC} from "react";
import {motion} from "framer-motion";
import Paragraph from "./Elements/Paragraph";
import {fadeInUp} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
}

const TitleParagraph: FC<IProps> = ({title, paragraph}) => {
	return (
		<section className="bg-white">
			<div className="container p-0 mx-auto">
				<div className="flex flex-col px-4">
					<motion.div variants={fadeInUp} className="py-16 sm:py-20 md:py-28">
						<h2 className="max-w-3xl mx-auto text-black text-center tracking-normal leading-[2.75rem] font-[900] text-3xl md:text-4xl">
							{title}
						</h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="w-full lg:max-w-[50rem] mx-auto mt-4 py-8 text-black text-left text-base"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TitleParagraph;
