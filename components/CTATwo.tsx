/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import styles from "../styles/components/CTATwo.module.scss";

interface IProps {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

const CTATwo: FunctionComponent<IProps> = ({title, paragraph, buttonLink}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto py-8 text-left text-white font-[400] text-medium";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto py-8 text-left text-white font-[400] text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Check if Button One Link / content is null
	 And Displays content if it is not */
	function isButtonContent(isButtonContent: string) {
		let contentStyling;
		if (isButtonContent === null || isButtonContent === undefined) {
			contentStyling =
				"hidden py-4 px-12 relative z-50rounded-lg bg-white hover:bg-limeGreen hover:text-white transition-all ease-in-out duration-[0.5s]";
		} else {
			contentStyling =
				"block py-4 px-12 relative z-50 rounded-lg bg-white hover:bg-limeGreen hover:text-white transition-all ease-in-out duration-[0.5s]";
		}
		return contentStyling;
	}

	return (
		<section className="py-12 lg:py-20 bg-blue overflow-hidden bg-gradient-to-r from-blue to-blueTwo">
			<div className="container px-0 mx-auto">
				<div className="flex flex-col lg:flex-row justify-center items-center z-50">
					<div className="w-full lg:w-1/2 relative">
						<div className="relative z-50">
							<h2 className="text-white text-left tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
								{title}
							</h2>
							<div
								className={isParagraphContent(paragraph)}
								dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
							/>
						</div>
						<div className="absolute">
							<Image
								width={550}
								height={550}
								alt={`Black Hole Icon`}
								src="/img/Icons/black-hole.png"
								className="w-[320px] h-[320px] object-contain object center"
							/>
						</div>
					</div>
					<div className="w-full lg:w-1/2 py-4 lg:py-8 relative">
						<div className="absolute top-[-380px] right-[-75px] lg:top-[-300px]">
							<Image
								width={550}
								height={550}
								alt={`Earth Icon`}
								src="/img/Icons/earth.png"
								className="w-[320px] h-[320px] object-contain object center"
							/>
						</div>
						<button className={isButtonContent(buttonLink?.url)}>
							<Link
								href={buttonLink?.url}
								target={buttonLink?.target}
								className="text-medium font-semibold"
							>
								{buttonLink?.title}
							</Link>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTATwo;
