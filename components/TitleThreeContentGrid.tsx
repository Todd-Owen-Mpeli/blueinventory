// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {ITitleThreeContentGrid} from "@/components/types";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import TitleThreeContentGridCard from "@/components/Cards/TitleThreeContentGridCard";

const TitleThreeContentGrid: FC<ITitleThreeContentGrid> = ({
	icon,
	title,
	contentGrid,
}) => {
	return (
		<section className="py-12 overflow-hidden bg-white lg:px-4 sm:py-28">
			<div className="container px-4 mx-auto">
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex flex-wrap items-center justify-center gap-6 pb-12 mb-16 border-b lg:justify-start lg:items-start sm:pb-20 border-grey"
				>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
					>
						<Image
							alt={icon?.altText}
							src={icon?.sourceUrl}
							width={icon?.mediaDetails?.width}
							height={icon?.mediaDetails?.height}
							className={
								icon?.sourceUrl
									? `block w-full max-w-[125px] h-[50px] sm:h-[100px] object-contain object-center`
									: `hidden`
							}
						/>
					</motion.div>
					<motion.h2
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-xl font-bold leading-normal xl:leading-[2.75rem] xl:text-6xl tracking-px-n md:max-w-3xl"
					>
						{title}
					</motion.h2>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex flex-wrap -m-8"
				>
					{contentGrid?.length > 0 ? (
						contentGrid?.map((item, keys) => (
							<TitleThreeContentGridCard
								key={keys}
								icon={item?.card?.icon}
								title={item?.card?.title}
								paragraph={item?.card?.paragraph}
								buttonLink={item?.card?.buttonLink}
							/>
						))
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default TitleThreeContentGrid;
