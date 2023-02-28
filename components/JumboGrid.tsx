import Image from "next/image";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import styles from "../styles/components/jumboGrid.module.scss";

const JumboGrid = () => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] text-center lg:text-left text-darkGrey text-medium font-[400]";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] text-center lg:text-left text-darkGrey text-medium font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.jumboGrid}>
			<div className="container mx-auto">
				<div className="content">
					<div className="flex flex-col gap-20 lg:flex-row">
						<div className="w-full px-4 my-auto lg:w-1/2">
							<Image
								src="/img/pexels-edmond-dantès-8550655.jpg"
								className="w-full h-full my-auto object-cover rounded-[15px]"
								alt=""
								width="100"
								height="100"
								layout="responsive"
							/>
						</div>
						<div className="w-full px-4 my-auto lg:w-1/2">
							<h2 className="mb-12 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
								Gain more insight into how people use your
							</h2>
							<div className="flex flex-wrap -mx-4 text-center md:text-left">
								<div className="w-full px-4 mb-8 md:w-1/2">
									<div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-xl font-semibold text-white rounded-full bg-blue">
										1
									</div>
									<h3 className="mb-2 text-xl font-bold">Custom analytics</h3>
									<p className="font-medium text-grey">
										Get a complete sales dashboard in the cloud. See activity,
										revenue and social metrics all in one place.
									</p>
								</div>
								<div className="w-full px-4 mb-8 md:w-1/2">
									<div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-xl font-semibold text-white rounded-full bg-blue">
										2
									</div>
									<h3 className="mb-2 text-xl font-bold">Team Management</h3>
									<p className="font-medium text-grey">
										Our calendar lets you know what is happening with customer
										and projects so you are able to control process.
									</p>
								</div>
								<div className="w-full px-4 mb-8 md:w-1/2">
									<div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-xl font-semibold text-white rounded-full bg-blue">
										3
									</div>
									<h3 className="mb-2 text-xl font-bold">Easy setup</h3>
									<p className="font-medium text-grey">
										End to End Business Platform, Sales Management, Marketing
										Automation, Help Desk and many more
									</p>
								</div>
								<div className="w-full px-4 md:w-1/2">
									<div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-xl font-semibold text-white rounded-full bg-blue">
										4
									</div>
									<h3 className="mb-2 text-xl font-bold">Build your website</h3>
									<p className="font-medium text-grey">
										A tool that lets you build a dream website even if you know
										nothing about web design or programming.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default JumboGrid;
