import {FC} from "react";
import Link from "next/link";
import parse from "html-react-parser";
import styled from "styled-components";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

interface HeroProps {
	title: string;
	subtitle: string;
	backgroundVideoUrl: string;
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
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
}

const Vimeo = styled.div`
	position: relative;
	padding-bottom: 56.25%;
	overflow: hidden;
	max-width: 100%;
	height: auto;

	iframe,
	object,
	embed {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

const Hero: FC<HeroProps> = ({
	title,
	subtitle,
	buttonLink,
	buttonLinkTwo,
	backgroundImage,
	backgroundVideoUrl,
}) => {
	return (
		<section className="px-4 py-10 overflow-hidden bg-white">
			<div className="container px-0 mx-auto">
				<div
					className="relative w-full h-[600px] overflow-hidden bg-center bg-no-repeat bg-cover rounded-sm"
					style={{
						backgroundImage: `url("${backgroundImage}")`,
					}}
				>
					<Vimeo className="absolute top-0 bottom-0 left-0 hidden 2xl:block">
						{parse(backgroundVideoUrl ? backgroundVideoUrl : `/`)}
					</Vimeo>

					<div className="absolute top-0 bottom-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-darkBlue from-2% via-transparent via-5% to-transparent to-100%" />

					<div className="absolute top-0 bottom-0 left-0 flex flex-col items-center justify-center px-8 py-20 mx-auto max-w-7xl">
						<div className="max-w-2xl px-6 py-10 bg-white rounded-sm sm:p-10">
							<motion.h1
								variants={fadeInUp}
								className="text-center lg:text-left tracking-normal leading-[3.5rem] font-semibold text-4xl sm:text-6xl lg:text-7xl"
							>
								{title}
							</motion.h1>
							<Paragraph
								content={subtitle}
								tailwindStyling="w-full lg:max-w-2xl mx-auto mt-6 text-black text-left text-base"
							/>
							<motion.div
								variants={stagger}
								className="flex flex-col items-center justify-center gap-6 pt-8 lg:justify-start lg:flex-row"
							>
								<motion.button variants={fadeInUp}>
									<Link
										href={buttonLink?.url}
										target={buttonLink?.target}
										className="px-8 py-3 font-semibold tracking-widest text-center text-white uppercase rounded-sm text-tiny bg-blue w-fit hover:bg-goldPrime focus:ring-4 focus:ring-blue"
									>
										{buttonLink?.title}
									</Link>
								</motion.button>
								<motion.button variants={fadeInUp}>
									<Link
										href={buttonLinkTwo?.url}
										target={buttonLinkTwo?.target}
										className="px-8 py-3 font-semibold tracking-widest text-center text-white uppercase rounded-sm text-tiny w-fit bg-blue hover:bg-darkBlue focus:ring-4 focus:ring-blue"
									>
										{buttonLinkTwo?.title}
									</Link>
								</motion.button>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
