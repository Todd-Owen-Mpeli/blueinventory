import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {ISustainability} from "@/types/components/public";
import {fadeIn, fadeInUp, initialTwo, initial} from "@/animations/animations";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const Sustainability: FC<ISustainability> = ({
	title,
	subtitle,
	paragraph,
	percentage,
	imageText,
	image,
}) => {
	return (
		<div
			className={`py-16 bg-darkBlue bg-cover bg-center bg-no-repeat`}
			style={{
				backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue.svg")`,
			}}
		>
			<div className="px-4 mx-auto max-w-7xl">
				<div className="grid items-center grid-cols-1 gap-y-6 lg:grid-cols-2 md:gap-x-36">
					<div className="flex flex-col px-4">
						<span className="mb-4 text-goldPrime text-center lg:text-left  font-[400] uppercase tracking-[0.25rem]">
							{subtitle}
						</span>
						<motion.h2
							initial={initialTwo}
							viewport={{once: true}}
							whileInView={fadeIn}
							className="mb-8 text-3xl font-semibold leading-tight text-center text-white lg:text-left sm:text-4xl lg:text-5xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling=" text-center lg:text-left text-white"
						/>
					</div>

					<div className="relative p-0 lg:pl-6 lg:px-0">
						<div className="relative">
							<Image
								alt={image?.altText}
								src={image?.sourceUrl}
								width={image?.mediaDetails?.width}
								height={image?.mediaDetails?.height}
								className="mx-auto object-cover object-center w-full lg:w-[700px] h-full max-h-[450px] lg:max-h-[700px] min-h-[450px]"
							/>

							<motion.div
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="absolute bg-white -bottom-10 lg:-left-16"
							>
								<div className="px-8 py-10">
									<span className="block text-4xl font-bold text-black lg:text-5xl">
										{percentage}
									</span>
									<span className="block max-w-xs mt-2  leading-tight text-black">
										{imageText}
									</span>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sustainability;
