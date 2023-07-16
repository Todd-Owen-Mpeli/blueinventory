"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, useState} from "react";
import {motion} from "framer-motion";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const WelcomePopUp: FC = () => {
	const [closeWelcomePopUp, setCloseWelcomePopUp] = useState(true);
	const [popUpClosed, setPopUpClosed] = useState(true);

	// Hides or Displays User dropdown
	const handleCloseWelcomePopUp = () => {
		setCloseWelcomePopUp(!closeWelcomePopUp);
	};

	return (
		<div
			className={
				closeWelcomePopUp
					? `fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center w-full h-full p-4 overflow-y-auto bg-darkerBlueTwo bg-opacity-40`
					: `hidden`
			}
		>
			<div className="w-full max-w-xl p-6 mx-auto bg-darkerBlueTwo rounded-xl">
				<motion.div
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
				>
					<Image
						alt={"Welcome dashboard"}
						src={
							"https://cmsblueinventory.com/wp-content/uploads/2023/04/pexels-sora-shimazaki-5673496-min-scaled.jpg"
						}
						width={800}
						height={800}
						className={`block w-full mb-8 object-cover object-center rounded-xl`}
					/>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="max-w-sm mx-auto mb-6 text-center"
				>
					<motion.h4
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mb-4 text-2xl font-semibold text-white"
					>
						Welcome to your dashboard
					</motion.h4>
					<Paragraph
						content={
							"<p>We&rsquo;re glad to have you onboard. Here are some quick tips to get you up and running.</p>"
						}
						tailwindStyling="py-8 leading-6 text-white text-left"
					/>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="mb-8 text-center"
				>
					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="inline-block w-3 h-3 mr-3 rounded-full bg-blue"
					/>
					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="inline-block w-3 h-3 mr-3 rounded-full bg-darkBlue hover:bg-lightBlue"
					/>
					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="inline-block w-3 h-3 mr-3 rounded-full bg-darkBlue hover:bg-lightBlue"
					/>
					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="inline-block w-3 h-3 mr-3 rounded-full bg-darkBlue hover:bg-lightBlue"
					/>
					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="inline-block w-3 h-3 mr-3 rounded-full bg-darkBlue hover:bg-lightBlue"
					/>
					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="inline-block w-3 h-3 rounded-full bg-darkBlue hover:bg-lightBlue"
					/>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex flex-wrap -mx-3"
				>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="w-full px-3 mb-2 sm:w-1/2 sm:mb-0"
					>
						<button
							className="inline-block w-full px-5 py-3 leading-6 text-center text-white transition duration-200 rounded-lg bg-darkBlue hover:bg-goldPrime"
							onClick={handleCloseWelcomePopUp}
						>
							Skip
						</button>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="w-full px-3 sm:w-1/2"
					>
						<Link
							className="inline-block w-full px-5 py-3 leading-6 text-center text-white transition duration-200 rounded-lg bg-blue hover:bg-goldPrime"
							href={`/`}
						>
							Next
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default WelcomePopUp;
