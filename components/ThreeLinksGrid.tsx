import Link from "next/link";
import {FunctionComponent} from "react";
import styles from "../styles/components/ThreeLinksGrid.module.scss";

interface IProps {
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
	buttonLinkThree: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: string;
}

const ThreeLinksGrid: FunctionComponent<IProps> = ({
	buttonLink,
	buttonLinkTwo,
	buttonLinkThree,
	backgroundImage,
}) => {
	return (
		<section
			className={styles.ThreeLinksGrid}
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
			<div
				className="h-[100vh] lg:h-[70vh] flex flex-col lg:grid lg:grid-cols-3 justify-center items-center"
				style={{backdropFilter: "blur(5px)"}}
			>
				<div className="w-full h-full">
					<div className="flex flex-col justify-center items-center text-center text-6xl h-full relative z-0">
						<Link
							className={styles.linkOne}
							href={buttonLink?.url}
							target={buttonLink?.target}
						>
							{buttonLink?.title}
						</Link>
					</div>
				</div>
				<div className="w-full h-full">
					<div className="flex flex-col justify-center items-center text-center text-6xl h-full relative z-0">
						<Link
							className={styles.linkTwo}
							href={buttonLinkTwo?.url}
							target={buttonLinkTwo?.target}
						>
							{buttonLinkTwo?.title}
						</Link>
					</div>
				</div>
				<div className="w-full h-full">
					<div className="flex flex-col justify-center items-center text-center text-6xl h-full relative z-0">
						<Link
							className={styles.linkThree}
							href={buttonLinkThree?.url}
							target={buttonLinkThree?.target}
						>
							{buttonLinkThree?.title}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ThreeLinksGrid;
