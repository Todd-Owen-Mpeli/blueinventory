// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import OperationalInsightsCard from "./Cards/OperationalInsightsCard";

interface IProps {
	operationalInsights: [
		{
			node: {
				id: string;
				uri: string;
				title: string;
				singleOperationalInsightPost: {
					titleParagraph: {
						paragraph: string;
					};
				};
				featuredImage: {
					node: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							width: number;
							height: number;
						};
					};
				};
			};
		}
	];
}

const operationalInsights: FC<IProps> = ({operationalInsights}) => {
	return (
		<section className="py-24 bg-white">
			<div className="container px-4 mx-auto">
				<motion.div
					variants={stagger}
					className="grid gap-4 mb-16 -m-4 sm:gap-y-2 sm:gap-x-0 lg:gap-4 grid-col md:grid-cols-2 lg:grid-cols-3"
				>
					{operationalInsights.map((keys) => (
						<OperationalInsightsCard
							key={keys?.node?.id}
							uri={keys?.node?.uri}
							title={keys?.node?.title}
							featuredImage={keys?.node?.featuredImage}
							paragraph={
								keys?.node?.singleOperationalInsightPost?.titleParagraph
									?.paragraph
							}
						/>
					))}
				</motion.div>
				<motion.div variants={fadeInUp} className="text-center">
					<button className="px-8 py-5 font-bold leading-normal tracking-widest text-white uppercase bg-blue hover:bg-darkBlue">
						Load more articles
					</button>
				</motion.div>
			</div>
		</section>
	);
};

export default operationalInsights;
