/* eslint-disable react-hooks/exhaustive-deps */
// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Firebase
import {useFirebaseContext} from "@/context/Firebase";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const PersonalInformation: FC = () => {
	const firebaseContext = useFirebaseContext();

	// Ensure userData is not null before using it in JSX
	if (!firebaseContext?.userData) {
		return <div>Loading...</div>; // or some other loading indicator
	}

	return (
		<>
			<div className="flex flex-col justify-between gap-4=">
				<div>
					<div>
						<Image
							width={1000}
							height={1000}
							className="object-cover object-center w-full h-full min-h-[175px] max-h-[175px] lg:min-h-[250px] lg:max-h-[250px]"
							src={"/svg/backgroundSVG/stacked-waves-haikei-orange-yellow.svg"}
							alt="profile hero image"
						/>
					</div>
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex items-center justify-between gap-4 p-6"
					>
						<div className="relative flex flex-row items-center justify-between gap-4">
							<div className="hidden lg:block absolute top-[-110px] left-[20px] ">
								<Image
									width={1000}
									height={1000}
									id="avatarButton"
									data-dropdown-toggle="userDropdown"
									data-dropdown-placement="bottom-start"
									className="object-cover object-center h-[40px] w-full lg:h-[175px] transition-all duration-200 ease-in-out rounded-full ring-4 ring-white max-w-none"
									src={
										firebaseContext?.userData?.photoURL
											? firebaseContext?.userData?.photoURL
											: `/img/Logos/BlueInventory favicon Two.png`
									}
									alt={`${firebaseContext?.userData?.displayName} profile image`}
								/>
								<span className="bottom-[-2px] left-[7.75rem] absolute w-6 h-6 bg-brightGreen border-2 border-white rounded-full" />
							</div>
							<motion.div
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="flex flex-col items-baseline justify-between ml-0 lg:ml-[13rem]"
							>
								<motion.h1
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="text-2xl font-bold text-left"
								>
									Settings
								</motion.h1>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="block pt-1 font-medium text-center text-medium text-darkGrey"
								>
									Personal Information
								</motion.h3>
							</motion.div>
						</div>
					</motion.div>
				</div>
				<div className="flex flex-col gap-4 px-4 py-10 lg:flex-row">
					<div className="flex flex-col w-full gap-24 px-8 py-10 bg-white shadow-xl lg:w-2/3 rounded-2xl lg:flex-row">
						<div className="flex flex-col justify-between gap-8">
							<div className="flex flex-col gap-2">
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="font-bold text-left text-medium text-darkBlue"
								>
									Display Name
								</motion.h3>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="text-base font-medium text-left text-darkGrey"
								>
									{firebaseContext?.userData?.displayName}
								</motion.h3>
							</div>
							<div className="flex flex-col gap-2">
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="flex items-center gap-2"
								>
									<h3 className="font-bold text-left text-medium text-darkBlue">
										Email Address
									</h3>
									<span
										className={
											firebaseContext?.userData?.emailVerified
												? "px-2 py-1 text-xs text-white rounded-full bg-brightGreen"
												: "px-2 py-1 text-xs text-white rounded-full bg-pinkRed"
										}
									>
										{firebaseContext?.userData?.emailVerified
											? "Verified"
											: "Not Verified"}
									</span>
								</motion.h3>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="text-base font-medium text-left text-darkGrey"
								>
									{firebaseContext?.userData?.email}
								</motion.h3>
							</div>
							<div className="flex flex-col gap-2">
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="font-bold text-left text-medium text-darkBlue"
								>
									Member Role
								</motion.h3>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="text-base font-medium text-left text-darkGrey"
								>
									Owner
								</motion.h3>
							</div>
						</div>
						<div className="flex flex-col gap-8">
							<div className="flex flex-col gap-2">
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="font-bold text-left text-medium text-darkBlue"
								>
									Joined
								</motion.h3>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="text-base font-medium text-left text-darkGrey"
								>
									{firebaseContext?.userData?.metadata?.creationTime}
								</motion.h3>
							</div>
							<div className="flex flex-col gap-2">
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="font-bold text-left text-medium text-darkBlue"
								>
									Last Sign In
								</motion.h3>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="text-base font-medium text-left text-darkGrey"
								>
									{firebaseContext?.userData?.metadata?.lastSignInTime}
								</motion.h3>
							</div>
							<div className="flex flex-col gap-2">
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="font-bold text-left text-medium text-darkBlue"
								>
									Phone Number
								</motion.h3>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="text-base font-medium text-left text-darkGrey"
								>
									{firebaseContext?.userData?.phoneNumber != null
										? firebaseContext?.userData?.phoneNumber
										: "none"}
								</motion.h3>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full p-8 bg-white shadow-xl lg:w-1/3 rounded-2xl">
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-lg font-bold text-left lg:text-2xl"
						>
							Business App Development
						</motion.h3>
						<Paragraph
							content={`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
							<br/>
							<br/>
							Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.`}
							tailwindStyling="my-5 text-base font-medium leading-5 text-black text-left"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default PersonalInformation;
