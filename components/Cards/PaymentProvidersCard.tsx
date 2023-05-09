// Import
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp} from "../../animations/animations";

interface IProps {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

const PaymentProvidersCard: FC<IProps> = ({image}) => {
	return (
		<motion.div variants={fadeInUp} className="w-auto">
			<Image
				alt={image?.altText}
				src={image?.sourceUrl}
				width={image?.mediaDetails?.width}
				height={image?.mediaDetails?.height}
				className={
					image?.sourceUrl
						? `w-full h-[50px] sm:h-[75px] object-contain object-center`
						: `hidden`
				}
			/>
		</motion.div>
	);
};

export default PaymentProvidersCard;
