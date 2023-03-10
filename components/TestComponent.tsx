/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, fadeInTwo, stagger} from "../animations/animations";

import styled from "styled-components";
import DOMPurify from "isomorphic-dompurify";
import React, {useEffect, useRef, useState, FunctionComponent} from "react";
import styles from "../styles/components/ThreeLinksGrid.module.scss";

interface IProps {
	props: string;
}

// styling
const TestComponentStyling = styled.div`
	// Main Content Loop
	.active {
		color: #fff;
		z-index: -1;
		padding: 0rem;
		border-radius: 1.5rem;
		background-color: rgba(13, 23, 42, 0.9);
		clip-path: circle(100% at 50% calc(50%));
		transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);

		p {
			color: #fff;

			a {
				color: #0d172a;
			}
		}
	}

	.not-active {
		border-radius: 1.5rem;
		background-color: #fff;
		clip-path: circle(100% at 50% calc(50%));
		transition: clip-path 1.25s cubic-bezier(0.65, 0, 0.35, 1.25);
	}
`;

const TestComponent: FunctionComponent<IProps> = ({props}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mt-8 font-[400] text-darkGrey text-medium text-left leading-[1.5rem]";
		} else {
			contentStyling =
				"block mt-8 font-[400] text-darkGrey text-medium text-left leading-[1.5rem]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	// Content Styling Loop
	const mainRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Main Content
		const mainParentElement = mainRef.current;
		const mainChildElements = mainParentElement?.querySelectorAll(
			".mainContent > article"
		);

		let currentIndex = 0;

		const intervalId = setInterval(() => {
			// Main Content Loop
			const currentMainPostChild = mainChildElements?.[currentIndex];
			const nextMainPostIndex =
				currentIndex + 1 >= mainChildElements?.length ? 0 : currentIndex + 1;
			const nextMainPostChild = mainChildElements?.[nextMainPostIndex];

			if (currentMainPostChild && nextMainPostChild) {
				// Main Content
				currentMainPostChild.classList.remove("active");
				currentMainPostChild.classList.add("not-active");
				nextMainPostChild.classList.remove("not-active");
				nextMainPostChild.classList.add("active");

				currentIndex = nextMainPostIndex; // update the index
			}
		}, 7000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<TestComponentStyling>
			<div className="relative w-full px-4 py-20 mx-auto lg:w-3/5">
				<div
					ref={mainRef}
					className="flex flex-wrap items-start mx-4 mainContent gap-y-6"
				>
					<article className="relative w-full px-4 active md:w-1/2">
						<div className="relative z-10 px-8 pt-16 pb-20 leading-4 border border-black md:px-12 2xl:px-8 border-opacity-10 rounded-3xl">
							<div className={styles.hoverEffect}>
								<div className="relative inline-flex items-center justify-center w-12 h-12 mb-8 leading-6 text-white rounded-full bg-blue">
									<span className="text-2xl font-bold">1</span>
								</div>
								<h2 className="font-medium leading-tight mb-8 text-4xl 2xl:text-5xl font-heading">
									Real-Time
								</h2>
								<div
									className={isParagraphContent(`<p></p>`)}
									dangerouslySetInnerHTML={createParagraphMarkup(
										`<p>BlueInventory connects with your point of sale system and your e-commerce store so you have an instant snapshot of how your business is performing as a whole.</p>`
									)}
								/>
							</div>
						</div>
					</article>
					<article className="relative w-full px-4 mb-12 not-active md:w-1/2 md:mb-0 md:mt-40">
						<div className="relative z-10 px-8 pt-16 pb-20 leading-4 border border-black md:px-12 2xl:px-8 border-opacity-10 rounded-3xl">
							<div className={styles.hoverEffect}>
								<div className="relative inline-flex items-center justify-center w-12 h-12 mb-8 leading-6 text-white rounded-full bg-blue">
									<span className="text-2xl font-bold">2</span>
								</div>
								<h2 className="font-medium leading-tight mb-8 text-4xl 2xl:text-5xl font-heading">
									In-Depth Data
								</h2>
								<div
									className={isParagraphContent(`<p></p>`)}
									dangerouslySetInnerHTML={createParagraphMarkup(
										`<p>Expand your reporting capabilities, without costly, additional third-party apps. Access a number of pre-built reports and our powerful custom report builder.</p>`
									)}
								/>
							</div>
						</div>
					</article>
					<article className="not-active relative w-full px-4  md:w-1/2 mt-[-8.5rem]">
						<div className="relative z-10 px-8 pt-16 pb-20 leading-4 border border-black md:px-12 2xl:px-8 border-opacity-10 rounded-3xl">
							<div className={styles.hoverEffect}>
								<div className="relative inline-flex items-center justify-center w-12 h-12 mb-8 leading-6 text-white rounded-full bg-blue">
									<span className="text-2xl font-bold">3</span>
								</div>
								<h2 className="font-medium leading-tight mb-8 text-4xl 2xl:text-5xl font-heading">
									User Friendly
								</h2>
								<div
									className={isParagraphContent(`<p></p>`)}
									dangerouslySetInnerHTML={createParagraphMarkup(
										`<p>Our reports are easy to use with lots of filters and customization options. Slice and dice the exact data you want and export as a CSV to simplify bookkeeping.</p>`
									)}
								/>
							</div>
						</div>
					</article>
				</div>
			</div>
		</TestComponentStyling>
	);
};

export default TestComponent;
