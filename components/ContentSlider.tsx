import Link from "next/link";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import dateFormat from "dateformat";
import React, {useEffect, useRef, FC} from "react";
import styles from "../styles/components/ContentSlider.module.scss";

interface IProps {
	content: {
		uri: string;
		date: string;
		title: string;
		template: {
			flexibleContent: {
				flexibleContent: [
					{
						fieldGroupName: string;
						backgroundVideoUrl: string;
						backgroundImageOrVideo: string;
						backgroundImage: {
							altText: string;
							sourceUrl: string;
							mediaDetails: {
								height: number;
								width: number;
							};
						};
					},
					{
						fieldGroupName: string;
						paragraph: string;
						title: string;
					}
				];
			};
		};
	};
	contentTwo: {
		uri: string;
		date: string;
		title: string;
		template: {
			flexibleContent: {
				flexibleContent: [
					{
						fieldGroupName: string;
						backgroundVideoUrl: string;
						backgroundImageOrVideo: string;
						backgroundImage: {
							altText: string;
							sourceUrl: string;
							mediaDetails: {
								height: number;
								width: number;
							};
						};
					},
					{
						fieldGroupName: string;
						paragraph: string;
						title: string;
					}
				];
			};
		};
	};
	contentThree: {
		uri: string;
		date: string;
		title: string;
		template: {
			flexibleContent: {
				flexibleContent: [
					{
						fieldGroupName: string;
						backgroundVideoUrl: string;
						backgroundImageOrVideo: string;
						backgroundImage: {
							altText: string;
							sourceUrl: string;
							mediaDetails: {
								height: number;
								width: number;
							};
						};
					},
					{
						fieldGroupName: string;
						paragraph: string;
						title: string;
					}
				];
			};
		};
	};
}

