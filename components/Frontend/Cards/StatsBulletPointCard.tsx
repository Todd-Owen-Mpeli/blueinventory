// Imports
import {FC} from "react";
import Image from "next/image";
import {IStatsBulletPointCard} from "@/types/components/public";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const StatsBulletPointCard: FC<IStatsBulletPointCard> = ({
	bulletPointText,
	tailwindStyling,
}) => {
	return (
		<span className="flex items-center">
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
