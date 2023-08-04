import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ICTATwo} from "@/types/components/public";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const CTATwo: FC<ICTATwo> = ({
	title,
	paragraph,
	buttonLink,
	backgroundImage,
}) => {
	return (
		<div
			className="px-4 py-10 bg-center bg-no-repeat bg-cover lg:px-0"
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(9, 39, 94, 0.85),
							rgba(9, 39, 94, 0.85)
						),url("${
							backgroundImage
								? backgroundImage
								: `/svg/backgroundSVG/stacked-waves-haikei-blue-pink-red-yellow.svg`
						}")`,
			}}
		>
			<div className="container p-0 mx-auto">
				<div className="flex flex-col items-center justify-between gap-10 px-0 py-8 lg:flex-row lg:px-8">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-col items-center justify-between gap-4 lg:items-start"
					>
						<h2 className="max-w-2xl mb-4 text-3xl font-semibold leading-tight text-center text-white md:text-4xl lg:text-left ">
							{title}
						</h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="w-full lg:max-w-[40rem] mt-4 text-center lg:text-left text-white"
						/>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={buttonLink?.url ? `block mt-7 lg:mt-0` : `hidden`}
					>
						<Link
							href={`${buttonLink?.url}`}
							target={`${buttonLink?.target}`}
							className="px-12 py-6 mb-3 text-center text-white transition duration-200 xl:px-20 bg-blue hover:bg-goldPrime"
						>
							{buttonLink?.title}
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default CTATwo;
