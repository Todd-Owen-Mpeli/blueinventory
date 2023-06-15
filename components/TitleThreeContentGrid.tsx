// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ITitleThreeContentGrid} from "@/components/types";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import TitleThreeContentGridCard from "@/components/Cards/TitleThreeContentGridCard";

const TitleThreeContentGrid: FC<ITitleThreeContentGrid> = ({
	title,
	contentGrid,
}) => {
	return (
		<section className="py-12 overflow-hidden bg-white lg:px-4 sm:py-28">
			<div className="container px-4 mx-auto">
				<div className="pb-12 mb-16 border-b sm:pb-20 border-grey">
					<motion.h2
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-xl font-bold leading-normal xl:leading-[2.75rem] xl:text-6xl tracking-px-n md:max-w-3xl"
					>
						{title}
					</motion.h2>
				</div>
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
