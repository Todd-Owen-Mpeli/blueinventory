"use client";

// Imports
import Link from "next/link";
import Image from "next/image";
import {useState, FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {useGlobalContext} from "@/context/Global";
import {initial, fadeIn, stagger, initialTwo} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Hero.module.scss";

// Firebase
import {User, getAuth, signOut} from "firebase/auth";
import {useFirebaseContext} from "@/context/Firebase";

// Components
import MobileNavbar from "./MobileNavbar";
import NavbarMenuLinks from "@/components/Frontend/Elements/NavbarMenuLinks";

const Navbar: FC = () => {
	const auth = getAuth();
	const router = useRouter();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const globalContext = useGlobalContext();
	const firebaseContext = useFirebaseContext();
	const [revealMobileMenu, setRevealMobileMenu] = useState(false);
	const [revealUserDropdown, setRevealUserDropdown] = useState(false);

	// Hides or Displays Mobile Menu
	const handleRevealMobileMenu = () => {
		setRevealMobileMenu(!revealMobileMenu);
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
		<nav className="fixed z-[999] w-full py-4 bg-white">
			<div className="container px-0 mx-auto">
				<div className="flex flex-row items-center justify-between px-6 py-2 bg-white">
					<div className="flex items-center justify-start w-full gap-4 px-0 sm:px-4 lg:w-1/3">
						<motion.div
							initial={initialTwo}
							viewport={{once: true}}
							whileInView={fadeIn}
						>
							<Link
								href="/"
								className="text-lg font-extrabold tracking-tight transition-all duration-500 ease-in-out lg:text-xl text-darkBlue hover:text-blue"
							>
								BlueInventory
							</Link>
						</motion.div>
					</div>
					<div className="w-full lg:w-1/3">
						<div className="flex flex-wrap items-center">
							<div className="hidden w-auto xl:block">
								<motion.ul
									initial={initial}
									viewport={{once: true}}
									whileInView={stagger}
									className="flex items-center justify-center gap-6"
								>
									{globalContext.navbarMenuLinks.navbarMenuLinks?.length > 0 ? (
										globalContext.navbarMenuLinks.navbarMenuLinks?.map(
											(item, keys) => (
												<Fragment key={keys}>
													<NavbarMenuLinks
														key={keys}
														url={item?.node?.url}
														label={item?.node?.label}
														tailwindStyling="text-sm uppercase font-extrabold tracking-[.15rem] text-darkBlue hover:text-goldPrime transition-all ease-in-out duration-500"
													/>
												</Fragment>
											)
										)
									) : (
										<></>
									)}
								</motion.ul>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/3">
						<div className="flex flex-wrap items-center justify-end w-full gap-2">
							<div className="hidden w-full xl:block">
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
											<span className="relative mx-auto text-base">
												Dashboard
											</span>
										</motion.button>
										<motion.div
											initial={initialTwo}
											viewport={{once: true}}
											whileInView={fadeIn}
											className="relative"
										>
											<button
												onClick={handleRevealUserDropdown}
												className="relative"
											>
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
																? firebaseContext?.userData?.displayName
																		.length > 25
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
																	? firebaseContext?.userData?.email.substring(
																			0,
																			25
																	  ) + "..."
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
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											aria-label="Sign-in Button"
											role="button"
											type="button"
											className="relative flex items-center justify-center px-10 py-2 overflow-hidden text-white transition duration-200 bg-center bg-no-repeat bg-cover rounded-sm border-darkBlue group focus:ring-2 focus:ring-offset-1 hover:text-white hover:border-white focus:ring-white"
											style={{
												backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-orange-yellow.svg")`,
											}}
										>
											<Link href={`/sign-in`}>
												<div className="absolute top-0 w-full h-full transition duration-200 transform bg-top bg-no-repeat bg-cover bg-goldPrime right-full group-hover:translate-x-full group-hover:scale-102" />
												<span className="relative mx-auto text-base">
													Sign In
												</span>
											</Link>
										</motion.button>
										<motion.button
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											aria-label="Sign-up Button"
											role="button"
											type="button"
											className="relative flex items-center justify-center px-10 py-2 overflow-hidden text-white transition duration-200 bg-center bg-no-repeat bg-cover rounded-sm border-darkBlue group focus:ring-2 focus:ring-offset-1 hover:text-white hover:border-white focus:ring-white"
											style={{
												backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-darkblue.svg")`,
											}}
										>
											<Link href={`/sign-up`}>
												<div className="absolute top-0 w-full h-full transition duration-200 transform bg-top bg-no-repeat bg-cover bg-darkBlue right-full group-hover:translate-x-full group-hover:scale-102" />
												<span className="relative mx-auto text-base">
													Sign up
												</span>
											</Link>
										</motion.button>
									</motion.div>
								)}
							</div>
							{/* Mobile Menu Reveal */}
							<div className="w-auto xl:hidden">
								<button
									type="button"
									onClick={handleRevealMobileMenu}
									aria-label="Mobile menu reveal button"
									className={
										revealMobileMenu ? styles.navToggleOpen : styles.navToggle
									}
								>
									<span aria-hidden="true" />
									<span aria-hidden="true" />
									<span aria-hidden="true" />
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Mobile Navbar */}
				<MobileNavbar revealMobileMenu={revealMobileMenu} />
			</div>
		</nav>
	);
};

export default Navbar;
