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
import {motion} from "framer-motion";
import {getAuth} from "firebase/auth";
import {FC, useEffect, useState} from "react";
import {IFirebaseUser} from "@/types/firebase";
import {useContentContext} from "@/context/context";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const PricingTwo: FC = () => {
	const auth = getAuth();
	const content = useContentContext();
	const [signedInUser, setSignedInUser] = useState(false);
	const paragraph: string =
		"Unlock your ambitions & true potential. An accurate inventory management system can improve an organization’s efficiency and productivity.";

	// User sign in styling
	const ringStyling =
		"object-cover object-top w-[75px] h-[75px] mb-8 transition-all duration-200 ease-in-out rounded-full ring-4";

	// Firebase User Details
	const user: IFirebaseUser = {
		uid: `${auth?.currentUser?.uid}`,
		email: `${auth?.currentUser?.email}`,
		metadata: `${auth?.currentUser?.metadata}`,
		phoneNumber: `${auth?.currentUser?.phoneNumber}`,
		displayName: `${auth?.currentUser?.displayName}`,
		profileImageURL: `${auth?.currentUser?.photoURL}`,
	};

	/* Check if user is SIGNED IN if 
	True Displays Signed In Navbar */
	useEffect(() => {
		auth?.onAuthStateChanged((currentUser) => {
			currentUser ? setSignedInUser(true) : setSignedInUser(false);
		});

		return () => {
			signedInUser;
		};
	}, [signedInUser, auth]);

	return (
		<>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="flex flex-row justify-between gap-4"
			>
				<div className="w-full p-8 md:w-1/2">
					<div
						className="flex flex-col justify-end h-full px-8 py-16 text-center bg-no-repeat bg-cover rounded-3xl bg-bg-center"
						style={{
							backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-orange-yellow.svg")`,
						}}
					>
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="mx-auto md:max-w-md"
						>
							<motion.div
								initial={initialTwo}
								viewport={{once: true}}
								whileInView={fadeIn}
								className="p-2 mx-auto w-fit"
							>
								<Image
									width={500}
									height={500}
									className={
										user?.uid
											? `${ringStyling} ring-darkBlue`
											: `${ringStyling} ring-pinkRed`
									}
									src={
										user?.profileImageURL
											? user?.profileImageURL
											: `/img/Logos/default-avatar-profile.jpg`
									}
									alt={`${user?.displayName} profile image`}
								/>
							</motion.div>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="flex flex-col mb-3 text-3xl font-black tracking-tight text-white"
							>
								<span>Welcome</span>
								<span>{user?.displayName}</span>
							</motion.h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="mt-4 py-8 text-medium text-white text-center"
							/>
						</motion.div>
					</div>
				</div>
				<div className="flex flex-col w-full gap-4 py-16">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-row items-center gap-6 p-8 mb-8 bg-white border-[1px] w-fit border-goldPrime"
					>
						<div className="self-center px-3">
							<h3 className="mb-4 text-3xl font-bold text-center">
								{content.stripePlans.stripeStandardPlan?.name}
							</h3>
							<Paragraph
								content={content.stripePlans.stripeStandardPlan?.description}
								tailwindStyling="text-base my-4 text-darkBlue max-w-sm text-center"
							/>
						</div>
						<div className="px-3">
							<ul className="mb-4 text-gray-500">
								<li className="flex mb-4">
									<svg
										className="flex-shrink-0 w-5 h-5 mr-4 text-blue"
										viewBox="0 0 20 15"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
										></path>
									</svg>
									<span>Complete Insights</span>
								</li>
								<li className="flex mb-4">
									<svg
										className="flex-shrink-0 w-5 h-5 mr-4 text-blue"
										viewBox="0 0 20 15"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
										></path>
									</svg>
									<span>10GB cloud storage</span>
								</li>
								<li className="flex">
									<svg
										className="flex-shrink-0 w-5 h-5 mr-4 text-blue"
										viewBox="0 0 20 15"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
										></path>
									</svg>
									<span>Cancel anytime</span>
								</li>
							</ul>
						</div>
						<div className="flex flex-col items-center justify-center gap-4 px-3 lg:text-center">
							<motion.span
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
							>
								<span className="text-5xl font-extrabold leading-none text-darkBlue">
									£{content.stripePlans.stripeStandardPlan?.price}
								</span>
								<span className="text-darkBlue">
									/
									{
										content.stripePlans.stripeStandardPlan
											?.paymentRecurringInterval
									}
								</span>
							</motion.span>
							<form
								action="/api/stripe/standardPlanCheckoutSession"
								method="POST"
								className="w-full"
							>
								<button
									type="submit"
									role="link"
									className="w-full px-6 py-2 mt-4 font-bold leading-loose text-white transition duration-200 bg-goldPrime hover:bg-blue"
								>
									Choose Plan
								</button>
							</form>
						</div>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-row items-center gap-6 p-8 mb-8 bg-white border-[1px] w-fit border-goldPrime"
					>
						<div className="self-center px-3">
							<h3 className="mb-4 text-3xl font-bold text-center">
								{content.stripePlans.stripePremiumPlan?.name}
							</h3>
							<Paragraph
								content={content.stripePlans.stripePremiumPlan?.description}
								tailwindStyling="text-base my-4 text-darkBlue max-w-sm text-center"
							/>
						</div>
						<div className="px-3">
							<ul className="mb-4 text-gray-500">
								<li className="flex mb-4">
									<svg
										className="flex-shrink-0 w-5 h-5 mr-4 text-blue"
										viewBox="0 0 20 15"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
										></path>
									</svg>
									<span>Complete Insights</span>
								</li>
								<li className="flex mb-4">
									<svg
										className="flex-shrink-0 w-5 h-5 mr-4 text-blue"
										viewBox="0 0 20 15"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
										></path>
									</svg>
									<span>100GB cloud storage</span>
								</li>
								<li className="flex">
									<svg
										className="flex-shrink-0 w-5 h-5 mr-4 text-blue"
										viewBox="0 0 20 15"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
										></path>
									</svg>
									<span>Cancel anytime</span>
								</li>
							</ul>
						</div>
						<div className="flex flex-col items-center justify-center gap-4 px-3 lg:text-center">
							<motion.span
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
							>
								<span className="text-5xl font-extrabold leading-none text-darkBlue">
									£{content.stripePlans.stripePremiumPlan?.price}
								</span>
								<span className="text-darkBlue">
									/
									{
										content.stripePlans.stripePremiumPlan
											?.paymentRecurringInterval
									}
								</span>
							</motion.span>
							<form
								action="/api/stripe/premiumPlanCheckoutSession"
								method="POST"
								className="w-full"
							>
								<button
									type="submit"
									role="link"
									className="w-full px-6 py-2 mt-4 font-bold leading-loose text-white transition duration-200 bg-goldPrime hover:bg-blue"
								>
									Choose Plan
								</button>
							</form>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</>
	);
};

export default PricingTwo;
