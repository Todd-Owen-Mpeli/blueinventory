import Link from "next/link";
import Image from "next/image";
import {FunctionComponent} from "react";

interface IProps {
	title: string;
	subtitle: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: string;
}

const HeroTwo = (props) => {
	return (
		<section>
			<div
				style={{
					display: "flex",
					height: "90vh",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					background: `linear-gradient(
								0deg,
								rgba(13, 23, 42, 0.65),
								rgba(13, 23, 42, 0.65)
							),
							url("${props.backgroundImage}")`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className="pt-24 sm:pt-34 pb-8 bg-cover">
					<div className="container px-4 mx-auto">
						<div className="max-w-2xl xl:max-w-4xl mx-auto text-center">
							<h1 className="font-heading text-[2rem] sm:text-5xl md:text-8xl font-bold font-heading leading-normal sm:leading-[4.5rem] text-center text-white mb-6">
								{props.title}
							</h1>
							<p className="max-w-md md:max-w-lg mx-auto text-lg leading-6 text-white mb-10">
								{props.subtitle}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
				<div className="navbar-backdrop fixed inset-0 backdrop-blur-xl backdrop-filter bg-blueTwo bg-opacity-30"></div>
				<nav className="relative pt-7 pb-8 bg-white h-full overflow-y-auto">
					<div className="flex flex-col px-6 h-full">
						<Link href="#" className="inline-block ml-4 mb-7">
							<Image
								width={550}
								height={550}
								alt={`BlueInventory Logo`}
								src="/img/Logos/BlueInventory Logo One White.png"
							/>
						</Link>
						<ul className="w-full mb-auto pb-16">
							<Link
								href="#"
								className="font-heading block text-base font-medium py-4 px-6 hover:bg-blue hover:text-white rounded-[15px]"
							>
								Home
							</Link>
							<Link
								href="#"
								className="font-heading block text-base py-4 px-6 hover:bg-blue hover:text-white rounded-[15px]"
							>
								Features
							</Link>
							<Link
								href="#"
								className="font-heading block text-base py-4 px-6 hover:bg-blue hover:text-white rounded-[15px]"
							>
								About
							</Link>
							<Link
								href="#"
								className="font-heading block text-base py-4 px-6 hover:bg-blue hover:text-white rounded-[15px]"
							>
								Pricing
							</Link>
							<Link
								href="#"
								className="font-heading block text-base py-4 px-6 hover:bg-blue hover:text-white rounded-[15px]"
							>
								Resources
							</Link>
							<Link
								href="#"
								className="font-heading block text-base py-4 px-6 hover:bg-blue hover:text-white rounded-[15px]"
							>
								Contact Us
							</Link>
						</ul>
						<div className="w-full">
							<Link
								href="#"
								className="block w-full py-4 px-4 mb-4 text-center font-heading font-medium text-base hover:text-blue border border-lightGrey hover:border-blue rounded-[15px] hover:ease-in-out hover:duration-200"
							>
								Log in
							</Link>
							<Link
								href="#"
								className="block w-full py-4 px-4 mb-8 text-center font-heading font-medium text-base text-white bg-blue hover:bg-limeGreen border border-blue hover:border-limeGreen rounded-[15px] hover:ease-in-out hover:duration-200"
							>
								Sign up
							</Link>
							<p className="pl-2 text-sm text-black">2022 © BlueInventory</p>
						</div>
					</div>
				</nav>
			</div>
		</section>
	);
};

export default HeroTwo;
