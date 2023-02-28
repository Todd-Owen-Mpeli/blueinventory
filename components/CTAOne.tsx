/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";

interface IProps {
	title: string;
	titleTwo: string;
	paragraph: string;
	paragraphTwo: string;
}

const CTAOne: FunctionComponent<IProps> = ({
	title,
	titleTwo,
	paragraph,
	paragraphTwo,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto py-8 text-center text-white font-[400] text-medium";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto py-8 text-center text-white font-[400] text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="bg-darkBlue text-white rounded-[0px] lg:rounded-t-[125px]">
			<div className="py-20">
				<div className="container px-4 mx-auto">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
							{title}
						</h2>
						<div
							className={isParagraphContent(paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
						/>
					</div>
					<div className="relative z-50 p-10 text-center">
						<div className="relative z-20 mx-auto md:max-w-2xl">
							<h3 className="mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
								{titleTwo}
							</h3>
							<div
								className={isParagraphContent(paragraphTwo)}
								dangerouslySetInnerHTML={createParagraphMarkup(paragraphTwo)}
							/>
							<div className="mx-auto text-left md:max-w-md">
								<div className="flex flex-wrap mb-1">
									<div className="w-full mb-3 md:flex-1 md:mb-0 md:mr-6">
										<input
											className="w-full px-4 py-3 leading-tight border rounded-lg text-grey placeholder-grey focus:outline-none focus:ring-2 focus:ring-limeGreen focus:ring-opacity-50 border-lightGrey shadow-xsm"
											type="text"
											placeholder="Enter your email"
										/>
									</div>
									<div className="w-full md:w-auto">
										<Link
											href="#"
											className="inline-block w-full px-5 py-3 font-medium leading-5 text-center text-white border border-transparent rounded-md shadow-sm bg-blue hover:bg-limeGreen hover:ease-in-out hover:duration-200 focus:ring-2 focus:ring-limeGreen focus:ring-opacity-50"
										>
											Subscribe
										</Link>
									</div>
								</div>
								<span className="text-xs font-medium text-lightGrey">
									<span>We care about your data in our </span>
									<Link
										href="#"
										className="text-limeGreen hover:text-limeGreen"
									>
										privacy policy
									</Link>
								</span>
							</div>
						</div>
						<div className="relative z-10">
							<Image
								width={550}
								height={550}
								alt={`Spaceship Icon`}
								src="/img/Icons/spaceship.png"
								className="absolute top-[-150px] left-[100px] w-[350px] h-[350px]"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTAOne;
