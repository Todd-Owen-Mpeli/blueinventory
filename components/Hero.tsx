import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import {useState, FunctionComponent} from "react";

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

// styling
const HeroComponentStyling = styled.div`
	.nav {
		ul {
			display: none;
		}
	}

	.nav-tgl {
		display: inline-block;
		cursor: pointer;
		position: fixed;
		z-index: 100;
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

	.nav:before {
		display: block;
		position: relative;
		top: 0;
		left: 0;
		content: "";
		width: 100vw;
		height: 100vh;
		background: #0d172a;
		transition: all 500ms ease-in-out;

		clip-path: circle(30px at calc(100% - 65px) 65px);
		visibility: hidden;
	}

	.menu.active {
		.nav:before {
			visibility: visible;
			clip-path: circle(100%);
		}

		.nav-tgl {
			background: #0d172a;
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
}) => {
	/* Hides or Displays the secondary Menu and
	 Menu links */
	const [menuActive, setMenuActive] = useState(false);
	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

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
		<HeroComponentStyling className="relative bg-cover z-[50] bg-center bg-no-repeat flex flex-col justify-center item-center bg-blue">
			<div
				className="relative px-0 min-h-[100vh] bg-blue bg-cover bg-bottom bg-no-repeat"
				style={{
					backgroundImage: `
							url("/svg/backgroundSVG/backgroundHeroTriangles.svg")`,
				}}
			>
				<div
					className={
						menuActive ? "menu active relative z-[50]" : "menu relative z-[50]"
					}
				>
					<button
						onClick={toggleMenu}
						className="nav-tgl fixed"
						type="button"
						aria-label="toggle menu"
					>
						<span aria-hidden="true"></span>
					</button>
					<nav className="nav relative z-[50]">{/* Hidden Menu Content */}</nav>
				</div>
			</div>
		</HeroComponentStyling>
	);
};

export default Hero;
