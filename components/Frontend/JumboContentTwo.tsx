// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {initial, stagger} from "@/animations/animations";
import {IJumboContentTwo} from "@/types/components/public";

// Components
import JumboCard from "@/components/Frontend/Cards/JumboCard";
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const JumboContentTwo: FC<IJumboContentTwo> = ({
	cardOne,
	cardTwo,
	lastCard,
	gridContent,
}) => {
	return (
		<div className="overflow-hidden bg-white lg:px-4">
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
								<div className="flex flex-wrap items-center justify-center mb-5 lg:justify-start">
									<div className="w-auto p-2">
										<h4 className="text-lg font-semibold tracking-wide text-center text-goldPrime lg:text-left">
											{cardOne?.subtitle}
										</h4>
									</div>
								</div>
								<h3 className="mb-4 text-3xl font-semibold text-center lg:text-left">
									{cardOne?.title}
								</h3>
								<Paragraph
									content={cardOne?.paragraph}
									tailwindStyling="mb-10 text-center lg:text-left text-black"
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
									clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
									backgroundImage: `url("${cardTwo?.backgroundImage?.sourceUrl}")`,
								}}
							/>
						</div>
						{/* Remaining Cards */}
						{gridContent?.length > 0 ? (
							gridContent?.map((item, keys) => (
								<Fragment key={keys}>
									<JumboCard
										key={keys}
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
									clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
									backgroundImage: `url("${lastCard?.backgroundImage?.sourceUrl}")`,
								}}
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default JumboContentTwo;
