import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="navigation py-1 bg-white">
			<div className="container mx-auto px-4">
				<div className="relative flex items-center justify-between">
					<div className="w-auto">
						<Link href="/">
							<a className="inline-block">
								<Image
									src="/img/Logos/BlueInventory Logo One White.png"
									alt=""
									width="185px"
									height="70px"
								/>
							</a>
						</Link>
					</div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
						<ul className="flex justify-between items-center gap-14">
							<li>
								<Link className="font-heading mr-12 text-base" href="/features">
									<a className="text-black hover:text-grey">Features</a>
								</Link>
							</li>
							<li>
								<Link className="font-heading mr-12 text-base" href="#">
									<a className="text-black hover:text-grey">About</a>
								</Link>
							</li>
							<li>
								<Link className="font-heading mr-12 text-base" href="#">
									<a className="text-black hover:text-grey">Pricing</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="hidden lg:flex flex-row gap-6 w-auto">
						<Link href="#">
							<a className="inline-block py-2 px-4 rounded-[15px] font-heading text-sm text-white border border-darkBlue hover:border-blue hover:ease-in-out hover:duration-200 bg-darkBlue hover:bg-blue">
								Login
							</a>
						</Link>
						<Link href="#">
							<a className="inline-block py-2 px-4 rounded-[15px] font-heading text-sm text-white border border-blue hover:border-limeGreen hover:ease-in-out hover:duration-200 bg-blue hover:bg-limeGreen">
								Sign Up
							</a>
						</Link>
					</div>
					{/* Mobile Navigation Menu */}
					<div className="w-auto lg:hidden">
						<Link href="#">
							<a className="navbar-burger inline-flex w-14 h-14 justify-center items-center bg-blue hover:bg-blueTwo rounded-[15px]">
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
							</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
