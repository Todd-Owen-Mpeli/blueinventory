// Imports
import {FC} from "react";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";
import {useDashboardLayoutContext} from "@/context/dashboard";
import MediaFilesGridCards from "../Cards/MediaFilesGridCards";
import {fadeIn, initial, initialTwo, stagger} from "@/animations/animations";

const MediaFiles: FC = () => {
	const dashboardLayoutContext = useDashboardLayoutContext();

	return (
		<>
			<AnimatePresence>
				{dashboardLayoutContext?.revealMediaFilesModal && (
					<>
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							className="fixed top-0 left-0 z-50 w-full h-full bg-darkerBlueTwo bg-opacity-90"
						/>
						<div className="fixed top-0 left-0 z-50 flex w-full h-full px-8 py-24 overflow-y-scroll sm:p-24">
							<div className="relative w-full h-full mx-auto bg-white rounded-lg max-w-8xl">
								{/* Close Modal */}
								<motion.button
									initial={{opacity: 0}}
									animate={{opacity: 1}}
									exit={{opacity: 0}}
									onClick={
										dashboardLayoutContext?.handleCloseMediaFilesModalHandler
									}
									className="absolute right-0 w-8 cursor-pointer text-green-default -top-12 hover:text-yellow"
								>
									<Image
										width={500}
										height={500}
										src="/svg/cross.svg"
										alt="White arrow in a gold circle"
										className="transition-opacity duration-200 ease-in-out hover:opacity-70"
									/>
								</motion.button>

								<motion.div
									initial={initial}
									whileInView={stagger}
									viewport={{once: true}}
									className="w-full px-12 py-10 overflow-hidden rounded-lg"
								>
									<div className="flex flex-row items-center justify-between ">
										<motion.div
											initial={initial}
											whileInView={stagger}
											viewport={{once: true}}
											className="flex flex-col gap-2"
										>
											<motion.button
												initial={initialTwo}
												whileInView={fadeIn}
												viewport={{once: true}}
												onClick={
													dashboardLayoutContext?.handleCloseMediaFilesModalHandler
												}
												className="inline-flex items-center mb-3 text-sm group"
											>
												<svg
													className="mr-3 text-darkGrey group-hover:text-goldPrime"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M6.13634 13.197C6.42923 13.4899 6.9041 13.4899 7.197 13.197C7.48989 12.9041 7.48989 12.4292 7.197 12.1363L6.13634 13.197ZM2 7.99998L1.46967 7.46965C1.32902 7.6103 1.25 7.80107 1.25 7.99998C1.25 8.19889 1.32902 8.38966 1.46967 8.53031L2 7.99998ZM7.197 3.86364C7.48989 3.57075 7.48989 3.09588 7.197 2.80298C6.9041 2.51009 6.42923 2.51009 6.13634 2.80298L7.197 3.86364ZM14 8.74998C14.4142 8.74998 14.75 8.41419 14.75 7.99998C14.75 7.58577 14.4142 7.24998 14 7.24998V8.74998ZM7.197 12.1363L2.53033 7.46965L1.46967 8.53031L6.13634 13.197L7.197 12.1363ZM2.53033 8.53031L7.197 3.86364L6.13634 2.80298L1.46967 7.46965L2.53033 8.53031ZM2 8.74998L14 8.74998V7.24998L2 7.24998L2 8.74998Z"
														fill="currentColor"
													></path>
												</svg>
												<span className="font-semibold text-tiny text-darkGrey group-hover:text-goldPrime">
													Close
												</span>
											</motion.button>
											<motion.h3
												initial={initialTwo}
												whileInView={fadeIn}
												viewport={{once: true}}
												className="text-xl font-semibold mb-11"
											>
												Media Library
											</motion.h3>
										</motion.div>
										<motion.div
											initial={initial}
											whileInView={stagger}
											viewport={{once: true}}
										>
											<motion.button
												initial={initialTwo}
												whileInView={fadeIn}
												viewport={{once: true}}
												className="flex flex-row items-center justify-center gap-2"
												onClick={
													dashboardLayoutContext?.handleRevealUserCreateItemModal
												}
											>
												<svg
													width="24"
													height="24"
													fill="#15171e"
													viewBox="0 0 24 24"
													className={`w-[24px] h-[24px] transition-all duration-200 ease-in-out`}
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
																		fill="15171e"
																		stroke="#15171e"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth="2"
																		x1="12"
																		x2="12"
																		y1="19"
																		y2="5"
																	></line>
																	<line
																		fill="15171e"
																		stroke="#15171e"
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
												<span className="font-semibold text-tiny">
													Add Media
												</span>
											</motion.button>
										</motion.div>
									</div>
									<MediaFilesGridCards />
								</motion.div>
							</div>
						</div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default MediaFiles;
