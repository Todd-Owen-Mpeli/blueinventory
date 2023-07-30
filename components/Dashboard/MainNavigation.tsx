// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {FC, useEffect, useState} from "react";
import {getAuth, signOut} from "firebase/auth";
import {IFirebaseUser} from "@/types/firebase";
import {dashboardMainMenuLinks} from "@/dashboard/content/menuLinks";

// Components
import Paragraph from "../Elements/Paragraph";
import NavbarLinks from "./components/Elements/NavbarLinks";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";

const MainNavigation: FC = () => {
	const auth = getAuth();
	const router = useRouter();
	const [signedInUser, setSignedInUser] = useState(false);

	// Firebase User Details
	const user: IFirebaseUser = {
		uid: `${auth?.currentUser?.uid}`,
		email: `${auth?.currentUser?.email}`,
		metadata: `${auth?.currentUser?.metadata}`,
		phoneNumber: `${auth?.currentUser?.phoneNumber}`,
		displayName: `${auth?.currentUser?.displayName}`,
		profileImageURL: `${auth?.currentUser?.photoURL}`,
	};

	// User sign in styling
	const ringStyling =
		"object-cover object-top w-[60px] h-[60px] transition-all duration-200 ease-in-out rounded-full ring-4";

	/* Check if user is SIGNED IN if 
	True Displays Signed In Navbar */
	useEffect(() => {
		auth?.onAuthStateChanged((currentUser) => {
			currentUser ? setSignedInUser(true) : setSignedInUser(false);
		});

		return () => {
			signedInUser;
		};
	}, [signedInUser, auth]);

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
			<div className={styles.mainNavigation}>
				<div className="hidden h-full lg:block">
					<nav className="flex flex-col justify-between h-full min-h-screen pt-4 pb-4 lg:w-80 sm:max-w-[15rem]">
						<div className="flex flex-col justify-between px-4">
							<div className="flex flex-col items-center w-full px-2 pb-4 mb-10 border-blue lg:border-b">
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="w-auto p-3"
								>
									<div className="flex flex-wrap items-center -m-2">
										<div className="w-auto p-2">
											<div className="flex flex-wrap -m-2">
												<motion.div
													initial={initialTwo}
													viewport={{once: true}}
													whileInView={fadeIn}
													className="w-auto p-2 mx-auto"
												>
													<Image
														width={500}
														height={500}
														className={
															user?.uid
																? `${ringStyling} ring-brightGreenDash`
																: `${ringStyling} ring-pinkRed`
														}
														src={
															user?.profileImageURL
																? user?.profileImageURL
																: `/img/Logos/default-avatar-profile.jpg`
														}
														alt={`${user?.displayName} profile image`}
													/>
												</motion.div>
												<motion.div
													initial={initial}
													viewport={{once: true}}
													whileInView={stagger}
													className="flex flex-col w-auto p-2 my-auto"
												>
													<motion.h3
														initial={initial}
														whileInView={fadeInUp}
														viewport={{once: true}}
														className="mb-1 font-semibold text-center text-white text-medium"
													>
														{user?.displayName}
													</motion.h3>
													<Paragraph
														content={user?.email}
														tailwindStyling="text-xs text-center font-medium text-darkGrey hidden sm:block"
													/>
												</motion.div>
											</div>
										</div>
									</div>
								</motion.div>
							</div>
							<div className="flex flex-col">
								<motion.ul
									initial={initial}
									whileInView={stagger}
									viewport={{once: true}}
									className="flex flex-col gap-1 text-base font-medium"
								>
									<motion.li
										initial={initial}
										viewport={{once: true}}
										whileInView={fadeInUp}
										className="px-0"
									>
										<Link
											className="flex items-center py-3 pl-3 pr-4 text-white rounded hover:text-white hover:bg-goldPrime"
											href={`/dashboard`}
										>
											<motion.span
												initial={initialTwo}
												whileInView={fadeIn}
												viewport={{once: true}}
												className="flex items-center"
											>
												<Image
													alt={""}
													width={500}
													height={500}
													src={"/svg/dashboard/icons/applications.svg"}
													className={`block mr-3 w-5 h-5 object-contain object-center`}
												/>
											</motion.span>
											<motion.span
												initial={initialTwo}
												whileInView={fadeIn}
												viewport={{once: true}}
											>
												Dashboard
											</motion.span>
										</Link>
									</motion.li>

									{dashboardMainMenuLinks?.length > 0 ? (
										dashboardMainMenuLinks?.map((item, keys) => (
											<motion.li
												key={item?.id}
												initial={initial}
												whileInView={fadeInUp}
												viewport={{once: true}}
												className="px-0"
											>
												<NavbarLinks
													path={item?.path}
													icon={item?.icon}
													label={item?.name}
													tailwindStyling="flex items-center py-3 pl-3 pr-2 text-white transition-all duration-200 ease-in-out rounded hover:bg-darkBlue hover:text-white"
												/>
											</motion.li>
										))
									) : (
										<></>
									)}
								</motion.ul>
							</div>
						</div>
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex flex-col justify-between px-4"
						>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mt-auto"
							>
								<Link
									className="block py-6 pl-6 pr-8 mb-4 transition duration-200 bg-blue group hover:bg-goldPrimeDark rounded-xl"
									href={`/dashboard/settings`}
								>
									<div className="flex items-center justify-center w-12 h-12 mb-4 bg-darkBlue group-hover:bg-goldPrime rounded-xl">
										<svg
											width="10"
											height="12"
											viewBox="0 0 10 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.70978 6.53994C5.61681 6.44621 5.50621 6.37182 5.38435 6.32105C5.2625 6.27028 5.13179 6.24414 4.99978 6.24414C4.86777 6.24414 4.73706 6.27028 4.6152 6.32105C4.49334 6.37182 4.38274 6.44621 4.28978 6.53994L1.28978 9.53994C1.09617 9.72824 0.985294 9.98574 0.981544 10.2558C0.977793 10.5258 1.08147 10.7863 1.26978 10.9799C1.45808 11.1735 1.71558 11.2844 1.98564 11.2882C2.25569 11.2919 2.51617 11.1882 2.70978 10.9999L4.99978 8.65994L7.28978 10.9999C7.38274 11.0937 7.49334 11.1681 7.6152 11.2188C7.73706 11.2696 7.86777 11.2957 7.99978 11.2957C8.13179 11.2957 8.2625 11.2696 8.38435 11.2188C8.50621 11.1681 8.61681 11.0937 8.70978 10.9999C8.80351 10.907 8.8779 10.7964 8.92867 10.6745C8.97944 10.5527 9.00558 10.422 9.00558 10.2899C9.00558 10.1579 8.97944 10.0272 8.92867 9.90536C8.8779 9.7835 8.80351 9.6729 8.70978 9.57994L5.70978 6.53994ZM2.70978 5.45994L4.99978 3.15994L7.28978 5.45994C7.38274 5.55367 7.49334 5.62806 7.6152 5.67883C7.73706 5.7296 7.86777 5.75574 7.99978 5.75574C8.13179 5.75574 8.2625 5.7296 8.38435 5.67883C8.50621 5.62806 8.61681 5.55367 8.70978 5.45994C8.80351 5.36698 8.8779 5.25637 8.92867 5.13452C8.97944 5.01266 9.00558 4.88195 9.00558 4.74994C9.00558 4.61793 8.97944 4.48722 8.92867 4.36536C8.8779 4.2435 8.80351 4.1329 8.70978 4.03994L5.70978 1.03994C5.61681 0.946211 5.50621 0.871816 5.38435 0.821048C5.2625 0.770279 5.13179 0.744141 4.99978 0.744141C4.86777 0.744141 4.73706 0.770279 4.6152 0.821048C4.49334 0.871816 4.38274 0.946211 4.28978 1.03994L1.28978 4.03994C1.10147 4.22824 0.995686 4.48364 0.995686 4.74994C0.995686 5.01624 1.10147 5.27164 1.28978 5.45994C1.47808 5.64824 1.73348 5.75403 1.99978 5.75403C2.26608 5.75403 2.52147 5.64824 2.70978 5.45994Z"
												fill="white"
											></path>
										</svg>
									</div>
									<motion.h5
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="mb-2 text-sm font-medium text-white uppercase"
									>
										Upgrade to Premium
									</motion.h5>
									<Paragraph
										content={`Unlock more features, One year support and monthly updates.`}
										tailwindStyling="text-sm text-white"
									/>
								</Link>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
							>
								<Link
									className="flex items-center py-3 pl-3 pr-2 text-base text-white transition-all duration-200 ease-in-out rounded hover:bg-darkBlue"
									href={`/contact/#contactForm`}
								>
									<span className="inline-block mr-4">
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6ZM7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13V17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17V13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12ZM17 10C16.7348 10 16.4804 10.1054 16.2929 10.2929C16.1054 10.4804 16 10.7348 16 11V17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V11C18 10.7348 17.8946 10.4804 17.7071 10.2929C17.5196 10.1054 17.2652 10 17 10ZM19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19Z"
												fill="currentColor"
											></path>
										</svg>
									</span>
									<span>Give feedback</span>
								</Link>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
							>
								<Link
									className="flex items-center py-3 pl-3 pr-2 text-base text-white transition-all duration-200 ease-in-out rounded hover:bg-darkBlue"
									href={`/dashboard/settings`}
								>
									<span className="inline-block mr-4">
										<svg
											className="w-5 h-5 text-white"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M17.7666 7.9583L16.1916 7.4333L16.9333 5.94996C17.0085 5.7947 17.0336 5.61993 17.0053 5.44977C16.9769 5.27961 16.8964 5.12245 16.775 4.99996L15 3.22496C14.8768 3.1017 14.7182 3.02013 14.5463 2.99173C14.3743 2.96333 14.1979 2.98953 14.0416 3.06663L12.5583 3.8083L12.0333 2.2333C11.9778 2.06912 11.8726 1.92632 11.7322 1.82475C11.5918 1.72319 11.4232 1.66792 11.25 1.66663H8.74996C8.57526 1.66618 8.40483 1.72064 8.26277 1.82233C8.12071 1.92402 8.0142 2.06778 7.9583 2.2333L7.4333 3.8083L5.94996 3.06663C5.7947 2.99145 5.61993 2.9663 5.44977 2.99466C5.27961 3.02302 5.12245 3.10349 4.99996 3.22496L3.22496 4.99996C3.1017 5.1231 3.02013 5.28177 2.99173 5.45368C2.96333 5.62558 2.98953 5.80205 3.06663 5.9583L3.8083 7.44163L2.2333 7.96663C2.06912 8.02208 1.92632 8.12732 1.82475 8.26772C1.72319 8.40812 1.66792 8.57668 1.66663 8.74996V11.25C1.66618 11.4247 1.72064 11.5951 1.82233 11.7372C1.92402 11.8792 2.06778 11.9857 2.2333 12.0416L3.8083 12.5666L3.06663 14.05C2.99145 14.2052 2.9663 14.38 2.99466 14.5502C3.02302 14.7203 3.10349 14.8775 3.22496 15L4.99996 16.775C5.1231 16.8982 5.28177 16.9798 5.45368 17.0082C5.62558 17.0366 5.80205 17.0104 5.9583 16.9333L7.44163 16.1916L7.96663 17.7666C8.02253 17.9321 8.12904 18.0759 8.2711 18.1776C8.41317 18.2793 8.58359 18.3337 8.7583 18.3333H11.2583C11.433 18.3337 11.6034 18.2793 11.7455 18.1776C11.8875 18.0759 11.9941 17.9321 12.05 17.7666L12.575 16.1916L14.0583 16.9333C14.2126 17.0066 14.3856 17.0307 14.5541 17.0024C14.7225 16.9741 14.8781 16.8947 15 16.775L16.775 15C16.8982 14.8768 16.9798 14.7182 17.0082 14.5463C17.0366 14.3743 17.0104 14.1979 16.9333 14.0416L16.1916 12.5583L17.7666 12.0333C17.9308 11.9778 18.0736 11.8726 18.1752 11.7322C18.2767 11.5918 18.332 11.4232 18.3333 11.25V8.74996C18.3337 8.57526 18.2793 8.40483 18.1776 8.26277C18.0759 8.12071 17.9321 8.0142 17.7666 7.9583ZM16.6666 10.65L15.6666 10.9833C15.4367 11.0579 15.2257 11.1816 15.0483 11.3459C14.871 11.5102 14.7315 11.711 14.6395 11.9346C14.5475 12.1582 14.5053 12.3991 14.5158 12.6406C14.5262 12.8821 14.5891 13.1185 14.7 13.3333L15.175 14.2833L14.2583 15.2L13.3333 14.7C13.1196 14.5935 12.8855 14.5342 12.6469 14.526C12.4083 14.5179 12.1707 14.5611 11.9502 14.6528C11.7298 14.7445 11.5316 14.8824 11.3691 15.0573C11.2066 15.2322 11.0835 15.44 11.0083 15.6666L10.675 16.6666H9.34996L9.01663 15.6666C8.94204 15.4367 8.81832 15.2257 8.65404 15.0483C8.48977 14.871 8.28888 14.7315 8.06531 14.6395C7.84174 14.5475 7.60084 14.5053 7.35932 14.5158C7.11779 14.5262 6.88143 14.5891 6.66663 14.7L5.71663 15.175L4.79996 14.2583L5.29996 13.3333C5.41087 13.1185 5.47373 12.8821 5.48417 12.6406C5.49461 12.3991 5.45238 12.1582 5.36041 11.9346C5.26845 11.711 5.12894 11.5102 4.95158 11.3459C4.77422 11.1816 4.56325 11.0579 4.3333 10.9833L3.3333 10.65V9.34996L4.3333 9.01663C4.56325 8.94204 4.77422 8.81832 4.95158 8.65404C5.12894 8.48977 5.26845 8.28888 5.36041 8.06531C5.45238 7.84174 5.49461 7.60084 5.48417 7.35932C5.47373 7.11779 5.41087 6.88143 5.29996 6.66663L4.82496 5.74163L5.74163 4.82496L6.66663 5.29996C6.88143 5.41087 7.11779 5.47373 7.35932 5.48417C7.60084 5.49461 7.84174 5.45238 8.06531 5.36041C8.28888 5.26845 8.48977 5.12894 8.65404 4.95158C8.81832 4.77422 8.94204 4.56325 9.01663 4.3333L9.34996 3.3333H10.65L10.9833 4.3333C11.0579 4.56325 11.1816 4.77422 11.3459 4.95158C11.5102 5.12894 11.711 5.26845 11.9346 5.36041C12.1582 5.45238 12.3991 5.49461 12.6406 5.48417C12.8821 5.47373 13.1185 5.41087 13.3333 5.29996L14.2833 4.82496L15.2 5.74163L14.7 6.66663C14.5935 6.88033 14.5342 7.11442 14.526 7.35304C14.5179 7.59165 14.5611 7.82924 14.6528 8.0497C14.7445 8.27016 14.8824 8.46835 15.0573 8.63086C15.2322 8.79337 15.44 8.9164 15.6666 8.99163L16.6666 9.32496V10.65ZM9.99996 6.66663C9.34069 6.66663 8.69623 6.86213 8.14806 7.2284C7.5999 7.59467 7.17266 8.11526 6.92036 8.72435C6.66807 9.33344 6.60206 10.0037 6.73068 10.6503C6.8593 11.2969 7.17676 11.8908 7.64294 12.357C8.10911 12.8232 8.70306 13.1406 9.34966 13.2692C9.99626 13.3979 10.6665 13.3319 11.2756 13.0796C11.8847 12.8273 12.4053 12.4 12.7715 11.8519C13.1378 11.3037 13.3333 10.6592 13.3333 9.99996C13.3333 9.11591 12.9821 8.26806 12.357 7.64294C11.7319 7.01782 10.884 6.66663 9.99996 6.66663ZM9.99996 11.6666C9.67033 11.6666 9.34809 11.5689 9.07401 11.3857C8.79993 11.2026 8.58631 10.9423 8.46016 10.6378C8.33402 10.3332 8.30101 9.99811 8.36532 9.67481C8.42963 9.35151 8.58836 9.05454 8.82145 8.82145C9.05454 8.58836 9.35151 8.42963 9.67481 8.36532C9.99811 8.30101 10.3332 8.33402 10.6378 8.46016C10.9423 8.58631 11.2026 8.79993 11.3857 9.07401C11.5689 9.34809 11.6666 9.67033 11.6666 9.99996C11.6666 10.442 11.491 10.8659 11.1785 11.1785C10.8659 11.491 10.442 11.6666 9.99996 11.6666Z"
												fill="currentColor"
											></path>
										</svg>
									</span>
									<span>Settings</span>
								</Link>
							</motion.div>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={handleLogout}
								className="flex items-center py-3 pl-3 pr-2 text-base text-white transition-all duration-200 ease-in-out rounded hover:bg-darkPinkRed"
							>
								<span className="inline-block mr-4">
									<svg
										className="w-5 h-5 text-white"
										viewBox="0 0 14 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0.333618 8.99996C0.333618 9.22097 0.421416 9.43293 0.577696 9.58922C0.733976 9.7455 0.945938 9.83329 1.16695 9.83329H7.49195L5.57528 11.7416C5.49718 11.8191 5.43518 11.9113 5.39287 12.0128C5.35057 12.1144 5.32879 12.2233 5.32879 12.3333C5.32879 12.4433 5.35057 12.5522 5.39287 12.6538C5.43518 12.7553 5.49718 12.8475 5.57528 12.925C5.65275 13.0031 5.74492 13.0651 5.84647 13.1074C5.94802 13.1497 6.05694 13.1715 6.16695 13.1715C6.27696 13.1715 6.38588 13.1497 6.48743 13.1074C6.58898 13.0651 6.68115 13.0031 6.75862 12.925L10.0919 9.59163C10.1678 9.51237 10.2273 9.41892 10.2669 9.31663C10.3503 9.11374 10.3503 8.88618 10.2669 8.68329C10.2273 8.581 10.1678 8.48755 10.0919 8.40829L6.75862 5.07496C6.68092 4.99726 6.58868 4.93563 6.48716 4.89358C6.38564 4.85153 6.27683 4.82988 6.16695 4.82988C6.05707 4.82988 5.94826 4.85153 5.84674 4.89358C5.74522 4.93563 5.65298 4.99726 5.57528 5.07496C5.49759 5.15266 5.43595 5.2449 5.3939 5.34642C5.35185 5.44794 5.33021 5.55674 5.33021 5.66663C5.33021 5.77651 5.35185 5.88532 5.3939 5.98683C5.43595 6.08835 5.49759 6.18059 5.57528 6.25829L7.49195 8.16663H1.16695C0.945938 8.16663 0.733976 8.25442 0.577696 8.4107C0.421416 8.56698 0.333618 8.77895 0.333618 8.99996ZM11.1669 0.666626H2.83362C2.17058 0.666626 1.53469 0.930018 1.06585 1.39886C0.59701 1.8677 0.333618 2.50358 0.333618 3.16663V5.66663C0.333618 5.88764 0.421416 6.0996 0.577696 6.25588C0.733976 6.41216 0.945938 6.49996 1.16695 6.49996C1.38797 6.49996 1.59993 6.41216 1.75621 6.25588C1.91249 6.0996 2.00028 5.88764 2.00028 5.66663V3.16663C2.00028 2.94561 2.08808 2.73365 2.24436 2.57737C2.40064 2.42109 2.6126 2.33329 2.83362 2.33329H11.1669C11.388 2.33329 11.5999 2.42109 11.7562 2.57737C11.9125 2.73365 12.0003 2.94561 12.0003 3.16663V14.8333C12.0003 15.0543 11.9125 15.2663 11.7562 15.4225C11.5999 15.5788 11.388 15.6666 11.1669 15.6666H2.83362C2.6126 15.6666 2.40064 15.5788 2.24436 15.4225C2.08808 15.2663 2.00028 15.0543 2.00028 14.8333V12.3333C2.00028 12.1123 1.91249 11.9003 1.75621 11.744C1.59993 11.5878 1.38797 11.5 1.16695 11.5C0.945938 11.5 0.733976 11.5878 0.577696 11.744C0.421416 11.9003 0.333618 12.1123 0.333618 12.3333V14.8333C0.333618 15.4963 0.59701 16.1322 1.06585 16.6011C1.53469 17.0699 2.17058 17.3333 2.83362 17.3333H11.1669C11.83 17.3333 12.4659 17.0699 12.9347 16.6011C13.4036 16.1322 13.6669 15.4963 13.6669 14.8333V3.16663C13.6669 2.50358 13.4036 1.8677 12.9347 1.39886C12.4659 0.930018 11.83 0.666626 11.1669 0.666626Z"
											fill="currentColor"
										></path>
									</svg>
								</span>
								<span>Log out</span>
							</motion.button>
						</motion.div>
					</nav>
				</div>
			</div>
		</>
	);
};

export default MainNavigation;
