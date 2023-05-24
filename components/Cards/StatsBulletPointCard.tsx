// Imports
import {FC} from "react";
import Image from "next/image";

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
			<span className={tailwindStyling ? tailwindStyling : `hidden`}>
				{bulletPointText}
			</span>
		</span>
	);
};

export default StatsBulletPointCard;
