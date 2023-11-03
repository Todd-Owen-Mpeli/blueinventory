"use client";

// Imports
import Link from "next/link";
import Image from "next/image";
import {useState, FC} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {initial, fadeIn, stagger, initialTwo} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Navbar.module.scss";

// Firebase
import {User, getAuth, signOut} from "firebase/auth";
import {useFirebaseContext} from "@/context/Firebase";

const NavbarSignIn: FC = () => {
	const auth = getAuth();
	const router = useRouter();

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const firebaseContext = useFirebaseContext();
	const [revealUserDropdown, setRevealUserDropdown] = useState(false);
	const [revealGoogleTranslateOptions, setRevealGoogleTranslateOptions] =
		useState(false);

	// Hides or Displays Google Translate Options
	const handleRevealGoogleTranslateOptions = () => {
		setRevealGoogleTranslateOptions(!revealGoogleTranslateOptions);
	};

	// Hides or Displays User dropdown
	const handleRevealUserDropdown = () => {
		setRevealUserDropdown(!revealUserDropdown);
	};

	// Handles User Dashboard Login
	const dashboardLogin = async () => {
		// The signed-in user info.
		const user: User | null = auth.currentUser;

		if (user?.uid) {
			// Redirects the user to the next page
			router.push("/dashboard");
		}
	};

	// Handles User Logout
	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log("User Sign out Successful");
				router.push("/");
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<>
			{firebaseContext?.signedInUser ? (
				<div className="flex flex-row items-center justify-end gap-8 -m-2">
					<motion.button
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						onClick={dashboardLogin}
						aria-label="Dashboard Login Button"
						role="button"
						type="button"
						className="relative flex items-center justify-center px-10 py-2 overflow-hidden text-white transition duration-200 bg-center bg-no-repeat bg-cover rounded-sm border-darkBlue group focus:ring-2 focus:ring-offset-1 hover:text-white hover:border-white focus:ring-white"
						style={{
							backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-darkblue.svg")`,
						}}
					>
						<div
							className="absolute top-0 w-full h-full transition duration-200 transform bg-top bg-no-repeat bg-cover bg-darkBlue right-full group-hover:translate-x-full group-hover:scale-102"
							style={{
								backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue.svg")`,
							}}
						/>
						<span className="relative mx-auto text-base">Dashboard</span>
					</motion.button>
					<motion.div
						initial={initialTwo}
						viewport={{once: true}}
						whileInView={fadeIn}
						className="relative"
					>
						<button onClick={handleRevealUserDropdown} className="relative">
							<Image
								width={500}
								height={500}
								id="avatarButton"
								data-dropdown-toggle="userDropdown"
								data-dropdown-placement="bottom-start"
								className="object-cover object-top w-10 h-10 transition-all duration-200 ease-in-out rounded-full cursor-pointer ring-4 ring-darkBlue hover:ring-lightBlue"
								src={
									firebaseContext?.userData?.photoURL
										? firebaseContext?.userData?.photoURL
										: `/img/Logos/default-avatar-profile.jpg`
								}
								alt={`${firebaseContext?.userData?.displayName} profile image`}
							/>
							<span className="bottom-[-6px] left-7 absolute w-3.5 h-3.5 bg-brightGreen border-2 border-white rounded-full "></span>
						</button>

						{/* <!-- Dropdown menu --> */}
						{revealUserDropdown ? (
							<div
								id="userDropdown"
								className="absolute left-[-100px] z-10 flex flex-col mt-1 bg-white divide-y shadow divide-lightGreyTwo w-[17.5rem]"
							>
								<div className="flex flex-col gap-1 px-8 py-5 text-sm text-black">
									<h2 className="text-medium">
										{firebaseContext?.userData?.displayName
											? firebaseContext?.userData?.displayName.length > 25
												? firebaseContext?.userData?.displayName.substring(
														0,
														25
												  ) + "..."
												: firebaseContext?.userData?.displayName
											: ""}
									</h2>
									<h2 className="tracking-wide text-darkGrey">
										{firebaseContext?.userData?.email
											? firebaseContext?.userData?.email.length > 25
												? firebaseContext?.userData?.email.substring(0, 25) +
												  "..."
												: firebaseContext?.userData?.email
											: ""}
									</h2>
								</div>
								<ul
									className="py-0 text-sm text-black divide-y divide-lightGreyTwo"
									aria-labelledby="avatarButton"
								>
									<li className="p-0">
										<Link
											href={`/dashboard`}
											className="block px-8 py-3 font-semibold text-black uppercase hover:bg-goldPrime hover:text-white"
										>
											Dashboard
										</Link>
									</li>
									<li className="p-0">
										<Link
											href={`/dashboard/settings`}
											className="block px-8 py-3 font-semibold text-black uppercase hover:bg-goldPrime hover:text-white"
										>
											Settings
										</Link>
									</li>
								</ul>
								<button
									onClick={handleLogout}
									className="block w-full px-8 py-3 text-sm text-left text-black uppercase hover:bg-pinkRed hover:text-white"
								>
									Log out
								</button>
							</div>
						) : null}
					</motion.div>
				</div>
			) : (
				<motion.div
					initial={initial}
					viewport={{once: true}}
					whileInView={stagger}
					className="flex flex-row items-center justify-end gap-2 -m-2"
				>
					<motion.button
						role="button"
						type="button"
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						aria-label="Sign-in Button"
						className="relative flex items-center justify-center px-10 py-2 overflow-hidden text-white transition duration-200 bg-center bg-no-repeat bg-cover rounded-sm border-darkBlue group focus:ring-2 focus:ring-offset-1 hover:text-white hover:border-white focus:ring-white"
						style={{
							backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-orange-yellow.svg")`,
						}}
					>
						<Link href={`/sign-in`}>
							<div className="absolute top-0 w-full h-full transition duration-200 transform bg-top bg-no-repeat bg-cover bg-goldPrime right-full group-hover:translate-x-full group-hover:scale-102" />
							<span className="relative mx-auto text-base">Sign In</span>
						</Link>
					</motion.button>
					<motion.button
						role="button"
						type="button"
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						aria-label="Sign-up Button"
						className="relative flex items-center justify-center px-10 py-2 overflow-hidden text-white transition duration-200 bg-center bg-no-repeat bg-cover rounded-sm border-darkBlue group focus:ring-2 focus:ring-offset-1 hover:text-white hover:border-white focus:ring-white"
						style={{
							backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-darkblue.svg")`,
						}}
					>
						<Link href={`/sign-up`}>
							<div className="absolute top-0 w-full h-full transition duration-200 transform bg-top bg-no-repeat bg-cover bg-darkBlue right-full group-hover:translate-x-full group-hover:scale-102" />
							<span className="relative mx-auto text-base">Sign up</span>
						</Link>
					</motion.button>
					<motion.button
						role="button"
						type="button"
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						onClick={handleRevealGoogleTranslateOptions}
						aria-label="Google Translate Options Button"
						className={
							revealGoogleTranslateOptions
								? "hidden"
								: "px-4 py-0 text-white transition duration-200 rounded-sm flex flex-row items-center justify-center gap-3"
						}
					>
						<Image
							width={500}
							height={500}
							alt="United kingdom Flag"
							src="/svg/language-selector-icon.svg"
							className="block w-full max-w-[35px] h-[35px] object-contain object-center"
						/>
						<svg
							height="24"
							width="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={
								styles.openGoogleTranslateSVG +
								" rotate-[90deg] w-[28px] h-[28px] object-contain object-center"
							}
						>
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								strokeLinecap="round"
								strokeLinejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								<path
									d="M9 5L11 7.33333M9 19L15 12L13.5 10.25"
									stroke="#09275e"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</g>
						</svg>
					</motion.button>
					<motion.button
						role="button"
						type="button"
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						onClick={handleRevealGoogleTranslateOptions}
						aria-label="Google Translate Options Button"
						className={revealGoogleTranslateOptions ? "block ml-2" : "hidden"}
					>
						<svg
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={
								styles.closeGoogleTranslateSVG +
								" w-[32px] h-[32px] object-contain object-center"
							}
						>
							<path
								d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
								stroke="#09275e"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
							<path
								d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
								stroke="#09275e"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
						</svg>
					</motion.button>
					<motion.button
						role="button"
						type="button"
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						id="google_translate_element"
						aria-label="Google Translate Options Button"
						className={revealGoogleTranslateOptions ? "block" : "hidden"}
					/>
				</motion.div>
			)}
		</>
	);
};

export default NavbarSignIn;
