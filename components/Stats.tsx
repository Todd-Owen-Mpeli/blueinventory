// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {initial, stagger, fadeInUp} from "../animations/animations";

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
							<div className="mx-auto lg:max-w-lg lg:mx-0">
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-10 text-3xl font-bold text-white lg:text-5xl"
								>
									{title}
								</motion.h2>
								<motion.ul
									initial={initial}
									viewport={{once: true}}
									whileInView={stagger}
								>
									{bulletPoints?.length > 0 ? (
										bulletPoints?.map((item, keys) => (
											<motion.li
												key={keys}
												className="mb-4"
												initial={initial}
												whileInView={fadeInUp}
												viewport={{once: true}}
											>
												<StatsBulletPointCard
													bulletPointText={item?.bulletPoint}
													tailwindStyling={`text-white text-base lg:text-medium`}
												/>
											</motion.li>
										))
									) : (
										<></>
									)}
								</motion.ul>
							</div>
						</div>
						<div className="w-full px-4 lg:w-1/2">
							<div className="relative">
								<div className="relative max-w-xl px-8 pb-8 mx-auto bg-white rounded-sm lg:mr-0 pt-14 md:px-14">
									<motion.h4
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="block mb-2 text-3xl font-semibold"
									>
										{subtitle}
									</motion.h4>
									<Paragraph
										content={paragraph}
										tailwindStyling="mb-10 text-base text-black"
									/>
									<div className="max-w-md mx-auto">
										<div className="flex flex-col items-center justify-center gap-4 -mx-4 lg:flex-row">
											<div className="w-full p-4 rounded-sm xs:w-1/2 bg-lightGrey">
												<motion.div
													initial={initial}
													whileInView={stagger}
													viewport={{once: true}}
													className="flex flex-col items-center justify-center lg:items-baseline lg:justify-start"
												>
													<motion.span
														initial={initial}
														whileInView={fadeInUp}
														viewport={{once: true}}
														className="mb-2 text-black"
													>
														{column?.title}
													</motion.span>
													<div className="flex flex-wrap gap-4">
														<motion.span
															initial={initial}
															viewport={{once: true}}
															whileInView={fadeInUp}
															className="mb-2 text-5xl font-bold "
														>
															{column?.values}
														</motion.span>
														<motion.span
															initial={initial}
															viewport={{once: true}}
															whileInView={fadeInUp}
															className="flex my-auto h-fit py-1 pl-1.5 pr-2 items-center justify-center rounded-md bg-blue"
														>
															<Image
																alt=""
																width={500}
																height={500}
																className="w-3 h-3 mr-1"
																src="/svg/up-arrow.png"
															/>
															<span className="ml-1 text-sm text-white lg:font-semibold">
																{column?.percentage}
															</span>
														</motion.span>
													</div>
												</motion.div>
											</div>
											<div className="w-full p-4 rounded-sm xs:w-1/2 bg-lightGrey">
												<motion.div
													initial={initial}
													whileInView={stagger}
													viewport={{once: true}}
													className="flex flex-col items-center justify-center lg:items-baseline lg:justify-start xs:pl-8"
												>
													<motion.span
														initial={initial}
														whileInView={fadeInUp}
														viewport={{once: true}}
														className="mb-2 text-black"
													>
														{columnTwo?.title}
													</motion.span>
													<div className="flex flex-wrap gap-4">
														<motion.span
															initial={initial}
															viewport={{once: true}}
															whileInView={fadeInUp}
															className="mb-2 text-5xl font-bold"
														>
															{columnTwo?.values}
														</motion.span>
														<motion.span
															initial={initial}
															viewport={{once: true}}
															whileInView={fadeInUp}
															className="flex my-auto h-fit py-1 pl-1.5 pr-2 items-center justify-center rounded-md bg-goldPrime"
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
													</div>
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
