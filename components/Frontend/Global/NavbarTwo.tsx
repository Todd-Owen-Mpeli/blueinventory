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
import {useState, FC} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {useGlobalContext} from "@/context/Global";
import styles from "@/styles/components/Hero.module.scss";

// Firebase
import {getAuth, signOut} from "firebase/auth";
import {useFirebaseContext} from "@/context/Firebase";

// Components
import MobileNavbarTwo from "./MobileNavbarTwo";
import NavbarMenuLinks from "@/components/Frontend/Elements/NavbarMenuLinks";

const NavbarTwo: FC = () => {
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
		<nav className="fixed z-[999] w-full py-3 bg-white">
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
												<NavbarMenuLinks
													key={keys}
													url={item?.node?.url}
													label={item?.node?.label}
													tailwindStyling="text-sm uppercase font-extrabold tracking-[.15rem] text-darkBlue hover:text-goldPrime transition-all ease-in-out duration-500"
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
						<div className="flex flex-wrap items-center justify-end gap-2">
							<div className="hidden w-auto xl:block">
								{firebaseContext?.signedInUser ? (
									<div className="flex flex-wrap items-center justify-end gap-8">
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
															: `/img/Logos/BlueInventory favicon Two.png`
													}
													alt={`${firebaseContext?.userData?.displayName} profile image`}
												/>
												<span className="bottom-[-6px] left-7 absolute w-3.5 h-3.5 bg-brightGreen border-2 border-white rounded-full "></span>
											</button>

											{/* <!-- Dropdown menu --> */}
											{revealUserDropdown ? (
												<div
													id="userDropdown"
													className="absolute left-[-100px] z-10 flex flex-col mt-1 bg-white divide-y rounded-lg shadow divide-blue w-44"
												>
													<div className="flex flex-col gap-2 px-4 py-3 text-sm text-black">
														<h2 className="text-medium">{`${firebaseContext?.userData?.displayName}`}</h2>
														<h2 className="font-medium text-black truncate">
															{firebaseContext?.userData?.email}
														</h2>
													</div>
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
										className="flex flex-wrap gap-2 -m-2"
									>
										<motion.div
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="py-2 m-auto bg-center bg-no-repeat bg-cover rounded-sm"
											style={{
												backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-orange-yellow.svg")`,
											}}
										>
											<Link
												className="w-full px-8 py-3 text-sm tracking-widest text-center text-white uppercase bg-transparent hover:bg-goldPrime focus:ring-none focus:ring-blue"
												href={`/sign-in`}
											>
												Sign In
											</Link>
										</motion.div>
										<motion.div
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="py-2 m-auto bg-center bg-no-repeat bg-cover rounded-sm"
											style={{
												backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-darkblue.svg")`,
											}}
										>
											<Link
												className="w-full px-8 py-3 text-sm tracking-widest text-center text-white uppercase bg-transparent rounded-sm hover:bg-darkBlue focus:ring-none focus:ring-blue"
												href={`/sign-up`}
											>
												Get Started
											</Link>
										</motion.div>
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
				<MobileNavbarTwo revealMobileMenu={revealMobileMenu} />
			</div>
		</nav>
	);
};

export default NavbarTwo;
