/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import DOMPurify from "isomorphic-dompurify";
import React, {useEffect, useRef, useState, FunctionComponent} from "react";
// H2 styling
const TestComponentStyling = styled.div`
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

	.active {
		top: 0;
		z-index: 1;
		transition: top 0.9s 0.4s ease-out;
	}

	.notActive {
		top: 100%;
		z-index: 0;
		transition: top 0.75s 2s;
	}

	.main-post .active .main-post__tag-wrapper {
		width: 25%;
		transition: all 0.98s 1.9s;
	}
	.main-post.notActive .main-post__tag-wrapper {
		width: 0;
		transition: width 0.3s 0.2s;
	}

	.main-post .active .main-post__title {
		opacity: 1;
		transform: translateY(0);
		transition: opacity 0.8s 1.42s, transform 0.5s 1.4s;
	}

	.main-post .notActive .main-post__title {
		transform: translateY(40px);
		opacity: 0;
		transition: transform 0.2s 0.35s, opacity 0.5s 0.2s;
	}

	.main-post .active .main-post__link {
		opacity: 1;
		transition: opacity 0.9s 2.2s;
	}

	.main-post .notActive .main-post__link {
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

const TestComponent = () => {
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

	const parentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const parentElement = parentRef.current;
		const childElements = parentElement?.querySelectorAll(".parent > div");
		let currentIndex = 0;

		const intervalId = setInterval(() => {
			const currentChild = childElements?.[currentIndex];
			const nextIndex =
				currentIndex + 1 >= childElements?.length ? 0 : currentIndex + 1;
			const nextChild = childElements?.[nextIndex];

			const tailwindcss: string = `absolute top-[100%] right-0 left-0 bottom-0 w-full h-full`;

			if (currentChild && nextChild) {
				currentChild.classList.remove("active");
				currentChild.classList.add("notactive");
				nextChild.classList.remove("notactive");
				nextChild.classList.add("active");
				currentIndex = nextIndex;
			}
		}, 5000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<TestComponentStyling>
			<div
				className="min-h-[100vh] grid relative gap-y-[2vh]"
				style={{
					gridTemplateRows: "1fr 3fr 1.5fr",
					gridTemplateColumns: "50px 1fr 1fr 1fr 1fr 50px",
				}}
			>
				{/* <div className="progress-bar absolute top-0 left-0 w-full h-[5px]">
					<div className="progress-bar--primary absolute top-0 left-0 w-full h-[5px] z-[2]">
						<div
							className="h-[inherit] bg-orange transition-all ease-in-out duration-75"
							// style={{width: `${iRef.current}%`}}
						/>
					</div>
				</div> */}

				<header
					className="h-[100vh] relative"
					style={{gridRow: "1 / 4", gridColumn: "1 / 7"}}
				>
					<div
						className="parent relative w-full h-full overflow-hidden"
						ref={parentRef}
					>
						<article className="active absolute top-[100%] right-0 left-0 bottom-0 w-full h-full">
							<div className="absolute top-0 left-0 w-full h-full bottom-0">
								<Image
									width={1050}
									height={1050}
									className="w-full h-full block object-cover object-center"
									src="/img/marvin-ong-oEcWn1Qvi5U-unsplash.jpg"
									alt="New McLaren wind tunnel 'critical' to future performance, says Tech Director Key"
								/>
							</div>
							<div className="absolute top-[40%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="m-0 overflow-hidden inline-flex">
									<span className="py-[6px] px-6 bg-blue">News</span>
								</div>
								<h1
									className="font-[700] py-4 lg:py-8 text-white text-7xl w-full lg:w-[55rem] leading-[3.5rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									New McLaren wind tunnel &apos;critical&apos; to future
									performance, says Tech Director Key
								</h1>
								<Link
									href={`/`}
									className="text-white uppercase tracking-[0.25rem] inline-flex items-center no-underline hover:text-blue hover:stroke-blue"
								>
									<span className="text-tiny">find out more</span>
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
						<article className="notActive absolute top-[100%] right-0 left-0 bottom-0 w-full h-full">
							<div className="absolute top-0 left-0 w-full h-full bottom-0">
								<Image
									width={1050}
									height={1050}
									className="w-full h-full block object-cover object-center"
									src="https://www.formula1.com/content/dam/fom-website/sutton/2019/Hungary/Saturday/1017645792-LAT-20190803-_2ST5188.jpg.transform/9col-retina/image.jpg"
									alt="What To Watch For in the 2019 Hungarian Grand Prix"
								/>
							</div>
							<div className="absolute top-[40%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="m-0 overflow-hidden inline-flex">
									<span className="py-[6px] px-6 bg-blue">Video</span>
								</div>
								<h1
									className="font-[700] py-4 lg:py-8 text-white text-7xl w-full lg:w-[55rem] leading-[3.5rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									What To Watch For in the 2019 Hungarian Grand Prix
								</h1>
								<Link
									href={`/`}
									className="text-white uppercase tracking-[0.25rem] inline-flex items-center no-underline hover:text-blue hover:stroke-blue"
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
											stroke="#C20000"
											stroke-width="2"
										/>
										<path d="M14 10L8 6V14L14 10Z" fill="white" />
									</svg>
									<span className="text-tiny">play video</span>
								</Link>
							</div>
						</article>
						<article className="notActive absolute top-[100%] right-0 left-0 bottom-0 w-full h-full">
							<div className="absolute top-0 left-0 w-full h-full bottom-0">
								<Image
									width={1050}
									height={1050}
									className="w-full h-full block object-cover object-center"
									src="/img/pexels-jenda-kubeš-13641535.jpg"
									alt="Hamilton wants harder championship fight from Leclerc and Verstappen"
								/>
							</div>
							<div className="absolute top-[40%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="m-0 overflow-hidden inline-flex">
									<span className="py-[6px] px-6 bg-blue">News</span>
								</div>
								<h1
									className="font-[700] py-4 lg:py-8 text-white text-7xl w-full lg:w-[55rem] leading-[3.5rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									Hamilton wants harder championship fight from Leclerc and
									Verstappen
								</h1>
								<Link
									href={`/`}
									className="text-white uppercase tracking-[0.25rem] inline-flex items-center no-underline hover:text-blue hover:stroke-blue"
								>
									<span className="text-tiny">find out more</span>
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
						<Link href={`/`}>
							<div className="absolute top-0 left-0 h-[5px] w-full">
								<div className="progress-bar__fill h-[inherit] bg-orange transition-all ease-in-out duration-75" />
							</div>
							<header className="flex items-center justify-between">
								<span className="text-tiny text-white font-[400]">News</span>
								<span className="text-tiny text-white font-[400]">
									16 January 2023
								</span>
							</header>
							<div
								className={isParagraphContent(
									`<p>New McLaren wind tunnel 'critical' to future
								performance, says Tech Director Key. It was popularised in the 2023 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`
								)}
								dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
									`<p>New McLaren wind tunnel 'critical' to future
								performance, says Tech Director Key. It was popularised in the 2023 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`
								)}
							/>
						</Link>
					</article>
					<article className="relative px-8 py-4 text-white transition-all duration-75 ease-in-out bg-blue hover:bg-orange ">
						<Link href={`/`}>
							<div className="absolute top-0 left-0 h-[5px] w-full">
								<div
									className="progress-bar__fill h-[inherit] bg-orange transition-all ease-in-out duration-75"
									// style={{width: `${iRef.current}%`}}
								/>
							</div>
							<header className="flex items-center justify-between">
								<span className="text-tiny text-white font-[400]">Video</span>
								<span className="text-tiny text-white font-[400]">
									12 February 2023
								</span>
							</header>
							<div
								className={isParagraphContent(
									`<p>What To Watch For in the 2023 Hungarian Grand Prix. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>`
								)}
								dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
									`<p>What To Watch For in the 2023 Hungarian Grand Prix. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>`
								)}
							/>
						</Link>
					</article>
					<article className="relative px-8 py-4 text-white transition-all duration-75 ease-in-out bg-blue hover:bg-orange ">
						<Link href={`/`}>
							<div className="absolute top-0 left-0 h-[5px] w-full">
								<div
									className="progress-bar__fill h-[inherit] bg-orange transition-all ease-in-out duration-75"
									// style={{width: `${iRef.current}%`}}
								/>
							</div>
							<header className="flex items-center justify-between">
								<span className="text-tiny text-white font-[400]">News</span>
								<span className="text-tiny text-white font-[400]">
									08 March 2023
								</span>
							</header>
							<div
								className={isParagraphContent(
									`<p>Hamilton wants harder championship fight from Leclerc and Verstappen. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 2023, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>`
								)}
								dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
									`<p>Hamilton wants harder championship fight from Leclerc and Verstappen. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 2023, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>`
								)}
							/>
						</Link>
					</article>
				</div>
			</div>
		</TestComponentStyling>
	);
};

export default TestComponent;
