import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import LogoImage from "./Cards/LogoImageCard";

interface IProps {
	title: string;
	paragraph: string;
	logos: [
		{
			id: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
}

const TrustedBrands: FunctionComponent<IProps> = ({
	logos,
	title,
	paragraph,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto py-8  text-center lg:text-left text-darkGrey font-[400] text-medium";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto py-8 text-center lg:text-left text-darkGrey font-[400] text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="p-4 overflow-hidden bg-white md:pt-36 md:pb-28">
			<div className="container px-4 mx-auto">
				<h2 className="text-black text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl mb-4">
					{title}
				</h2>
				<div
					className={isParagraphContent(paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
				/>
				<div className="grid items-center justify-center grid-cols-2 gap-8 mt-10 lg:flex lg:flex-row">
					{logos.map((keys) => (
						<LogoImage key={keys.id} image={keys.image} />
					))}
				</div>
			</div>
		</section>
	);
};

export default TrustedBrands;
