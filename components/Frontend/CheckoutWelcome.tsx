// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, useState, useEffect} from "react";

// Firebase
import {getAuth} from "firebase/auth";
import {IFirebaseUser} from "@/types/firebase";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const CheckoutWelcome: FC = () => {
	const auth = getAuth();
	const [signedInUser, setSignedInUser] = useState(false);
	const [user, setUser] = useState<IFirebaseUser | null>(null);
	const paragraph: string =
		"Unlock your ambitions & true potential. An accurate inventory management system can improve an organization’s efficiency and productivity.";

	// User sign in styling
	const ringStyling =
		"object-cover object-top w-[75px] h-[75px] mb-8 transition-all duration-200 ease-in-out rounded-full ring-4";

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
									user?.photoURL
										? user?.photoURL
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
		</>
	);
};

export default CheckoutWelcome;