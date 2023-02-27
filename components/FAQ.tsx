import Link from "next/link";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../animations/animations";
import FAQCard from "./Cards/FAQCard";

interface IProps {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	faqContent: [
		{
			id: string;
			title: string;
			paragraph: string;
		}
	];
}

const FAQ: FunctionComponent<IProps> = ({
	title,
	paragraph,
	buttonLink,
	faqContent,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mb-11 text-center lg:text-left text-medium text-darkGrey font-[400]";
		} else {
			contentStyling =
				"block mb-11 text-center lg:text-left text-medium text-darkGrey font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Check if Button Link content is null
	 And Displays content if it isn't null */
	function isButtonLink(isButtonLink: string) {
		let contentStyling: string;
		let tailwindStyling: string =
			"py-4 px-6 w-full text-white font-[600] rounded-lg shadow-4xl focus:ring focus:ring-pink bg-pink hover:bg-yellow transition-all ease-in-out duration-[0.5s]";
		if (isButtonLink === null || isButtonLink === undefined) {
			contentStyling = `hidden ${tailwindStyling}`;
		} else {
			contentStyling = `block ${tailwindStyling}`;
		}
		return contentStyling;
	}

	return (
		<section className="px-4 py-16 overflow-hidden bg-white lg:py-32">
			<div className="container px-0 mx-auto">
				<div className="flex flex-col items-center justify-center lg:flex-row">
					<div className="w-full p-8 lg:w-1/2">
						<motion.h2
							variants={fadeIn}
							className="mb-5 text-center lg:text-left tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl"
						>
							{title}
						</motion.h2>
						<motion.div
							variants={fadeIn}
							className={isParagraphContent(paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
						/>
						<div className="lg:inline-block w-[fit-content] mx-auto lg:mx-0">
							<div className={isButtonLink(buttonLink?.url)}>
								<Link
									href={`${buttonLink?.url}`}
									target={`${buttonLink?.target}`}
								>
									{buttonLink?.title}
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full p-0 lg:w-1/2 lg:p-8">
						<div className="ml-auto md:max-w-2xl">
							<div className="flex flex-col">
								{faqContent.map((keys) => (
									<FAQCard
										key={keys?.id}
										title={keys?.title}
										paragraph={keys?.paragraph}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
