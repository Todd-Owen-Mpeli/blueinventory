// Import
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

interface IProps {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	content: {
		title: string;
		paragraph: string;
	};
	contentTwo: {
		title: string;
		paragraph: string;
	};
}
const CTATwo: FC<IProps> = ({
	title,
	content,
	paragraph,
	contentTwo,
	buttonLink,
	buttonLinkTwo,
	backgroundImage,
}) => {
	return (
		<section className="py-12 bg-black md:py-24 lg:py-32">
			<div className="container px-4 mx-auto">
				<div className="max-w-md mx-auto lg:max-w-none">
					<div className="flex flex-wrap items-center -mx-4">
						<div className="w-full px-4 mb-8 lg:w-1/2 lg:mb-0">
							<motion.div variants={stagger} className="mx-auto lg:max-w-md">
								<motion.h4
									variants={fadeInUp}
									className="mb-5 text-4xl font-bold text-white"
								>
									{title}
								</motion.h4>
								<Paragraph
									content={paragraph}
									tailwindStyling="mb-10 w-full lg:max-w-3xl mt-4 text-center lg:text-left text-white"
								/>
								<motion.div
									variants={stagger}
									className="flex flex-col flex-wrap sm:flex-row sm:items-center"
								>
									<motion.div variants={fadeInUp}>
										<Link
											href={`${buttonLink?.url}`}
											target={`${buttonLink?.target}`}
											className="relative inline-block w-full h-12 px-8 py-3 mb-3 overflow-hidden font-bold text-center text-black transition duration-200 group sm:w-auto sm:mb-0 sm:mr-4"
										>
											<div className="absolute top-0 left-0 w-full h-24 transition duration-500 transform -translate-y-8 group-hover:-translate-y-1 bg-gradient-to-br from-babyBlue via-goldPrime to-blue"></div>
											<span className="relative">{buttonLink?.title}</span>
										</Link>
									</motion.div>
									<motion.div variants={fadeInUp}>
										<Link
											href={`${buttonLinkTwo?.url}`}
											target={`${buttonLinkTwo?.target}`}
											className="relative inline-flex items-center justify-center p-px overflow-hidden group"
										>
											<div className="absolute top-0 left-0 w-full h-24 transition duration-500 transform -translate-y-8 group-hover:-translate-y-1 bg-gradient-to-br from-babyBlue via-goldPrime to-blue"></div>
											<div className="relative w-full h-full px-6 py-3 text-center bg-darkBlue">
												<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-babyBlue via-goldPrime to-blue">
													{buttonLinkTwo?.title}
												</span>
											</div>
										</Link>
									</motion.div>
								</motion.div>
							</motion.div>
						</div>
						<div className="w-full px-4 lg:w-1/2">
							<motion.div variants={stagger} className="flex flex-wrap -mx-4">
								<motion.div
									variants={fadeInUp}
									className="w-full px-4 mb-6 lg:w-1/2 lg:mb-0"
								>
									<div className="h-full p-8 border border-blueGray-800">
										<div className="mb-10"></div>
										<h5 className="mb-3 text-xl font-bold text-white">
											{content?.title}
										</h5>
										<Paragraph
											content={content?.paragraph}
											tailwindStyling="w-full lg:max-w-3xl mt-4 text-center lg:text-left text-white"
										/>
									</div>
								</motion.div>
								<motion.div
									variants={fadeInUp}
									className="w-full px-4 lg:w-1/2"
								>
									<div className="h-full p-8 border border-blueGray-800">
										<div className="mb-10"></div>
										<h5 className="mb-3 text-xl font-bold text-white">
											{contentTwo?.title}
										</h5>
										<Paragraph
											content={contentTwo?.paragraph}
											tailwindStyling="w-full lg:max-w-3xl mt-4 text-center lg:text-left text-white"
										/>
									</div>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTATwo;
