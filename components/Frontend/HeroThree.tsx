// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IHeroThreeProps} from "@/types/components/public";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";
import HeroThreeCard from "@/components/Frontend/Cards/HeroThreeCard";

const HeroThree: FC<IHeroThreeProps> = ({title, paragraph, imageGrid}) => {
	return (
		<div className="px-4 py-10 bg-white lg:px-0">
			<div className="container px-0 mx-auto">
				<div className="py-10">
					<motion.h2
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="flex flex-col text-center mb-0 sm:mb-3 text-2xl sm:text-6xl lg:text-7xl text-darkBlue font-bold leading-normal sm:leading-[3.5rem]"
					>
						{title}
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="my-5 w-full lg:max-w-3xl mx-auto text-left"
					/>
				</div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="items-center justify-center gap-4 px-4 sm:grid grid-col sm:grid-cols-2 lg:grid-cols-4 lg:justify-between"
				>
					{imageGrid?.length > 0 ? (
						imageGrid.map((item, keys) => (
							<Fragment key={keys}>
								<HeroThreeCard
									key={keys}
									link={item?.card?.link}
									image={item?.card?.image}
								/>
							</Fragment>
						))
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default HeroThree;
