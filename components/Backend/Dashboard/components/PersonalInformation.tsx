/* eslint-disable react-hooks/exhaustive-deps */
// Imports
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, useState, useEffect} from "react";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Firebase
import {getAuth} from "firebase/auth";
import {getUserDocument} from "@/functions/Backend/firebase/getUserDocument";

const PersonalInformation: FC = () => {
	const auth = getAuth();
	const authUserUid: any = auth.currentUser?.uid;
	const [userData, setUserData] = useState(null);

	/* Gets Current Signed-in user's document
	data from cloud firestore database */
	const getCurrentUserData = async () => {
		const userData: any = await getUserDocument(authUserUid);
		return userData;
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getCurrentUserData();
				setUserData(data);
			} catch (error) {
				console.error("Error occurred:", error);
				setUserData(null);
			}
		};
		fetchData();
	}, [getCurrentUserData]);

	console.log(userData);

	// Nav conditional general styling
	const ringStyling =
		"object-cover object-center w-[40px] h-[40px] lg:w-[175px] lg:h-[175px] rounded-full ring-4";

	return (
		<>
			<div className="flex flex-col justify-between gap-4">
				<div>
					<div>
						<Image
							width={100}
							height={100}
							className="object-cover object-center w-full h-full min-h-[250px] max-h-[250px]"
							src={"/svg/backgroundSVG/stacked-waves-haikei-orange-yellow.svg"}
							alt="profile hero image"
						/>
					</div>
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex justify-between gap-4 px-4 py-6"
					>
						<div className="relative flex flex-row items-center justify-between gap-4">
							<div className="absolute top-[-110px] left-[20px] ">
								<Image
									width={500}
									height={500}
									id="avatarButton"
									data-dropdown-toggle="userDropdown"
									data-dropdown-placement="bottom-start"
									className="object-cover object-top w-[40px] h-[40px] lg:w-[175px] lg:h-[175px] transition-all duration-200 ease-in-out rounded-full ring-4 ring-white max-w-none"
									src={
										auth.currentUser?.photoURL
											? auth.currentUser?.photoURL
											: `/img/Logos/BlueInventory favicon Two.png`
									}
									alt={`${auth.currentUser?.displayName} profile image`}
								/>
								<span className="bottom-[-2px] left-[7.75rem] absolute w-6 h-6 bg-brightGreenDash border-2 border-white rounded-full " />
							</div>
							<motion.div
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="flex flex-col items-baseline justify-between ml-[15rem]"
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
									className={`block font-medium text-center text-black text-base`}
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
							className="relative flex items-center justify-center px-8 py-2 overflow-hidden text-white transition duration-200 bg-center bg-no-repeat bg-cover rounded-md w-fit h-fit border-darkBlue group focus:ring-2 focus:ring-offset-1 hover:text-white hover:border-white focus:ring-white"
							style={{
								backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-darkblue.svg")`,
							}}
						>
							<div
								className="absolute top-0 w-full h-full transition duration-200 transform bg-bottom bg-no-repeat bg-cover bg-darkBlue right-full group-hover:translate-x-full group-hover:scale-102"
								style={{
									backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue.svg")`,
								}}
							/>
							<p className="relative">Edit</p>
						</motion.button>
					</motion.div>
				</div>
				<div className="grid grid-cols-1 px-4 py-8 md:grid-cols-2">
					<div className="flex flex-col justify-between">
						<div>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-base font-medium text-left text-darkGrey"
							>
								Display Name
							</motion.h3>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-base font-medium text-left text-black"
							>
								{auth.currentUser?.displayName}
							</motion.h3>
						</div>
						<div>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-base font-medium text-left text-darkGrey"
							>
								Email Address
							</motion.h3>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-base font-medium text-left text-black"
							>
								{auth.currentUser?.email}
							</motion.h3>
						</div>
						<div>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-base font-medium text-left text-darkGrey"
							>
								Member Role
							</motion.h3>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-base font-medium text-left text-black"
							>
								Owner
							</motion.h3>
						</div>
					</div>
					<div>
						<div>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-base font-medium text-left text-darkGrey"
							>
								Joined
							</motion.h3>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-base font-medium text-left text-black"
							>
								{auth.currentUser?.metadata.creationTime}
							</motion.h3>
						</div>
						<div>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-base font-medium text-left text-darkGrey"
							>
								Phone Number
							</motion.h3>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-base font-medium text-left text-black"
							>
								{auth.currentUser?.phoneNumber === null
									? auth.currentUser?.phoneNumber
									: "none"}
							</motion.h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PersonalInformation;
