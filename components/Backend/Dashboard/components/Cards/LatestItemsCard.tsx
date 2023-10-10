// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {ILatestItemsCard} from "@/types/Dashboard/components/Cards";
import {fadeIn, initial, fadeInUp, initialTwo} from "@/animations/animations";

const LatestItemsCard: FC<ILatestItemsCard> = ({
	value,
	itemName,
	category,
	sourceUrl,
}) => {
	return (
		<>
			<motion.div
				initial={initialTwo}
				whileInView={fadeIn}
				viewport={{once: true}}
				className="flex flex-col justify-between gap-4 p-4 rounded-lg shadow-lg min-h-[250px] border-lightGreyTwo border-2"
			>
				<Image
					width={500}
					height={500}
					alt={`${itemName} item from the ${category} category`}
					src={sourceUrl ? sourceUrl : `/img/Logos/default-avatar-profile.jpg`}
					className={
						sourceUrl
							? `block w-full h-[150px] object-contain object-center rounded-lg`
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
						{itemName.length > 40
							? itemName.substring(0, 40) + "..."
							: itemName}
					</motion.h3>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="flex justify-between gap-1 mt-1 text-left text-tiny"
					>
						<span className="font-bold text-goldPrime">£{value}</span>
						<span className="font-bold text-darkGrey">
							{category.length > 30
								? category.substring(0, 30) + "..."
								: category}
						</span>
					</motion.div>
				</div>
			</motion.div>
		</>
	);
};

export default LatestItemsCard;
