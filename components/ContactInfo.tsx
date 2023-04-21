// Import
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

interface IProps {
	email: string;
	title: string;
	subtitle: string;
	emailTwo: string;
	paragraph: string;
	phoneNumber: string;
	phoneNumberTwo: string;
	groupOne: {
		title: string;
		subtitle: string;
		address: string;
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				height: number;
				width: number;
			};
		};
	};
	groupTwo: {
		title: string;
		subtitle: string;
		address: string;
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				height: number;
				width: number;
			};
		};
	};
}

const ContactInfo: FC<IProps> = ({
	email,
	title,
	groupOne,
	subtitle,
	emailTwo,
	paragraph,
	groupTwo,
	phoneNumber,
	phoneNumberTwo,
}) => {
	return (
		<section className="relative py-20 overflow-hidden bg-white bg-center bg-no-repeat bg-cover md:py-32">
			<div className="container relative px-4 mx-auto">
				<motion.div
					variants={stagger}
					className="max-w-2xl mx-auto text-center mb-22"
				>
					<motion.span
						variants={fadeInUp}
						className="inline-block px-3 py-1 mb-4 font-semibold uppercase rounded-full text-tiny text-goldPrime"
					>
						{subtitle}
					</motion.span>
					<motion.h1
						variants={fadeInUp}
						className="mb-4 text-5xl font-bold text-darkBlue font-heading xs:text-6xl"
					>
						{title}
					</motion.h1>
					<Paragraph
						content={paragraph}
						tailwindStyling="my-10 py-10 w-full lg:max-w-3xl mt-4 text-center lg:text-left text-black"
					/>
				</motion.div>
				<div className="max-w-5xl mx-auto">
					<motion.div
						variants={stagger}
						className="flex flex-wrap justify-center -mx-4"
					>
						<motion.div
							variants={fadeInUp}
							className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0"
						>
							<div className="h-full max-w-lg mx-auto border-2 rounded-md border-grey">
								<div className="px-4 pt-4 border-b border-grey pb-9">
									<div className="relative mb-10">
										<Image
											alt={groupOne?.image?.altText}
											src={groupOne?.image?.sourceUrl}
											width={groupOne?.image?.mediaDetails?.width}
											height={groupOne?.image?.mediaDetails?.height}
											className={
												groupOne?.image?.sourceUrl
													? `block w-full h-full min-h-[350px] rounded-md object-cover object-center`
													: `hidden`
											}
										/>
										<div className="absolute bottom-0 right-0 mr-4 -mb-12">
											<div className="relative flex items-center justify-center w-24 h-24">
												<div className="absolute top-0 left-0 w-full h-full rounded-full bg-lightBlue bg-opacity-90 animate-pulse animate-scaleChange"></div>
												<div className="relative flex items-center justify-center rounded-full bg-lightBlue w-15 h-15 p-[1.5rem]">
													<svg
														width="25"
														height="25"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
															stroke="white"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														></path>
													</svg>
												</div>
											</div>
										</div>
									</div>
									<motion.div variants={stagger} className="px-4">
										<motion.span variants={fadeInUp} className="text-tiny">
											{groupOne?.subtitle}
										</motion.span>
										<motion.h4
											variants={fadeInUp}
											className="text-xl font-semibold"
										>
											{groupOne?.title}
										</motion.h4>
									</motion.div>
								</div>
								<div className="px-6 py-8">
									<div className="flex items-center mb-6">
										<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 p-[10px] mr-5 rounded-full bg-blue">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												version="1.1"
												width="256"
												height="256"
												viewBox="0 0 256 256"
											>
												<defs></defs>
												<g
													style={{
														stroke: "none",
														strokeWidth: "0",
														strokeDasharray: "none",
														strokeLinecap: "butt",
														strokeLinejoin: "miter",
														strokeMiterlimit: "10",
														fill: "#ffffff",
														fillRule: "nonzero",
														opacity: "1",
													}}
													transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
												>
													<path
														d="M 45 90 c -1.062 0 -2.043 -0.561 -2.583 -1.475 l -4.471 -7.563 c -9.222 -15.591 -17.933 -30.317 -20.893 -36.258 c -2.086 -4.277 -3.138 -8.852 -3.138 -13.62 C 13.916 13.944 27.86 0 45 0 c 17.141 0 31.085 13.944 31.085 31.084 c 0 4.764 -1.051 9.339 -3.124 13.596 c -0.021 0.042 -0.042 0.083 -0.063 0.124 c -3.007 6.005 -11.672 20.654 -20.843 36.159 l -4.472 7.563 C 47.044 89.439 46.062 90 45 90 z M 45 6 C 31.168 6 19.916 17.253 19.916 31.084 c 0 3.848 0.847 7.539 2.518 10.969 c 2.852 5.721 11.909 21.033 20.667 35.839 L 45 81.104 l 1.89 -3.196 c 8.763 -14.813 17.823 -30.131 20.687 -35.879 c 0.012 -0.022 0.023 -0.045 0.035 -0.067 c 1.642 -3.406 2.474 -7.065 2.474 -10.877 C 70.085 17.253 58.832 6 45 6 z"
														style={{
															stroke: "none",
															strokeWidth: "1",
															strokeDasharray: "none",
															strokeLinecap: "butt",
															strokeLinejoin: "miter",
															strokeMiterlimit: "10",
															fill: "#ffffff",
															fillRule: "nonzero",
															opacity: "1",
														}}
														transform=" matrix(1 0 0 1 0 0) "
														stroke-linecap="round"
													/>
													<path
														d="M 45 44.597 c -8.076 0 -14.646 -6.57 -14.646 -14.646 S 36.924 15.306 45 15.306 c 8.075 0 14.646 6.57 14.646 14.646 S 53.075 44.597 45 44.597 z M 45 21.306 c -4.767 0 -8.646 3.878 -8.646 8.646 s 3.878 8.646 8.646 8.646 c 4.768 0 8.646 -3.878 8.646 -8.646 S 49.768 21.306 45 21.306 z"
														style={{
															stroke: "none",
															strokeWidth: "1",
															strokeDasharray: "none",
															strokeLinecap: "butt",
															strokeLinejoin: "miter",
															strokeMiterlimit: "10",
															fill: "#ffffff",
															fillRule: "nonzero",
															opacity: "1",
														}}
														transform=" matrix(1 0 0 1 0 0) "
														stroke-linecap="round"
													/>
												</g>
											</svg>
										</div>
										<span className="text-base">{groupOne?.address}</span>
									</div>
									<motion.div variants={stagger} className="flex items-center">
										<motion.div
											variants={fadeInUp}
											className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-5 rounded-full bg-darkBlue"
										>
											<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
													stroke="white"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
											</svg>
										</motion.div>
										<motion.div variants={fadeInUp}>
											<Link
												className="font-medium tracking-wide text-black hover:text-goldPrime"
												href={`mailto:${email}`}
											>
												{email}
											</Link>
										</motion.div>
									</motion.div>
								</div>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className="w-full px-4 lg:w-1/2">
							<div className="h-full max-w-lg mx-auto border-2 rounded-md border-grey">
								<div className="px-4 pt-4 border-b border-grey pb-9">
									<div className="relative mb-10">
										<Image
											alt={groupTwo?.image?.altText}
											src={groupTwo?.image?.sourceUrl}
											width={groupTwo?.image?.mediaDetails?.width}
											height={groupTwo?.image?.mediaDetails?.height}
											className={
												groupTwo?.image?.sourceUrl
													? `block w-full h-full min-h-[350px] rounded-md object-cover object-center`
													: `hidden`
											}
										/>
										<div className="absolute bottom-0 right-0 mr-4 -mb-12">
											<div className="relative flex items-center justify-center w-24 h-24">
												<div className="absolute top-0 left-0 w-full h-full rounded-full bg-lightBlue bg-opacity-90 animate-pulse animate-scaleChange"></div>
												<div className="relative flex items-center justify-center rounded-full bg-lightBlue w-15 h-15 p-[1.5rem]">
													<svg
														width="25"
														height="25"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
															stroke="white"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														></path>
													</svg>
												</div>
											</div>
										</div>
									</div>
									<motion.div variants={stagger} className="px-4">
										<motion.span variants={fadeInUp} className="text-tiny">
											{groupTwo?.subtitle}
										</motion.span>
										<motion.h4
											variants={fadeInUp}
											className="text-3xl font-semibold"
										>
											{groupTwo?.title}
										</motion.h4>
									</motion.div>
								</div>
								<div className="px-6 py-8">
									<div className="flex items-center mb-6">
										<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 p-[10px] mr-5 rounded-full bg-blue">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												version="1.1"
												width="256"
												height="256"
												viewBox="0 0 256 256"
											>
												<defs></defs>
												<g
													style={{
														stroke: "none",
														strokeWidth: "0",
														strokeDasharray: "none",
														strokeLinecap: "butt",
														strokeLinejoin: "miter",
														strokeMiterlimit: "10",
														fill: "#ffffff",
														fillRule: "nonzero",
														opacity: "1",
													}}
													transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
												>
													<path
														d="M 45 90 c -1.062 0 -2.043 -0.561 -2.583 -1.475 l -4.471 -7.563 c -9.222 -15.591 -17.933 -30.317 -20.893 -36.258 c -2.086 -4.277 -3.138 -8.852 -3.138 -13.62 C 13.916 13.944 27.86 0 45 0 c 17.141 0 31.085 13.944 31.085 31.084 c 0 4.764 -1.051 9.339 -3.124 13.596 c -0.021 0.042 -0.042 0.083 -0.063 0.124 c -3.007 6.005 -11.672 20.654 -20.843 36.159 l -4.472 7.563 C 47.044 89.439 46.062 90 45 90 z M 45 6 C 31.168 6 19.916 17.253 19.916 31.084 c 0 3.848 0.847 7.539 2.518 10.969 c 2.852 5.721 11.909 21.033 20.667 35.839 L 45 81.104 l 1.89 -3.196 c 8.763 -14.813 17.823 -30.131 20.687 -35.879 c 0.012 -0.022 0.023 -0.045 0.035 -0.067 c 1.642 -3.406 2.474 -7.065 2.474 -10.877 C 70.085 17.253 58.832 6 45 6 z"
														style={{
															stroke: "none",
															strokeWidth: "1",
															strokeDasharray: "none",
															strokeLinecap: "butt",
															strokeLinejoin: "miter",
															strokeMiterlimit: "10",
															fill: "#ffffff",
															fillRule: "nonzero",
															opacity: "1",
														}}
														transform=" matrix(1 0 0 1 0 0) "
														stroke-linecap="round"
													/>
													<path
														d="M 45 44.597 c -8.076 0 -14.646 -6.57 -14.646 -14.646 S 36.924 15.306 45 15.306 c 8.075 0 14.646 6.57 14.646 14.646 S 53.075 44.597 45 44.597 z M 45 21.306 c -4.767 0 -8.646 3.878 -8.646 8.646 s 3.878 8.646 8.646 8.646 c 4.768 0 8.646 -3.878 8.646 -8.646 S 49.768 21.306 45 21.306 z"
														style={{
															stroke: "none",
															strokeWidth: "1",
															strokeDasharray: "none",
															strokeLinecap: "butt",
															strokeLinejoin: "miter",
															strokeMiterlimit: "10",
															fill: "#ffffff",
															fillRule: "nonzero",
															opacity: "1",
														}}
														transform=" matrix(1 0 0 1 0 0) "
														stroke-linecap="round"
													/>
												</g>
											</svg>
										</div>
										<span className="text-base">{groupTwo?.address}</span>
									</div>
									<motion.div variants={stagger} className="flex items-center">
										<motion.div
											variants={fadeInUp}
											className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-5 rounded-full bg-darkBlue"
										>
											<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
													stroke="white"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
											</svg>
										</motion.div>
										<motion.div variants={fadeInUp}>
											<Link
												className="font-medium tracking-wide text-black hover:text-goldPrime"
												href={`mailto:${emailTwo}`}
											>
												{emailTwo}
											</Link>
										</motion.div>
									</motion.div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactInfo;
