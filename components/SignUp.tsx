/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {FunctionComponent} from "react";
import {fadeInUp, fadeIn} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	backgroundColor: string;
}

const SignUp: FunctionComponent<IProps> = ({
	title,
	paragraph,
	backgroundColor,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mt-4 w-full lg:max-w-[75rem] mx-auto text-center lg:text-left mb-8 text-darkGrey text-medium";
		} else {
			contentStyling =
				"block mt-4 w-full lg:max-w-[75rem] mx-auto text-center lg:text-left mb-8 text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Sets the Background Color */
	let backgroundColorHex: string;
	if (backgroundColor === "White") {
		backgroundColorHex = "white";
	} else if (backgroundColor === "LightGrey") {
		backgroundColorHex = "lightGrey";
	}

	return (
		<section className={`py-20 bg-${backgroundColorHex}`}>
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap items-center justify-center -mx-4">
					<div className="max-w-2xl px-4 mb-16 lg:mb-0 lg:w-1/2">
						<motion.h2
							variants={fadeIn}
							className="mb-4 font-[600] text-center lg:text-left text-2xl sm:text-3xl lg:text-5xl"
						>
							{title}
						</motion.h2>
						<motion.div
							variants={fadeInUp}
							className={isParagraphContent(paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
						/>
					</div>
					<div className="w-full px-4 lg:w-1/2">
						<div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
							<motion.div
								variants={fadeInUp}
								className="px-6 py-8 mb-6 text-center bg-white border shadow rounded-3xl border-pureBlack"
							>
								<form action="">
									<div className="mb-6">
										<span className="text-center text-tiny text-grey">
											Sign Up
										</span>
										<h4 className="text-2xl py-6 text-center font-[600]">
											Create an account
										</h4>
									</div>
									<div className="flex flex-wrap mb-4 -mx-2">
										<div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
											<input
												className="w-full px-3 py-2 text-base leading-loose rounded bg-lightGrey"
												type="text"
												placeholder="First Name"
											/>
										</div>
										<div className="w-full px-2 lg:w-1/2">
											<input
												className="w-full px-3 py-2 text-base leading-loose rounded bg-lightGrey"
												type="text"
												placeholder="Last Name"
											/>
										</div>
									</div>
									<input
										className="w-full px-3 py-2 mb-4 text-base leading-loose rounded bg-lightGrey"
										type="email"
										placeholder="hello@example.com"
									/>
									<input
										className="w-full px-3 py-2 mb-6 text-base leading-loose rounded bg-lightGrey"
										type="password"
										placeholder="Enter your password"
									/>
									<motion.button
										variants={fadeIn}
										className="mb-4 py-4 w-full rounded text-sm bg-blue hover:bg-yellow text-white font-[600]  transition-all ease-in-out duration-[0.5s]"
									>
										<Link
											href={`/Login`}
											target={``}
											className="text-white text-base font-[600] tracking-loose"
										>
											Sign Up
										</Link>
									</motion.button>
								</form>
								<p className="flex justify-center gap-2 pt-4 text-tiny text-grey">
									<span className="text-tiny">Already have an account?</span>
									<Link
										href={`/login`}
										target={`/`}
										className="text-pink text-tiny hover:text-yellow transition-all ease-in-out duration-[0.5s]"
									>
										Sign In
									</Link>
								</p>
							</motion.div>
							<p className="flex justify-center gap-2 text-center text-grey text-tiny">
								<Link
									href={`/PolicePrivacy`}
									target={`/`}
									className="text-pink text-tiny hover:text-yellow transition-all ease-in-out duration-[0.5s]"
								>
									Police privacy
								</Link>
								<span className="text-tiny">and</span>
								<Link
									href={`/TermsOfUse`}
									target={`/`}
									className="text-pink text-tiny hover:text-yellow transition-all ease-in-out duration-[0.5s]"
								>
									Terms of Use
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
