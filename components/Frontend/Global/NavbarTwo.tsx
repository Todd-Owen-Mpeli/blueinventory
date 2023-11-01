"use client";

// Imports
import Link from "next/link";
import {useState, FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/Global";
import styles from "@/styles/components/Hero.module.scss";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Components
import MobileNavbarTwo from "./MobileNavbarTwo";
import NavbarMenuLinks from "@/components/Frontend/Elements/NavbarMenuLinks";
import NavbarSignIn from "../Elements/NavbarSignIn";

const NavbarTwo: FC = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const globalContext = useGlobalContext();
	const [revealMobileMenu, setRevealMobileMenu] = useState(false);

	// Hides or Displays Mobile Menu
	const handleRevealMobileMenu = () => {
		setRevealMobileMenu(!revealMobileMenu);
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
								<NavbarSignIn />
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
