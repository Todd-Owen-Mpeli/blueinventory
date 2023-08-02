"use client";

// Imports
import {motion} from "framer-motion";
import {FC, useEffect, useState} from "react";
import {useContentContext} from "@/context/context";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Firebase
import {getAuth} from "firebase/auth";
import {IFirebaseUser} from "@/types/firebase";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Standard: FC = () => {
	const auth = getAuth();
	const content = useContentContext();
	const [signedInUser, setSignedInUser] = useState(false);
	const [user, setUser] = useState<IFirebaseUser | null>(null);

	// Stripe
	const path: string = "/api/stripe/checkoutSession";
	const method: string = "POST";

	/* Check if user is SIGNED IN if 
  	True Displays Signed In Navbar */
	useEffect(() => {
		const unsubscribe = auth?.onAuthStateChanged((currentUser) => {
			currentUser ? setSignedInUser(true) : setSignedInUser(false);

			// Firebase User Details
			const userDetails: IFirebaseUser = {
				uid: `${currentUser?.uid}`,
				email: `${currentUser?.email}`,
				photoURL: `${currentUser?.photoURL}`,
				providerId: `${currentUser?.providerId}`,
				phoneNumber: `${currentUser?.phoneNumber}`,
				displayName: `${currentUser?.displayName}`,
				creationTime: `${currentUser?.metadata.creationTime}`,
				lastSignInTime: `${currentUser?.metadata.lastSignInTime}`,
			};

			setUser(userDetails);
		});

		return () => {
			unsubscribe();
		};
	}, [signedInUser, auth]);

	return (
		<>
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
							{content.stripePlans.stripeStandardPlan?.paymentRecurringInterval}
						</span>
					</motion.span>
					<form className="w-full" action={path} method={method}>
						<input
							className="hidden"
							type="hidden"
							name="plan"
							value="standard"
						/>
						<input
							className="hidden"
							type="hidden"
							name="user"
							value={`${user}`}
						/>
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
		</>
	);
};

export default Standard;
