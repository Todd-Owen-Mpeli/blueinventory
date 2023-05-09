// Import
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import PaymentProvidersCard from "./Cards/PaymentProvidersCard";

interface IProps {
	title: string;
	italic: string;
	paragraph: string;
	bulletList: [
		{
			id: string;
			bulletPoint: string;
		}
	];
	PaymentProviders: [
		{
			id: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
}

const Pricing: FC<IProps> = ({
	title,
	italic,
	paragraph,
	bulletList,
	PaymentProviders,
}) => {
	return (
		<div>
			<section className="relative pb-24 overflow-hidden bg-lightGrey">
				<div className="pt-32 pb-52">
					<div className="container px-4 mx-auto">
						<div className="max-w-2xl mx-auto mb-24 text-center lg:max-w-5xl">
							<span className="inline-block px-3 py-1 mb-4 text-sm font-[400] tracking-widest text-white uppercase rounded-full bg-blue">
								Pricing
							</span>
							<motion.h1
								variants={stagger}
								className="mb-6 text-4xl font-bold text-darkBlue font-heading sm:text-6xl lg:text-7xl"
							>
								<motion.span variants={fadeInUp}>{title}</motion.span>
								<motion.span
									variants={fadeInUp}
									className="ml-4 font-serif italic"
								>
									{italic}
								</motion.span>
							</motion.h1>
							<Paragraph
								content={paragraph}
								tailwindStyling="text-base mt-10 text-black"
							/>
						</div>
					</div>
				</div>
				<div className="container px-4 mx-auto">
					<div className="max-w-md mx-auto lg:max-w-4xl">
						<div className="px-8 mb-16 bg-white shadow-xl -mt-52 lg:mb-8 py-9 sm:px-14 rounded-3xl">
							<div className="flex flex-wrap items-center -mx-4">
								<div className="w-full px-4 pb-12 mb-8 border-b border-grey lg:w-2/5 lg:mb-0 lg:py-4 lg:border-0 lg:border-r">
									<div className="text-center">
										<span className="block mb-4 text-2xl font-semibold">
											Standard
										</span>
										<span className="block mb-5 text-5xl font-bold text-darkBlue">
											£29.99 / month
										</span>
										<Link
											className="relative inline-block px-10 py-4 overflow-hidden font-semibold text-center text-white transition duration-200 rounded-full bg-blue group"
											href="/checkout"
										>
											<div className="absolute top-0 w-full h-full transition duration-200 transform bg-darkBlue right-full group-hover:translate-x-full group-hover:scale-102" />
											<span className="relative">Get Started</span>
										</Link>
									</div>
								</div>
								<div className="w-full px-4 py-2 lg:w-3/5">
									<div className="max-w-sm ml-auto">
										<Paragraph
											content={`Providing simplicity, consistency & in-depth product/item descriptions.`}
											tailwindStyling="mb-8 text-black"
										/>
										<ul>
											<li className="flex items-center mb-6">
												<svg
													version="1.1"
													id="Layer_1"
													xmlns="http://www.w3.org/2000/svg"
													x="0px"
													y="0px"
													width="96px"
													height="96px"
													viewBox="0 0 96 96"
													className="w-5 h-5"
													enable-background="new 0 0 96 96"
												>
													<g>
														<path
															fill-rule="evenodd"
															clip-rule="evenodd"
															fill="#6BBE66"
															d="M48,0c26.51,0,48,21.49,48,48S74.51,96,48,96S0,74.51,0,48 S21.49,0,48,0L48,0z M26.764,49.277c0.644-3.734,4.906-5.813,8.269-3.79c0.305,0.182,0.596,0.398,0.867,0.646l0.026,0.025 c1.509,1.446,3.2,2.951,4.876,4.443l1.438,1.291l17.063-17.898c1.019-1.067,1.764-1.757,3.293-2.101 c5.235-1.155,8.916,5.244,5.206,9.155L46.536,63.366c-2.003,2.137-5.583,2.332-7.736,0.291c-1.234-1.146-2.576-2.312-3.933-3.489 c-2.35-2.042-4.747-4.125-6.701-6.187C26.993,52.809,26.487,50.89,26.764,49.277L26.764,49.277z"
														/>
													</g>
												</svg>
												<span className="ml-2 text-sm text-black">
													Design Style well organized
												</span>
											</li>
											<li className="flex items-center mb-6">
												<svg
													version="1.1"
													id="Layer_1"
													xmlns="http://www.w3.org/2000/svg"
													x="0px"
													y="0px"
													width="96px"
													height="96px"
													viewBox="0 0 96 96"
													className="w-5 h-5"
													enable-background="new 0 0 96 96"
												>
													<g>
														<path
															fill-rule="evenodd"
															clip-rule="evenodd"
															fill="#6BBE66"
															d="M48,0c26.51,0,48,21.49,48,48S74.51,96,48,96S0,74.51,0,48 S21.49,0,48,0L48,0z M26.764,49.277c0.644-3.734,4.906-5.813,8.269-3.79c0.305,0.182,0.596,0.398,0.867,0.646l0.026,0.025 c1.509,1.446,3.2,2.951,4.876,4.443l1.438,1.291l17.063-17.898c1.019-1.067,1.764-1.757,3.293-2.101 c5.235-1.155,8.916,5.244,5.206,9.155L46.536,63.366c-2.003,2.137-5.583,2.332-7.736,0.291c-1.234-1.146-2.576-2.312-3.933-3.489 c-2.35-2.042-4.747-4.125-6.701-6.187C26.993,52.809,26.487,50.89,26.764,49.277L26.764,49.277z"
														/>
													</g>
												</svg>
												<span className="ml-2 text-sm text-black">
													Component Library with many variants
												</span>
											</li>
											<li className="flex items-center">
												<svg
													version="1.1"
													id="Layer_1"
													xmlns="http://www.w3.org/2000/svg"
													x="0px"
													y="0px"
													width="96px"
													height="96px"
													viewBox="0 0 96 96"
													className="w-5 h-5"
													enable-background="new 0 0 96 96"
												>
													<g>
														<path
															fill-rule="evenodd"
															clip-rule="evenodd"
															fill="#6BBE66"
															d="M48,0c26.51,0,48,21.49,48,48S74.51,96,48,96S0,74.51,0,48 S21.49,0,48,0L48,0z M26.764,49.277c0.644-3.734,4.906-5.813,8.269-3.79c0.305,0.182,0.596,0.398,0.867,0.646l0.026,0.025 c1.509,1.446,3.2,2.951,4.876,4.443l1.438,1.291l17.063-17.898c1.019-1.067,1.764-1.757,3.293-2.101 c5.235-1.155,8.916,5.244,5.206,9.155L46.536,63.366c-2.003,2.137-5.583,2.332-7.736,0.291c-1.234-1.146-2.576-2.312-3.933-3.489 c-2.35-2.042-4.747-4.125-6.701-6.187C26.993,52.809,26.487,50.89,26.764,49.277L26.764,49.277z"
														/>
													</g>
												</svg>
												<span className="ml-2 text-sm text-black">
													All limited links
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<motion.div
							variants={stagger}
							className="items-center justify-center mt-12 lg:flex"
						>
							<motion.div
								variants={fadeInUp}
								className="flex items-center max-w-xs mb-12 lg:mb-0 sm:mr-24"
							>
								<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-goldPrime">
									<svg
										className="p-2 text-white"
										width="48"
										height="48"
										viewBox="0 0 48 48"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M19.5 34L18 40L16 42H32L30 40L28.5 34M6 26H42M10 34H38C40.2091 34 42 32.2091 42 30V10C42 7.79086 40.2091 6 38 6H10C7.79086 6 6 7.79086 6 10V30C6 32.2091 7.79086 34 10 34Z"
											stroke="#ffffff"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										></path>
									</svg>
								</div>
								<Paragraph
									content={`Billed monthly subscription`}
									tailwindStyling="font-semibold text-darkBlue"
								/>
							</motion.div>
							<motion.div
								variants={fadeInUp}
								className="flex items-center max-w-xs"
							>
								<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-goldPrime">
									<svg
										className="p-2 text-white"
										width="48"
										height="48"
										viewBox="0 0 48 48"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6 30C6 34.4183 9.58172 38 14 38H32C37.5228 38 42 33.5228 42 28C42 22.4772 37.5228 18 32 18C31.9333 18 31.8668 18.0007 31.8004 18.002C30.8746 13.4365 26.8386 10 22 10C16.4772 10 12 14.4772 12 20C12 20.7537 12.0834 21.4879 12.2414 22.1939C8.66913 22.9952 6 26.1859 6 30Z"
											stroke="#ffffff"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										></path>
									</svg>
								</div>
								<Paragraph
									content={`Cancel anytime if there was any problem`}
									tailwindStyling="font-semibold text-darkBlue"
								/>
							</motion.div>
						</motion.div>
						{/* Payment Providers */}
						<motion.div
							variants={stagger}
							className="flex flex-wrap justify-center gap-6 mt-20 lg:flex-row"
						>
							<motion.div variants={fadeInUp} className="w-auto">
								<Image
									src="/svg/Payment Providers/stripe.svg"
									alt="stripe payments"
									width={500}
									height={500}
									className="w-full h-[50px] sm:h-[85px] object-contain object-center"
								/>
							</motion.div>
							<motion.div variants={fadeInUp} className="w-auto">
								<Image
									src="/svg/Payment Providers/google-pay.svg"
									alt="Google Pay payments"
									width={500}
									height={500}
									className="w-full h-[50px] sm:h-[85px] object-contain object-center"
								/>
							</motion.div>
							<motion.div variants={fadeInUp} className="w-auto">
								<Image
									src="/svg/Payment Providers/mastercard.svg"
									alt="Mastercard payments"
									width={500}
									height={500}
									className="w-full h-[50px] sm:h-[85px] object-contain object-center"
								/>
							</motion.div>
							<motion.div variants={fadeInUp} className="w-auto">
								<Image
									src="/svg/Payment Providers/paypal.svg"
									alt="Paypal payments"
									width={500}
									height={500}
									className="w-full h-[50px] sm:h-[85px] object-contain object-center"
								/>
							</motion.div>
							<motion.div variants={fadeInUp} className="w-auto">
								<Image
									src="/svg/Payment Providers/visa.svg"
									alt="Visa payments"
									width={500}
									height={500}
									className="w-full h-[50px] sm:h-[85px] object-contain object-center"
								/>
							</motion.div>
							<motion.div variants={fadeInUp} className="w-auto">
								<Image
									src="/svg/Payment Providers/apple-pay.svg"
									alt="Apple Pay payments"
									width={500}
									height={500}
									className="w-full h-[50px] sm:h-[85px] object-contain object-center"
								/>
							</motion.div>
							{PaymentProviders.map((keys) => (
								<PaymentProvidersCard
									image={keys?.image}
									key={keys?.id || keys?.image?.sourceUrl}
								/>
							))}
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Pricing;
