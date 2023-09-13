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
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {ITailwindStyling} from "@/types/Dashboard/components";
import {dashboardMainMenuLinks} from "@/dashboard/content/menuLinks";

// Firebase
import {getAuth, signOut} from "firebase/auth";
import {useFirebaseContext} from "@/context/Firebase";

// Components
import NavbarLinks from "../components/Elements/NavbarLinks";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";

const MainNavigation: FC = () => {
	const auth = getAuth();
	const router = useRouter();
	const firebaseContext = useFirebaseContext();
	const [displayMenuText, setDisplayMenuText] = useState(false);

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

	// Hides or Displays User Menu Text
	const handleRevealMenuText = () => {
		setDisplayMenuText(!displayMenuText);
	};

	// Nav conditional general styling
	const tailwindStyling: ITailwindStyling = {
		// User sign in styling
		ringStyling:
			"object-cover object-center w-[40px] h-[40px] rounded-full ring-4",

		// Nav styling
		UlStyling: "flex flex-col items-center gap-2  font-medium",
		profileImageStyling:
			"flex flex-col items-center justify-center gap-4 mx-auto",
		revealMenuText: "w-[16px] h-[16px] text-white",
		mainLinksStyling:
			"flex flex-col items-center gap-4 text-sm px-2 py-3 text-white transition-all duration-200 ease-in-out rounded hover:text-white",
	};

	// Ensure userData is not null before using it in JSX
	if (!firebaseContext?.userData) {
		return <div>Loading...</div>; // or some other loading indicator
	}

	return (
		<>
			<nav className={styles.mainNavigation}>
				<div className="flex flex-col">
					<div className="fixed inset-0 bg-gray-800 navbar-backdrop xl:hidden opacity-10"></div>
					<div className="fixed inset-0 border-r max-w-xss bg-light">
						<div className="flex flex-wrap items-center justify-between py-6 pb-0 px-7">
							<motion.div
								initial={initial}
								viewport={{once: true}}
								whileInView={fadeInUp}
							>
								<Link
									href="/"
									className="text-lg font-extrabold tracking-tight uppercase transition-all duration-500 ease-in-out text-darkBlue hover:text-blue"
								>
									BlueInventory
								</Link>
							</motion.div>
							<div className="w-auto">
								<Link
									className="text-neutral-400 hover:text-neutral-500"
									href="#"
								>
									<svg
										width="18"
										height="14"
										viewBox="0 0 18 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6.97927 13.3637C7.27217 13.6566 7.74704 13.6566 8.03993 13.3637C8.33283 13.0708 8.33283 12.5959 8.03993 12.303L6.97927 13.3637ZM1.67627 7.00002L1.14594 6.46969C0.853046 6.76258 0.853046 7.23746 1.14594 7.53035L1.67627 7.00002ZM8.03993 1.69702C8.33283 1.40412 8.33283 0.92925 8.03993 0.636357C7.74704 0.343464 7.27217 0.343464 6.97927 0.636357L8.03993 1.69702ZM16.6763 7.75002C17.0905 7.75002 17.4263 7.41423 17.4263 7.00002C17.4263 6.58581 17.0905 6.25002 16.6763 6.25002V7.75002ZM8.03993 12.303L2.2066 6.46969L1.14594 7.53035L6.97927 13.3637L8.03993 12.303ZM2.2066 7.53035L8.03993 1.69702L6.97927 0.636357L1.14594 6.46969L2.2066 7.53035ZM1.67627 7.75002L16.6763 7.75002V6.25002L1.67627 6.25002L1.67627 7.75002Z"
											fill="currentColor"
										></path>
									</svg>
								</Link>
							</div>
						</div>
						<div className="flex flex-col justify-between flex-1 py-8 overflow-x-hidden overflow-y-auto">
							<div className="flex flex-col flex-wrap px-7 mb-8 -m-2.5">
								<div className="w-auto p-2.5">
									<Link className="flex flex-wrap items-center" href="#">
										<img
											className="mr-3"
											src="dashy-assets/images/home-2.svg"
											alt=""
										/>
										<p className="font-medium hover:text-neutral-700">
											Dashboard
										</p>
									</Link>
								</div>
							</div>
							<div className="flex flex-wrap items-center justify-between -m-2 px-7">
								<div className="flex items-center w-auto gap-2 p-2">
									<div className="flex flex-row gap-2 -m-1.5">
										<button
											// onClick={handleRevealUserDropdown}
											className="relative w-[40px]"
										>
											<Image
												width={500}
												height={500}
												id="avatarButton"
												data-dropdown-toggle="userDropdown"
												data-dropdown-placement="bottom-start"
												className="object-cover object-top w-10 h-10 transition-all duration-200 ease-in-out rounded-full cursor-pointer ring-4 ring-darkBlue"
												src={
													firebaseContext?.userData?.photoURL
														? firebaseContext?.userData?.photoURL
														: `/img/Logos/BlueInventory favicon Two.png`
												}
												alt={`${firebaseContext?.userData?.displayName} profile image`}
											/>
											<span className="bottom-[-3px] left-7 absolute w-3.5 h-3.5 bg-brightGreen border-2 border-white rounded-full "></span>
										</button>
										<div className="px-1.5">
											<h3 className="font-bold text-tiny">
												{firebaseContext?.userData?.displayName}
											</h3>
											<span className="text-xs">
												{firebaseContext?.userData?.email}
											</span>
										</div>
									</div>
									<motion.div
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="w-full"
									>
										<Link
											className="text-neutral-400 hover:text-neutral-500"
											href="#"
										>
											<svg
												width="18"
												height="17"
												viewBox="0 0 18 17"
												fill="#2d2378"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M5.46015 2.98571L5.8504 2.34523L5.46015 2.98571ZM7.60386 2.09776L6.87503 1.92082L7.60386 2.09776ZM3.48571 4.96015L2.84523 5.3504L3.48571 4.96015ZM2.59776 7.10386L2.42082 6.37503L2.59776 7.10386ZM2.59776 9.89614L2.77469 9.16731L2.59776 9.89614ZM3.48571 12.0398L2.84523 11.6496L3.48571 12.0398ZM5.46016 14.0143L5.8504 14.6548L5.46016 14.0143ZM7.60386 14.9022L8.33269 14.7253L7.60386 14.9022ZM10.3961 14.9022L11.125 15.0792L10.3961 14.9022ZM12.5398 14.0143L12.1496 14.6548L12.5398 14.0143ZM14.5143 12.0398L15.1548 11.6496L14.5143 12.0398ZM15.4022 9.89614L15.5792 10.625L15.4022 9.89614ZM15.4022 7.10386L15.2253 7.83269L15.4022 7.10386ZM14.5143 4.96015L15.1548 5.3504L14.5143 4.96015ZM12.5398 2.98571L12.1496 2.34523L12.5398 2.98571ZM10.3961 2.09776L9.66732 2.27469L10.3961 2.09776ZM5.06991 3.62618C6.33455 4.39674 7.98332 3.7138 8.33269 2.27469L6.87503 1.92082C6.76531 2.37275 6.24754 2.58722 5.8504 2.34523L5.06991 3.62618ZM4.12618 4.56991C3.75159 3.95513 4.45513 3.25159 5.06991 3.62618L5.8504 2.34523C3.89271 1.15239 1.65239 3.39271 2.84523 5.3504L4.12618 4.56991ZM2.77469 7.83269C4.2138 7.48332 4.89674 5.83455 4.12618 4.56991L2.84523 5.3504C3.08722 5.74754 2.87275 6.26531 2.42082 6.37503L2.77469 7.83269ZM2.77469 9.16731C2.0751 8.99748 2.0751 8.00252 2.77469 7.83269L2.42082 6.37503C0.193058 6.91585 0.193061 10.0841 2.42082 10.625L2.77469 9.16731ZM4.12618 12.4301C4.89674 11.1655 4.2138 9.51668 2.77469 9.16731L2.42082 10.625C2.87275 10.7347 3.08722 11.2525 2.84523 11.6496L4.12618 12.4301ZM5.06991 13.3738C4.45513 13.7484 3.75159 13.0449 4.12618 12.4301L2.84523 11.6496C1.65239 13.6073 3.89271 15.8476 5.8504 14.6548L5.06991 13.3738ZM8.33269 14.7253C7.98332 13.2862 6.33455 12.6033 5.06991 13.3738L5.8504 14.6548C6.24754 14.4128 6.76531 14.6273 6.87503 15.0792L8.33269 14.7253ZM9.66732 14.7253C9.49748 15.4249 8.50252 15.4249 8.33269 14.7253L6.87503 15.0792C7.41586 17.3069 10.5841 17.3069 11.125 15.0792L9.66732 14.7253ZM12.9301 13.3738C11.6655 12.6033 10.0167 13.2862 9.66732 14.7253L11.125 15.0792C11.2347 14.6273 11.7525 14.4128 12.1496 14.6548L12.9301 13.3738ZM13.8738 12.4301C14.2484 13.0449 13.5449 13.7484 12.9301 13.3738L12.1496 14.6548C14.1073 15.8476 16.3476 13.6073 15.1548 11.6496L13.8738 12.4301ZM15.2253 9.16731C13.7862 9.51668 13.1033 11.1655 13.8738 12.4301L15.1548 11.6496C14.9128 11.2525 15.1273 10.7347 15.5792 10.625L15.2253 9.16731ZM15.2253 7.83269C15.9249 8.00252 15.9249 8.99748 15.2253 9.16731L15.5792 10.625C17.8069 10.0841 17.8069 6.91585 15.5792 6.37503L15.2253 7.83269ZM13.8738 4.56991C13.1033 5.83455 13.7862 7.48332 15.2253 7.83269L15.5792 6.37503C15.1273 6.26531 14.9128 5.74754 15.1548 5.3504L13.8738 4.56991ZM12.9301 3.62618C13.5449 3.25159 14.2484 3.95513 13.8738 4.56991L15.1548 5.3504C16.3476 3.39271 14.1073 1.15239 12.1496 2.34523L12.9301 3.62618ZM9.66732 2.27469C10.0167 3.7138 11.6655 4.39674 12.9301 3.62618L12.1496 2.34523C11.7525 2.58722 11.2347 2.37275 11.125 1.92082L9.66732 2.27469ZM11.125 1.92082C10.5841 -0.306939 7.41586 -0.306942 6.87503 1.92082L8.33269 2.27469C8.50252 1.5751 9.49748 1.5751 9.66732 2.27469L11.125 1.92082ZM10.75 8.5C10.75 9.4665 9.9665 10.25 9 10.25V11.75C10.7949 11.75 12.25 10.2949 12.25 8.5H10.75ZM9 10.25C8.0335 10.25 7.25 9.4665 7.25 8.5H5.75C5.75 10.2949 7.20507 11.75 9 11.75V10.25ZM7.25 8.5C7.25 7.5335 8.0335 6.75 9 6.75V5.25C7.20507 5.25 5.75 6.70507 5.75 8.5H7.25ZM9 6.75C9.9665 6.75 10.75 7.5335 10.75 8.5H12.25C12.25 6.70507 10.7949 5.25 9 5.25V6.75Z"
													fill="#2d2378"
												></path>
											</svg>
										</Link>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default MainNavigation;
