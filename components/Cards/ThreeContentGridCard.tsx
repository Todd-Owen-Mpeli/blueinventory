import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";

interface IProps {
	title: string;
	subtitle: string;
	paragraph: string;
	icon: {
		altText: string;
		sourceUrl: string;
	};
}

const ThreeContentGridCard: FunctionComponent<IProps> = ({
	title,
	icon,
	subtitle,
	paragraph,
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

	return (
		<div className="w-full md:w-1/2 lg:w-1/3 p-8">
			<span className="mx-auto lg:mx-0 mb-6 lg:mb-10 flex w-[7rem] h-[7rem] items-center justify-center  rounded-full text-2xl">
				<Image
					width={550}
					height={550}
					alt={`${icon?.altText}`}
					src={`${icon?.sourceUrl}`}
					className="object-contain object center"
				/>
			</span>
			<h5 className="mb-4 text-base uppercase font-bold text-center lg:text-left font-heading text-lightBlue">
				{subtitle}
			</h5>
			<h3 className="mb-4 text-3xl font-bold font-heading text-center lg:text-left text-black">
				{title}
			</h3>
			<div
				className={isParagraphContent(paragraph)}
				dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
			/>
		</div>
	);
};

export default ThreeContentGridCard;
