// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IPaymentProvidersCard} from "@/types/components/public";
import {initial, fadeInUp} from "@/animations/animations";

const PaymentProvidersCard: FC<IPaymentProvidersCard> = ({image}) => {
	return (
		<motion.div
			initial={initial}
			viewport={{once: true}}
			whileInView={fadeInUp}
			className="w-auto"
		>
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
