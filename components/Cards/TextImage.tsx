import Image from "next/image";
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
	image: {
		altText: string;
		sourceUrl: string;
	};
	iterationCount: number;
	displayImageLocation: string;
}

const TextImage: FunctionComponent<IProps> = ({
	title,
	icon,
	image,
	subtitle,
	paragraph,
	iterationCount,
	displayImageLocation,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] text-center lg:text-left text-darkGrey text-medium font-[400]";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] text-center lg:text-left text-darkGrey text-medium font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Check if Image content is null
	 And Displays content if it is not */
	function isImageContent(isImageContent: string) {
		let contentStyling;
		if (isImageContent === null || isImageContent === undefined) {
			contentStyling =
				"hidden w-full h-[400px] lg:h-[550px] rounded-lg object-cover object-center";
		} else {
			contentStyling =
				"block w-full h-[400px] lg:h-[550px] rounded-lg object-cover object-center";
		}
		return contentStyling;
	}

	/* Calculates How many iterations and sets the 
    Icons Background Color a different color per iteration */
	let iconBackgroundColor: string;

	switch (iterationCount) {
		case 0:
			iconBackgroundColor = "#f95674";
			break;
		case 1:
			iconBackgroundColor = "#77b5f8";
			break;
		case 2:
			iconBackgroundColor = "#a2e603";
			break;
		case 3:
			iconBackgroundColor = "#FF8300";
			break;
	}

	// Icon Background Color
	const background: string = `${iconBackgroundColor}`;

	/* Displays left or Right Image depending on 
    what the user selected in the dashboard */
	let rightImageDisplay: string = "block";
	let leftImageDisplay: string = "none";

	if (displayImageLocation === "Left") {
		rightImageDisplay = "none";
		leftImageDisplay = "block";
	}

	return (
		<div className="flex flex-col items-center justify-between gap-20 md:flex-row">
			<div className="w-full lg:w-1/2" style={{display: leftImageDisplay}}>
				<Image
					width={550}
					height={550}
					alt={`${image?.altText}`}
					src={`${image?.sourceUrl}`}
					className={isImageContent(image?.sourceUrl)}
				/>
			</div>
			<div className="w-full mb-5 lg:w-1/2 lg:mb-0">
				<span
					className="mx-auto lg:mx-0 mb-6 lg:mb-10 flex w-[7rem] h-[7rem] items-center justify-center rounded-full text-white text-2xl"
					style={{background}}
				>
					<Image
						width={550}
						height={550}
						alt={`${icon?.altText}`}
						src={`${icon?.sourceUrl}`}
						className="w-full h-[100px] object-contain object-center"
					/>
				</span>
				<h5 className="max-w-sm mx-auto mb-4 text-base font-bold text-center uppercase lg:mx-0 lg:text-left font-heading text-lightBlue">
					{subtitle}
				</h5>
				<h3 className="py-8 text-4xl font-bold text-center text-black md:text-5xl font-heading lg:text-left">
					{title}
				</h3>
				<div
					className={isParagraphContent(paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
				/>
			</div>
			<div className="w-full lg:w-1/2" style={{display: rightImageDisplay}}>
				<Image
					width={550}
					height={550}
					alt={`${image?.altText}`}
					src={`${image?.sourceUrl}`}
					className={isImageContent(image?.sourceUrl)}
				/>
			</div>
		</div>
	);
};

export default TextImage;
