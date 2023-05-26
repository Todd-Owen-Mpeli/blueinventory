// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {initial, fadeInUp, fadeIn, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import JumboCard from "./Cards/JumboCard";

interface IProps {
	cardOne: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	cardTwo: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				subtitle: string;
				paragraph: string;
			};
		}
	];
	lastCard: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
}

const JumboContentTwo: FC<IProps> = ({
	cardOne,
	cardTwo,
	lastCard,
	gridContent,
}) => {
	return (
		<section className="overflow-hidden bg-white">
			<div className="container px-4 mx-auto">
				<div className="mx-auto max-w-7xl pt-28 pb-36">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-wrap -m-3"
					>
						{/* Card One */}
						<div className="w-full p-3 md:w-1/2">
							<div className="h-full p-10 rounded-sm bg-lightGrey">
								<div className="flex flex-wrap items-center mb-10">
									<div className="w-auto p-2">
										<h4 className="text-lg font-semibold text-goldPrimeDark">
											{cardOne?.subtitle}
										</h4>
									</div>
								</div>
								<h3 className="mb-4 text-3xl font-semibold">
									{cardOne?.title}
								</h3>
								<Paragraph
									content={cardOne?.paragraph}
									tailwindStyling="mb-10 text-base text-black"
								/>
							</div>
						</div>
						{/* Card Two */}
						<div
							className={
								cardTwo?.backgroundImage?.sourceUrl
									? `w-full p-3 md:w-1/2 min-h-[450px]`
									: `hidden`
							}
						>
							<div
								className="h-full p-8 bg-center bg-no-repeat bg-cover rounded-sm bg-lightGrey"
								style={{
									backgroundImage: `url("${cardTwo?.backgroundImage?.sourceUrl}")`,
								}}
							/>
						</div>
						{/* Remaining Cards */}
						{gridContent?.map((item, keys) => (
							<JumboCard
								key={keys}
								title={item?.card?.title}
								subtitle={item?.card?.subtitle}
								paragraph={item?.card?.paragraph}
							/>
						))}
						{/* Last Card */}
						<div
							className={
								lastCard?.backgroundImage?.sourceUrl
									? `w-full p-3 md:w-1/2 min-h-[450px]`
									: `hidden`
							}
						>
							<div
								className="h-full p-8 bg-center bg-no-repeat bg-cover rounded-sm bg-lightGrey"
								style={{
									backgroundImage: `url("${lastCard?.backgroundImage?.sourceUrl}")`,
								}}
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default JumboContentTwo;
