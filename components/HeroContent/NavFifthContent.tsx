import {FunctionComponent} from "react";
import styles from "../../styles/components/Hero.module.scss";

interface IProps {
	videoSrc: string;
	menuActive: boolean;
	inUsersView: boolean;
}

const NavFifthContent: FunctionComponent<IProps> = ({
	inUsersView,
	videoSrc,
	menuActive,
}) => {
	// Full Screen Nav Revealed Styling
	const nav: string = styles.nav;
	const navReveal: string = styles.navReveal;

	let contentStyling: string = `${nav} min-h-[100vh] p-20 bg-cover bg-bottom bg-no-repeat`;

	return (
		<nav
			className={
				menuActive && inUsersView
					? `${navReveal} ${contentStyling}`
					: `hidden ${contentStyling}`
			}
			style={{
				backgroundImage: `url("/svg/backgroundSVG/backgroundTriangles.svg")`,
			}}
		>
			<video
				autoPlay
				muted
				loop
				className="block object-cover object-center w-full h-full rounded-lg"
			>
				<source src={videoSrc} type="video/mp4" />
			</video>
		</nav>
	);
};

export default NavFifthContent;
