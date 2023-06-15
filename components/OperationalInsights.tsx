// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IOperationalInsights} from "@/components/types";
import {useContentContext} from "@/context/context";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import OperationalInsightsCard from "@/components/Cards/OperationalInsightsCard";

const operationalInsights: FC<IOperationalInsights> = ({
	title,
	italic,
	paragraph,
}) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const content = useContentContext();
	return (
		<section className="py-24 bg-white">
			<div className="container px-4 mx-auto">
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="max-w-2xl mx-auto mb-24 text-center lg:max-w-5xl"
				>
					<motion.h1
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="mb-6 text-4xl font-bold text-darkBlue sm:text-6xl lg:text-7xl"
					>
						<motion.span
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
						>
							{title}
						</motion.span>
						<motion.span
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							className="ml-4 font-serif italic"
						>
							{italic}
						</motion.span>
					</motion.h1>
					<Paragraph
						content={paragraph}
						tailwindStyling="max-w-xl mx-auto text-base mt-10 text-black"
					/>
				</motion.div>

				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid gap-4 mb-16 -m-4 sm:gap-y-2 sm:gap-x-0 lg:gap-4 grid-col md:grid-cols-2 lg:grid-cols-3"
				>
					{content.operationalInsights?.length > 0 ? (
						content.operationalInsights.map((item, keys) => (
							<OperationalInsightsCard
								key={keys}
								uri={item?.node?.uri}
								featuredImage={item?.node?.featuredImage}
								title={
									item?.node?.template?.flexibleContent?.flexibleContent[0]
										?.title
								}
								paragraph={
									item?.node?.template?.flexibleContent?.flexibleContent[0]
										?.paragraph
								}
							/>
						))
					) : (
						<></>
					)}
				</motion.div>
				<motion.div
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className="text-center"
				>
					<button className="px-8 py-5 font-bold leading-normal tracking-widest text-white uppercase bg-blue hover:bg-darkBlue">
						Load more articles
					</button>
				</motion.div>
			</div>
		</section>
	);
};

export default operationalInsights;
