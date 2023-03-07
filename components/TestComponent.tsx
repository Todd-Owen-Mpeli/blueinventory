/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
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

	.main-post {
		position: absolute;
		top: 100%;
		right: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		&__image {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			bottom: 0;
			img {
				width: 100%;
				height: 100%;
				display: block;
				object-fit: cover;
			}
			&::before {
				content: "";
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: rgba(#0e0d0e, 0.5);
			}
		}
		&__content {
			position: absolute;
			top: 40%;
			left: 4%;
			transform: translateY(-40%);
			color: #fff;
			width: 90%;
		}
		&__tag-wrapper {
			margin: 0;
			display: inline-flex;
			overflow: hidden;
		}
		&__tag {
			font-size: 0.95em;
			background: #c20000;
			padding: 6px 18px;
		}
		&__title {
			font-weight: 700;
			font-size: 1.95em;
			line-height: 1.25;
			text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
		}
		&__link {
			text-decoration: none;
			color: #fff;
			text-transform: uppercase;
			letter-spacing: 1.5px;
			display: inline-flex;
			align-items: center;
			&-text {
				font-size: 0.9em;
			}
			&-icon {
				&--arrow {
					margin-left: 12px;
				}
				&--play-btn {
					margin-right: 12px;
				}
			}
		}
	}

	.main-post__link:hover .main-post__link-text,
	.main-post__link:hover .main-post__link-icon--arrow path {
		color: #c20000;
		stroke: #c20000;
	}

	.main-post--active {
		top: 0;
		z-index: 1;
		transition: top 0.9s 0.4s ease-out;
	}

	.main-post--not-active {
		top: 100%;
		z-index: 0;
		transition: top 0.75s 2s;
	}

	.main-post.main-post--active .main-post__tag-wrapper {
		width: 25%;
		transition: all 0.98s 1.9s;
	}
	.main-post.main-post--not-active .main-post__tag-wrapper {
		width: 0;
		transition: width 0.3s 0.2s;
	}

	.main-post.main-post--active .main-post__title {
		opacity: 1;
		transform: translateY(0);
		transition: opacity 0.8s 1.42s, transform 0.5s 1.4s;
	}

	.main-post.main-post--not-active .main-post__title {
		transform: translateY(40px);
		opacity: 0;
		transition: transform 0.2s 0.35s, opacity 0.5s 0.2s;
	}

	.main-post.main-post--active .main-post__link {
		opacity: 1;
		transition: opacity 0.9s 2.2s;
	}

	.main-post.main-post--not-active .main-post__link {
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
		background: rgba(#0e0d0e, 0.6);
		opacity: 0.3;
		color: #fff;
		position: relative;
		padding: 16px 20px;
		&--active {
			opacity: 0.95;
			background: #2563eb;
		}
		&:not(.post--active) {
			pointer-events: none;
		}
	}

	.hide-on-mobile {
		display: none;
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
	// const [i, setI] = useState<number>(0);
	// const currentPostRef = useRef<HTMLDivElement>(null);
	// const [posts, setPosts] = useState<NodeListOf<HTMLDivElement>>();

	// let postIndex = 0;
	// let currentPost: HTMLDivElement | null = posts?.[postIndex];

	// useEffect(() => {
	// 	setPosts(document.querySelectorAll<HTMLDivElement>(".post"));
	// }, []);

	// const progressInterval = setInterval(progress, 100);

	// function progress() {
	// 	if (i === 100) {
	// 		setI(-5);

	// 		if (currentPostRef.current) {
	// 			currentPostRef.current.querySelector<HTMLDivElement>(
	// 				".progress-bar__fill"
	// 			)!.style.width = "0";
	// 			currentPostRef.current.classList.remove("post--active");
	// 		}

	// 		postIndex++;

	// 		if (postIndex === posts?.length) {
	// 			postIndex = 0;
	// 		}

	// 		currentPost = posts?.[postIndex];
	// 		currentPostRef.current = currentPost;
	// 	} else {
	// 		setI(i + 1);

	// 		if (currentPostRef.current) {
	// 			currentPostRef.current.querySelector<HTMLDivElement>(
	// 				".progress-bar__fill"
	// 			)!.style.width = `${i}%`;
	// 			currentPostRef.current.classList.add("post--active");
	// 		}
	// 	}
	// }

	// useEffect(() => {
	// 	return () => clearInterval(progressInterval);
	// }, [progressInterval]);

	const iRef = useRef<number>(0);
	const currentPostRef = useRef<HTMLDivElement>(null);
	const currentMainPost = useRef<HTMLDivElement>(null);
	const postsRef = useRef<NodeListOf<HTMLDivElement>>();
	const [posts, setPosts] = useState<NodeListOf<HTMLDivElement>>();

	const [i, setI] = useState<number>(0);
	let postIndex: number = 0;

	useEffect(() => {
		setPosts(document.querySelectorAll<HTMLDivElement>(".post"));
	}, []);

	const progressInterval = setInterval(progress, 100); // 180
	let activeClassCss: string = "main-post--active";
	let notActiveClassCss: string = "main-post--not-active";
	function progress() {
		let currentPost: any;
		if (i === 100) {
			setI(-5);

			// Reset progress bar
			// if (currentPostRef.current) {
			// 	currentPostRef.current.querySelector<HTMLDivElement>(
			// 		".progress-bar__fill"
			// 	)!.style.width = "0";
			// 	currentPostRef.current.classList.remove("post--active");
			// }

			if (currentPostRef.current) {
				currentPostRef.current.querySelector<HTMLDivElement>(
					".progress-bar__fill"
				)!.style.width = "0";
				currentPostRef.current.classList.remove("post--active");
			}

			postIndex++;

			// Main Background Post
			if (currentMainPost.current) {
				currentMainPost.current.classList.add(notActiveClassCss);
				currentMainPost.current.classList.remove(activeClassCss);
			}

			// Reset postIndex to loop over the slides again
			if (postIndex === postsRef.current?.length) {
				postIndex = 0;
			}

			currentPost = postsRef.current?.[postIndex];
			currentPostRef.current = currentPost;
		} else {
			// iRef.current++;

			// if (currentPostRef.current) {
			// 	currentPostRef.current.querySelector<HTMLDivElement>(
			// 		".progress-bar__fill"
			// 	).style.width = `${i}%`;
			// 	currentPostRef.current.querySelector<HTMLDivElement>(
			// 		".progress-bar--primary .progress-bar__fill"
			// 	).style.width = `${i}%`;
			// 	currentPostRef.current.classList.add("post--active");
			// }

			setI(i + 1);

			// Reset progress bar
			if (currentPostRef.current) {
				currentPostRef.current.querySelector<HTMLDivElement>(
					".progress-bar__fill"
				)!.style.width = `${i}%`;
				currentPostRef.current.classList.add("post--active");
			}

			// Main Background Post
			if (currentMainPost.current) {
				currentMainPost.current.classList.add(activeClassCss);
				currentMainPost.current.classList.remove(notActiveClassCss);
			}
		}
	}

	useEffect(() => {
		return () => clearInterval(progressInterval);
	}, [progressInterval]);

	return (
		<TestComponentStyling>
			<div
				className="min-h-[100vh] grid relative gap-y-[2vh]"
				style={{
					gridTemplateRows: "1fr 3fr 1.5fr",
					gridTemplateColumns: "50px 1fr 1fr 1fr 1fr 50px",
				}}
			>
				<div className="progress-bar absolute top-0 left-0 w-full h-[5px]">
					<div className="progress-bar--primary z-[2]">
						<div className="progress-bar__fill" style={{width: `${i}%`}} />
					</div>
				</div>

				<header
					className="h-[100vh] relative"
					style={{gridRow: "1 / 4", gridColumn: "1 / 7"}}
				>
					<div className="relative w-full h-full overflow-hidden">
						<article
							ref={currentMainPost}
							className="main-post main-post--active"
						>
							<div className="main-post__image">
								<img
									src="https://www.formula1.com/content/dam/fom-website/manual/Misc/2019-Races/Monaco2019/McLarenMonaco19.jpg.transform/9col/image.jpg"
									alt="New McLaren wind tunnel 'critical' to future performance, says Tech Director Key"
								/>
							</div>
							<div className="main-post__content">
								<div className="main-post__tag-wrapper">
									<span className="main-post__tag">News</span>
								</div>
								<h1 className="main-post__title">
									New McLaren wind tunnel &apos;critical&apos; to future
									performance, says Tech Director Key
								</h1>
								<a className="main-post__link" href="#">
									<span className="main-post__link-text">find out more</span>
									<svg
										className="main-post__link-icon main-post__link-icon--arrow"
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
								</a>
							</div>
						</article>
						<article
							ref={currentMainPost}
							className="main-post main-post--not-active"
						>
							<div className="main-post__image">
								<img
									src="https://www.formula1.com/content/dam/fom-website/sutton/2019/Hungary/Saturday/1017645792-LAT-20190803-_2ST5188.jpg.transform/9col-retina/image.jpg"
									alt="What To Watch For in the 2019 Hungarian Grand Prix"
								/>
							</div>
							<div className="main-post__content">
								<div className="main-post__tag-wrapper">
									<span className="main-post__tag">Video</span>
								</div>
								<h1 className="main-post__title">
									What To Watch For in the 2023 Hungarian Grand Prix
								</h1>
								<a className="main-post__link" href="#">
									<svg
										className="main-post__link-icon main-post__link-icon--play-btn"
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
									<span className="main-post__link-text">play video</span>
								</a>
							</div>
						</article>
						<article
							ref={currentMainPost}
							className="main-post main-post--not-active"
						>
							<div className="main-post__image">
								<img
									src="https://www.formula1.com/content/dam/fom-website/manual/Misc/2019-Races/Austria-2019/Top3Austria2019.jpg.transform/9col-retina/image.jpg"
									alt="Hamilton wants harder championship fight from Leclerc and Verstappen"
								/>
							</div>
							<div className="main-post__content">
								<div className="main-post__tag-wrapper">
									<span className="main-post__tag">News</span>
								</div>
								<h1 className="main-post__title">
									Hamilton wants harder championship fight from Leclerc and
									Verstappen
								</h1>
								<a className="main-post__link" href="#">
									<span className="main-post__link-text">find out more</span>
									<svg
										className="main-post__link-icon main-post__link-icon--arrow"
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
								</a>
							</div>
						</article>
					</div>
				</header>

				<div className="posts-wrapper hidden lg:flex flex-col">
					<article
						ref={currentPostRef}
						className="bg-pureBlack opacity-30 text-white relative py-4 px-6"
					>
						<Link href={`/`}>
							<div className="progress-bar">
								<div className="progress-bar__fill"></div>
							</div>
							<header className="flex justify-between items-center">
								<span className="text-tiny text-orange font-[600]">News</span>
								<p className="text-tiny text-white font-[400]">
									16 August 2023
								</p>
							</header>
							<h2 className="text-medium mt-8 text-white font-[400] leading-[1.5rem]">
								New McLaren wind tunnel &apos;critical&apos; to future
								performance, says Tech Director Key
							</h2>
						</Link>
					</article>
					{/* <article ref={currentPostRef} className="post">
						<div className="progress-bar">
							<div className="progress-bar__fill"></div>
						</div>
						<header className="post__header">
							<span className="post__tag">Video</span>
							<p className="post__published">12 August 2023</p>
						</header>
						<h2 className="post__title">
							What To Watch For in the 2023 Hungarian Grand Prix
						</h2>
					</article>
					<article ref={currentPostRef} className="post">
						<div className="progress-bar">
							<div className="progress-bar__fill"></div>
						</div>
						<header className="post__header">
							<span className="post__tag">News</span>
							<p className="post__published">08 August 2023</p>
						</header>
						<h2 className="post__title">
							Hamilton wants harder championship fight from Leclerc and
							Verstappen
						</h2>
					</article> */}
				</div>
			</div>
		</TestComponentStyling>
	);
};

export default TestComponent;
