// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ISignUpCta} from "@/types/components/public";

// Components
import SignInAuth from "./Elements/SignInAuth";
import SignUpForm from "./Elements/Forms/SignUpForm";
import SignInDivider from "./Elements/Forms/SignInDivider";
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const SignUpCta: FC<ISignUpCta> = ({
	title,
	titleTwo,
	paragraph,
	bulletPoints,
	backgroundImage,
}) => {
	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-darkGrey sm:px-6 lg:px-8"
				>
					<div className="absolute inset-0">
						<Image
							alt={backgroundImage?.altText}
							src={backgroundImage?.sourceUrl}
							width={backgroundImage?.mediaDetails?.width}
							height={backgroundImage?.mediaDetails?.height}
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="absolute inset-0 bg-gradient-to-t from-blue to-transparent"></div>
					<div className="relative">
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-2xl"
						>
							<motion.h2
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-4xl font-semibold text-center text-white lg:text-left"
							>
								{title}
							</motion.h2>
							<motion.ul
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4"
							>
								{bulletPoints?.length > 0 ? (
									bulletPoints.map((item, keys) => (
										<Fragment key={keys}>
											<motion.li
												initial={initial}
												whileInView={fadeInUp}
												viewport={{once: true}}
												className="flex items-center justify-center space-x-3 lg:justify-start"
											>
												<div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-goldPrime">
													<svg
														className="w-3.5 h-3.5 text-white"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															fillRule="evenodd"
															d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
															clipRule="evenodd"
														></path>
													</svg>
												</div>
												<span className="text-white text-medium">
													{item?.point}
												</span>
											</motion.li>
										</Fragment>
									))
								) : (
									<></>
								)}
							</motion.ul>
						</motion.div>
					</div>
				</motion.div>

				<div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto"
					>
						<motion.h2
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="text-3xl font-semibold leading-tight text-center lg:text-left sm:text-4xl"
						>
							{titleTwo}
						</motion.h2>

						<Paragraph
							content={paragraph}
							tailwindStyling="w-full lg:max-w-3xl mt-2 mb-4 text-center lg:text-left text-darkGrey"
						/>

						<SignInAuth />
						<SignInDivider />
						<SignUpForm />
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default SignUpCta;
