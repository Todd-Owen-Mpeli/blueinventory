// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import StatsBulletPointCard from "./Cards/StatsBulletPointCard";

interface IProps {
	title: string;
	subtitle: string;
	paragraph: string;
	bulletPoints: [
		{
			id: string;
			bulletPoint: string;
		}
	];
	column: {
		title: string;
		values: string;
		percentage: string;
	};
	columnTwo: {
		title: string;
		values: string;
		percentage: string;
	};
}

const Stats: FC<IProps> = ({
	title,
	column,
	subtitle,
	columnTwo,
	paragraph,
	bulletPoints,
}) => {
	return (
		<section
			className="py-10 overflow-hidden bg-center bg-no-repeat bg-cover"
			style={{
				backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue.svg")`,
			}}
		>
			<div className="container px-4 mx-auto">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-wrap items-center -mx-4">
						<div className="w-full px-4 mb-16 lg:w-1/2 lg:mb-0">
							<div className="max-w-lg mx-auto lg:mx-0">
								<h2 className="mb-10 text-5xl font-bold text-white xs:text-6xl md:text-7xl">
									{title}
								</h2>
								<ul>
									{bulletPoints?.map((keys) => (
										<StatsBulletPointCard
											key={keys?.id || keys?.bulletPoint}
											bulletPointText={keys?.bulletPoint}
										/>
									))}
								</ul>
							</div>
						</div>
						<div className="w-full px-4 lg:w-1/2">
							<div className="relative">
								<div className="relative max-w-xl px-8 pb-8 mx-auto bg-white rounded-sm lg:mr-0 pt-14 md:px-14">
									<motion.h4
										variants={fadeIn}
										className="block mb-2 text-3xl font-semibold"
									>
										{subtitle}
									</motion.h4>
									<Paragraph
										content={paragraph}
										tailwindStyling="mb-10 text-base text-black"
									/>
									<div className="max-w-md">
										<div className="flex flex-col items-center justify-center gap-4 -mx-4 lg:flex-row">
											<div className="w-full p-4 rounded-sm xs:w-1/2 bg-lightGrey">
												<motion.div
													variants={stagger}
													className="flex flex-col items-baseline justify-start"
												>
													<motion.span
														variants={fadeInUp}
														className="mb-2 text-black"
													>
														{column?.title}
													</motion.span>
													<motion.span
														variants={fadeInUp}
														className="mb-2 text-5xl font-bold "
													>
														{column?.values}
													</motion.span>
													<motion.span
														variants={fadeInUp}
														className="inline-flex py-1 pl-1.5 pr-2 items-center justify-center rounded-md bg-babyBlue"
													>
														<Image
															alt=""
															width={500}
															height={500}
															className="w-3 h-3 mr-1"
															src="/svg/up-arrow.png"
														/>
														<span className="ml-1 text-sm font-semibold text-red-800">
															{column?.percentage}
														</span>
													</motion.span>
												</motion.div>
											</div>
											<div className="w-full p-4 rounded-sm xs:w-1/2 bg-lightGrey">
												<motion.div
													variants={stagger}
													className="flex flex-col items-baseline justify-start xs:pl-8"
												>
													<motion.span
														variants={fadeInUp}
														className="mb-2 text-black"
													>
														{columnTwo?.title}
													</motion.span>
													<motion.span
														variants={fadeInUp}
														className="mb-2 text-5xl font-bold"
													>
														{columnTwo?.values}
													</motion.span>
													<motion.span
														variants={fadeInUp}
														className="inline-flex py-1 pl-1.5 pr-2 items-center justify-center rounded-md bg-goldPrime"
													>
														<Image
															alt=""
															width={500}
															height={500}
															className="w-3 h-3 mr-1"
															src="/svg/up-arrow.png"
														/>
														<span className="ml-1 text-sm font-semibold text-green-800">
															{columnTwo?.percentage}
														</span>
													</motion.span>
												</motion.div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stats;
