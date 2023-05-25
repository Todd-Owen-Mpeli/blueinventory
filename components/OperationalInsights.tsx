// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import OperationalInsightsCard from "./Cards/OperationalInsightsCard";

interface IProps {
	title: string;
	italic: string;
	paragraph: string;
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

const operationalInsights: FC<IProps> = ({
	title,
	italic,
	paragraph,
	operationalInsights,
}) => {
	return (
		<section className="py-24 bg-white">
			<div className="container px-4 mx-auto">
				<motion.div
					variants={stagger}
					className="max-w-2xl mx-auto mb-24 text-center lg:max-w-5xl"
				>
					<motion.h1
						variants={stagger}
						className="mb-6 text-4xl font-bold text-darkBlue font-heading sm:text-6xl lg:text-7xl"
					>
						<motion.span variants={fadeInUp}>{title}</motion.span>
						<motion.span variants={fadeInUp} className="ml-4 font-serif italic">
							{italic}
						</motion.span>
					</motion.h1>
					<Paragraph
						content={paragraph}
						tailwindStyling="max-w-xl mx-auto text-base mt-10 text-black"
					/>
				</motion.div>

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
