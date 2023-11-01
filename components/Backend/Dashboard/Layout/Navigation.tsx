// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {fadeIn, initial, stagger, initialTwo} from "@/animations/animations";

// Firebase
import {useFirebaseContext} from "@/context/Firebase";
import {useDashboardLayoutContext} from "@/context/dashboard";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";

// Components
import NavUserSignOut from "../Global/NavUserSignOut";

const MainNavigation: FC = () => {
	const firebaseContext = useFirebaseContext();
	const dashboardLayoutContext = useDashboardLayoutContext();

	// Ensure userData is not null before using it in JSX
	if (!firebaseContext?.userData) {
		return <div>Loading...</div>; // or some other loading indicator
	}

	return (
		<>
			<nav
				className={styles.mainNavigation}
				style={{
					backgroundImage: `linear-gradient(
							0deg,
							rgba(9, 39, 94, 0),
							rgba(9, 39, 94, 0.65)
						),url("/svg/backgroundSVG/stacked-waves-haikei-blue.svg")`,
				}}
			>
				<div className="flex flex-col justify-between h-full gap-4 lg:gap-12">
					<div>
						<motion.div
							initial={initialTwo}
							viewport={{once: true}}
							whileInView={fadeIn}
							className="pb-3 border-b-[1px] relative lg:static border-yellow"
						>
							<Link
								href="/"
								className="hidden text-lg font-extrabold tracking-tight text-white uppercase transition-all duration-500 ease-in-out xl:block hover:text-goldPrime"
							>
								BlueInventory
							</Link>
							<Image
								height={500}
								width={500}
								alt="Blue Inventory Company Logo Racing"
								src="/img/Logos/BlueInventory favicon Two.png"
								className="block object-contain object-center w-full h-10 xl:hidden"
							/>
						</motion.div>
						<motion.ul
							initial={initial}
							viewport={{once: true}}
							whileInView={stagger}
							className={
								styles.navLinks +
								" flex flex-col px-2 py-3 gap-3 mx-auto mt-4 lg:mx-0"
							}
						>
							<li>
								<Link
									className="flex items-center justify-center gap-4 lg:justify-start"
									href="/dashboard"
								>
									<motion.span
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
									>
										<svg
											version="1.1"
											width="1080"
											height="1080"
											viewBox="0 0 1080 1080"
											xmlns="http://www.w3.org/2000/svg"
											className="w-[20px] h-[20px] text-white hover:text-goldPrime transition-all ease-in-out duration-200"
										>
											<g transform="matrix(60 0 0 60 540 540)">
												<path
													style={{
														stroke: "none",
														strokeWidth: "1",
														strokeDasharray: "none",
														strokeLinecap: "butt",
														strokeDashoffset: "0",
														strokeLinejoin: "miter",
														strokeMiterlimit: "4",
														fill: "rgb(255,255,255)",
														fillRule: "nonzero",
														opacity: "1",
													}}
													transform=" translate(-9, -9)"
													d="M 7.33329 9.83329 L 1.49996 9.83329 C 1.27895 9.83329 1.06698 9.92109 0.910704 10.0774 C 0.754423 10.2337 0.666626 10.4456 0.666626 10.6666 L 0.666626 16.5 C 0.666626 16.721 0.754423 16.9329 0.910704 17.0892 C 1.06698 17.2455 1.27895 17.3333 1.49996 17.3333 L 7.33329 17.3333 C 7.55431 17.3333 7.76627 17.2455 7.92255 17.0892 C 8.07883 16.9329 8.16663 16.721 8.16663 16.5 L 8.16663 10.6666 C 8.16663 10.4456 8.07883 10.2337 7.92255 10.0774 C 7.76627 9.92109 7.55431 9.83329 7.33329 9.83329 Z M 6.49996 15.6666 L 2.33329 15.6666 L 2.33329 11.5 L 6.49996 11.5 L 6.49996 15.6666 Z M 16.5 0.666626 L 10.6666 0.666626 C 10.4456 0.666626 10.2337 0.754423 10.0774 0.910704 C 9.92109 1.06698 9.83329 1.27895 9.83329 1.49996 L 9.83329 7.33329 C 9.83329 7.55431 9.92109 7.76627 10.0774 7.92255 C 10.2337 8.07883 10.4456 8.16663 10.6666 8.16663 L 16.5 8.16663 C 16.721 8.16663 16.9329 8.07883 17.0892 7.92255 C 17.2455 7.76627 17.3333 7.55431 17.3333 7.33329 L 17.3333 1.49996 C 17.3333 1.27895 17.2455 1.06698 17.0892 0.910704 C 16.9329 0.754423 16.721 0.666626 16.5 0.666626 Z M 15.6666 6.49996 L 11.5 6.49996 L 11.5 2.33329 L 15.6666 2.33329 L 15.6666 6.49996 Z M 16.5 9.83329 L 10.6666 9.83329 C 10.4456 9.83329 10.2337 9.92109 10.0774 10.0774 C 9.92109 10.2337 9.83329 10.4456 9.83329 10.6666 L 9.83329 16.5 C 9.83329 16.721 9.92109 16.9329 10.0774 17.0892 C 10.2337 17.2455 10.4456 17.3333 10.6666 17.3333 L 16.5 17.3333 C 16.721 17.3333 16.9329 17.2455 17.0892 17.0892 C 17.2455 16.9329 17.3333 16.721 17.3333 16.5 L 17.3333 10.6666 C 17.3333 10.4456 17.2455 10.2337 17.0892 10.0774 C 16.9329 9.92109 16.721 9.83329 16.5 9.83329 Z M 15.6666 15.6666 L 11.5 15.6666 L 11.5 11.5 L 15.6666 11.5 L 15.6666 15.6666 Z M 7.33329 0.666626 L 1.49996 0.666626 C 1.27895 0.666626 1.06698 0.754423 0.910704 0.910704 C 0.754423 1.06698 0.666626 1.27895 0.666626 1.49996 L 0.666626 7.33329 C 0.666626 7.55431 0.754423 7.76627 0.910704 7.92255 C 1.06698 8.07883 1.27895 8.16663 1.49996 8.16663 L 7.33329 8.16663 C 7.55431 8.16663 7.76627 8.07883 7.92255 7.92255 C 8.07883 7.76627 8.16663 7.55431 8.16663 7.33329 L 8.16663 1.49996 C 8.16663 1.27895 8.07883 1.06698 7.92255 0.910704 C 7.76627 0.754423 7.55431 0.666626 7.33329 0.666626 Z M 6.49996 6.49996 L 2.33329 6.49996 L 2.33329 2.33329 L 6.49996 2.33329 L 6.49996 6.49996 Z"
													strokeLinecap="round"
													fill="#ffffff"
												/>
											</g>
										</svg>
									</motion.span>
									<motion.span
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="hidden text-white lg:block"
									>
										Dashboard
									</motion.span>
								</Link>
							</li>
							<li>
								<Link
									className="flex items-center justify-center gap-4 lg:justify-start"
									href="/dashboard/settings"
								>
									<motion.span
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
									>
										<svg
											width="20"
											height="20"
											fill="#ffffff"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
											className="w-[24px] h-[24px] text-white hover:text-goldPrime transition-all ease-in-out duration-200"
										>
											<path
												d="M17.7666 7.9583L16.1916 7.4333L16.9333 5.94996C17.0085 5.7947 17.0336 5.61993 17.0053 5.44977C16.9769 5.27961 16.8964 5.12245 16.775 4.99996L15 3.22496C14.8768 3.1017 14.7182 3.02013 14.5463 2.99173C14.3743 2.96333 14.1979 2.98953 14.0416 3.06663L12.5583 3.8083L12.0333 2.2333C11.9778 2.06912 11.8726 1.92632 11.7322 1.82475C11.5918 1.72319 11.4232 1.66792 11.25 1.66663H8.74996C8.57526 1.66618 8.40483 1.72064 8.26277 1.82233C8.12071 1.92402 8.0142 2.06778 7.9583 2.2333L7.4333 3.8083L5.94996 3.06663C5.7947 2.99145 5.61993 2.9663 5.44977 2.99466C5.27961 3.02302 5.12245 3.10349 4.99996 3.22496L3.22496 4.99996C3.1017 5.1231 3.02013 5.28177 2.99173 5.45368C2.96333 5.62558 2.98953 5.80205 3.06663 5.9583L3.8083 7.44163L2.2333 7.96663C2.06912 8.02208 1.92632 8.12732 1.82475 8.26772C1.72319 8.40812 1.66792 8.57668 1.66663 8.74996V11.25C1.66618 11.4247 1.72064 11.5951 1.82233 11.7372C1.92402 11.8792 2.06778 11.9857 2.2333 12.0416L3.8083 12.5666L3.06663 14.05C2.99145 14.2052 2.9663 14.38 2.99466 14.5502C3.02302 14.7203 3.10349 14.8775 3.22496 15L4.99996 16.775C5.1231 16.8982 5.28177 16.9798 5.45368 17.0082C5.62558 17.0366 5.80205 17.0104 5.9583 16.9333L7.44163 16.1916L7.96663 17.7666C8.02253 17.9321 8.12904 18.0759 8.2711 18.1776C8.41317 18.2793 8.58359 18.3337 8.7583 18.3333H11.2583C11.433 18.3337 11.6034 18.2793 11.7455 18.1776C11.8875 18.0759 11.9941 17.9321 12.05 17.7666L12.575 16.1916L14.0583 16.9333C14.2126 17.0066 14.3856 17.0307 14.5541 17.0024C14.7225 16.9741 14.8781 16.8947 15 16.775L16.775 15C16.8982 14.8768 16.9798 14.7182 17.0082 14.5463C17.0366 14.3743 17.0104 14.1979 16.9333 14.0416L16.1916 12.5583L17.7666 12.0333C17.9308 11.9778 18.0736 11.8726 18.1752 11.7322C18.2767 11.5918 18.332 11.4232 18.3333 11.25V8.74996C18.3337 8.57526 18.2793 8.40483 18.1776 8.26277C18.0759 8.12071 17.9321 8.0142 17.7666 7.9583ZM16.6666 10.65L15.6666 10.9833C15.4367 11.0579 15.2257 11.1816 15.0483 11.3459C14.871 11.5102 14.7315 11.711 14.6395 11.9346C14.5475 12.1582 14.5053 12.3991 14.5158 12.6406C14.5262 12.8821 14.5891 13.1185 14.7 13.3333L15.175 14.2833L14.2583 15.2L13.3333 14.7C13.1196 14.5935 12.8855 14.5342 12.6469 14.526C12.4083 14.5179 12.1707 14.5611 11.9502 14.6528C11.7298 14.7445 11.5316 14.8824 11.3691 15.0573C11.2066 15.2322 11.0835 15.44 11.0083 15.6666L10.675 16.6666H9.34996L9.01663 15.6666C8.94204 15.4367 8.81832 15.2257 8.65404 15.0483C8.48977 14.871 8.28888 14.7315 8.06531 14.6395C7.84174 14.5475 7.60084 14.5053 7.35932 14.5158C7.11779 14.5262 6.88143 14.5891 6.66663 14.7L5.71663 15.175L4.79996 14.2583L5.29996 13.3333C5.41087 13.1185 5.47373 12.8821 5.48417 12.6406C5.49461 12.3991 5.45238 12.1582 5.36041 11.9346C5.26845 11.711 5.12894 11.5102 4.95158 11.3459C4.77422 11.1816 4.56325 11.0579 4.3333 10.9833L3.3333 10.65V9.34996L4.3333 9.01663C4.56325 8.94204 4.77422 8.81832 4.95158 8.65404C5.12894 8.48977 5.26845 8.28888 5.36041 8.06531C5.45238 7.84174 5.49461 7.60084 5.48417 7.35932C5.47373 7.11779 5.41087 6.88143 5.29996 6.66663L4.82496 5.74163L5.74163 4.82496L6.66663 5.29996C6.88143 5.41087 7.11779 5.47373 7.35932 5.48417C7.60084 5.49461 7.84174 5.45238 8.06531 5.36041C8.28888 5.26845 8.48977 5.12894 8.65404 4.95158C8.81832 4.77422 8.94204 4.56325 9.01663 4.3333L9.34996 3.3333H10.65L10.9833 4.3333C11.0579 4.56325 11.1816 4.77422 11.3459 4.95158C11.5102 5.12894 11.711 5.26845 11.9346 5.36041C12.1582 5.45238 12.3991 5.49461 12.6406 5.48417C12.8821 5.47373 13.1185 5.41087 13.3333 5.29996L14.2833 4.82496L15.2 5.74163L14.7 6.66663C14.5935 6.88033 14.5342 7.11442 14.526 7.35304C14.5179 7.59165 14.5611 7.82924 14.6528 8.0497C14.7445 8.27016 14.8824 8.46835 15.0573 8.63086C15.2322 8.79337 15.44 8.9164 15.6666 8.99163L16.6666 9.32496V10.65ZM9.99996 6.66663C9.34069 6.66663 8.69623 6.86213 8.14806 7.2284C7.5999 7.59467 7.17266 8.11526 6.92036 8.72435C6.66807 9.33344 6.60206 10.0037 6.73068 10.6503C6.8593 11.2969 7.17676 11.8908 7.64294 12.357C8.10911 12.8232 8.70306 13.1406 9.34966 13.2692C9.99626 13.3979 10.6665 13.3319 11.2756 13.0796C11.8847 12.8273 12.4053 12.4 12.7715 11.8519C13.1378 11.3037 13.3333 10.6592 13.3333 9.99996C13.3333 9.11591 12.9821 8.26806 12.357 7.64294C11.7319 7.01782 10.884 6.66663 9.99996 6.66663ZM9.99996 11.6666C9.67033 11.6666 9.34809 11.5689 9.07401 11.3857C8.79993 11.2026 8.58631 10.9423 8.46016 10.6378C8.33402 10.3332 8.30101 9.99811 8.36532 9.67481C8.42963 9.35151 8.58836 9.05454 8.82145 8.82145C9.05454 8.58836 9.35151 8.42963 9.67481 8.36532C9.99811 8.30101 10.3332 8.33402 10.6378 8.46016C10.9423 8.58631 11.2026 8.79993 11.3857 9.07401C11.5689 9.34809 11.6666 9.67033 11.6666 9.99996C11.6666 10.442 11.491 10.8659 11.1785 11.1785C10.8659 11.491 10.442 11.6666 9.99996 11.6666Z"
												fill="currentColor"
											></path>
										</svg>
									</motion.span>
									<motion.span
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="hidden text-white lg:block"
									>
										Settings
									</motion.span>
								</Link>
							</li>
							<li>
								<button
									onClick={dashboardLayoutContext?.handleRevealMediaFilesModal}
									className="flex items-center justify-center gap-4 mx-auto lg:mx-0 lg:justify-start"
								>
									<motion.span
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
									>
										<svg
											width="24"
											height="24"
											fill="none"
											strokeWidth="1.5"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											className={
												styles.mediaSVG +
												" sm:w-[24px] h-[24px] text-white hover:text-goldPrime transition-all ease-in-out duration-200"
											}
										>
											<path
												d="M21 7.6V20.4C21 20.7314 20.7314 21 20.4 21H7.6C7.26863 21 7 20.7314 7 20.4V7.6C7 7.26863 7.26863 7 7.6 7H20.4C20.7314 7 21 7.26863 21 7.6Z"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												fill="none"
											/>
											<path
												d="M18 4H4.6C4.26863 4 4 4.26863 4 4.6V18"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												fill="none"
											/>
											<path
												d="M12.9087 11.5452C12.5088 11.3053 12 11.5933 12 12.0597V15.9403C12 16.4067 12.5088 16.6947 12.9087 16.4548L16.1425 14.5145C16.5309 14.2815 16.5309 13.7185 16.1425 13.4855L12.9087 11.5452Z"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												fill="none"
											/>
										</svg>
									</motion.span>
									<motion.span
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="hidden text-white lg:block"
									>
										Media
									</motion.span>
								</button>
							</li>
						</motion.ul>
					</div>
					<NavUserSignOut />
				</div>
			</nav>
		</>
	);
};

export default MainNavigation;
