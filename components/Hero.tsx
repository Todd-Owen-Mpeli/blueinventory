import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import styled from "styled-components";
import DOMPurify from "isomorphic-dompurify";
import {useState, FunctionComponent} from "react";
import {fadeIn, stagger} from "../animations/animations";
import styles from "../styles/components/Hero.module.scss";

// Components
import ContentSlider from "./ContentSlider";
import NavFifthContent from "./HeroContent/NavFifthContent";
import NavForthContent from "./HeroContent/NavForthContent";
import NavThirdContent from "./HeroContent/NavThirdContent";
import NavSecondaryContent from "./HeroContent/NavSecondaryContent";

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

	// Content Slider
	contentOne: {
		tag: string;
		title: string;
		paragraph: string;
		publishedDate: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	contentTwo: {
		tag: string;
		title: string;
		paragraph: string;
		publishedDate: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	contentThree: {
		tag: string;
		title: string;
		paragraph: string;
		publishedDate: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
}

// styling
const HeroComponentStyling = styled.div`
	.navToggle {
		cursor: pointer;
		position: fixed;
		z-index: 999;
		right: 30px;
		top: 30px;
		padding: 0;
		width: 70px;
		height: 70px;
		border: none;
		border-radius: 50%;
		// background: #2563eb;
		box-shadow: 0px 4px 24px rgba(#fff, 0.24);
		line-height: 0.6;
		text-align: center;
		> span {
			// the second divider
			display: inline-block;
			position: relative;
			height: 2px;
			width: 34px;
			border-radius: 1px;
			background: #ffffff;
			vertical-align: middle;
			&:before,
			&:after {
				display: inline-block;
				position: absolute;
				content: "";
				height: 2px;
				border-radius: 1px;
				background: #ffffff;
				// for the hover state
				transition: all 200ms;
			}
			&:before {
				top: -11px;
				left: 3px;
				width: 28px;
			}
			&:after {
				top: 11px;
				left: 6px;
				width: 22px;
			}
		}
		&:focus {
			outline: none;
		}
		&:hover > span:after,
		&:hover > span:before {
			width: 34px;
			left: 0;
		}
	}

	.header__menu {
		padding: 0;
		margin: 0;
	}

	.header__menu > .header__menu-item {
		font-size: 10vh;
	}

	.header__menu > .header__menu-item:not(:last-of-type) {
		margin-bottom: 0.1em;
	}

	.header__menu-item a {
		font-weight: bold;
		color: white;
		text-decoration: none;
	}

	.header__menu-item a:hover {
		font-style: italic;
	}

	.navActive {
		.navToggleOpen {
			background: #a2e603;
			&:hover {
				background: #ff002f;
				transition: all 500ms ease-in-out;
			}
		}
		.navToggleOpen > span {
			height: 0;
			&:after,
			&:before {
				top: 0px;
				left: 0;
				width: 34px;
			}
			&:after {
				transform: rotate(-45deg);
			}
			&:before {
				transform: rotate(45deg);
			}
		}
	}
`;

const Hero: FunctionComponent<IProps> = ({
	title,
	subtitle,
	buttonLink,
	buttonLinkTwo,
	backgroundImage,
	contentOne,
	contentTwo,
	contentThree,
}) => {
	/* Hides or Displays the Full Screen Secondary Menu and
	 Menu links */
	const [menuActive, setMenuActive] = useState(false);
	let burgerIconClose: string = styles.navToggle;
	let burgerIconOpen: string = styles.navToggleOpen;
	// Full Screen Nav Revealed Styling
	const nav: string = styles.nav;
	const navReveal: string = styles.navReveal;

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	// Full Screen Nav Revealed Styling
	const navStylingProps: string = styles.nav;
	// let navStylingProps: string = `top-0 left-0 w-full z-[998] h-full flex fixed overflow-hidden invisible items-center box-border justify-center bg-[#0d172a] transition-all duration-500 ease-in-out`;

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

	/* Check if Paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling = `hidden mb-6 text-darkGrey font-[400] leading-relaxed`;
		} else {
			contentStyling = `block mb-6 text-darkGrey font-[400] leading-relaxed`;
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<HeroComponentStyling
			className="flex flex-col justify-center bg-cover bg-top bg-no-repeat"
			style={{
				backgroundImage: `linear-gradient(0deg,rgba(13, 23, 42, 0.65),rgba(13, 23, 42, 0.65)),url("${backgroundImage}")`,
			}}
		>
			<div className="menu">
				<button
					type="button"
					onClick={toggleMenu}
					aria-label="toggle menu"
					className={menuActive ? burgerIconOpen : burgerIconClose}
				>
					<span aria-hidden="true"></span>
				</button>
				{/* Main Landing Hero */}
				<div
					className="min-h-[100vh] flex flex-col justify-center bg-cover bg-bottom bg-no-repeat px-4 xl:px-28"
					style={{
						backgroundImage: `
							url("/svg/backgroundSVG/backgroundHeroLayeredWaves.svg")`,
					}}
				>
					<div className="max-w-2xl xl:max-w-4xl text-white">
						<h1 className=" text-4xl sm:text-5xl md:text-8xl font-bold leading-normal sm:leading-[4.5rem] text-center sm:text-left mb-6">
							{title}
						</h1>
						<h2 className="max-w-md text-medium sm:text-xl text-center sm:text-left leading-6 sm:leading-8 md:max-w-4xl">
							{subtitle}
						</h2>
						<div className="flex flex-row justify-center sm:justify-start gap-4 mt-10">
							<Link
								href={buttonLink?.url}
								target={buttonLink?.target}
								className="font-semibold text-base sm:text-medium py-4 px-6 bg-limeGreen rounded-lg hover:bg-blueTwo"
							>
								{buttonLink?.title}
							</Link>
							<Link
								href={buttonLinkTwo?.url}
								target={buttonLinkTwo?.target}
								className="font-semibold text-base sm:text-medium py-4 px-6 bg-darkBlue rounded-lg hover:bg-limeGreen"
							>
								{buttonLinkTwo?.title}
							</Link>
						</div>
					</div>
				</div>
				<div className="">
					{/* Secondary Hero Content Slide */}
					<NavSecondaryContent
						inUsersView={false}
						menuActive={menuActive}
						contentOne={contentOne}
						contentTwo={contentTwo}
						contentThree={contentThree}
					/>
					{/* Third Hero Content Slide */}

					<NavThirdContent inUsersView={true} menuActive={menuActive} />
					{/* Forth Hero Content Slide */}
					<NavForthContent
						inUsersView={false}
						menuActive={menuActive}
						title={"Build website animations and interactions visually."}
						subtitle={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis volutpat velit, quis iaculis velit bibendum a. Maecenas accumsan fermentum nisl."
						}
						backgroundImage="http://blueinventory.local/wp-content/uploads/2023/03/pexels-paul-voie-12359137-scaled.jpg"
					/>
					{/* Fifth Hero Content Slide */}
					<NavFifthContent
						inUsersView={false}
						menuActive={menuActive}
						videoSrc="/video/events.mp4"
					/>
				</div>
			</div>
		</HeroComponentStyling>
	);
};

export default Hero;
