import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "../../animations/animations";

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

const LogoCard: FC<IProps> = ({image}) => {
	return (
		<motion.div variants={fadeIn} className="mx-auto">
			<Image
				alt={image?.altText}
				src={image?.sourceUrl}
				width={image?.mediaDetails?.width}
				height={image?.mediaDetails?.height}
				className={
					image?.sourceUrl
						? `block w-[150px] h-full sm:w-[150px] lg:w-full lg:h-[125px] object-contain object-center`
						: `hidden`
				}
			/>
		</motion.div>
	);
};

export default LogoCard;
