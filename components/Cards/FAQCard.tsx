import {useState} from "react";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
}

const FAQCard: FunctionComponent<IProps> = ({title, paragraph}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mb-5 text-darkGrey text-medium leading-relaxed font-[400]";
		} else {
			contentStyling =
				"block mb-5 text-darkGrey text-medium leading-relaxed font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	// Displays Accordion Content
	const [accordionOpen, setAccordionOpen]: any = useState(false);
	const [iconOpen, setIconOpen]: any = useState(true);

	function displayAccordionContent() {
		setAccordionOpen(!accordionOpen);
		setIconOpen(!iconOpen);
	}

	return (
		<div className="w-full">
			<div className="border-b border-grey">
				<div className="flex flex-wrap my-1.5">
					<div className="w-auto p-2 mt-2">
						<svg
							className="relative top-1"
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z"
								stroke="#2563eb"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</div>
					<div className="flex-1 p-2 mt-2">
						<button onClick={displayAccordionContent}>
							<motion.h3 variants={fadeIn} className="mb-4 font-[600] ">
								{title}
							</motion.h3>
						</button>
						{accordionOpen ? (
							<motion.div
								variants={fadeIn}
								className={isParagraphContent(paragraph)}
								dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
							/>
						) : null}
					</div>
					<div className="w-auto p-2">
						<button onClick={displayAccordionContent}>
							{iconOpen ? (
								<svg
									className="relative top-1"
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M3.21967 3.21967C3.51256 2.92678 3.98744 2.92678 4.28033 3.21967L7.5 6.43934L10.7197 3.21967C11.0126 2.92678 11.4874 2.92678 11.7803 3.21967C12.0732 3.51256 12.0732 3.98744 11.7803 4.28033L8.56066 7.5L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L7.5 8.56066L4.28033 11.7803C3.98744 12.0732 3.51256 12.0732 3.21967 11.7803C2.92678 11.4874 2.92678 11.0126 3.21967 10.7197L6.43934 7.5L3.21967 4.28033C2.92678 3.98744 2.92678 3.51256 3.21967 3.21967Z"
										fill="black"
									></path>
								</svg>
							) : null}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQCard;
