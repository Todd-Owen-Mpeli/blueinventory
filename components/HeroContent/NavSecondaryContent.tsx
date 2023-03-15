import {FunctionComponent} from "react";
import ContentSlider from "../ContentSlider";
import styles from "../../styles/components/Hero.module.scss";

interface IProps {
	menuActive: boolean;
	inUsersView: boolean;

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

const NavSecondaryContent: FunctionComponent<IProps> = ({
	menuActive,
	inUsersView,
	contentOne,
	contentTwo,
	contentThree,
}) => {
	// Full Screen Nav Revealed Styling
	const nav: string = styles.nav;
	const navReveal: string = styles.navReveal;

	let contentStyling: string = `${nav} secondaryContent min-h-[100vh] flex justify-center item-center`;

	return (
		<nav
			className={
				menuActive && inUsersView
					? `${navReveal} ${contentStyling}`
					: `hidden ${contentStyling}`
			}
		>
			<ContentSlider
				contentOne={contentOne}
				contentTwo={contentTwo}
				contentThree={contentThree}
			/>
		</nav>
	);
};

export default NavSecondaryContent;
