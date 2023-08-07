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

// Components
import Paragraph from "./Elements/Paragraph";

const GoogleIntegration: FC = () => {
	return (
		<>
			<div className="relative py-20 overflow-hidden bg-white">
				<div className="container relative px-4 mx-auto">
					<div className="mx-auto max-w-7xl">
						<div className="flex flex-wrap items-center -mx-4 mb-18">
							<div className="w-full px-4 mb-12 lg:w-2/3 xl:w-1/2 lg:mb-0">
								<div>
									<span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white uppercase rounded-full bg-blue">
										Google
									</span>
									<h2 className="text-5xl font-bold text-darkBlue font-heading xs:text-6xl md:text-7xl">
										<span>Delivering Tech</span>
										<span className="italic">Solutions</span>
									</h2>
								</div>
							</div>
							<div className="w-full px-4 lg:w-1/3 xl:w-1/2">
								<div className="max-w-sm lg:ml-auto">
									<Paragraph
										content={`<p>We are a team of 20+ who are passionate about making the
										world a better place.</p>`}
										tailwindStyling="py-8 text-lg text-black text-left"
									/>
								</div>
							</div>
						</div>
						<div className="flex flex-wrap -mx-4">
							<div className="w-full px-4 mb-8 xl:w-1/2 xl:mb-0">
								<div className="relative h-100 md:h-125 bg-darkBlue rounded-3xl">
									<Image
										alt={``}
										width={500}
										height={500}
										className="block object-cover w-full h-full"
										src="/svg/backgroundSVG/stacked-waves-haikei-blue-yellow.svg"
									/>
									<div
										className="absolute top-0 left-0 w-full h-full p-8 bg-center bg-no-repeat bg-cover md:p-12"
										style={{
											backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-yellow.svg")`,
										}}
									>
										<div className="flex flex-col items-start justify-between h-full max-w-sm">
											<div>
												<span className="block mb-3 text-base font-medium uppercase text-goldPrime">
													Ready for future
												</span>
												<h3 className="text-3xl font-semibold text-white md:text-4xl">
													Leveraging tech to drive a better IT experience
												</h3>
											</div>
											<Link
												className="relative inline-block w-full px-6 py-4 overflow-hidden font-semibold transition duration-500 rounded-md text-blue group xs:w-auto hover:text-white bg-blue"
												href="#"
											>
												<div className="absolute top-0 w-full h-full transition duration-500 transform bg-grey right-full group-hover:translate-x-full group-hover:scale-105"></div>
												<div className="relative flex items-center justify-center">
													<span className="mr-4">See Incredible Work</span>
													<span>
														<svg
															width="13"
															height="13"
															viewBox="0 0 13 13"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M12.92 0.62C12.8185 0.375651 12.6243 0.181475 12.38 0.0799999C12.2598 0.028759 12.1307 0.00157999 12 0H2C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1C1 1.26522 1.10536 1.51957 1.29289 1.70711C1.48043 1.89464 1.73478 2 2 2H9.59L1.29 10.29C1.19627 10.383 1.12188 10.4936 1.07111 10.6154C1.02034 10.7373 0.994202 10.868 0.994202 11C0.994202 11.132 1.02034 11.2627 1.07111 11.3846C1.12188 11.5064 1.19627 11.617 1.29 11.71C1.38296 11.8037 1.49356 11.8781 1.61542 11.9289C1.73728 11.9797 1.86799 12.0058 2 12.0058C2.13201 12.0058 2.26272 11.9797 2.38458 11.9289C2.50644 11.8781 2.61704 11.8037 2.71 11.71L11 3.41V11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11V1C12.9984 0.869323 12.9712 0.740222 12.92 0.62Z"
																fill="currentColor"
															></path>
														</svg>
													</span>
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full px-4 xl:w-1/2">
								<div className="flex flex-wrap h-full -mx-4">
									<div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
										<div className="flex flex-col h-full">
											<Link
												className="relative block h-full px-8 pt-8 pb-5 transition duration-200 mb-7 rounded-3xl bg-darkBlue hover:bg-yellowDash"
												href="#"
											>
												<div className="flex flex-col justify-between h-full max-w-sm pr-16">
													<p className="mb-10 text-sm text-white md:mb-6">
														We have share our journey and some story
													</p>
													<span className="text-3xl font-semibold text-white">
														Read our blog
													</span>
												</div>
											</Link>
											<Link
												className="relative block h-full px-8 pt-8 pb-5 transition duration-200 rounded-3xl bg-darkBlue hover:bg-darkPinkRed"
												href="#"
											>
												<div className="flex flex-col justify-between h-full max-w-sm pr-16">
													<p className="mb-10 text-sm text-white md:mb-6">
														It&rsquo;s a must to that we would like to share our
														workflow to believe you
													</p>
													<span className="text-3xl font-semibold text-white">
														See our workflow
													</span>
												</div>
											</Link>
										</div>
									</div>
									<div className="w-full px-4 md:w-1/2">
										<Link
											className="relative block h-full px-8 pt-8 pb-5 transition duration-200 rounded-3xl bg-blue hover:bg-darkBlue"
											href="#"
										>
											<div className="flex flex-col items-start justify-between h-full max-w-sm pr-16">
												<p className="mb-10 text-sm text-white md:mb-6">
													2,000+ our team members around the world who create
													incredible and amazing projects
												</p>
												<span className="text-3xl font-semibold text-white">
													Meet Our Expert
												</span>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GoogleIntegration;
