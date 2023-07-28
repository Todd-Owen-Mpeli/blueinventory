// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {getAuth} from "firebase/auth";
import {IFirebaseUser} from "@/types/firebase";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

const topNavigation: FC = () => {
	const auth = getAuth();

	// Firebase User Details
	const user: IFirebaseUser = {
		uid: `${auth?.currentUser?.uid}`,
		email: `${auth?.currentUser?.email}`,
		metadata: `${auth?.currentUser?.metadata}`,
		phoneNumber: `${auth?.currentUser?.phoneNumber}`,
		displayName: `${auth?.currentUser?.displayName}`,
		profileImageURL: `https://cmsblueinventory.com/wp-content/uploads/2023/04/pexels-sora-shimazaki-5668790-min-scaled.jpg`,
	};

	return (
		<>
			<div className={styles.topNavigation}>
				<div className="items-center justify-between hidden sm:flex">
					<div></div>
					<div className="w-auto">
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex flex-wrap items-center"
						>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="w-auto p-3"
							>
								<Link
									className="block max-w-max text-darkGrey hover:text-darkGrey"
									href={` `}
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM5 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7L12 11.88L4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V9.28L11.48 13.85C11.632 13.9378 11.8045 13.984 11.98 13.984C12.1555 13.984 12.328 13.9378 12.48 13.85L20 9.28V17Z"
											fill="#ffffff"
										></path>
									</svg>
								</Link>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="w-auto p-3"
							>
								<Link
									className="block max-w-max text-darkGrey hover:text-darkGrey"
									href={` `}
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M18 13.18V10C17.9986 8.58312 17.4958 7.21247 16.5806 6.13077C15.6655 5.04908 14.3971 4.32615 13 4.09V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4.09C9.60294 4.32615 8.33452 5.04908 7.41939 6.13077C6.50425 7.21247 6.00144 8.58312 6 10V13.18C5.41645 13.3863 4.911 13.7681 4.55294 14.2729C4.19488 14.7778 4.00174 15.3811 4 16V18C4 18.2652 4.10536 18.5196 4.29289 18.7071C4.48043 18.8946 4.73478 19 5 19H8.14C8.37028 19.8474 8.873 20.5954 9.5706 21.1287C10.2682 21.6621 11.1219 21.951 12 21.951C12.8781 21.951 13.7318 21.6621 14.4294 21.1287C15.127 20.5954 15.6297 19.8474 15.86 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18V16C19.9983 15.3811 19.8051 14.7778 19.4471 14.2729C19.089 13.7681 18.5835 13.3863 18 13.18ZM8 10C8 8.93913 8.42143 7.92172 9.17157 7.17157C9.92172 6.42143 10.9391 6 12 6C13.0609 6 14.0783 6.42143 14.8284 7.17157C15.5786 7.92172 16 8.93913 16 10V13H8V10ZM12 20C11.651 19.9979 11.3086 19.9045 11.0068 19.7291C10.7051 19.5536 10.4545 19.3023 10.28 19H13.72C13.5455 19.3023 13.2949 19.5536 12.9932 19.7291C12.6914 19.9045 12.349 19.9979 12 20ZM18 17H6V16C6 15.7348 6.10536 15.4804 6.29289 15.2929C6.48043 15.1054 6.73478 15 7 15H17C17.2652 15 17.5196 15.1054 17.7071 15.2929C17.8946 15.4804 18 15.7348 18 16V17Z"
											fill="#ffffff"
										></path>
									</svg>
								</Link>
							</motion.div>
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
												className="w-auto p-2"
											>
												<Image
													width={500}
													height={500}
													className="object-cover object-top w-10 h-10 transition-all duration-200 ease-in-out rounded-full cursor-pointer ring-4 ring-brightGreenDash hover:ring-goldPrime"
													src={
														user?.profileImageURL
															? user?.profileImageURL
															: `/img/Logos/BlueInventory favicon Two.png`
													}
													alt={`${user?.displayName} profile image`}
												/>
											</motion.div>
											<motion.div
												initial={initial}
												viewport={{once: true}}
												whileInView={stagger}
												className="w-auto p-2"
											>
												<motion.h3
													initial={initial}
													whileInView={fadeInUp}
													viewport={{once: true}}
													className="text-sm font-semibold text-white"
												>
													{user?.displayName}
												</motion.h3>
												<Paragraph
													content={user?.email}
													tailwindStyling="text-sm font-medium text-darkGrey"
												/>
											</motion.div>
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default topNavigation;
