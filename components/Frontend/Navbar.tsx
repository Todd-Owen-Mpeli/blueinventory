"use client";

// Imports
import {
	initial,
	fadeIn,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {useState, useEffect, FC} from "react";
import {useContentContext} from "@/context/context";
import styles from "@/styles/components/Hero.module.scss";

// Firebase
import {IFirebaseUser} from "@/types/firebase";
import {getAuth, signOut} from "firebase/auth";
import {validateAccountAlreadyExist} from "@/functions/Backend/firebase/validateAccountAlreadyExist";

// Components
import MobileNavbar from "@/components/Frontend/MobileNavbar";
import NavbarMenuLinks from "@/components/Frontend/Elements/NavbarMenuLinks";

const Navbar: FC = () => {
	const auth = getAuth();
	const router = useRouter();
	const context = useContentContext();
	const [signedInUser, setSignedInUser] = useState(false);
	const [user, setUser] = useState<IFirebaseUser | null>(null);
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

	// Handles User Dashboard Login
	const dashboardLogin = async () => {
		// The signed-in user info.
		const user: any | null = auth.currentUser;

		/* New User validation
				Validates if user already exist */
		const userAccountAlreadyExist = await validateAccountAlreadyExist(
			user?.uid
		);

		if (userAccountAlreadyExist) {
			console.log(`User Account Already Exist: ${userAccountAlreadyExist}`);
			// Redirects the user to the next page
			router.push("/dashboard");
		} else {
			// Redirects the user to the next page
			router.push("/payment");
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
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
						>
							<Link
								href="/"
								className="text-lg font-extrabold lg:text-2xl text-darkBlue"
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
									{context.navbarMenuLinks.navbarMenuLinks?.length > 0 ? (
										context.navbarMenuLinks.navbarMenuLinks?.map(
											(item, keys) => (
												<NavbarMenuLinks
													key={keys}
													url={item?.node?.url}
													label={item?.node?.label}
													tailwindStyling="text-sm uppercase font-bold tracking-[.15rem] text-darkBlue hover:text-goldPrime transition-all ease-in-out duration-500"
												/>
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
								{signedInUser ? (
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
											<p className="relative mx-auto">Dashboard</p>
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
														user?.photoURL
															? user?.photoURL
															: `/img/Logos/BlueInventory favicon Two.png`
													}
													alt={`${user?.displayName} profile image`}
												/>
												<span className="bottom-[-6px] left-7 absolute w-3.5 h-3.5 bg-brightGreenDash border-2 border-white rounded-full "></span>
											</button>

											{/* <!-- Dropdown menu --> */}
											{revealUserDropdown ? (
												<div
													id="userDropdown"
													className="absolute left-[-100px] z-10 flex flex-col mt-1 bg-white divide-y rounded-lg shadow divide-blue w-44"
												>
													<div className="flex flex-col gap-2 px-4 py-3 text-sm text-black">
														<h2 className="text-medium">{`${user?.displayName}`}</h2>
														<h2 className="font-medium text-black truncate">
															{user?.email}
														</h2>
													</div>
													<ul
														className="py-2 text-sm text-black"
														aria-labelledby="avatarButton"
													>
														<li className="p-0">
															<Link
																href={`/dashboard`}
																className="block px-4 py-2 text-black hover:bg-blue hover:text-white"
															>
																Dashboard
															</Link>
														</li>
														<li className="p-0">
															<Link
																href={`/dashboard/settings`}
																className="block px-4 py-2 text-black hover:bg-blue hover:text-white"
															>
																Settings
															</Link>
														</li>
													</ul>
													<div className="mt-1">
														<button
															onClick={handleLogout}
															className="block w-full px-4 py-3 text-sm text-left text-black rounded-b-lg hover:bg-pinkRed hover:text-white"
														>
															Sign out
														</button>
													</div>
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
												<p className="relative mx-auto">Sign In</p>
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
												backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-pink-red-yellow.svg")`,
											}}
										>
											<Link href={`/sign-up`}>
												<div className="absolute top-0 w-full h-full transition duration-200 transform bg-top bg-no-repeat bg-cover bg-darkBlue right-full group-hover:translate-x-full group-hover:scale-102" />
												<p className="relative mx-auto">Sign up</p>
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
				<MobileNavbar
					user={user}
					signedInUser={signedInUser}
					revealMobileMenu={revealMobileMenu}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