const ContentSlider: FC<IProps> = ({content, contentTwo, contentThree}) => {
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
	const postContentTailwindcss: string = `relative px-8  py-4 text-white transition-all duration-75 ease-in-out opacity-30`;

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

		const intervalId: NodeJS.Timer = setInterval(() => {
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
		<section
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
									backgroundImage: `url("${content?.template?.flexibleContent?.flexibleContent[0]?.backgroundImage?.sourceUrl}")`,
								}}
							>
								{/* Background Video */}
								<div className="absolute top-0 bottom-0 left-0 w-full h-full">
									<div className="hidden xl:block relative pb-[56.25%] overflow-hidden max-w-full h-auto bg-center bg-no-repeat bg-cover min-h-full xl:min-h-screen">
										<iframe
											allowFullScreen
											className={
												content?.template?.flexibleContent?.flexibleContent[0]
													?.backgroundImageOrVideo === "Video"
													? "absolute top-0 left-0 border-none w-full h-full"
													: `hidden`
											}
											src={
												content?.template?.flexibleContent?.flexibleContent[0]
													?.backgroundVideoUrl
											}
										/>
									</div>
								</div>

								{/* Image */}
								<Image
									width={
										content?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImage?.mediaDetails?.width
									}
									height={
										content?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImage?.mediaDetails?.height
									}
									className={
										content?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImageOrVideo === "Image"
											? `block ${mainImageVideoTailwindcss}`
											: ` hidden`
									}
									src={
										content?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImage?.sourceUrl
									}
									alt={`${content?.template?.flexibleContent?.flexibleContent[0]?.backgroundImage?.altText} image`}
								/>
							</div>
							<div className="absolute top-[35%] sm:top-[50%] lg:top-[20%] xl:top-[25%] :top-[35%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="inline-flex m-0 overflow-hidden tag">
									<span className="py-[6px] px-6 bg-goldPrime">
										{
											content?.template?.flexibleContent?.flexibleContent[0]
												?.backgroundImageOrVideo
										}
									</span>
								</div>
								<h2
									className="title py-4 lg:py-8 text-white text-6xl md:text-7xl lg:text-8xl w-full lg:w-[55rem] leading-[3rem] lg:leading-[4rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{content?.title}
								</h2>
								<Link
									href={
										content?.uri
											? `/operational-insights${content?.uri}`
											: `/operational-insights`
									}
									className="postLink text-white uppercase tracking-[0.25rem] inline-flex items-center no-underline hover:text-goldPrime hover:stroke-goldPrime"
								>
									<svg
										className={
											content?.template?.flexibleContent?.flexibleContent[0]
												?.backgroundImageOrVideo === "Video"
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
									<span className="font-semibold text-medium hover:text-blue">
										{content?.title}
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
									backgroundImage: `url("${contentTwo?.template?.flexibleContent?.flexibleContent[0]?.backgroundImage?.sourceUrl}")`,
								}}
							>
								{/* Background Video */}
								<div className="absolute top-0 bottom-0 left-0 w-full h-full">
									<div className="hidden xl:block relative pb-[56.25%] overflow-hidden max-w-full h-auto bg-center bg-no-repeat bg-cover min-h-full xl:min-h-screen">
										<iframe
											allowFullScreen
											className={
												contentTwo?.template?.flexibleContent
													?.flexibleContent[0]?.backgroundImageOrVideo ===
												"Video"
													? "absolute top-0 left-0 border-none w-full h-full"
													: `hidden`
											}
											src={
												contentTwo?.template?.flexibleContent
													?.flexibleContent[0]?.backgroundVideoUrl
											}
										/>
									</div>
								</div>

								{/* Image */}
								<Image
									width={
										contentTwo?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImage?.mediaDetails?.width
									}
									height={
										contentTwo?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImage?.mediaDetails?.height
									}
									className={
										contentTwo?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImageOrVideo === "Image"
											? `block ${mainImageVideoTailwindcss}`
											: ` hidden`
									}
									src={
										contentTwo?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImage?.sourceUrl
									}
									alt={`${contentTwo?.template?.flexibleContent?.flexibleContent[0]?.backgroundImage?.altText} image`}
								/>
							</div>
							<div className="absolute top-[35%] sm:top-[50%] lg:top-[20%] xl:top-[25%] :top-[35%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="inline-flex m-0 overflow-hidden tag">
									<span className="py-[6px] px-6 bg-goldPrime">
										{
											contentTwo?.template?.flexibleContent?.flexibleContent[0]
												?.backgroundImageOrVideo
										}
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
											contentTwo?.template?.flexibleContent?.flexibleContent[0]
												?.backgroundImageOrVideo === "Video"
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
									<span className="font-semibold text-medium hover:text-blue">
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
									backgroundImage: `url("${contentThree?.template?.flexibleContent?.flexibleContent[0]?.backgroundImage?.sourceUrl}")`,
								}}
							>
								{/* Background Video */}
								<div className="absolute top-0 bottom-0 left-0 w-full h-full">
									<div className="hidden xl:block relative pb-[56.25%] overflow-hidden max-w-full h-auto bg-center bg-no-repeat bg-cover min-h-full xl:min-h-screen">
										<iframe
											allowFullScreen
											className={
												contentThree?.template?.flexibleContent
													?.flexibleContent[0]?.backgroundImageOrVideo ===
												"Video"
													? "absolute top-0 left-0 border-none w-full h-full"
													: `hidden`
											}
											src={
												contentThree?.template?.flexibleContent
													?.flexibleContent[0]?.backgroundVideoUrl
											}
										/>
									</div>
								</div>

								{/* Image */}
								<Image
									width={
										contentThree?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImage?.mediaDetails?.width
									}
									height={
										contentThree?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImage?.mediaDetails?.height
									}
									className={
										contentThree?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImageOrVideo === "Image"
											? `block ${mainImageVideoTailwindcss}`
											: ` hidden`
									}
									src={
										contentThree?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImage?.sourceUrl
									}
									alt={`${contentThree?.template?.flexibleContent?.flexibleContent[0]?.backgroundImage?.altText} image`}
								/>
							</div>
							<div className="absolute top-[35%] sm:top-[50%] lg:top-[20%] xl:top-[25%] :top-[35%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="inline-flex m-0 overflow-hidden tag">
									<span className="py-[6px] px-6 bg-goldPrime">
										{
											contentThree?.template?.flexibleContent
												?.flexibleContent[0]?.backgroundImageOrVideo
										}
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
											contentThree?.template?.flexibleContent
												?.flexibleContent[0]?.backgroundImageOrVideo === "Video"
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
									<span className="font-semibold text-medium hover:text-blue">
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
					<article
						className={`${post} ${postActive} ${postContentTailwindcss}`}
					>
						<Link
							href={
								content?.uri
									? `/operational-insights${content?.uri}`
									: `/operational-insights`
							}
						>
							<div className="absolute top-0 left-0 h-[5px] w-full">
								<div
									className={`${progressBarFill} h-[inherit] bg-orange transition-all ease-in-out duration-75`}
								/>
							</div>
							<header className="flex items-center justify-between header">
								<span className="text-sm text-white uppercase">
									{
										content?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImageOrVideo
									}
								</span>
								<span className="text-sm text-white ">
									{dateFormat(new Date(content?.date), "dddd, mmmm d, yyyy")}
								</span>
							</header>
							<div className="flex flex-col justify-between gap-4">
								<h3
									className="title py-4 mt-8 text-white text-xl leading-[2rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{
										content?.template?.flexibleContent?.flexibleContent[1]
											?.title
									}
								</h3>
								<div
									className={
										content?.template?.flexibleContent?.flexibleContent[1]
											?.paragraph
											? `block paragraph mt-2 text-white text-base text-left leading-[1.5rem]`
											: `hidden`
									}
									dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
										content?.template?.flexibleContent?.flexibleContent[1]
											?.paragraph
									)}
								/>
							</div>
						</Link>
					</article>
					<article
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
							<header className="flex items-center justify-between header">
								<span className="text-sm text-white uppercase">
									{
										contentTwo?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImageOrVideo
									}
								</span>
								<span className="text-sm text-white ">
									{dateFormat(new Date(contentTwo?.date), "dddd, mmmm d, yyyy")}
								</span>
							</header>
							<div className="flex flex-col justify-between gap-4">
								<h3
									className="title py-4 mt-8 text-white text-xl leading-[2rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{
										contentTwo?.template?.flexibleContent?.flexibleContent[1]
											?.title
									}
								</h3>
								<div
									className={
										contentTwo?.template?.flexibleContent?.flexibleContent[1]
											?.paragraph
											? `block paragraph mt-2 text-white text-base text-left leading-[1.5rem]`
											: `hidden`
									}
									dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
										contentTwo?.template?.flexibleContent?.flexibleContent[1]
											?.paragraph
									)}
								/>
							</div>
						</Link>
					</article>
					<article
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
							<header className="flex items-center justify-between header">
								<span className="text-sm text-white uppercase">
									{
										contentThree?.template?.flexibleContent?.flexibleContent[0]
											?.backgroundImageOrVideo
									}
								</span>
								<span className="text-sm text-white ">
									{dateFormat(
										new Date(contentThree?.date),
										"dddd, mmmm d, yyyy"
									)}
								</span>
							</header>
							<div className="flex flex-col justify-between gap-4">
								<h3
									className="title py-4 mt-8 text-white text-xl leading-[2rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{
										contentThree?.template?.flexibleContent?.flexibleContent[1]
											?.title
									}
								</h3>
								<div
									className={
										contentThree?.template?.flexibleContent?.flexibleContent[1]
											?.paragraph
											? `block paragraph mt-2 text-white text-base text-left leading-[1.5rem]`
											: `hidden`
									}
									dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
										contentThree?.template?.flexibleContent?.flexibleContent[1]
											?.paragraph
									)}
								/>
							</div>
						</Link>
					</article>
				</div>
			</div>
		</section>
	);
};

export default ContentSlider;
