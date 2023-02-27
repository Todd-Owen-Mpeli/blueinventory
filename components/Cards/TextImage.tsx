import Image from "next/image";
import {FunctionComponent} from "react";

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
	/* Check if Image content is null
	 And Displays content if it is not */
	function isImageContent(isImageContent: string) {
		let contentStyling;
		if (isImageContent === null || isImageContent === undefined) {
			contentStyling = "hidden w-full h-full object-cover rounded-[15px]";
		} else {
			contentStyling = "block w-full h-full object-cover rounded-[15px]";
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
		<div className="flex flex-col md:flex-row justify-between items-center gap-20">
			<div className="w-full lg:w-1/2" style={{display: leftImageDisplay}}>
				<Image
					width={550}
					height={550}
					alt={`${icon?.altText}`}
					src={`${icon?.sourceUrl}`}
					className={isImageContent(icon?.sourceUrl)}
				/>
			</div>
			<div className="w-full lg:w-1/2 mb-5 lg:mb-0">
				<span
					className="mx-auto lg:mx-0 mb-6 lg:mb-10 flex w-[7rem] h-[7rem] items-center justify-center rounded-full text-white text-2xl"
					style={{background}}
				>
					<Image
						width={550}
						height={550}
						alt={`${icon?.altText}`}
						src={`${icon?.sourceUrl}`}
						className="object-contain object-center"
					/>
				</span>
				<h5 className="mb-4 text-base uppercase font-bold text-center lg:text-left font-heading text-lightBlue">
					{subtitle}
				</h5>
				<h3 className="mb-4 text-3xl font-bold font-heading text-center lg:text-left text-black">
					{title}
				</h3>
				<p className="text-black text-base text-center lg:text-left leading-relaxed">
					{paragraph}
				</p>
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
