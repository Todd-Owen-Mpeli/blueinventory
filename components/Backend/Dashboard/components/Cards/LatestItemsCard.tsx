// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {ILatestItemsCard} from "@/types/Dashboard/components/Cards";
import {fadeIn, initial, fadeInUp, initialTwo} from "@/animations/animations";

const LatestItemsCard: FC<ILatestItemsCard> = ({
	itemName,
	sourceUrl,
	value,
}: any | unknown) => {
	return (
		<>
			<motion.div
				initial={initialTwo}
				whileInView={fadeIn}
				viewport={{once: true}}
				className="flex flex-col gap-4 p-2 rounded-lg shadow-3xl"
			>
				<Image
					width={500}
					height={500}
					alt={`${itemName}`}
					src={sourceUrl ? sourceUrl : `/img/Logos/default-avatar-profile.jpg`}
					className={
						sourceUrl
							? `block w-full h-[250px] object-cover object-center rounded-lg`
							: `hidden`
					}
				/>
				<div className="flex flex-col">
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mt-2 text-base font-medium text-left text-black"
					>
						{itemName}
					</motion.h3>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="flex gap-1 mt-1 text-sm text-left text-darkGrey font-base"
					>
						<span className="">Value:</span>
						<span className="">£{value}</span>
					</motion.div>
				</div>
			</motion.div>
		</>
	);
};

export default LatestItemsCard;
