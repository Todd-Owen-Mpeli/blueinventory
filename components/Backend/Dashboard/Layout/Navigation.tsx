// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn, initial, stagger, initialTwo} from "@/animations/animations";

// Firebase
import {useFirebaseContext} from "@/context/Firebase";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";

// Components
import NavUserSignOut from "../Global/NavUserSignOut";

const MainNavigation: FC = () => {
	const firebaseContext = useFirebaseContext();

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
							className="relative lg:static"
						>
							<Link
								href="/"
								className="hidden text-lg font-extrabold tracking-tight text-white uppercase transition-all duration-500 ease-in-out lg:block hover:text-goldPrime"
							>
								BlueInventory
							</Link>
							<Image
								height={500}
								width={500}
								alt="Blue Inventory Company Logo Racing"
								src="/img/Logos/BlueInventory favicon Two.png"
								className="block object-contain object-center w-full h-10 lg:hidden"
							/>
						</motion.div>
						<motion.ul
							initial={initial}
							viewport={{once: true}}
							whileInView={stagger}
							className="py-6 mx-auto lg:mx-0"
						>
							<li className="px-0">
								<Link
									className="flex items-center justify-center gap-2 lg:justify-start"
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
											className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] text-white"
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
						</motion.ul>
					</div>
					<NavUserSignOut />
				</div>
			</nav>
		</>
	);
};

export default MainNavigation;
