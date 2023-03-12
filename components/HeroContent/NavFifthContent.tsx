import {FunctionComponent} from "react";

interface IProps {
	inUsersView: boolean;
	videoSrc: string;
}

const NavFifthContent: FunctionComponent<IProps> = ({
	inUsersView,
	videoSrc,
}) => {
	let contentStyling: string = `fifthContent min-h-[100vh] p-20 flex justify-center item-center bg-cover bg-bottom bg-no-repeat`;

	return (
		<nav
			className={
				inUsersView ? `nav ${contentStyling}` : `hidden ${contentStyling}`
			}
			style={{
				backgroundImage: `
							url("/svg/backgroundSVG/backgroundTriangles.svg")`,
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
