// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import TitleThreeContentGridCard from "./Cards/TitleThreeContentGridCard";

interface IProps {
	title: string;
	contentGrid: [
		{
			card: {
				id: string;
				title: string;
				paragraph: string;
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
			};
		}
	];
}

const TitleThreeContentGrid: FC<IProps> = ({title, contentGrid}) => {
	return (
		<section className="py-12 overflow-hidden bg-white sm:py-28">
			<div className="container px-4 mx-auto">
				<div className="pb-12 mb-16 border-b sm:pb-20 border-grey">
					<motion.h2
						variants={fadeInUp}
						className="text-xl font-bold leading-normal xl:leading-[2.75rem] xl:text-6xl tracking-px-n md:max-w-3xl"
					>
						{title}
					</motion.h2>
				</div>
				<motion.div variants={stagger} className="flex flex-wrap -m-8">
					{contentGrid?.map((keys) => (
						<TitleThreeContentGridCard
							title={keys?.card?.title}
							paragraph={keys?.card?.paragraph}
							buttonLink={keys?.card?.buttonLink}
							key={keys?.card?.id || keys?.card?.title}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default TitleThreeContentGrid;
