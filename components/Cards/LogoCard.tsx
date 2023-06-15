// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {ILogoCard} from "@/components/types";
import {initialTwo, fadeIn} from "@/animations/animations";

const logoCard: FC<ILogoCard> = ({image}) => {
	return (
		<motion.div
			initial={initialTwo}
			whileInView={fadeIn}
			viewport={{once: true}}
			className="mx-auto"
		>
			<Image
				alt={image?.altText}
				src={image?.sourceUrl}
				width={image?.mediaDetails?.width}
				height={image?.mediaDetails?.height}
				className={
					image?.sourceUrl
						? `block w-full max-w-[200px] h-[100px] object-contain object-center`
						: `hidden`
				}
			/>
		</motion.div>
	);
};

export default logoCard;
