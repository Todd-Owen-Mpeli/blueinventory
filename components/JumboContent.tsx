// Import
import {FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import JumboCard from "./Cards/JumboCard";

interface IProps {
	title: string;
	paragraph: string;
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
	cardThree: {
		foreground: {
			title: string;
			subtitle: string;
			paragraph: string;
		};
		background: {
			title: string;
			subtitle: string;
			paragraph: string;
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
}

const JumboContent: FC<IProps> = ({
	title,
	paragraph,
	cardOne,
	cardTwo,
	cardThree,
	gridContent,
}) => {
	return (
		<section className="overflow-hidden bg-white">
			<div className="container px-4 mx-auto">
				<div className="max-w-6xl mx-auto pt-28 pb-36">
					<motion.div variants={stagger} className="mb-20">
						<motion.h2
							variants={fadeInUp}
							className="max-w-md mb-6 text-5xl font-bold text-darkBlue font-heading sm:text-6xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-2xl mb-10 text-base text-black"
						/>
					</motion.div>
					<motion.div variants={stagger} className="flex flex-wrap -m-3">
						{/* Card One */}
						<div className="w-full p-3 md:w-1/2">
							<div className="h-full p-10 bg-lightGrey rounded-2xl">
								<div className="flex flex-wrap items-center mb-10">
									<div className="w-auto p-2">
										<h4 className="text-lg font-semibold text-goldPrimeDark">
											{cardOne?.title}
										</h4>
									</div>
								</div>
								<h3 className="mb-4 text-3xl font-semibold text-darkBlue font-heading">
									{cardOne?.title}
								</h3>
								<Paragraph
									content={cardOne?.paragraph}
									tailwindStyling="mb-10 text-base text-black"
								/>
							</div>
						</div>
						{/* Card Two */}
						<div className="w-full p-3 md:w-1/2">
							<div
								className="h-full p-8 bg-center bg-no-repeat bg-cover bg-lightGrey rounded-2xl"
								style={{
									backgroundImage: `url("${cardTwo?.backgroundImage?.sourceUrl}")`,
								}}
							/>
						</div>
						{/* Card Three */}
						<div className="w-full p-3 md:w-1/2">
							<div className="h-full p-16 bg-lightBlue rounded-2xl">
								<div className="flex flex-wrap items-center justify-center h-full">
									<div className="w-full group">
										<div className="relative z-10 transition duration-500 ease-in-out transform group-hover:-translate-y-6 group-hover:-translate-x-6 pr-7">
											<motion.div
												variants={stagger}
												className="relative z-10 p-5 text-center bg-white rounded-10 shadow-3xl"
											>
												<motion.h4
													variants={fadeIn}
													className="mb-3 text-3xl font-bold text-black"
												>
													{cardThree?.foreground?.subtitle}
												</motion.h4>
												<motion.h4
													variants={fadeIn}
													className="mb-3 text-xs font-bold text-black"
												>
													{cardThree?.foreground?.title}
												</motion.h4>
												<Paragraph
													content={cardThree?.foreground?.paragraph}
													tailwindStyling="text-xs text-black"
												/>
											</motion.div>
										</div>
										<div className="transition duration-500 ease-in-out transform group-hover:translate-y-6 group-hover:translate-x-6 -mt-14 pl-7">
											<motion.div
												variants={stagger}
												className="p-5 text-center bg-white opacity-30 rounded-10 shadow-3xl"
											>
												<motion.h4
													variants={fadeIn}
													className="mb-3 text-3xl font-bold text-black"
												>
													{cardThree?.background?.subtitle}
												</motion.h4>
												<motion.h4
													variants={fadeIn}
													className="mb-3 text-xs font-bold text-black"
												>
													{cardThree?.background?.title}
												</motion.h4>
												<Paragraph
													content={cardThree?.background?.paragraph}
													tailwindStyling="text-xs text-black"
												/>
											</motion.div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Remaining Cards */}
						{gridContent?.map((keys) => (
							<JumboCard
								key={keys?.card?.id}
								title={keys?.card?.title}
								subtitle={keys?.card?.subtitle}
								paragraph={keys?.card?.paragraph}
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default JumboContent;
