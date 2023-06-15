// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import styled from "styled-components";
import {ITitleParagraph} from "@/components/types";
import {initial, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const TitleParagraph = styled.div`
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

const titleParagraph: FC<ITitleParagraph> = ({title, paragraph}) => {
	return (
		<TitleParagraph className="px-4 py-10 bg-white">
			<div className="container p-0 mx-auto">
				<div className="flex flex-col">
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="w-full py-16 mx-auto sm:py-20 lg:max-w-3xl"
					>
						<h2 className="text-center tracking-normal leading-[2.75rem] font-extrabold text-3xl md:text-4xl">
							{title}
						</h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="mt-4 py-8 text-black text-left"
						/>
					</motion.div>
				</div>
			</div>
		</TitleParagraph>
	);
};

export default titleParagraph;
