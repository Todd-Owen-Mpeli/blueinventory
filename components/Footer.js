import Link from "next/link";
import styles from "../components/Footer.module.scss";

const Footer = () => {
	const borderRadius = "24px 34px 34px 0px";
	return (
		<section className={styles.footerSection}>
			<div className="content bg-white">
				<div className="pt-24">
					<div className="flex flex-col px-6 lg:px-4 lg:flex-row justify-around">
						<div className="col-6 col-mx-auto lg:mb-8 lg:mt-0 my-4">
							<h4 className="text-blue text-lg font-bold mb-4 lg:mb-12">
								About
							</h4>
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
						<div className="col-6 col-mx-auto lg:mb-8 lg:mt-0 my-4">
							<h4 className="text-blue text-lg font-bold mb-4 lg:mb-12">
								Features
							</h4>
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
						<div className="col-6 col-mx-auto lg:mb-8 lg:mt-0 my-4">
							<h4 className="text-blue text-lg font-bold mb-4 lg:mb-12">
								Pricing
							</h4>
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
						<div className="col-6 col-mx-auto lg:mb-8 lg:mt-0 my-4">
							<h4 className="text-blue text-lg font-bold mb-4 lg:mb-12">
								Support
							</h4>
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
				<div className="socialMediaIcons flex justify-center gap-16 pt-8 pb-12">
					<a className="flex justify-center items-center rounded-full" href="#">
						<svg
							width="30"
							height="30"
							viewbox="0 0 30 30"
							className="icon hover:text-blue hover:ease-in-out hover:duration-200"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M4.0898 11.8182V6.51068H5.90537L6.17776 4.44164H4.0898V3.12086C4.0898 2.52201 4.25864 2.1139 5.13515 2.1139L6.25125 2.11345V0.26283C6.05824 0.238228 5.39569 0.181824 4.62456 0.181824C3.01431 0.181824 1.9119 1.14588 1.9119 2.91594V4.44164H0.0908203V6.51068H1.9119V11.8182H4.0898Z"
								fill="currentColor"
							></path>
						</svg>
					</a>
					<a className="flex justify-center items-center rounded-full" href="#">
						<svg
							width="30"
							height="30"
							viewbox="0 0 30 30"
							className="icon hover:text-blue hover:ease-in-out hover:duration-200"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12.5455 2.09728C12.0904 2.29892 11.6022 2.43566 11.0892 2.49671C11.613 2.18304 12.014 1.6855 12.204 1.09447C11.7127 1.38496 11.1703 1.59589 10.5924 1.71023C10.1296 1.21655 9.47138 0.909058 8.74128 0.909058C7.34059 0.909058 6.20489 2.04475 6.20489 3.44467C6.20489 3.64322 6.2273 3.83714 6.27057 4.02257C4.16298 3.91671 2.29411 2.90696 1.0433 1.37259C0.824652 1.74653 0.700269 2.18225 0.700269 2.64736C0.700269 3.52734 1.14837 4.30379 1.82825 4.75805C1.41259 4.74415 1.02166 4.62981 0.67942 4.43975V4.47142C0.67942 5.69983 1.55399 6.72504 2.71362 6.95837C2.50116 7.01554 2.27712 7.04722 2.04534 7.04722C1.88156 7.04722 1.72318 7.031 1.56788 7.00009C1.89081 8.00831 2.8272 8.74148 3.93663 8.76158C3.06902 9.44146 1.97504 9.84552 0.786814 9.84552C0.582087 9.84552 0.38043 9.83316 0.181885 9.81076C1.30445 10.5316 2.63716 10.9519 4.06952 10.9519C8.73514 10.9519 11.2854 7.0874 11.2854 3.73595L11.2769 3.4076C11.7752 3.05219 12.2063 2.60564 12.5455 2.09728Z"
								fill="currentColor"
							></path>
						</svg>
					</a>
					<a className="flex justify-center items-center rounded-full" href="#">
						<svg
							width="30"
							height="30"
							viewbox="0 0 30 30"
							className="icon hover:text-blue hover:ease-in-out hover:duration-200"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M4.06713 0.454529H9.9328C11.9249 0.454529 13.5456 2.07519 13.5455 4.06715V9.93282C13.5455 11.9248 11.9249 13.5454 9.9328 13.5454H4.06713C2.07518 13.5454 0.45459 11.9249 0.45459 9.93282V4.06715C0.45459 2.07519 2.07518 0.454529 4.06713 0.454529ZM9.9329 12.3839C11.2845 12.3839 12.3841 11.2844 12.3841 9.93282H12.384V4.06714C12.384 2.71563 11.2844 1.61601 9.93282 1.61601H4.06715C2.71564 1.61601 1.61609 2.71563 1.61609 4.06714V9.93282C1.61609 11.2844 2.71564 12.384 4.06715 12.3839H9.9329ZM3.57148 7.00005C3.57148 5.10947 5.10951 3.5714 7.00005 3.5714C8.8906 3.5714 10.4286 5.10947 10.4286 7.00005C10.4286 8.89056 8.8906 10.4285 7.00005 10.4285C5.10951 10.4285 3.57148 8.89056 3.57148 7.00005ZM4.75203 6.99998C4.75203 8.23951 5.76054 9.24788 7.00004 9.24788C8.23955 9.24788 9.24806 8.23951 9.24806 6.99998C9.24806 5.76036 8.23963 4.75191 7.00004 4.75191C5.76046 4.75191 4.75203 5.76036 4.75203 6.99998Z"
								fill="currentColor"
							></path>
						</svg>
					</a>
					<a className="flex justify-center items-center rounded-full" href="#">
						<svg
							width="30"
							height="30"
							viewbox="0 0 30 30"
							className="icon hover:text-blue hover:ease-in-out hover:duration-200"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.8 0H1.2C0.54 0 0 0.54 0 1.2V10.8C0 11.46 0.54 12 1.2 12H10.8C11.46 12 12 11.46 12 10.8V1.2C12 0.54 11.46 0 10.8 0ZM3.6 10.2H1.8V4.8H3.6V10.2ZM2.7 3.78C2.1 3.78 1.62 3.3 1.62 2.7C1.62 2.1 2.1 1.62 2.7 1.62C3.3 1.62 3.78 2.1 3.78 2.7C3.78 3.3 3.3 3.78 2.7 3.78ZM10.2 10.2H8.4V7.02C8.4 6.54002 7.98 6.12 7.5 6.12C7.02 6.12 6.6 6.54002 6.6 7.02V10.2H4.8V4.8H6.6V5.52C6.9 5.04 7.56 4.68 8.1 4.68C9.24 4.68 10.2 5.64 10.2 6.78V10.2Z"
								fill="currentColor"
							></path>
						</svg>
					</a>
				</div>
				<div className="p-8 lg:py-12 lg:px-20 bg-lightGrey">
					<div className="mw-2xl">
						<div className="flex flex-col lg:flex-row justify-start items-center gap-3 mb-6">
							<a
								className="inline-block font-semibold text-lg hover:text-blue hover:ease-in-out hover:duration-200"
								href="#"
							>
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
