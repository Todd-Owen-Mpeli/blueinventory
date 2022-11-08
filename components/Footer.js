import Link from "next/link";
import "../components/Footer.module.scss";

const Footer = () => {
	const borderRadius = "24px 34px 34px 0px";
	return (
		<section className="footerSection">
			<div className="topSection bg-[#0d172a] text-white rounded-[0px] lg:rounded-t-[125px]">
				<div className="py-20 bg-gray-900 radius-for-skewed">
					<div className="container mx-auto px-4">
						<div className="max-w-2xl mx-auto text-center">
							<a
								className="inline-block mb-14 mx-auto text-blue hover:text-lightBlue hover:ease-in-out hover:duration-200 text-5xl font-bold leading-none"
								href="#"
							>
								BlueInventory
							</a>
							<h2 className="mb-4 text-white text-4xl lg:text-5xl font-bold">
								More than just a Inventory Management Solution
							</h2>
							<p className="mb-6 max-w-md mx-auto text-gray-400 leading-loose">
								Join the business, manufacturers and distributors across the
								Tanzania succeeding with BlueInventory.
							</p>
							<a
								className="inline-block mt-6 py-2 px-6 bg-limeGreen hover:bg-limeGreen hover:ease-in-out hover:duration-200 text-white text-xl font-bold roundel-xl roundet-xl"
								href="#"
							>
								Get Started
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="bottomSection bg-white">
				<div className="pt-24 pt-m30 pb-24">
					<div className="flex flex-col lg:flex-row justify-around">
						<div className="col-6 col-mx-auto mb-8 mb-m0">
							<h4 className="text-blue text-lg font-bold mb-12">About</h4>
							<ul className="list-unstyled flex flex-col gap-2">
								<Link href="#" className="mb-4">
									<a className="inline-block text-decoration-none text-black">
										Story
									</a>
								</Link>
								<Link href="#" className="mb-4">
									<a className="inline-block text-decoration-none text-black">
										Creative Team
									</a>
								</Link>
								<Link href="#" className="mb-4">
									<a className="inline-block text-decoration-none text-black">
										Founders
									</a>
								</Link>
								<Link href="#" className="mb-4">
									<a className="inline-block text-decoration-none text-black">
										Why Us
									</a>
								</Link>
								<Link href="#" className="mb-4">
									<a className="inline-block text-decoration-none text-black">
										Our Mission
									</a>
								</Link>
								<Link href="#">
									<a className="inline-block text-decoration-none text-black">
										Idea
									</a>
								</Link>
							</ul>
						</div>
						<div className="col-6 col-mx-auto mb-8 mb-m0">
							<h4 className="text-blue text-lg font-bold mb-12">Features</h4>
							<ul className="list-unstyled flex flex-col gap-2">
								<Link href="#" className="mb-4">
									<a className="inline-block text-decoration-none text-black">
										Inventory Management
									</a>
								</Link>
								<Link href="#" className="mb-4">
									<a className="inline-block text-decoration-none text-black w-[fit-content]">
										Supplier Availability and Lead Times
									</a>
								</Link>
								<Link href="#" className="mb-4">
									<a className="inline-block text-decoration-none text-black">
										Serial Numbers
									</a>
								</Link>
								<Link href="#">
									<a className="inline-block text-decoration-none text-black">
										Batch Numbers / Expiry Dates
									</a>
								</Link>
								<Link href="#">
									<a className="inline-block text-decoration-none text-black">
										Integrations
									</a>
								</Link>
								<Link href="#">
									<a className="inline-block text-decoration-none text-black">
										Product support
									</a>
								</Link>
								<Link href="#">
									<a className="inline-block text-decoration-none text-black">
										What&rsquo;s new
									</a>
								</Link>
							</ul>
						</div>
						<div className="col-6 col-mx-auto">
							<h4 className="text-blue text-lg font-bold mb-12">Pricing</h4>
							<ul className="list-unstyled flex flex-col gap-2">
								<Link href="#" className="mb-4">
									<a className="inline-block text-decoration-none text-black">
										Plans
									</a>
								</Link>
								<Link href="#" className="mb-4">
									<a className="inline-block text-decoration-none text-black">
										Pricing
									</a>
								</Link>
								<Link href="#" className="mb-4">
									<a className="inline-block text-decoration-none text-black">
										Maintenance
									</a>
								</Link>
								<Link href="#" className="mb-4">
									<a className="inline-block text-decoration-none text-black">
										Support
									</a>
								</Link>
							</ul>
						</div>
						<div className="col-6 col-mx-auto">
							<h4 className="text-blue text-lg font-bold mb-12">Support</h4>
							<ul className="list-unstyled mb-6 flex flex-col gap-2">
								<Link href="#" className="mb-4">
									<a className="inline-block flex justify-start items-center gap-5 text-decoration-none text-black">
										<span className="me-3">Careers</span>
										<div
											className="inline-block py-2 px-4 text-center text-white bg-flatLimeGreen hover:bg-limeGreen hover:ease-in-out hover:duration-300"
											style={{borderRadius}}
										>
											We&rsquo;re hiring!
										</div>
									</a>
								</Link>
								<Link href="#" className="mb-4">
									<a className="inline-block text-decoration-none text-black">
										FAQ&apos;s
									</a>
								</Link>
								<Link href="#">
									<a className="inline-block text-decoration-none text-black">
										blueTech@enquiry.com
									</a>
								</Link>
							</ul>
							<div className="flex justify-center items-center gap-2">
								<span className="text-base text-grey">
									I already have an account
								</span>
								<a
									className="btn p-0 flex justify-center items-center gap-3 text-success text-blue hover:text-limeGreen hover:ease-in-out hover:duration-300"
									href="#"
								>
									<span>Sign in</span>
									<svg
										width="14"
										height="11"
										viewbox="0 0 14 11"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7.89471 0L6.81484 0.972812L11.0771 4.8125L0 4.8125L0 6.1875L11.0771 6.1875L6.81484 10.0272L7.89471 11L14 5.5L7.89471 0Z"
											fill="currentColor"
										></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="p-8 lg:py-12 lg:px-20 bg-lightGrey">
					<div className="mw-2xl">
						<div className="flex justify-start items-center gap-3 mb-6">
							<a className="inline-block font-semibold text-lg" href="#">
								BlueInventory Group
							</a>
							<span className="flex justify-center lg:justify-start items-center">
								&copy; 2022 BlueInventory Group. All rights reserved.
							</span>
						</div>
						<p className="text-sm lg:text-tiny text-secondary w-full lg:w-[50%]">
							Cookies are important to the proper functioning of a site. To
							improve your experience, we use cookies to remember log-in details
							and provide secure log-in, collect statistics to optimize site
							functionality, and deliver content tailored to your interests...
						</p>
						<p className="mt-3 text-sm lg:text-tiny text-secondary w-full lg:w-[50%]">
							By accessing and using this page you agree to the Terms and
							Conditions
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
