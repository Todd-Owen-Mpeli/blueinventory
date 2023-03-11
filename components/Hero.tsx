import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import {useState, FunctionComponent} from "react";
import ContentSlider from "./ContentSlider";

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
	.nav-tgl {
		display: inline-block;
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
		background: #2563eb;
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

	.nav {
		top: 0;
		left: 0;
		width: 100%;
		z-index: 998;
		height: 100%;
		display: flex;
		position: fixed;
		overflow: hidden;
		visibility: hidden;
		align-items: center;
		box-sizing: border-box;
		flex-direction: column;
		background-color: #0d172a;
		justify-content: center;
		transition: all 500ms ease-in-out;
		clip-path: circle(30px at calc(100% - 65px) 65px);
	}

	.menu.active {
		.nav {
			visibility: visible;
			clip-path: circle(100%);
		}
		.nav-tgl {
			background: #a2e603;
			&:hover {
				background: #ff002f;
				transition: all 500ms ease-in-out;
			}
		}
		.nav-tgl > span {
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
	/* Hides or Displays the secondary Menu and
	 Menu links */
	const [menuActive, setMenuActive] = useState(false);
	function toggleMenu() {
		setMenuActive(!menuActive);
	}

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
		<HeroComponentStyling className="flex flex-col justify-center item-center bg-blue">
			<div className={menuActive ? "menu active" : "menu h-full"}>
				<button
					type="button"
					onClick={toggleMenu}
					aria-label="toggle menu"
					className="nav-tgl fixed"
				>
					<span aria-hidden="true"></span>
				</button>
				{/* Main Landing Hero */}
				<div
					className="min-h-[100vh] flex flex-col justify-center item-center bg-blue bg-cover bg-bottom bg-no-repeat"
					style={{
						backgroundImage: `
							url("/svg/backgroundSVG/backgroundHeroTriangles.svg")`,
					}}
				>
					<p className="max-w-md md:max-w-lg mx-auto text-lg leading-6 text-white mb-10">
						{subtitle}
					</p>
				</div>
				{/* Secondary Hero Menu */}
				<nav className="nav min-h-[100vh] flex flex-col justify-center item-center bg-yellow bg-cover bg-bottom bg-no-repeat">
					{/* Hidden Menu Content */}
					{/* <ul className="header__menu">
						<li className="header__menu-item">
							<Link href="#">Works</Link>
						</li>
						<li className="header__menu-item">
							<Link href="#">News</Link>
						</li>
						<li className="header__menu-item">
							<Link href="#">About</Link>
						</li>
						<li className="header__menu-item">
							<Link href="#">Help</Link>
						</li>
						<li className="header__menu-item">
							<Link href="#">Contacts</Link>
						</li>
					</ul> */}
					<ContentSlider
						contentOne={contentOne}
						contentTwo={contentTwo}
						contentThree={contentThree}
					/>
				</nav>
			</div>
		</HeroComponentStyling>
	);
};

export default Hero;
