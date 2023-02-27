import {useState, FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";

interface IProps {
	title: string;
	paragraph: string;
}

const AccordionCard: FunctionComponent<IProps> = ({title, paragraph}) => {
	// Display Accordion Content
	const [revealParagraph, setRevealParagraph]: any = useState(false);
	function displayContent() {
		setRevealParagraph(!revealParagraph);
	}
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto py-8 text-left text-white font-[400] text-medium";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto py-8 text-left text-white font-[400] text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(`${paragraphContent}`),
		};
	}

	return (
		<div>
			<div className="w-full p-1">
				<div className="py-7 px-8 bg-white bg-opacity-60 border-2 border-transparent hover:border-blue active:border-blue focus:border-blue rounded-2xl shadow-10xl">
					<div className="flex flex-wrap justify-between -m-2">
						<div className="flex-1 p-2">
							<h3 className="text-lg font-semibold leading-normal">{title}</h3>
							{revealParagraph ? (
								<div
									className={isParagraphContent(paragraph)}
									dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
								/>
							) : null}
						</div>
						<button className="p-2" onClick={displayContent}>
							<svg
								className="relative top-1"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
									stroke="#4F46E5"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccordionCard;
