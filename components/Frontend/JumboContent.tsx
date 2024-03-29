// Imports
import {
	stagger,
	initial,
	fadeInUp,
	fadeInTwo,
	initialTwo,
} from "@/animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IJumboContent} from "@/types/components/public";

// Components
import JumboCard from "@/components/Frontend/Cards/JumboCard";
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const JumboContent: FC<IJumboContent> = ({
	title,
	icon,
	cardOne,
	cardTwo,
	lastCard,
	cardThree,
	paragraph,
	rotateIcon,
	gridContent,
}) => {
	return (
		<div className="overflow-hidden bg-white lg:px-4">
			<div className="container px-4 mx-auto">
				<div className="max-w-6xl mx-auto pt-28 pb-36">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="relative mb-20"
					>
						<motion.h2
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							className="relative z-50 max-w-md mx-auto mb-6 text-3xl font-bold text-center lg:mx-0 md:text-4xl lg:text-left"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-2xl mx-auto lg:mx-0 px-0 mb-10  text-center lg:text-left text-black relative z-50"
						/>
						<motion.div
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							className="absolute top-[-140px] right-[-35px] md:right-[30px] lg:right-[145px]"
						>
							<Image
								alt={icon?.altText}
								src={icon?.sourceUrl}
								width={icon?.mediaDetails?.width}
								height={icon?.mediaDetails?.height}
								className={
									icon?.sourceUrl
										? `block rotate-[${rotateIcon}deg] w-full max-w-[250px] h-[500px] object-contain object-center`
										: `hidden`
								}
							/>
						</motion.div>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="relative z-50 flex flex-wrap -m-3"
					>
						{/* Card One */}
						<div className="w-full p-3 md:w-1/2">
							<motion.div
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="h-full p-10 rounded-sm bg-lightGrey"
							>
								<div className="flex flex-wrap items-center justify-center mb-5 lg:justify-start">
									<div className="w-auto p-2">
										<motion.h4
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="text-lg font-semibold tracking-wide text-center text-goldPrime lg:text-left"
										>
											{cardOne?.subtitle}
										</motion.h4>
									</div>
								</div>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-4 text-3xl font-semibold text-center lg:text-left"
								>
									{cardOne?.title}
								</motion.h3>
								<Paragraph
									content={cardOne?.paragraph}
									tailwindStyling="mb-10  text-black text-center lg:text-left"
								/>
							</motion.div>
						</div>
						{/* Card Two */}
						<motion.div
							initial={initialTwo}
							viewport={{once: true}}
							whileInView={fadeInTwo}
							className={
								cardTwo?.backgroundImage?.sourceUrl
									? `w-full p-3 md:w-1/2 min-h-[450px]`
									: `hidden`
							}
						>
							<div
								className="h-full p-8 bg-center bg-no-repeat bg-cover rounded-sm bg-lightGrey"
								style={{
									clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
									backgroundImage: `url("${cardTwo?.backgroundImage?.sourceUrl}")`,
								}}
							/>
						</motion.div>
						{/* Card Three */}
						<div className="w-full p-3 md:w-1/2">
							<div
								className="h-full px-8 py-8 bg-center bg-no-repeat bg-cover rounded-sm lg:p-16 bg-darkBlue"
								style={{
									backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-orange-yellow.svg")`,
								}}
							>
								<div className="flex flex-wrap items-center justify-center h-full">
									<motion.div
										initial={initial}
										whileInView={stagger}
										viewport={{once: true}}
										className="w-full group"
									>
										<div className="relative z-10 transition duration-500 ease-in-out transform group-hover:-translate-y-6 group-hover:-translate-x-6 pr-7">
											<motion.div
												initial={initial}
												whileInView={stagger}
												viewport={{once: true}}
												className="relative z-10 p-5 text-center bg-white rounded-10 shadow-3xl"
											>
												<motion.h4
													initial={initialTwo}
													whileInView={fadeInTwo}
													viewport={{once: true}}
													className="mb-3 text-3xl font-bold text-black"
												>
													{cardThree?.foreground?.subtitle}
												</motion.h4>
												<motion.h4
													initial={initialTwo}
													whileInView={fadeInTwo}
													viewport={{once: true}}
													className="mb-3 font-bold text-black"
												>
													{cardThree?.foreground?.title}
												</motion.h4>
												<Paragraph
													content={cardThree?.foreground?.paragraph}
													tailwindStyling="text-tiny text-black"
												/>
											</motion.div>
										</div>
										<div className="mt-2 transition-all duration-500 ease-in-out transform group-hover:translate-y-6 group-hover:translate-x-6 pl-7">
											<motion.div
												initial={initial}
												whileInView={stagger}
												viewport={{once: true}}
												className="p-5 text-center bg-white opacity-30 rounded-10 shadow-3xl"
											>
												<motion.h4
													initial={initialTwo}
													whileInView={fadeInTwo}
													viewport={{once: true}}
													className="mb-3 text-3xl font-bold text-black"
												>
													{cardThree?.background?.subtitle}
												</motion.h4>
												<motion.h4
													initial={initialTwo}
													whileInView={fadeInTwo}
													viewport={{once: true}}
													className="mb-3 font-bold text-black"
												>
													{cardThree?.background?.title}
												</motion.h4>
												<Paragraph
													content={cardThree?.background?.paragraph}
													tailwindStyling="text-tiny text-black"
												/>
											</motion.div>
										</div>
									</motion.div>
								</div>
							</div>
						</div>
						{/* Remaining Cards */}
						{gridContent?.length > 0 ? (
							gridContent?.map((item, keys) => (
								<Fragment key={keys}>
									<JumboCard
										title={item?.card?.title}
										subtitle={item?.card?.subtitle}
										paragraph={item?.card?.paragraph}
										backgroundColor={item?.card?.backgroundColor}
									/>
								</Fragment>
							))
						) : (
							<></>
						)}
						{/* Last Card */}
						<motion.div
							initial={initialTwo}
							viewport={{once: true}}
							whileInView={fadeInTwo}
							className={
								lastCard?.backgroundImage?.sourceUrl
									? `w-full p-3 md:w-1/2 min-h-[450px]`
									: `hidden`
							}
						>
							<div
								className="h-full p-8 bg-center bg-no-repeat bg-cover rounded-sm bg-lightGrey"
								style={{
									clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
									backgroundImage: `url("${lastCard?.backgroundImage?.sourceUrl}")`,
								}}
							/>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default JumboContent;
