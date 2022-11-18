import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/FAQ.module.scss";

const FAQ = () => {
	return (
		<section className={styles.faq}>
			<div className="relative z-10 container px-4 mx-auto">
				<div className="md:max-w-4xl px-0 mx-auto">
					<p className="mb-7 text-sm text-blue text-center font-semibold uppercase tracking-px">
						Have any questions?
					</p>
					<h2 className="mb-16 text-4xl md:text-5xl lg:text-7xl text-center font-bold font-heading tracking-px-n leading-normal">
						Frequently Asked Questions
					</h2>
					<div className="mb-11 flex flex-wrap gap-3">
						<div className="w-full p-1">
							<Link href="#">
								<a>
									<div className="py-7 px-8 bg-white bg-opacity-60 border-2 border-transparent hover:border-blue active:border-blue focus:border-blue rounded-2xl shadow-10xl">
										<div className="flex flex-wrap justify-between -m-2">
											<div className="flex-1 p-2">
												<h3 className="text-lg font-semibold leading-normal">
													What is BlueInventory Management Software ?
												</h3>
												<p className="mt-4 text-grey font-medium">
													BlueInventory management software is used for creating
													and managing inventory. Prioritizing saving time and
													money. Track your inventory levels across a wide
													variety of products and calculate the costs of goods
													sold.
												</p>
											</div>
											<div className="w-auto p-2">
												<svg
													className="relative top-1"
													width="20"
													height="20"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
														stroke="#4F46E5"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													></path>
												</svg>
											</div>
										</div>
									</div>
								</a>
							</Link>
						</div>
						<div className="w-full p-1">
							<Link href="#">
								<a>
									<div className="py-7 px-8 bg-white bg-opacity-60 border-2 border-transparent hover:border-blue active:border-blue focus:border-blue rounded-2xl shadow-10xl">
										<div className="flex flex-wrap justify-between -m-2">
											<div className="flex-1 p-2">
												<h3 className="text-lg font-semibold leading-normal">
													Why do I need BlueInventory?
												</h3>
												<p className="mt-4 text-grey font-medium">
													BlueInventory management software solves the
													idiosyncrasies of managing, maintaining and processing
													your product stocks and dealing with all the moving
													parts of operating a business.
												</p>
											</div>
											<div className="w-auto p-2">
												<svg
													className="relative top-1"
													width="18"
													height="18"
													viewBox="0 0 18 18"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M14.25 6.75L9 12L3.75 6.75"
														stroke="#18181B"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													></path>
												</svg>
											</div>
										</div>
									</div>
								</a>
							</Link>
						</div>
						<div className="w-full p-1">
							<Link href="#">
								<a>
									<div className="py-7 px-8 bg-white bg-opacity-60 border-2 border-transparent hover:border-blue active:border-blue focus:border-blue rounded-2xl shadow-10xl">
										<div className="flex flex-wrap justify-between -m-2">
											<div className="flex-1 p-2">
												<h3 className="text-lg font-semibold leading-normal">
													What are the benefits of BlueInventory?
												</h3>
												<p className="mt-4 text-grey font-medium">
													Elimination of manual processes, greater productivity,
													and maximum results are the key benefits of event
													management software.
												</p>
											</div>
											<div className="w-auto p-2">
												<svg
													className="relative top-1"
													width="18"
													height="18"
													viewBox="0 0 18 18"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M14.25 6.75L9 12L3.75 6.75"
														stroke="#18181B"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													></path>
												</svg>
											</div>
										</div>
									</div>
								</a>
							</Link>
						</div>
						<div className="w-full p-1">
							<Link href="#">
								<a>
									<div className="py-7 px-8 bg-white bg-opacity-60 border-2 border-transparent hover:border-blue active:border-blue focus:border-blue rounded-2xl shadow-10xl">
										<div className="flex flex-wrap justify-between -m-2">
											<div className="flex-1 p-2">
												<h3 className="text-lg font-semibold leading-normal">
													Who are the users of BlueInventory?
												</h3>
												<p className="mt-4 text-grey font-medium">
													Small Businesses, Event Organizers, Bars and
													restaurants, liquor stores, food trucks, convenience
													stores, and personal projects.
												</p>
											</div>
											<div className="w-auto p-2">
												<svg
													className="relative top-1"
													width="18"
													height="18"
													viewBox="0 0 18 18"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M14.25 6.75L9 12L3.75 6.75"
														stroke="#18181B"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													></path>
												</svg>
											</div>
										</div>
									</div>
								</a>
							</Link>
						</div>
					</div>
					<p className="text-grey text-center font-medium">
						<span>Still have any questions?</span>
						<Link href="#">
							<a className="ml-2 font-semibold text-blue hover:text-limeGreen hover:ease-in-out hover:duration-200">
								Contact us
							</a>
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
