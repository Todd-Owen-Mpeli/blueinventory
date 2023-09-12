"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
	fadeInThree,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import React, {useEffect, useRef} from "react";
import {useGlobalContext} from "@/context/Global";
import styles from "@/styles/components/ContentSlider.module.scss";

const ContentSlider = () => {
	const globalContext = useGlobalContext();

	// Content Slide One
	const contentOne = {
		uri: globalContext.contentSliderPostsContent?.content[0]?.uri,
		date: globalContext.contentSliderPostsContent?.content[0]?.date,
		title: globalContext.contentSliderPostsContent?.content[0]?.title,
		paragraph:
			globalContext.contentSliderPostsContent?.content[0].template
				.flexibleContent.flexibleContent[1].paragraph,
		titleTwo:
			globalContext.contentSliderPostsContent?.content[0].template
				.flexibleContent.flexibleContent[1].title,

		backgroundVideoUrl:
			globalContext.contentSliderPostsContent?.content[0]?.template
				.flexibleContent.flexibleContent[0].backgroundVideoUrl,
		backgroundImageOrVideo:
			globalContext.contentSliderPostsContent?.content[0]?.template
				.flexibleContent.flexibleContent[0].backgroundImageOrVideo,
		backgroundImage: {
			altText:
				globalContext.contentSliderPostsContent?.content[0]?.template
					.flexibleContent.flexibleContent[0].backgroundImage.altText,
			sourceUrl:
				globalContext.contentSliderPostsContent?.content[0]?.template
					.flexibleContent.flexibleContent[0].backgroundImage.sourceUrl,
			mediaDetails: {
				height:
					globalContext.contentSliderPostsContent?.content[0]?.template
						.flexibleContent.flexibleContent[0].backgroundImage.mediaDetails
						.height,
				width:
					globalContext.contentSliderPostsContent?.content[0]?.template
						.flexibleContent.flexibleContent[0].backgroundImage.mediaDetails
						.width,
			},
		},
	};

	// Content Slide Two
	const contentTwo = {
		uri: globalContext.contentSliderPostsContent?.content[1]?.uri,
		date: globalContext.contentSliderPostsContent?.content[1]?.date,
		title: globalContext.contentSliderPostsContent?.content[1]?.title,
		paragraph:
			globalContext.contentSliderPostsContent?.content[1].template
				.flexibleContent.flexibleContent[1].paragraph,
		titleTwo:
			globalContext.contentSliderPostsContent?.content[1].template
				.flexibleContent.flexibleContent[1].title,

		backgroundVideoUrl:
			globalContext.contentSliderPostsContent?.content[1]?.template
				.flexibleContent.flexibleContent[0]?.backgroundVideoUrl,
		backgroundImageOrVideo:
			globalContext.contentSliderPostsContent?.content[1]?.template
				.flexibleContent.flexibleContent[0].backgroundImageOrVideo,
		backgroundImage: {
			altText:
				globalContext.contentSliderPostsContent?.content[1]?.template
					.flexibleContent.flexibleContent[0].backgroundImage.altText,
			sourceUrl:
				globalContext.contentSliderPostsContent?.content[1]?.template
					.flexibleContent.flexibleContent[0].backgroundImage.sourceUrl,
			mediaDetails: {
				height:
					globalContext.contentSliderPostsContent?.content[1]?.template
						.flexibleContent.flexibleContent[0].backgroundImage.mediaDetails
						.height,
				width:
					globalContext.contentSliderPostsContent?.content[1]?.template
						.flexibleContent.flexibleContent[0].backgroundImage.mediaDetails
						.width,
			},
		},
	};

	// Content Slide Three
	const contentThree = {
		uri: globalContext.contentSliderPostsContent?.content[2]?.uri,
		date: globalContext.contentSliderPostsContent?.content[2]?.date,
		title: globalContext.contentSliderPostsContent?.content[2]?.title,
		paragraph:
			globalContext.contentSliderPostsContent?.content[2].template
				.flexibleContent.flexibleContent[1].paragraph,
		titleTwo:
			globalContext.contentSliderPostsContent?.content[2].template
				.flexibleContent.flexibleContent[1].title,

		backgroundVideoUrl:
			globalContext.contentSliderPostsContent?.content[2]?.template
				.flexibleContent.flexibleContent[0]?.backgroundVideoUrl,
		backgroundImageOrVideo:
			globalContext.contentSliderPostsContent?.content[2]?.template
				.flexibleContent.flexibleContent[0].backgroundImageOrVideo,
		backgroundImage: {
			altText:
				globalContext.contentSliderPostsContent?.content[2]?.template
					.flexibleContent.flexibleContent[0].backgroundImage.altText,
			sourceUrl:
				globalContext.contentSliderPostsContent?.content[2]?.template
					.flexibleContent.flexibleContent[0].backgroundImage.sourceUrl,
			mediaDetails: {
				height:
					globalContext.contentSliderPostsContent?.content[2]?.template
						.flexibleContent.flexibleContent[0].backgroundImage.mediaDetails
						.height,
				width:
					globalContext.contentSliderPostsContent?.content[2]?.template
						.flexibleContent.flexibleContent[0].backgroundImage.mediaDetails
						.width,
			},
		},
	};
	/* Sanitize the WYSIWYG paragraph content */
	function createTrimmedParagraphMarkup(paragraphContent: string) {
		const sanitizedContent: string = DOMPurify.sanitize(paragraphContent);

		return {
			__html: `${sanitizedContent.substring(0, 185)}...`,
		};
	}

	// Content Slider
	const mainRef = useRef<HTMLDivElement>(null);
	const postRef = useRef<HTMLDivElement>(null);
	const mainImageVideoTailwindcss: string = `object-cover object-center w-full h-full`;
	const mainContentTailwindcss: string = `absolute top-[100%] right-0 left-0 bottom-0 w-full h-full overflow-hidden`;
	const postContentTailwindcss: string = `relative px-8 py-4 text-white transition-all duration-75 ease-in-out opacity-30`;

	// Full Screen Nav Revealed Styling
	const mainPost: string = styles.mainPost;
	const mainActive: string = styles.mainActive;
	const mainNotActive: string = styles.mainNotActive;

	// Sub post (goldPrime Squares)
	const post: string = styles.post;
	const postPost: string = styles.postPost;
	const postActive: string = styles.postActive;
	const postNotActive: string = styles.postNotActive;

	const progressBarFill: string = styles.progressBarFill;

	useEffect(() => {
		// Main Content
		const mainParentElement: HTMLDivElement | null = mainRef?.current;
		const mainChildElements: NodeListOf<Element> | undefined =
			mainParentElement?.querySelectorAll<HTMLDivElement>(
				".mainPost > article"
			);

		// Post Content
		const postParentElement: HTMLDivElement | null = postRef?.current;
		const postChildElements: NodeListOf<Element> | undefined =
			postParentElement?.querySelectorAll<HTMLDivElement>(
				".postPost > article"
			);

		let currentIndex: number = 0;

		const intervalId: NodeJS.Timer | any = setInterval(() => {
			if (mainChildElements && postChildElements) {
				const currentMainPostChild = mainChildElements[currentIndex];
				const nextMainPostIndex =
					currentIndex + 1 >= mainChildElements.length ? 0 : currentIndex + 1;
				const nextMainPostChild = mainChildElements[nextMainPostIndex];

				const currentPostChild = postChildElements[currentIndex];
				const nextPostIndex =
					currentIndex + 1 >= postChildElements.length ? 0 : currentIndex + 1;
				const nextPostChild = postChildElements[nextPostIndex];

				if (
					currentMainPostChild &&
					nextMainPostChild &&
					currentPostChild &&
					nextPostChild
				) {
					// Rest of the code that uses currentMainPostChild, nextMainPostChild,
					// Main Content
					currentMainPostChild.classList.remove(mainActive);
					currentMainPostChild.classList.add(mainNotActive);
					nextMainPostChild.classList.remove(mainNotActive);
					nextMainPostChild.classList.add(mainActive);

					// Post Content
					currentPostChild.classList.remove(postActive);
					currentPostChild.classList.add(postNotActive);
					nextPostChild.classList.remove(postNotActive);
					nextPostChild.classList.add(postActive);
					currentIndex = nextMainPostIndex;
				}
			}
		}, 7000);

		return () => clearInterval(intervalId);
	}, [mainActive, mainNotActive, postActive, postNotActive]);

	return (
		<div
			className="w-full h-full bg-center bg-no-repeat bg-cover"
			style={{
				backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue.svg")`,
			}}
		>
			<div
				className="h-[75vh] sm:h-[65vh] lg:h-[100vh] grid relative gap-y-[2vh]"
				style={{
					gridTemplateRows: "1fr 3fr 1.5fr",
					gridTemplateColumns: "50px 1fr 1fr 1fr 1fr 50px",
				}}
			>
				<div
					className="relative h-full"
					style={{gridRow: "1 / 4", gridColumn: "1 / 7"}}
				>
					<div className={`mainPost ${mainPost}`} ref={mainRef}>
						<article
							className={`main-post ${mainActive} ${mainContentTailwindcss}`}
						>
							<div
								className="absolute top-0 bottom-0 left-0 w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover main-post__image"
								style={{
									backgroundImage: `url("${contentOne.backgroundImage?.sourceUrl}")`,
								}}
							>
								{/* Background Video */}
								<div className="absolute top-0 bottom-0 left-0 w-full h-full">
									<div className="hidden xl:block relative pb-[56.25%] overflow-hidden max-w-full h-auto bg-center bg-no-repeat bg-cover min-h-full xl:min-h-screen">
										<iframe
											allowFullScreen
											className={
												contentOne.backgroundImageOrVideo === "Video"
													? "absolute top-0 left-0 border-none w-full h-full"
													: `hidden`
											}
											src={contentOne.backgroundVideoUrl}
										/>
									</div>
								</div>

								{/* Image */}
								<Image
									src={contentOne.backgroundImage?.sourceUrl}
									alt={`${contentOne.backgroundImage?.altText} image`}
									width={contentOne.backgroundImage?.mediaDetails?.width}
									height={contentOne.backgroundImage?.mediaDetails?.height}
									className={
										contentOne.backgroundImageOrVideo === "Image"
											? `block ${mainImageVideoTailwindcss}`
											: ` hidden`
									}
								/>
							</div>
							<div className="absolute top-0 h-screen bottom-0 left-0 w-full opacity-90 bg-gradient-to-b from-darkerBlueTwo from-5% via-darkerBlueTwo via-10% to-transparent to-100%" />
							<div className="absolute top-[35%] sm:top-[50%] lg:top-[20%] xl:top-[25%] :top-[35%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="inline-flex m-0 overflow-hidden tag">
									<span className="py-[6px] px-6 bg-goldPrime">
										{contentOne.backgroundImageOrVideo}
									</span>
								</div>
								<h2
									className="title py-4 lg:py-8 text-white text-6xl md:text-7xl lg:text-8xl w-full lg:w-[55rem] leading-[3rem] lg:leading-[4rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{contentOne?.title}
								</h2>
								<Link
									href={
										contentOne?.uri
											? `/operational-insights${contentOne?.uri}`
											: `/operational-insights`
									}
									className="postLink text-white uppercase tracking-[0.25rem] inline-flex items-center no-underline hover:text-goldPrime hover:stroke-goldPrime"
								>
									<svg
										className={
											contentOne.backgroundImageOrVideo === "Video"
												? `block mr-[12px]`
												: ` hidden`
										}
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
											stroke="#2563eb"
											strokeWidth="2"
										/>
										<path d="M14 10L8 6V14L14 10Z" fill="white" />
									</svg>
									<span className="font-semibold text-medium hover:text-goldPrime">
										{contentOne.title}
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
						<article
							className={`main-post ${mainNotActive} ${mainContentTailwindcss}`}
						>
							<div
								className="absolute top-0 bottom-0 left-0 w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover"
								style={{
									backgroundImage: `url("${contentTwo.backgroundImage?.sourceUrl}")`,
								}}
							>
								{/* Background Video */}
								<div className="absolute top-0 bottom-0 left-0 w-full h-full">
									<div className="hidden xl:block relative pb-[56.25%] overflow-hidden max-w-full h-auto bg-center bg-no-repeat bg-cover min-h-full xl:min-h-screen">
										<iframe
											allowFullScreen
											className={
												contentTwo.backgroundImageOrVideo === "Video"
													? "absolute top-0 left-0 border-none w-full h-full"
													: `hidden`
											}
											src={contentTwo.backgroundVideoUrl}
										/>
									</div>
								</div>

								{/* Image */}
								<Image
									width={contentTwo.backgroundImage?.mediaDetails?.width}
									height={contentTwo.backgroundImage?.mediaDetails?.height}
									className={
										contentTwo.backgroundImageOrVideo === "Image"
											? `block ${mainImageVideoTailwindcss}`
											: ` hidden`
									}
									src={contentTwo.backgroundImage?.sourceUrl}
									alt={`${contentTwo.backgroundImage?.altText} image`}
								/>
							</div>
							<div className="absolute top-0 h-screen bottom-0 left-0 w-full opacity-90 bg-gradient-to-b from-darkerBlueTwo from-5% via-darkerBlueTwo via-10% to-transparent to-100%" />
							<div className="absolute top-[35%] sm:top-[50%] lg:top-[20%] xl:top-[25%] :top-[35%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="inline-flex m-0 overflow-hidden tag">
									<span className="py-[6px] px-6 bg-goldPrime">
										{contentTwo.backgroundImageOrVideo}
									</span>
								</div>
								<h2
									className="title py-4 lg:py-8 text-white text-6xl md:text-7xl lg:text-8xl w-full lg:w-[55rem] leading-[3rem] lg:leading-[4rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{contentTwo?.title}
								</h2>
								<Link
									href={
										contentTwo?.uri
											? `/operational-insights${contentTwo?.uri}`
											: `/operational-insights`
									}
									className="postLink text-white uppercase tracking-[0.25rem] inline-flex items-center no-underline hover:text-goldPrime hover:stroke-goldPrime"
								>
									<svg
										className={
											contentTwo.backgroundImageOrVideo === "Video"
												? `block mr-[12px]`
												: ` hidden`
										}
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
											stroke="#2563eb"
											strokeWidth="2"
										/>
										<path d="M14 10L8 6V14L14 10Z" fill="white" />
									</svg>
									<span className="font-semibold text-medium hover:text-goldPrime">
										{contentTwo?.title}
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
						<article
							className={`main-post ${mainNotActive} ${mainContentTailwindcss}`}
						>
							<div
								className="absolute top-0 bottom-0 left-0 w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover"
								style={{
									backgroundImage: `url("${contentThree.backgroundImage?.sourceUrl}")`,
								}}
							>
								{/* Background Video */}
								<div className="absolute top-0 bottom-0 left-0 w-full h-full">
									<div className="hidden xl:block relative pb-[56.25%] overflow-hidden max-w-full h-auto bg-center bg-no-repeat bg-cover min-h-full xl:min-h-screen">
										<iframe
											allowFullScreen
											className={
												contentThree.backgroundImageOrVideo === "Video"
													? "absolute top-0 left-0 border-none w-full h-full"
													: `hidden`
											}
											src={contentThree.backgroundVideoUrl}
										/>
									</div>
								</div>

								{/* Image */}
								<Image
									width={contentThree.backgroundImage?.mediaDetails?.width}
									height={contentThree.backgroundImage?.mediaDetails?.height}
									className={
										contentThree.backgroundImageOrVideo === "Image"
											? `block ${mainImageVideoTailwindcss}`
											: ` hidden`
									}
									src={contentThree.backgroundImage?.sourceUrl}
									alt={`${contentThree.backgroundImage?.altText} image`}
								/>
							</div>
							<div className="absolute top-0 h-screen bottom-0 left-0 w-full opacity-90 bg-gradient-to-b from-darkerBlueTwo from-5% via-darkerBlueTwo via-10% to-transparent to-100%" />
							<div className="absolute top-[35%] sm:top-[50%] lg:top-[20%] xl:top-[25%] :top-[35%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="inline-flex m-0 overflow-hidden tag">
									<span className="py-[6px] px-6 bg-goldPrime">
										{contentThree.backgroundImageOrVideo}
									</span>
								</div>
								<h2
									className="title py-4 lg:py-8 text-white text-6xl md:text-7xl lg:text-8xl w-full lg:w-[55rem] leading-[3rem] lg:leading-[4rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{contentThree?.title}
								</h2>
								<Link
									href={
										contentThree?.uri
											? `/operational-insights${contentThree?.uri}`
											: `/operational-insights`
									}
									className="postLink text-white uppercase tracking-[0.25rem] inline-flex items-center no-underline hover:text-goldPrime hover:stroke-goldPrime"
								>
									<svg
										className={
											contentThree.backgroundImageOrVideo === "Video"
												? `block mr-[12px]`
												: ` hidden`
										}
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
											stroke="#2563eb"
											strokeWidth="2"
										/>
										<path d="M14 10L8 6V14L14 10Z" fill="white" />
									</svg>
									<span className="font-semibold text-medium hover:text-goldPrime">
										{contentThree?.title}
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
				</div>

				<div ref={postRef} className={`postPost ${postPost}`}>
					<motion.article
						initial={initialTwo}
						viewport={{once: true}}
						whileInView={postNotActive ? fadeIn : fadeInThree}
						className={`${post} ${postActive} ${postContentTailwindcss}`}
					>
						<Link
							href={
								contentOne?.uri
									? `/operational-insights${contentOne?.uri}`
									: `/operational-insights`
							}
						>
							<div className="absolute top-0 left-0 h-[5px] w-full">
								<div
									className={`${progressBarFill} h-[inherit] bg-orange transition-all ease-in-out duration-75`}
								/>
							</div>
							<motion.header
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="flex items-center justify-between header"
							>
								<motion.span
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="text-sm text-white uppercase"
								>
									{contentOne.backgroundImageOrVideo}
								</motion.span>
								<motion.span
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="text-sm text-white "
								>
									{dateFormat(new Date(contentOne?.date), "dddd, mmmm d, yyyy")}
								</motion.span>
							</motion.header>
							<motion.div
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="flex flex-col justify-between gap-4"
							>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="title py-4 mt-8 text-white text-xl leading-[2rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{contentOne.title}
								</motion.h3>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={
										contentOne.paragraph
											? `block paragraph mt-2 text-white  text-left leading-[1.5rem]`
											: `hidden`
									}
									dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
										contentOne.paragraph
									)}
								/>
							</motion.div>
						</Link>
					</motion.article>
					<motion.article
						initial={initialTwo}
						viewport={{once: true}}
						whileInView={postNotActive ? fadeIn : fadeInThree}
						className={`${post} ${postNotActive} ${postContentTailwindcss}`}
					>
						<Link
							href={
								contentTwo?.uri
									? `/operational-insights${contentTwo?.uri}`
									: `/operational-insights`
							}
						>
							<div className="absolute top-0 left-0 h-[5px] w-full">
								<div
									className={`${progressBarFill} h-[inherit] bg-orange transition-all ease-in-out duration-75`}
								/>
							</div>
							<motion.header
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="flex items-center justify-between header"
							>
								<motion.span
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="text-sm text-white uppercase"
								>
									{contentTwo.backgroundImageOrVideo}
								</motion.span>
								<motion.span
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="text-sm text-white "
								>
									{dateFormat(new Date(contentTwo?.date), "dddd, mmmm d, yyyy")}
								</motion.span>
							</motion.header>
							<motion.div
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="flex flex-col justify-between gap-4"
							>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="title py-4 mt-8 text-white text-xl leading-[2rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{contentTwo.title}
								</motion.h3>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={
										contentTwo.paragraph
											? `block paragraph mt-2 text-white  text-left leading-[1.5rem]`
											: `hidden`
									}
									dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
										contentTwo.paragraph
									)}
								/>
							</motion.div>
						</Link>
					</motion.article>
					<motion.article
						initial={initialTwo}
						viewport={{once: true}}
						whileInView={postNotActive ? fadeIn : fadeInThree}
						className={`${post} ${postNotActive} ${postContentTailwindcss}`}
					>
						<Link
							href={
								contentThree?.uri
									? `/operational-insights${contentThree?.uri}`
									: `/operational-insights`
							}
						>
							<div className="absolute top-0 left-0 h-[5px] w-full">
								<div
									className={`${progressBarFill} h-[inherit] bg-orange transition-all ease-in-out duration-75`}
								/>
							</div>
							<motion.header
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="flex items-center justify-between header"
							>
								<motion.span
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="text-sm text-white uppercase"
								>
									{contentThree.backgroundImageOrVideo}
								</motion.span>
								<motion.span
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="text-sm text-white "
								>
									{dateFormat(
										new Date(contentThree?.date),
										"dddd, mmmm d, yyyy"
									)}
								</motion.span>
							</motion.header>
							<motion.div
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="flex flex-col justify-between gap-4"
							>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="title py-4 mt-8 text-white text-xl leading-[2rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{contentThree.title}
								</motion.h3>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={
										contentThree.paragraph
											? `block paragraph mt-2 text-white  text-left leading-[1.5rem]`
											: `hidden`
									}
									dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
										contentThree.paragraph
									)}
								/>
							</motion.div>
						</Link>
					</motion.article>
				</div>
			</div>
		</div>
	);
};

export default ContentSlider;
