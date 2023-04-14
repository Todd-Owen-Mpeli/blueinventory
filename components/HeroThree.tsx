import Link from "next/link";
import Image from "next/image";
import {useState, FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

// Styling
import styles from "../styles/components/Hero.module.scss";

interface HeroProps {
	title: string;
	paragraph: string;
	backgroundVideoUrl: string;
	backgroundImageOrVideo: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
}

const HeroThree: FC<HeroProps> = ({
	title,
	paragraph,
	backgroundImage,
	backgroundVideoUrl,
	backgroundImageOrVideo,
}) => {
	/* Hides or Displays the Full Nav Menu */
	const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	const mainImageVideoTailwindcss: string = `object-cover object-center w-full h-full`;

	return (
		<section className={styles.hero}>
			<div className="flex flex-col bg-cover bg-center bg-no-repeat relative h-full min-h-[75vh]">
				{/* Background Video */}
				<div className="absolute top-0 bottom-0 left-0 w-full h-full z-[995]">
					{/* Video */}
					<div
						className={
							backgroundImageOrVideo === "Video"
								? `w-full h-full max-h-[75vh] overflow-hidden`
								: ` hidden`
						}
					>
						<div className="relative pt-[56.25%] h-full">
							<iframe
								width="3840"
								height="2160"
								frameBorder="0"
								title="DBMX Racing Hero Video"
								allow="autoplay; fullscreen; picture-in-picture"
								className="absolute top-0 left-0 w-full h-full"
								src={`${backgroundVideoUrl}?autoplay=1&loop=1&autopause=0&background=1&title=0&sidedock=0&controls=0`}
							/>
						</div>
					</div>

					{/* Image */}
					<Image
						priority={true}
						width={backgroundImage?.mediaDetails?.width}
						height={backgroundImage?.mediaDetails?.height}
						className={
							backgroundImageOrVideo === "Image"
								? `block ${mainImageVideoTailwindcss}`
								: ` hidden`
						}
						src={backgroundImage?.sourceUrl}
						alt={backgroundImage?.altText}
					/>
					<div className="absolute top-0 bottom-0 left-0 w-full h-full opacity-90 bg-gradient-to-b from-darkerRedTwo from-5% via-darkerRedTwo via-10% to-transparent to-100%" />
				</div>
				<div className="container relative flex flex-col items-center justify-center px-4 m-auto text-center z-[995]">
					<div className="max-w-3xl">
						<motion.h1
							variants={fadeInUp}
							className="flex flex-col text-center mb-3 text-6xl md:text-7xl text-white font-bold leading-normal lg:leading-[4rem]"
						>
							{title}
						</motion.h1>
					</div>
					<div className="max-w-xl">
						<Paragraph
							content={paragraph}
							tailwindStyling="mt-6 text-white leading-[1.5rem] text-medium text-center"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroThree;
