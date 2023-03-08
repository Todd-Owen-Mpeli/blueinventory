import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "../animations/animations";

import styled from "styled-components";
import DOMPurify from "isomorphic-dompurify";
import React, {useEffect, useRef, FunctionComponent} from "react";

interface IProps {
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

// H2 styling
const ContentSliderStyling = styled.div`
	.progress-bar {
		position: absolute;
		top: 0;
		left: 0;
		height: 5px;
		width: 100%;
		&__fill {
			width: 0;
			height: inherit;
			background: #ff8300;
			transition: all 0.16s;
		}
		&--primary {
			z-index: 2;
		}
	}

	.main-active {
		top: 0;
		z-index: 1;
		transition: top 0.9s 0.4s ease-out;
	}

	.main-not-active {
		top: 100%;
		z-index: 0;
		transition: top 0.75s 2s;
	}

	.main-post.main-active .tag {
		width: 25%;
		transition: all 0.98s 1.9s;
	}

	.main-post.main-not-active .tag {
		width: 0;
		transition: width 0.3s 0.2s;
	}

	.main-post.main-active .title {
		opacity: 1;
		transform: translateY(0);
		transition: opacity 0.8s 1.42s, transform 0.5s 1.4s;
	}

	.main-post.main-not-active .title {
		opacity: 0;
		transform: translateY(40px);
		transition: transform 0.2s 0.35s, opacity 0.5s 0.2s;
	}

	.main-post.main-active .postLink {
		opacity: 1;
		transition: opacity 0.9s 2.2s;
	}

	.main-post.main-not-active .postLink {
		opacity: 0;
		transition: opacity 0.5s 0.2s;
	}

	.posts-wrapper {
		grid-row: 3 / 4;
		grid-column: 3 / 6;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 14px;
		z-index: 1;
	}

	.post {
		&--active {
			opacity: 0.95;
			background: #2563eb;
		}
		&:not(.post--active) {
			pointer-events: none;
		}
	}

	@media screen and (min-width: 768px) {
		.main-post__title {
			font-size: 2.9em;
		}
	}
	@media screen and (min-width: 1024px) {
		.hide-on-mobile {
			display: grid;
		}
		.posts-wrapper {
			grid-column: 2 / 6;
		}
		.hide-on-desktop {
			display: none;
		}
	}

	@media screen and (min-width: 1440px) {
		.main-post__content {
			width: 45%;
		}
		.posts-wrapper {
			grid-column: 3 / 6;
		}
	}
`;

const ContentSlider: FunctionComponent<IProps> = ({
	contentOne,
	contentTwo,
	contentThree,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mt-8 font-[400] text-white text-base text-left leading-[1.5rem]";
		} else {
			contentStyling =
				"block mt-8 font-[400] text-white text-base text-left leading-[1.5rem]";
		}
		return contentStyling;
	}

	function createTrimmedParagraphMarkup(paragraphContent: string) {
		const sanitizedContent: string = DOMPurify.sanitize(paragraphContent);

		return {
			__html: `${sanitizedContent.substring(0, 250)}...`,
		};
	}

	// Content Slider
	const parentRef = useRef<HTMLDivElement>(null);
	const tailwindcss: string = `absolute top-[100%] right-0 left-0 bottom-0 w-full h-full`;

