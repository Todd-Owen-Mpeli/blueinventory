// Imports
import {FC} from "react";
import Image from "next/image";
import Paragraph from "../Elements/Paragraph";

interface IProps {
	bulletPointText: string;
	tailwindStyling: string;
}

const StatsBulletPointCard: FC<IProps> = ({
	bulletPointText,
	tailwindStyling,
}) => {
	return (
		<span className="flex items-start">
			<Image
				alt=""
				width={500}
				height={500}
				className="w-6 h-6 mr-3"
				src="/svg/green-checkmark-icon.svg"
			/>
			<Paragraph
				content={bulletPointText}
				tailwindStyling={tailwindStyling ? tailwindStyling : `hidden`}
			/>
		</span>
	);
};

export default StatsBulletPointCard;
