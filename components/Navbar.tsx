import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import styled from "styled-components";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import NavbarMenuLinks from "./Elements/NavbarMenuLinks";

interface HeroProps {
	navbarMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
}

const Navbar: FC<HeroProps> = ({navbarMenuLinks}) => {
	return (
		<nav className="fixed z-[999] w-full py-4 bg-white">
			<div className="container px-0 mx-auto">
				<div className="flex items-center justify-between px-6 py-3.5 bg-white">
					<div className="flex flex-wrap items-center">
						<Link href="/" className="text-2xl text-darkBlue font-[900]">
							BlueInventory
						</Link>
					</div>
					<div className="w-auto">
						<div className="flex flex-wrap items-center">
							<div className="hidden w-auto lg:block">
								<motion.ul
									variants={stagger}
									className="flex items-center justify-center gap-6"
								>
									{navbarMenuLinks?.map((keys) => (
										<NavbarMenuLinks
											key={keys?.node?.id}
											url={keys?.node?.url}
											label={keys?.node?.label}
											tailwindStyling="text-base uppercase font-bold tracking-[.15rem] text-darkBlue hover:text-goldPrime transition-all ease-in-out duration-500"
										/>
									))}
								</motion.ul>
							</div>
						</div>
					</div>
					<div className="w-auto">
						<div className="flex flex-wrap items-center">
							<div className="hidden w-auto lg:block">
								<motion.div variants={stagger} className="flex flex-wrap -m-2">
									<motion.div
										variants={fadeInUp}
										className="w-full p-2 md:w-auto"
									>
										<Link
											className="px-8 py-3 text-sm tracking-widest text-center text-white uppercase rounded-sm w-fit bg-goldPrime hover:bg-goldPrimeDark focus:ring-4 focus:ring-blue"
											href={`/login`}
										>
											Log In
										</Link>
									</motion.div>
									<motion.div
										variants={fadeInUp}
										className="w-full p-2 md:w-auto"
									>
										<Link
											className="px-8 py-3 text-sm tracking-widest text-center text-white uppercase rounded-sm w-fit bg-blue hover:bg-darkBlue focus:ring-4 focus:ring-blue"
											href={`/sign-up`}
										>
											Get Started
										</Link>
									</motion.div>
								</motion.div>
							</div>
							<div className="w-auto lg:hidden">
								<Link className="inline-block" href="#">
									<svg
										className="text-blue navbar-burger"
										width="45"
										height="45"
										viewBox="0 0 56 56"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											width="56"
											height="56"
											rx="28"
											fill="currentColor"
										></rect>
										<path
											d="M37 32H19M37 24H19"
											stroke="white"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										></path>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
				{/* Mobile Navbar */}
				<div className="fixed top-0 bottom-0 left-0 z-50 hidden w-4/6 navbar-menu sm:max-w-xs">
					<div className="fixed inset-0 bg-grey navbar-backdrop opacity-80"></div>
					<div className="relative z-10 h-full pt-8 overflow-y-auto bg-white px-9">
						<div className="flex flex-wrap justify-between h-full">
							<div className="w-full">
								<div className="flex items-center justify-between -m-2">
									<div className="flex flex-wrap items-center">
										<Link
											href="/"
											className="text-2xl text-darkBlue font-[900]"
										>
											BlueInventory
										</Link>
									</div>
									<div className="w-auto p-2">
										<Link className="inline-block navbar-burger" href="#">
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M6 18L18 6M6 6L18 18"
													stroke="#111827"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												></path>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="flex flex-col justify-center w-full py-8">
								<motion.ul
									variants={stagger}
									className="flex flex-col items-baseline justify-center gap-6"
								>
									{navbarMenuLinks?.map((keys) => (
										<NavbarMenuLinks
											key={keys?.node?.id}
											url={keys?.node?.url}
											label={keys?.node?.label}
											tailwindStyling="text-base uppercase font-bold tracking-[.15rem] text-darkBlue hover:text-goldPrime transition-all ease-in-out duration-500"
										/>
									))}
								</motion.ul>
							</div>
							<div className="flex flex-col justify-end w-full pb-8">
								<motion.div
									variants={stagger}
									className="flex flex-wrap gap-3 -m-2"
								>
									<motion.div variants={fadeInUp} className="w-full p-2">
										<Link
											className="px-8 py-3 text-sm tracking-widest text-center text-white uppercase rounded-sm w-fit bg-goldPrime hover:bg-goldPrimeDark focus:ring-4 focus:ring-blue"
											href={`/login`}
										>
											Log In
										</Link>
									</motion.div>
									<motion.div variants={fadeInUp} className="w-full p-2">
										<Link
											className="px-8 py-3 text-sm tracking-widest text-center text-white uppercase rounded-sm w-fit bg-blue hover:bg-darkBlue focus:ring-4 focus:ring-blue"
											href={`/sign-up`}
										>
											Get Started
										</Link>
									</motion.div>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
