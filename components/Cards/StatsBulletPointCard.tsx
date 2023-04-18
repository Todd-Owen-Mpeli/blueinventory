// Import
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp} from "../../animations/animations";

interface IProps {
	bulletPointText: string;
}

const StatsBulletPointCard: FC<IProps> = ({bulletPointText}) => {
	return (
		<motion.li variants={fadeInUp} className="flex items-start mb-4">
			<Image
				alt=""
				width={500}
				height={500}
				className="w-6 h-6 mr-3"
				src="/svg/green-checkmark-icon.svg"
			/>
			<span className="text-white text-medium">{bulletPointText}</span>
		</motion.li>
	);
};

export default StatsBulletPointCard;
