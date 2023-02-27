import Link from "next/link";
import {FunctionComponent} from "react";

const PricingOptions = () => {
	return (
		<section>
			<div>
				<div className="py-20 bg-darkBlue radius-for-skewed">
					<div className="container mx-auto px-4">
						<div className="max-w-2xl mx-auto text-center mb-16">
							<span className="text-blue font-bold">
								Dolor sit amet consectutar
							</span>
							<h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading text-white">
								Choose your best plan
							</h2>
							<p className="mb-6 text-white">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
						<div className="flex flex-wrap -mx-4">
							<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
								<div className="p-8 bg-pureBlack shadow rounded-[25px]">
									<h4 className="mb-2 text-2xl text-white  font-bold font-heading">
										Standard
									</h4>
									<span className="text-6xl text-white  font-bold">£29</span>
									<span className="text-white  text-xs">/month</span>
									<p className="mt-3 mb-6 text-white leading-loose">
										Nullam diam arcu, sodales quis convallis sit amet, sagittis
										varius ligula.
									</p>
									<ul className="mb-6 text-white ">
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-blue"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>Vestibulum viverra</span>
										</li>
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-blue"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>Morbi mollis metus pretium</span>
										</li>
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-blue"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>limited Product Variations</span>
										</li>
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-blue"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>2 Years Order History</span>
										</li>
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-blue"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>2 Years Reporting</span>
										</li>
									</ul>
									<link
										href="#"
										className="inline-block text-center py-2 px-4 w-full text-white rounded-l-xl rounded-t-xl bg-limeGreen hover:bg-darkBlue font-bold leading-loose transition duration-200"
									>
										Get Started
									</link>
								</div>
							</div>
							<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
								<div className="p-8 bg-blueTwo shadow rounded-[25px]">
									<h4 className="mb-2 text-2xl font-bold text-white">
										Professional
									</h4>
									<span className="text-6xl font-bold text-white">£129</span>
									<span className="text-white text-xs">/month</span>
									<p className="mt-3 mb-6 leading-loose text-white">
										Nullam diam arcu, sodales quis convallis sit amet, sagittis
										varius ligula.
									</p>
									<ul className="mb-6 text-white">
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-limeGreen"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>Vestibulum viverra</span>
										</li>
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-limeGreen"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>Morbi mollis metus pretium</span>
										</li>
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-limeGreen"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>15 limited Product Variations</span>
										</li>
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-limeGreen"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>5 Years Order History</span>
										</li>
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-limeGreen"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>5 Years Reporting</span>
										</li>
									</ul>
									<link
										href="#"
										className="inline-block text-center py-2 px-4 w-full text-white rounded-l-xl rounded-t-xl bg-limeGreen hover:bg-darkBlue font-bold leading-loose transition duration-200"
									>
										Get Started
									</link>
								</div>
							</div>
							<div className="w-full lg:w-1/3 px-4">
								<div className="p-8 bg-pureBlack shadow rounded-[25px]">
									<h4 className="mb-2 text-2xl text-white  font-bold font-heading">
										Enterprise
									</h4>
									<span className="text-6xl text-white  font-bold">£749</span>
									<span className="text-white text-xs">/month</span>
									<p className="mt-3 mb-6 text-white leading-loose">
										Nullam diam arcu, sodales quis convallis sit amet, sagittis
										varius ligula.
									</p>
									<ul className="mb-6 text-white">
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-blue"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>Custom Email Notification Alerts</span>
										</li>
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-blue"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>Mobile app Management</span>
										</li>
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-blue"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>Unlimited Product Variations</span>
										</li>
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-blue"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>Unlimited Order History</span>
										</li>
										<li className="mb-2 flex">
											<svg
												className="mr-2 w-5 h-5 text-blue"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>Unlimited Years Reporting</span>
										</li>
									</ul>
									<link
										href="#"
										className="inline-block text-center py-2 px-4 w-full rounded-l-xl rounded-t-xl bg-blueTwo hover:bg-darkBlue text-white font-bold leading-loose transition duration-200"
									>
										Get Started
									</link>
								</div>
							</div>
						</div>
						{/* <div className="mt-10 flex flex-wrap justify-center gap-12">
							<div className="w-auto">
							<Link href="#">
								<img src="/img/Logos/Payment Brands/stripe.png" alt="" />
							</link>
							</div>
							<div className="w-auto">
							<Link href="#">
								<img src="/img/Logos/Payment Brands/google-pay.png" alt="" />
							</link>
							</div>
							<div className="w-auto">
							<Link href="#">
								<img src="/img/Logos/Payment Brands/paypal.png" alt="" />
							</link>
							</div>
							<div className="w-auto">
								<img src="/img/Logos/Payment Brands/visa.png" alt="" />
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingOptions;
