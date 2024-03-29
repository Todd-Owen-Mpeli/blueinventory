import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IErrorPage} from "@/types/components/public";
import {initial, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const ErrorPage: FC<IErrorPage> = ({
	title,
	paragraph,
	buttonLink,
	buttonLinkTwo,
	backgroundImage,
}) => {
	return (
		<section
			className="h-screen bg-cover bg-center bg-[no-repeat] flex flex-col justify-center items-center"
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(9, 39, 94, 0.65),
							rgba(9, 39, 94, 0.65)
						),url("${
							backgroundImage
								? backgroundImage
								: `/svg/backgroundSVG/stacked-waves-haikei-orange-yellow.svg`
						}")`,
			}}
		>
			<div className="px-10 my-auto overflow-hidden py-44">
				<div className="container p-0 mx-auto">
					<motion.h1
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mb-4 text-5xl font-semibold leading-tight text-center text-white lg:text-7xl"
					>
						{title}
					</motion.h1>
					<Paragraph
						content={paragraph}
						tailwindStyling="mx-auto my-10 text-lg leading-relaxed text-center text-white md:max-w-md"
					/>
					<div className="flex flex-col items-center justify-center gap-4 mx-auto sm:flex-row sm md:max-w-max">
						<motion.button
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							type="button"
							className="m-auto bg-center bg-no-repeat bg-cover"
							style={{
								backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-pink-red-yellow.svg")`,
							}}
						>
							<Link
								href={buttonLink?.url ? buttonLink?.url : `/`}
								target={buttonLink?.target}
								className="flex flex-row px-6 py-3 leading-4 text-white transition-all duration-500 ease-in-out bg-transparent lg:py-6 lg:px-20 hover:bg-blue"
							>
								<svg
									className="mr-2.5 text-white"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.66667 12.6666L2 7.99998M2 7.99998L6.66667 3.33331M2 7.99998L14 7.99998"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
								<span className=" tracking-wider text-white font-[500]">
									{buttonLink?.title}
								</span>
							</Link>
						</motion.button>
						<motion.button
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							type="button"
							className="m-auto bg-center bg-no-repeat bg-cover"
							style={{
								backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-orange-yellow.svg")`,
							}}
						>
							<Link
								href={buttonLinkTwo?.url ? buttonLinkTwo?.url : `/`}
								target={buttonLinkTwo?.target}
								className="flex flex-row px-6 py-3 leading-4 text-white transition-all duration-500 ease-in-out bg-transparent lg:py-6 lg:px-20 hover:bg-goldPrime"
							>
								<span className=" tracking-wider text-white font-[500]">
									{buttonLinkTwo?.title}
								</span>
							</Link>
						</motion.button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
