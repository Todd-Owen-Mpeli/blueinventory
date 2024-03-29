// Imports
import Link from "next/link";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {getAuth, signOut} from "firebase/auth";
import {useDashboardLayoutContext} from "@/context/dashboard";
import {fadeIn, initialTwo} from "@/animations/animations";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";

const TopNavbar: FC = () => {
	const auth = getAuth();
	const router = useRouter();
	const dashboardLayoutContext = useDashboardLayoutContext();
	const [revealCreateItem, setRevealCreateItem] = useState(false);
	const [revealGoogleTranslateOptions, setRevealGoogleTranslateOptions] =
		useState(false);

	// Hides or Displays Google Translate Options
	const handleRevealGoogleTranslateOptions = () => {
		setRevealGoogleTranslateOptions(!revealGoogleTranslateOptions);
	};

	// Handles User Logout
	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log("User Sign out Successful");
				router.push("/");
			})
			.catch((error: any) => {
				// An error happened.
				console.log(error);
				router.push("/");
			});
	};

	return (
		<>
			<section
				className={
					styles.topNavbar +
					" flex flex-row flex-wrap items-center justify-between px-4 py-2 border-b-[1px] border-[#e8e8e8]"
				}
			>
				<ul className="flex flex-row items-center">
					<li>
						<h1 className="text-base font-bold text-left cursor-default lg:text-medium">
							Dashboard
						</h1>
					</li>
				</ul>
				<ul className="flex flex-row items-center gap-6">
					<motion.li
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
					>
						<button
							onClick={dashboardLayoutContext?.handleRevealUserCreateItemModal}
						>
							<svg
								width="26"
								height="26"
								fill="#09275e"
								viewBox="0 0 24 24"
								className={`w-[26px] h-[26px] mb-[-6px] ${
									revealCreateItem ? "rotate-45" : "rotate-0"
								} transition-all duration-200 ease-in-out`}
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<g id="Complete">
										<g data-name="add" id="add-2">
											<g>
												<line
													fill="09275e"
													stroke="#09275e"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													x1="12"
													x2="12"
													y1="19"
													y2="5"
												></line>
												<line
													fill="09275e"
													stroke="#09275e"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													x1="5"
													x2="19"
													y1="12"
													y2="12"
												></line>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</button>
					</motion.li>
					<motion.li
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
					>
						<Link href="/dashboard/settings">
							<svg
								width="20"
								height="20"
								fill="#09275e"
								viewBox="0 0 20 20"
								className="w-[26px] h-[26px]"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M17.7666 7.9583L16.1916 7.4333L16.9333 5.94996C17.0085 5.7947 17.0336 5.61993 17.0053 5.44977C16.9769 5.27961 16.8964 5.12245 16.775 4.99996L15 3.22496C14.8768 3.1017 14.7182 3.02013 14.5463 2.99173C14.3743 2.96333 14.1979 2.98953 14.0416 3.06663L12.5583 3.8083L12.0333 2.2333C11.9778 2.06912 11.8726 1.92632 11.7322 1.82475C11.5918 1.72319 11.4232 1.66792 11.25 1.66663H8.74996C8.57526 1.66618 8.40483 1.72064 8.26277 1.82233C8.12071 1.92402 8.0142 2.06778 7.9583 2.2333L7.4333 3.8083L5.94996 3.06663C5.7947 2.99145 5.61993 2.9663 5.44977 2.99466C5.27961 3.02302 5.12245 3.10349 4.99996 3.22496L3.22496 4.99996C3.1017 5.1231 3.02013 5.28177 2.99173 5.45368C2.96333 5.62558 2.98953 5.80205 3.06663 5.9583L3.8083 7.44163L2.2333 7.96663C2.06912 8.02208 1.92632 8.12732 1.82475 8.26772C1.72319 8.40812 1.66792 8.57668 1.66663 8.74996V11.25C1.66618 11.4247 1.72064 11.5951 1.82233 11.7372C1.92402 11.8792 2.06778 11.9857 2.2333 12.0416L3.8083 12.5666L3.06663 14.05C2.99145 14.2052 2.9663 14.38 2.99466 14.5502C3.02302 14.7203 3.10349 14.8775 3.22496 15L4.99996 16.775C5.1231 16.8982 5.28177 16.9798 5.45368 17.0082C5.62558 17.0366 5.80205 17.0104 5.9583 16.9333L7.44163 16.1916L7.96663 17.7666C8.02253 17.9321 8.12904 18.0759 8.2711 18.1776C8.41317 18.2793 8.58359 18.3337 8.7583 18.3333H11.2583C11.433 18.3337 11.6034 18.2793 11.7455 18.1776C11.8875 18.0759 11.9941 17.9321 12.05 17.7666L12.575 16.1916L14.0583 16.9333C14.2126 17.0066 14.3856 17.0307 14.5541 17.0024C14.7225 16.9741 14.8781 16.8947 15 16.775L16.775 15C16.8982 14.8768 16.9798 14.7182 17.0082 14.5463C17.0366 14.3743 17.0104 14.1979 16.9333 14.0416L16.1916 12.5583L17.7666 12.0333C17.9308 11.9778 18.0736 11.8726 18.1752 11.7322C18.2767 11.5918 18.332 11.4232 18.3333 11.25V8.74996C18.3337 8.57526 18.2793 8.40483 18.1776 8.26277C18.0759 8.12071 17.9321 8.0142 17.7666 7.9583ZM16.6666 10.65L15.6666 10.9833C15.4367 11.0579 15.2257 11.1816 15.0483 11.3459C14.871 11.5102 14.7315 11.711 14.6395 11.9346C14.5475 12.1582 14.5053 12.3991 14.5158 12.6406C14.5262 12.8821 14.5891 13.1185 14.7 13.3333L15.175 14.2833L14.2583 15.2L13.3333 14.7C13.1196 14.5935 12.8855 14.5342 12.6469 14.526C12.4083 14.5179 12.1707 14.5611 11.9502 14.6528C11.7298 14.7445 11.5316 14.8824 11.3691 15.0573C11.2066 15.2322 11.0835 15.44 11.0083 15.6666L10.675 16.6666H9.34996L9.01663 15.6666C8.94204 15.4367 8.81832 15.2257 8.65404 15.0483C8.48977 14.871 8.28888 14.7315 8.06531 14.6395C7.84174 14.5475 7.60084 14.5053 7.35932 14.5158C7.11779 14.5262 6.88143 14.5891 6.66663 14.7L5.71663 15.175L4.79996 14.2583L5.29996 13.3333C5.41087 13.1185 5.47373 12.8821 5.48417 12.6406C5.49461 12.3991 5.45238 12.1582 5.36041 11.9346C5.26845 11.711 5.12894 11.5102 4.95158 11.3459C4.77422 11.1816 4.56325 11.0579 4.3333 10.9833L3.3333 10.65V9.34996L4.3333 9.01663C4.56325 8.94204 4.77422 8.81832 4.95158 8.65404C5.12894 8.48977 5.26845 8.28888 5.36041 8.06531C5.45238 7.84174 5.49461 7.60084 5.48417 7.35932C5.47373 7.11779 5.41087 6.88143 5.29996 6.66663L4.82496 5.74163L5.74163 4.82496L6.66663 5.29996C6.88143 5.41087 7.11779 5.47373 7.35932 5.48417C7.60084 5.49461 7.84174 5.45238 8.06531 5.36041C8.28888 5.26845 8.48977 5.12894 8.65404 4.95158C8.81832 4.77422 8.94204 4.56325 9.01663 4.3333L9.34996 3.3333H10.65L10.9833 4.3333C11.0579 4.56325 11.1816 4.77422 11.3459 4.95158C11.5102 5.12894 11.711 5.26845 11.9346 5.36041C12.1582 5.45238 12.3991 5.49461 12.6406 5.48417C12.8821 5.47373 13.1185 5.41087 13.3333 5.29996L14.2833 4.82496L15.2 5.74163L14.7 6.66663C14.5935 6.88033 14.5342 7.11442 14.526 7.35304C14.5179 7.59165 14.5611 7.82924 14.6528 8.0497C14.7445 8.27016 14.8824 8.46835 15.0573 8.63086C15.2322 8.79337 15.44 8.9164 15.6666 8.99163L16.6666 9.32496V10.65ZM9.99996 6.66663C9.34069 6.66663 8.69623 6.86213 8.14806 7.2284C7.5999 7.59467 7.17266 8.11526 6.92036 8.72435C6.66807 9.33344 6.60206 10.0037 6.73068 10.6503C6.8593 11.2969 7.17676 11.8908 7.64294 12.357C8.10911 12.8232 8.70306 13.1406 9.34966 13.2692C9.99626 13.3979 10.6665 13.3319 11.2756 13.0796C11.8847 12.8273 12.4053 12.4 12.7715 11.8519C13.1378 11.3037 13.3333 10.6592 13.3333 9.99996C13.3333 9.11591 12.9821 8.26806 12.357 7.64294C11.7319 7.01782 10.884 6.66663 9.99996 6.66663ZM9.99996 11.6666C9.67033 11.6666 9.34809 11.5689 9.07401 11.3857C8.79993 11.2026 8.58631 10.9423 8.46016 10.6378C8.33402 10.3332 8.30101 9.99811 8.36532 9.67481C8.42963 9.35151 8.58836 9.05454 8.82145 8.82145C9.05454 8.58836 9.35151 8.42963 9.67481 8.36532C9.99811 8.30101 10.3332 8.33402 10.6378 8.46016C10.9423 8.58631 11.2026 8.79993 11.3857 9.07401C11.5689 9.34809 11.6666 9.67033 11.6666 9.99996C11.6666 10.442 11.491 10.8659 11.1785 11.1785C10.8659 11.491 10.442 11.6666 9.99996 11.6666Z"
									fill="currentColor"
								></path>
							</svg>
						</Link>
					</motion.li>
					<motion.li
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
					>
						<Link href="#">
							<svg
								width="26"
								height="26"
								fill="#f6ad37"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="opacity-100 cursor-pointer hover:opacity-60"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<g id="Complete">
										<g id="alert-circle">
											<g>
												<line
													fill="none"
													stroke="#f6ad37"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													x1="12"
													x2="12"
													y1="8"
													y2="12"
												></line>
												<line
													fill="none"
													stroke="#f6ad37"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													x1="12"
													x2="12"
													y1="16"
													y2="16"
												></line>
												<circle
													cx="12"
													cy="12"
													data-name="--Circle"
													fill="none"
													id="_--Circle"
													r="10"
													stroke="#f6ad37"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
												></circle>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</Link>
					</motion.li>
					<motion.li
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="relative p-0"
					>
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
									: "p-0 text-white  transition duration-200 rounded-sm flex flex-row items-center justify-center gap-3"
							}
						>
							<svg
								id="language-selector"
								fill="#09275e"
								data-name="language selector"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 122.88 92.91"
								className="block w-full max-w-[35px] h-[35px] object-contain object-center"
							>
								<path d="M20.15,83.63,31.63,73.4a2.89,2.89,0,0,1,1.91-.73h27.8a.92.92,0,0,0,.93-.93V65.9H68v5.84a6.71,6.71,0,0,1-6.68,6.68H34.62L19.3,92.07a2.87,2.87,0,0,1-4.9-2V78.42H6.69A6.71,6.71,0,0,1,0,71.74V28.59a6.76,6.76,0,0,1,6.69-6.68H43.35v5.75H6.69a1,1,0,0,0-.94.93V71.74a.91.91,0,0,0,.28.65,1,1,0,0,0,.66.28H17.27a2.88,2.88,0,0,1,2.88,2.88v8.08Zm.21-19.48L29.6,36.24h8.83l9.24,27.91H40.35L38.8,59.07H29.15l-1.51,5.08ZM30.79,53.24h6.37L34,41.81,30.79,53.24ZM76.63,13.35h8.7V11.11a.69.69,0,0,1,.69-.69h4.65a.68.68,0,0,1,.68.69v2.24h9.76a.68.68,0,0,1,.68.69V18.5a.68.68,0,0,1-.68.68H99.56a26.3,26.3,0,0,1-.91,3.88l0,.06a26.07,26.07,0,0,1-1.74,4.15,32.34,32.34,0,0,1-2.14,3.43c-.67,1-1.41,1.9-2.2,2.83a35.78,35.78,0,0,0,3.68,3.83,41.43,41.43,0,0,0,5.09,3.74.68.68,0,0,1,.21.94l-2.39,3.73a.69.69,0,0,1-1,.2,45.88,45.88,0,0,1-5.58-4.08l0,0a41.42,41.42,0,0,1-4-4.1C87.3,38.93,86.15,40,85,41l0,0c-1.36,1.12-2.79,2.2-4.47,3.36a.69.69,0,0,1-1-.17L77,40.53a.69.69,0,0,1,.17-1c1.66-1.14,3-2.19,4.36-3.28,1.16-1,2.28-2,3.49-3.16a44.82,44.82,0,0,1-2.77-4.45A28.84,28.84,0,0,1,80,22.9a.68.68,0,0,1,.47-.84l4.27-1.19a.68.68,0,0,1,.84.47A22.62,22.62,0,0,0,89,28.7L90.27,27a26.33,26.33,0,0,0,1.51-2.47l0,0A19.43,19.43,0,0,0,93,21.62a24,24,0,0,0,.66-2.44h-17a.69.69,0,0,1-.69-.68V14a.69.69,0,0,1,.69-.69Zm27,56.82L88.26,56.51H61.54a6.73,6.73,0,0,1-6.69-6.68V6.69a6.71,6.71,0,0,1,2-4.72l.2-.18A6.67,6.67,0,0,1,61.54,0h54.65a6.69,6.69,0,0,1,4.71,2l.19.2a6.69,6.69,0,0,1,1.79,4.51V49.83a6.73,6.73,0,0,1-6.69,6.68h-7.7V68.13a2.88,2.88,0,0,1-4.91,2ZM91.26,51.49l11.47,10.23V53.64a2.88,2.88,0,0,1,2.88-2.88h10.58a.92.92,0,0,0,.65-.28.91.91,0,0,0,.29-.65V6.69a1,1,0,0,0-.22-.58L116.84,6a1,1,0,0,0-.65-.29H61.54A.94.94,0,0,0,61,6L60.89,6a.92.92,0,0,0-.28.65V49.83a.92.92,0,0,0,.93.93H89.35a2.86,2.86,0,0,1,1.91.73Z" />
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
							className={revealGoogleTranslateOptions ? "block" : "hidden"}
						>
							<svg
								width="28"
								height="28"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className={
									styles.closeGoogleTranslateSVG +
									" w-[28px] h-[28px] object-contain object-center"
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
							className={
								revealGoogleTranslateOptions
									? styles.googleTranslateElement + " block"
									: "hidden"
							}
						/>
					</motion.li>
					<motion.li
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
					>
						<button
							onClick={handleLogout}
							className={styles.logoutButton + " py-2"}
						>
							<svg
								width="20"
								height="20"
								fill="none"
								viewBox="0 0 14 20"
								xmlns="http://www.w3.org/2000/svg"
								className="w-[26px] h-[26px] mt-[3px]"
							>
								<path
									d="M0.333618 8.99996C0.333618 9.22097 0.421416 9.43293 0.577696 9.58922C0.733976 9.7455 0.945938 9.83329 1.16695 9.83329H7.49195L5.57528 11.7416C5.49718 11.8191 5.43518 11.9113 5.39287 12.0128C5.35057 12.1144 5.32879 12.2233 5.32879 12.3333C5.32879 12.4433 5.35057 12.5522 5.39287 12.6538C5.43518 12.7553 5.49718 12.8475 5.57528 12.925C5.65275 13.0031 5.74492 13.0651 5.84647 13.1074C5.94802 13.1497 6.05694 13.1715 6.16695 13.1715C6.27696 13.1715 6.38588 13.1497 6.48743 13.1074C6.58898 13.0651 6.68115 13.0031 6.75862 12.925L10.0919 9.59163C10.1678 9.51237 10.2273 9.41892 10.2669 9.31663C10.3503 9.11374 10.3503 8.88618 10.2669 8.68329C10.2273 8.581 10.1678 8.48755 10.0919 8.40829L6.75862 5.07496C6.68092 4.99726 6.58868 4.93563 6.48716 4.89358C6.38564 4.85153 6.27683 4.82988 6.16695 4.82988C6.05707 4.82988 5.94826 4.85153 5.84674 4.89358C5.74522 4.93563 5.65298 4.99726 5.57528 5.07496C5.49759 5.15266 5.43595 5.2449 5.3939 5.34642C5.35185 5.44794 5.33021 5.55674 5.33021 5.66663C5.33021 5.77651 5.35185 5.88532 5.3939 5.98683C5.43595 6.08835 5.49759 6.18059 5.57528 6.25829L7.49195 8.16663H1.16695C0.945938 8.16663 0.733976 8.25442 0.577696 8.4107C0.421416 8.56698 0.333618 8.77895 0.333618 8.99996ZM11.1669 0.666626H2.83362C2.17058 0.666626 1.53469 0.930018 1.06585 1.39886C0.59701 1.8677 0.333618 2.50358 0.333618 3.16663V5.66663C0.333618 5.88764 0.421416 6.0996 0.577696 6.25588C0.733976 6.41216 0.945938 6.49996 1.16695 6.49996C1.38797 6.49996 1.59993 6.41216 1.75621 6.25588C1.91249 6.0996 2.00028 5.88764 2.00028 5.66663V3.16663C2.00028 2.94561 2.08808 2.73365 2.24436 2.57737C2.40064 2.42109 2.6126 2.33329 2.83362 2.33329H11.1669C11.388 2.33329 11.5999 2.42109 11.7562 2.57737C11.9125 2.73365 12.0003 2.94561 12.0003 3.16663V14.8333C12.0003 15.0543 11.9125 15.2663 11.7562 15.4225C11.5999 15.5788 11.388 15.6666 11.1669 15.6666H2.83362C2.6126 15.6666 2.40064 15.5788 2.24436 15.4225C2.08808 15.2663 2.00028 15.0543 2.00028 14.8333V12.3333C2.00028 12.1123 1.91249 11.9003 1.75621 11.744C1.59993 11.5878 1.38797 11.5 1.16695 11.5C0.945938 11.5 0.733976 11.5878 0.577696 11.744C0.421416 11.9003 0.333618 12.1123 0.333618 12.3333V14.8333C0.333618 15.4963 0.59701 16.1322 1.06585 16.6011C1.53469 17.0699 2.17058 17.3333 2.83362 17.3333H11.1669C11.83 17.3333 12.4659 17.0699 12.9347 16.6011C13.4036 16.1322 13.6669 15.4963 13.6669 14.8333V3.16663C13.6669 2.50358 13.4036 1.8677 12.9347 1.39886C12.4659 0.930018 11.83 0.666626 11.1669 0.666626Z"
									fill="#f31243"
								></path>
							</svg>
						</button>
					</motion.li>
				</ul>
			</section>
		</>
	);
};

export default TopNavbar;
