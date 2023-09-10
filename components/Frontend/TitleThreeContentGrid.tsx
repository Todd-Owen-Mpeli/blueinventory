// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ITitleThreeContentGrid} from "@/types/components/public";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import TitleThreeContentGridCard from "@/components/Frontend/Cards/TitleThreeContentGridCard";

const TitleThreeContentGrid: FC<ITitleThreeContentGrid> = ({
	icon,
	title,
	contentGrid,
}) => {
	return (
		<div className="bg-darkerBlueTwo">
			<div
				className="px-4 py-12 bg-white sm:py-28"
				style={{
					clipPath: `polygon(0.8% 0%, 100% 0%, 100% 99%, 2.8% 97%)`,
				}}
			>
				<div className="container px-0 mx-auto">
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
										? `block w-full max-w-[125px] h-[100px] object-contain object-center`
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
						className="flex flex-wrap m-8"
					>
						{contentGrid?.length > 0 ? (
							contentGrid?.map((item, keys) => (
								<Fragment key={keys}>
									<TitleThreeContentGridCard
										key={keys}
										icon={item?.card?.icon}
										title={item?.card?.title}
										paragraph={item?.card?.paragraph}
										buttonLink={item?.card?.buttonLink}
									/>
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default TitleThreeContentGrid;
