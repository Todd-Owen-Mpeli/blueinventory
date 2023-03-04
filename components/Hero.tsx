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

const Hero: FunctionComponent<IProps> = ({
	title,
	subtitle,
	buttonLink,
	buttonLinkTwo,
	backgroundImage,
}) => {
	/* Check if Button One Link / content is null
	 And Displays content if it is not */
	function isButtonOneContent(isButtonOneContent: string) {
		let contentStyling: string;
		if (isButtonOneContent === null || isButtonOneContent === undefined) {
			contentStyling =
				"hidden rounded-lg py-4 px-12 text-center font-heading font-medium text-base text-white hover:ease-in-out hover:duration-200 bg-blue hover:bg-limeGreen";
		} else {
			contentStyling =
				"block rounded-lg py-4 px-12 text-center font-heading font-medium text-base text-white hover:ease-in-out hover:duration-200 bg-blue hover:bg-limeGreen";
		}

		return contentStyling;
	}

	/* Check if Button Two Link / content is null
	 And Displays content if it is not */
	function isButtonTwoContent(isButtonTwoContent: string) {
		let contentStyling: string;
		if (isButtonTwoContent === null || isButtonTwoContent === undefined) {
			contentStyling =
				"hidden py-4 px-12 text-center font-heading font-medium text-base text-white rounded-lg bg-darkBlue hover:text-white hover:bg-blue transition-all ease-in-out duration-[0.5s]";
		} else {
			contentStyling =
				"block py-4 px-12 text-center font-heading font-medium text-base text-white rounded-lg bg-darkBlue hover:text-white hover:bg-blue transition-all ease-in-out duration-[0.5s]";
		}

		return contentStyling;
	}

	return (
		<section
			className="bg-cover bg-center bg-no-repeat flex min-h-[80vh] flex-col justify-center item-center"
			style={{
				background: `linear-gradient(
								0deg,
								rgba(13, 23, 42, 0.45),
								rgba(13, 23, 42, 0.45)
							),
							url("${backgroundImage}");`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div className="pt-24 pb-8 bg-cover sm:pt-34">
				<div className="container px-4 mx-auto">
					<div className="max-w-2xl mx-auto text-center xl:max-w-4xl">
						<h1 className="max-w-sm mx-auto md:max-w-xl font-heading text-[2rem] sm:text-5xl md:text-8xl font-bold font-heading leading-normal sm:leading-[4.5rem] text-center text-white mb-6">
							{title}
						</h1>

						<h4 className="max-w-md mx-auto mb-10 text-lg leading-6 text-white md:max-w-lg">
							{subtitle}
						</h4>
						<div className="flex flex-col items-center justify-center gap-4 mb-16 md:flex-row">
							<Link
								href={buttonLink?.url}
								target={buttonLink?.target}
								className={isButtonOneContent(buttonLink?.url)}
							>
								{buttonLink?.title}
							</Link>
							<Link
								href={buttonLinkTwo?.url}
								target={buttonLinkTwo?.target}
								className={isButtonTwoContent(buttonLinkTwo?.url)}
							>
								{buttonLinkTwo?.title}
							</Link>
						</div>
						<Link
							href={`#HowItWorks`}
							passHref
							className="hidden mb-6 text-white lg:inline-block"
						>
							<svg
								width="26"
								height="30"
								viewBox="0 0 26 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13 1V29M13 29L25 17M13 29L1 17"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
			<div className="fixed top-0 bottom-0 left-0 z-50 hidden w-5/6 max-w-sm navbar-menu">
				<div className="fixed inset-0 navbar-backdrop backdrop-blur-xl backdrop-filter bg-blueTwo bg-opacity-30"></div>
				<nav className="relative h-full pb-8 overflow-y-auto bg-white pt-7">
					<div className="flex flex-col h-full px-6">
						<Link href={`"#"`} passHref className="inline-block ml-4 mb-7">
							<Image
								alt=""
								width={550}
								height={550}
								src="/img/Logos/BlueInventory Logo One White.png"
								className="w-full h-[75px] sm:h-[200px] object-contain object center"
							/>
						</Link>
						<ul className="w-full pb-16 mb-auto">
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

export default Hero;
