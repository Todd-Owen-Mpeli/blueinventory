// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {ICheckoutWelcome} from "@/types/components/public";

// Firebase
import {useFirebaseContext} from "@/context/Firebase";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const CheckoutWelcome: FC<ICheckoutWelcome> = ({
	title,
	paragraph,
	stripeSuccess,
}) => {
	const firebaseContext = useFirebaseContext();

	// User sign in styling
	const ringStyling =
		"object-cover object-top w-[75px] h-[75px] mb-8 transition-all duration-200 ease-in-out rounded-full ring-4";

	return (
		<>
			<div className="w-full p-4 lg:p-8 h-fit md:w-1/2">
				<div
					className="flex flex-col justify-end h-full px-8 py-16 text-center bg-center bg-no-repeat bg-cover rounded-3xl bg-bg-center"
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
									firebaseContext?.userData?.uid
										? `${ringStyling} ring-darkBlue`
										: `${ringStyling} ring-pinkRed`
								}
								src={
									firebaseContext?.userData?.photoURL
										? firebaseContext?.userData?.photoURL
										: `/img/Logos/default-avatar-profile.jpg`
								}
								alt={`${firebaseContext?.userData?.displayName} profile image`}
							/>
						</motion.div>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="flex flex-col mb-3 text-3xl font-black tracking-tight text-white"
						>
							<span>{title}</span>
							<span>{firebaseContext?.userData?.displayName}</span>
						</motion.h3>
						<Paragraph
							content={paragraph}
							tailwindStyling="mt-4 py-8 text-medium text-white text-center"
						/>

						<motion.button
							initial={initialTwo}
							viewport={{once: true}}
							whileInView={fadeIn}
							aria-label="Login with Google"
							role="button"
							type="button"
							className={
								stripeSuccess
									? `relative flex items-center justify-center w-full px-4 py-3 space-x-4 overflow-hidden text-white transition duration-200 bg-bottom bg-no-repeat bg-cover rounded-md border-darkBlue group focus:ring-2 focus:ring-offset-1 hover:text-white hover:border-white focus:ring-white`
									: `hidden`
							}
							style={{
								backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue.svg")`,
							}}
						>
							<Link href="/dashboard">
								<div
									className="absolute top-0 w-full h-full transition duration-200 transform bg-bottom bg-no-repeat bg-cover bg-darkBlue right-full group-hover:translate-x-full group-hover:scale-102"
									style={{
										backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-orange-yellow-pinkRed.svg")`,
									}}
								/>
								<span className="relative text-base">Dashboard</span>
							</Link>
						</motion.button>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default CheckoutWelcome;