	useEffect(() => {
		const parentElement = parentRef.current;
		const childElements = parentElement?.querySelectorAll(".parent > article");
		let currentIndex = 0;

		const intervalId = setInterval(() => {
			const currentChild = childElements?.[currentIndex];
			const nextIndex =
				currentIndex + 1 >= childElements?.length ? 0 : currentIndex + 1;
			const nextChild = childElements?.[nextIndex];

			if (currentChild && nextChild) {
				currentChild.classList.remove("main-active");
				currentChild.classList.add("main-not-active");
				nextChild.classList.remove("main-not-active");
				nextChild.classList.add("main-active");
				currentIndex = nextIndex;
			}
		}, 7000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<ContentSliderStyling>
			<div
				className="min-h-[100vh] grid relative gap-y-[2vh]"
				style={{
					gridTemplateRows: "1fr 3fr 1.5fr",
					gridTemplateColumns: "50px 1fr 1fr 1fr 1fr 50px",
				}}
			>
				<div className="progress-bar absolute top-0 left-0 w-full h-[5px]">
					<div className="progress-bar--primary absolute top-0 left-0 w-full h-[5px] z-[2]">
						<div
							className="h-[inherit] bg-orange transition-all ease-in-out duration-75"
							// style={{width: `${iRef.current}%`}}
						/>
					</div>
				</div>

				<header
					className="h-[100vh] relative"
					style={{gridRow: "1 / 4", gridColumn: "1 / 7"}}
				>
					<div
						className="relative w-full h-full overflow-hidden parent bg-blue"
						ref={parentRef}
					>
						<article className={`main-post main-active ${tailwindcss}`}>
							<motion.div
								variants={fadeIn}
								className="absolute top-0 bottom-0 left-0 w-full h-full main-post__image"
							>
								<Image
									width={contentOne?.backgroundImage?.mediaDetails?.width}
									height={contentOne?.backgroundImage?.mediaDetails?.height}
									className="block object-cover object-center w-full h-full"
									src={contentOne?.backgroundImage?.sourceUrl}
									alt={`${contentOne?.backgroundImage?.altText} image`}
								/>
							</motion.div>
							<div className="absolute top-[40%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="inline-flex m-0 overflow-hidden tag">
									<span className="py-[6px] px-6 bg-blue">
										{contentOne?.tag}
									</span>
								</div>
								<h2
									className="title font-[700] py-4 lg:py-8 text-white text-7xl w-full lg:w-[55rem] leading-[3.5rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{contentOne?.title}
								</h2>
								<Link
									href={contentOne?.buttonLink?.url}
									target={contentOne?.buttonLink?.target}
									className="postLink text-white uppercase tracking-[0.25rem] inline-flex items-center no-underline hover:text-blue hover:stroke-blue"
								>
									<span className="text-tiny">
										{contentOne?.buttonLink?.title}
									</span>
									<svg
										className="ml-[12px]"
										width="37"
										height="12"
										viewBox="0 0 37 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11"
											stroke="white"
										/>
									</svg>
								</Link>
							</div>
						</article>
						<article className={`main-post main-not-active ${tailwindcss}`}>
							<div className="absolute top-0 bottom-0 left-0 w-full h-full">
								<Image
									src={contentTwo?.backgroundImage?.sourceUrl}
									alt={`${contentTwo?.backgroundImage?.altText} image`}
									width={contentTwo?.backgroundImage?.mediaDetails?.width}
									height={contentTwo?.backgroundImage?.mediaDetails?.height}
									className="block object-cover object-center w-full h-full"
								/>
							</div>
							<div className="absolute top-[40%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="inline-flex m-0 overflow-hidden tag">
									<span className="py-[6px] px-6 bg-blue">
										{contentTwo?.tag}
									</span>
								</div>
								<h2
									className="title font-[700] py-4 lg:py-8 text-white text-7xl w-full lg:w-[55rem] leading-[3.5rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{contentTwo?.title}
								</h2>
								<Link
									href={contentTwo?.buttonLink?.url}
									target={contentTwo?.buttonLink?.target}
									className="postLink text-white uppercase tracking-[0.25rem] inline-flex items-center no-underline hover:text-orange hover:stroke-none"
								>
									<svg
										className="mr-[12px]"
										width="30"
										height="30"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="10"
											cy="10"
											r="9"
											stroke="#FF8300"
											stroke-width="2"
										/>
										<path d="M14 10L8 6V14L14 10Z" fill="white" />
									</svg>
									<span className="text-tiny">
										{contentTwo?.buttonLink?.title}
									</span>
								</Link>
							</div>
						</article>
						<article className={`main-post main-not-active ${tailwindcss}`}>
							<div className="absolute top-0 bottom-0 left-0 w-full h-full">
								<Image
									src={contentThree?.backgroundImage?.sourceUrl}
									alt={`${contentThree?.backgroundImage?.altText} image`}
									width={contentThree?.backgroundImage?.mediaDetails?.width}
									height={contentThree?.backgroundImage?.mediaDetails?.height}
									className="block object-cover object-center w-full h-full"
								/>
							</div>
							<div className="absolute top-[40%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="inline-flex m-0 overflow-hidden tag">
									<span className="py-[6px] px-6 bg-blue">
										{contentThree?.tag}
									</span>
								</div>
								<h2
									className="title font-[700] py-4 lg:py-8 text-white text-7xl w-full lg:w-[55rem] leading-[3.5rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{contentThree?.title}
								</h2>
								<Link
									href={contentThree?.buttonLink?.url}
									target={contentThree?.buttonLink?.target}
									className="postLink text-white uppercase tracking-[0.25rem] inline-flex items-center no-underline hover:text-blue hover:stroke-blue"
								>
									<span className="text-tiny">
										{contentThree?.buttonLink?.title}
									</span>
									<svg
										className="ml-[12px]"
										width="37"
										height="12"
										viewBox="0 0 37 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11"
											stroke="white"
										/>
									</svg>
								</Link>
							</div>
						</article>
					</div>
				</header>

				<div
					className="hidden lg:grid gap-4 z-[1]"
					style={{
						gridRow: "3 / 4",
						gridColumn: "3 / 6",
						gridTemplateColumns: "repeat(3, 1fr)",
					}}
				>
					<article className="relative px-8 py-4 text-white transition-all duration-75 ease-in-out bg-blue hover:bg-orange">
						<Link
							href={contentOne?.buttonLink?.url}
							target={contentOne?.buttonLink?.target}
						>
							<div className="absolute top-0 left-0 h-[5px] w-full">
								<div className="progress-bar__fill h-[inherit] bg-orange transition-all ease-in-out duration-75" />
							</div>
							<header className="flex items-center justify-between">
								<span className="text-tiny text-white font-[400]">
									{contentOne?.tag}
								</span>
								<span className="text-tiny text-white font-[400]">
									{contentOne?.publishedDate}
								</span>
							</header>
							<div
								className={isParagraphContent(contentOne?.paragraph)}
								dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
									contentOne?.paragraph
								)}
							/>
						</Link>
					</article>
					<article className="relative px-8 py-4 text-white transition-all duration-75 ease-in-out bg-blue hover:bg-orange ">
						<Link
							href={contentTwo?.buttonLink?.url}
							target={contentTwo?.buttonLink?.target}
						>
							<div className="absolute top-0 left-0 h-[5px] w-full">
								<div className="progress-bar__fill h-[inherit] bg-orange transition-all ease-in-out duration-75" />
							</div>
							<header className="flex items-center justify-between">
								<span className="text-tiny text-white font-[400]">
									{contentTwo?.tag}
								</span>
								<span className="text-tiny text-white font-[400]">
									{contentTwo?.publishedDate}
								</span>
							</header>
							<div
								className={isParagraphContent(contentTwo?.paragraph)}
								dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
									contentTwo?.paragraph
								)}
							/>
						</Link>
					</article>
					<article className="relative px-8 py-4 text-white transition-all duration-75 ease-in-out bg-blue hover:bg-orange ">
						<Link
							href={contentThree?.buttonLink?.url}
							target={contentThree?.buttonLink?.target}
						>
							<div className="absolute top-0 left-0 h-[5px] w-full">
								<div className="progress-bar__fill h-[inherit] bg-orange transition-all ease-in-out duration-75" />
							</div>
							<header className="flex items-center justify-between">
								<span className="text-tiny text-white font-[400]">
									{contentThree?.tag}
								</span>
								<span className="text-tiny text-white font-[400]">
									{contentThree?.publishedDate}
								</span>
							</header>
							<div
								className={isParagraphContent(contentThree?.paragraph)}
								dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
									contentThree?.paragraph
								)}
							/>
						</Link>
					</article>
				</div>
			</div>
		</ContentSliderStyling>
	);
};

export default ContentSlider;
