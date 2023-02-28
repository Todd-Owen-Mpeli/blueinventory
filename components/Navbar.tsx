import Link from "next/link";
import Image from "next/image";

interface IProps {
	title: string;
	subtitle: string;
}

const Navbar = () => {
	return (
		<nav className="py-1 bg-white navigation">
			<div className="container px-4 mx-auto">
				<div className="relative flex items-center justify-between">
					<div className="w-auto">
						<Link href="/" className="inline-block">
							<Image
								width={550}
								height={550}
								alt="BlueInventory Logo"
								className="w-[185px] h-[70px]"
								src="/img/Logos/BlueInventory Logo One White.png"
							/>
						</Link>
					</div>
					<div className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:block">
						<ul className="flex items-center justify-between gap-14">
							<li>
								<Link
									className="mr-12 text-base text-black font-heading hover:text-grey"
									href="/Features"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									className="mr-12 text-base text-black font-heading hover:text-grey"
									href="#"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									className="mr-12 text-base text-black font-heading hover:text-grey"
									href="/Pricing"
								>
									Pricing
								</Link>
							</li>
						</ul>
					</div>
					<div className="flex-row hidden w-auto gap-6 lg:flex">
						<Link
							href="#"
							className="inline-block py-2 px-4 rounded-[15px] font-heading text-sm text-white border border-darkBlue hover:border-blue hover:ease-in-out hover:duration-200 bg-darkBlue hover:bg-blue"
						>
							Login
						</Link>
						<Link
							href="#"
							className="inline-block py-2 px-4 rounded-[15px] font-heading text-sm text-white border border-blue hover:border-limeGreen hover:ease-in-out hover:duration-200 bg-blue hover:bg-limeGreen"
						>
							Sign Up
						</Link>
					</div>
					{/* Mobile Navigation Menu */}
					<div className="w-auto lg:hidden">
						<Link
							href="#"
							className="navbar-burger inline-flex w-14 h-14 justify-center items-center bg-blue hover:bg-blueTwo rounded-[15px]"
						>
							<svg
								width="20"
								height="10"
								viewBox="0 0 20 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19 9H1M19 1H1"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
