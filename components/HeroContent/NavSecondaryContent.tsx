import {FunctionComponent} from "react";
import ContentSlider from "../ContentSlider";

interface IProps {
	inUsersView: boolean;
	navStylingProps: string;

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
	inUsersView,
	contentOne,
	contentTwo,
	contentThree,
	navStylingProps,
}) => {
	let contentStyling: string = `secondaryContent min-h-[100vh] flex justify-center item-center`;

	return (
		<nav
			className={
				inUsersView
					? `${navStylingProps} ${contentStyling}`
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
