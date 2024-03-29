// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/Global";
import {IOperationalInsights} from "@/types/components/public";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";
import OperationalInsightsCard from "@/components/Frontend/Cards/OperationalInsightsCard";

const operationalInsights: FC<IOperationalInsights> = ({
	title,
	italic,
	paragraph,
}) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const globalContext = useGlobalContext();

	return (
		<div className="py-24 bg-white">
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
						className="mb-6 text-4xl text-darkBlue sm:text-6xl lg:text-7xl"
					>
						<motion.span
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							className="font-bold"
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
						tailwindStyling="max-w-xl mx-auto  mt-10 text-black"
					/>
				</motion.div>

				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid gap-4 mb-16 -m-4 sm:gap-y-2 sm:gap-x-0 lg:gap-4 grid-col md:grid-cols-2 lg:grid-cols-3"
				>
					{globalContext.operationalInsights?.length > 0 ? (
						globalContext.operationalInsights.map((item, keys) => (
							<Fragment key={keys}>
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
							</Fragment>
						))
					) : (
						<></>
					)}
				</motion.div>
				{/* <motion.div
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className="text-center"
				>
					<button className="px-8 py-5 font-bold leading-normal tracking-widest text-white uppercase bg-blue hover:bg-darkBlue">
						Load more articles
					</button>
				</motion.div> */}
			</div>
		</div>
	);
};

export default operationalInsights;
