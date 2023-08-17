/* eslint-disable react-hooks/exhaustive-deps */
// Imports
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, useEffect, useState} from "react";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Firebase
import {getAuth} from "firebase/auth";
import {getUserDocument} from "@/functions/Backend/firebase/getUserDocument";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const PersonalInformation: FC = () => {
	const auth = getAuth();
	const [userData, setUserData] = useState<any | null>(null);

	/* Gets Current Signed-in user's document
	data from cloud firestore database */
	useEffect(() => {
		const unsubscribe = auth?.onAuthStateChanged(
			async (currentUser: any | null) => {
				const userData: any = await getUserDocument(currentUser?.uid);
				setUserData(userData);
			}
		);

		return () => {
			unsubscribe();
		};
	}, [auth]);

	// Ensure userData is not null before using it in JSX
	if (!userData) {
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
									width="100"
									height="100"
									id="avatarButton"
									data-dropdown-toggle="userDropdown"
									data-dropdown-placement="bottom-start"
									className="object-cover object-top w-[40px] h-[40px] lg:w-[175px] lg:h-[175px] transition-all duration-200 ease-in-out rounded-full ring-4 ring-white max-w-none"
									src={
										userData?.photoURL
											? userData?.photoURL
											: `/img/Logos/BlueInventory favicon Two.png`
									}
									alt={`${userData?.displayName} profile image`}
								/>
								<span className="bottom-[-2px] left-[7.75rem] absolute w-6 h-6 bg-brightGreenDash border-2 border-white rounded-full" />
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

						<motion.button
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							aria-label="Edit Profile"
							role="button"
							type="button"
							className="relative flex items-center justify-center px-10 py-2 overflow-hidden text-white transition duration-200 bg-center bg-no-repeat bg-cover rounded-md w-fit h-fit border-darkBlue group focus:ring-2 focus:ring-offset-1"
							style={{
								backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue.svg")`,
							}}
						>
							<div
								className="absolute top-0 w-full h-full transition duration-200 transform bg-bottom bg-no-repeat bg-cover bg-darkBlue right-full group-hover:translate-x-full group-hover:scale-102"
								style={{
									backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-darkblue.svg")`,
								}}
							/>
							<p className="relative">Edit</p>
						</motion.button>
					</motion.div>
				</div>
				<div className="flex flex-col gap-4 px-4 py-10 lg:flex-row">
					<div className="flex flex-col w-full gap-12 px-8 py-10 bg-white shadow-xl lg:w-2/3 rounded-2xl lg:flex-row">
						<div className="flex flex-col justify-between gap-6">
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
									{userData?.displayName}
								</motion.h3>
							</div>
							<div className="flex flex-col gap-2">
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="font-bold text-left text-medium text-darkBlue"
								>
									Email Address
								</motion.h3>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="text-base font-medium text-left text-darkGrey"
								>
									{userData?.email}
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
						<div className="flex flex-col gap-6">
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
									{userData?.creationTime}
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
									{userData?.phoneNumber === null
										? userData?.phoneNumber
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
							className="text-2xl font-bold text-left"
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
