// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import BulletListCard from "./Cards/BulletListCard";
import PaymentProvidersCard from "./Cards/PaymentProvidersCard";

interface IProps {
	title: string;
	italic: string;
	pointOne: string;
	pointTwo: string;
	paragraph: string;
	card: {
		bulletList: [
			{
				id: string;
				bulletPoint: string;
			}
		];
	};
	stripePremiumPlan: {
		name: string;
		description: string;
		price: number;
		paymentRecurringInterval: string;
	};
	stripeStandardPlan: {
		name: string;
		description: string;
		price: number;
		paymentRecurringInterval: string;
	};
	paymentProviders: [
		{
			id: string;
			logo: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
}

const Pricing: FC<IProps> = ({
	card,
	title,
	italic,
	pointOne,
	pointTwo,
	paragraph,
	paymentProviders,
	stripePremiumPlan,
	stripeStandardPlan,
}) => {
	return (
		<section
			id="Pricing"
			className="relative pb-24 overflow-hidden bg-lightGrey"
		>
			<div className="pt-32 pb-8">
				<div className="container px-4 mx-auto">
					<motion.div
						variants={stagger}
						className="max-w-2xl mx-auto mb-24 text-center lg:max-w-5xl"
					>
						<motion.span
							variants={fadeInUp}
							className="inline-block px-3 py-1 mb-4 text-sm font-[400] tracking-widest text-white uppercase rounded-full bg-blue"
						>
							Pricing
						</motion.span>
						<motion.h1
							variants={stagger}
							className="mb-6 text-4xl font-bold text-darkBlue font-heading sm:text-6xl lg:text-7xl"
						>
							<motion.span variants={fadeInUp}>{title}</motion.span>
							<motion.span
								variants={fadeInUp}
								className="ml-4 font-serif italic"
							>
								{italic}
							</motion.span>
						</motion.h1>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-xl mx-auto text-base mt-10 text-black"
						/>
					</motion.div>
				</div>
			</div>
			<div className="container px-4 mx-auto">
				<motion.div variants={stagger} className="mx-auto max-w-8xl">
					{/* Payment Options Cards */}
					<motion.div variants={fadeInUp} className="mb-16">
						<motion.div variants={stagger} className="flex flex-wrap -mx-4">
							<motion.div
								variants={fadeInUp}
								className="w-full px-4 mb-8 lg:w-1/3 lg:pt-16 lg:mb-0"
							>
								<div className="max-w-lg p-10 mx-auto bg-white border border-grey rounded-3xl">
									<div className="flex items-center justify-center w-10 h-10 mb-4 border rounded-full border-darkBlue">
										<svg
											version="1.1"
											id="Layer_1"
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="96px"
											height="96px"
											viewBox="0 0 96 96"
											className="w-5 h-5"
											enableBackground="new 0 0 96 96"
										>
											<g>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													fill="#09275e"
													d="M48,0c26.51,0,48,21.49,48,48S74.51,96,48,96S0,74.51,0,48 S21.49,0,48,0L48,0z M26.764,49.277c0.644-3.734,4.906-5.813,8.269-3.79c0.305,0.182,0.596,0.398,0.867,0.646l0.026,0.025 c1.509,1.446,3.2,2.951,4.876,4.443l1.438,1.291l17.063-17.898c1.019-1.067,1.764-1.757,3.293-2.101 c5.235-1.155,8.916,5.244,5.206,9.155L46.536,63.366c-2.003,2.137-5.583,2.332-7.736,0.291c-1.234-1.146-2.576-2.312-3.933-3.489 c-2.35-2.042-4.747-4.125-6.701-6.187C26.993,52.809,26.487,50.89,26.764,49.277L26.764,49.277z"
												/>
											</g>
										</svg>
									</div>
									<span className="block mb-2 text-2xl font-semibold text-darkBlue">
										{stripeStandardPlan?.name}
									</span>
									<Paragraph
										content={stripeStandardPlan?.description}
										tailwindStyling="mb-6 mt-3 text-black"
									/>
									<span className="flex items-end">
										<span className="text-5xl font-extrabold leading-none text-darkBlue">
											£{stripeStandardPlan?.price}
										</span>
										<span className="text-darkBlue">
											/{stripeStandardPlan?.paymentRecurringInterval}
										</span>
									</span>
									<div className="mt-6">
										<span className="block mb-4 text-base text-black">
											What&apos;s included:
										</span>
										<ul className="mb-10">
											<motion.ul variants={stagger}>
												{card?.bulletList.map((keys) => (
													<BulletListCard
														iconFillColor={`#6BBE66`}
														bulletPoint={keys?.bulletPoint}
														key={keys?.id || keys?.bulletPoint}
														tailwindStyling="ml-2 text-sm text-black"
													/>
												))}
											</motion.ul>
											<li className="flex items-center mb-6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 26 26"
													width="104px"
													height="104px"
													className="w-5 h-5"
												>
													<path
														fill="#001640"
														d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 18.78125 17.394531 L 17.390625 18.78125 C 17.136719 19.035156 16.722656 19.035156 16.46875 18.78125 L 13 15.3125 L 9.53125 18.78125 C 9.277344 19.035156 8.863281 19.035156 8.609375 18.777344 L 7.21875 17.394531 C 6.96875 17.136719 6.96875 16.726563 7.21875 16.46875 L 10.6875 13 L 7.222656 9.535156 C 6.96875 9.277344 6.96875 8.863281 7.222656 8.609375 L 8.609375 7.222656 C 8.863281 6.964844 9.28125 6.964844 9.535156 7.222656 L 13 10.6875 L 16.46875 7.222656 C 16.722656 6.964844 17.140625 6.964844 17.390625 7.222656 L 18.78125 8.605469 C 19.035156 8.863281 19.035156 9.277344 18.78125 9.535156 L 15.3125 13 L 18.78125 16.46875 C 19.03125 16.726563 19.03125 17.136719 18.78125 17.394531 Z"
													/>
												</svg>
												<span className="ml-2 text-sm line-through text-grey">
													Component Library
												</span>
											</li>
											<li className="flex items-center mb-6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 26 26"
													width="104px"
													height="104px"
													className="w-5 h-5"
												>
													<path
														fill="#001640"
														d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 18.78125 17.394531 L 17.390625 18.78125 C 17.136719 19.035156 16.722656 19.035156 16.46875 18.78125 L 13 15.3125 L 9.53125 18.78125 C 9.277344 19.035156 8.863281 19.035156 8.609375 18.777344 L 7.21875 17.394531 C 6.96875 17.136719 6.96875 16.726563 7.21875 16.46875 L 10.6875 13 L 7.222656 9.535156 C 6.96875 9.277344 6.96875 8.863281 7.222656 8.609375 L 8.609375 7.222656 C 8.863281 6.964844 9.28125 6.964844 9.535156 7.222656 L 13 10.6875 L 16.46875 7.222656 C 16.722656 6.964844 17.140625 6.964844 17.390625 7.222656 L 18.78125 8.605469 C 19.035156 8.863281 19.035156 9.277344 18.78125 9.535156 L 15.3125 13 L 18.78125 16.46875 C 19.03125 16.726563 19.03125 17.136719 18.78125 17.394531 Z"
													/>
												</svg>
												<span className="ml-2 text-sm line-through text-grey">
													All limited links
												</span>
											</li>
											<li className="flex items-center mb-6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 26 26"
													width="104px"
													height="104px"
													className="w-5 h-5"
												>
													<path
														fill="#001640"
														d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 18.78125 17.394531 L 17.390625 18.78125 C 17.136719 19.035156 16.722656 19.035156 16.46875 18.78125 L 13 15.3125 L 9.53125 18.78125 C 9.277344 19.035156 8.863281 19.035156 8.609375 18.777344 L 7.21875 17.394531 C 6.96875 17.136719 6.96875 16.726563 7.21875 16.46875 L 10.6875 13 L 7.222656 9.535156 C 6.96875 9.277344 6.96875 8.863281 7.222656 8.609375 L 8.609375 7.222656 C 8.863281 6.964844 9.28125 6.964844 9.535156 7.222656 L 13 10.6875 L 16.46875 7.222656 C 16.722656 6.964844 17.140625 6.964844 17.390625 7.222656 L 18.78125 8.605469 C 19.035156 8.863281 19.035156 9.277344 18.78125 9.535156 L 15.3125 13 L 18.78125 16.46875 C 19.03125 16.726563 19.03125 17.136719 18.78125 17.394531 Z"
													/>
												</svg>
												<span className="ml-2 text-sm line-through text-grey">
													Own analytics platform
												</span>
											</li>
											<li className="flex items-center mb-6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 26 26"
													width="104px"
													height="104px"
													className="w-5 h-5"
												>
													<path
														fill="#001640"
														d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 18.78125 17.394531 L 17.390625 18.78125 C 17.136719 19.035156 16.722656 19.035156 16.46875 18.78125 L 13 15.3125 L 9.53125 18.78125 C 9.277344 19.035156 8.863281 19.035156 8.609375 18.777344 L 7.21875 17.394531 C 6.96875 17.136719 6.96875 16.726563 7.21875 16.46875 L 10.6875 13 L 7.222656 9.535156 C 6.96875 9.277344 6.96875 8.863281 7.222656 8.609375 L 8.609375 7.222656 C 8.863281 6.964844 9.28125 6.964844 9.535156 7.222656 L 13 10.6875 L 16.46875 7.222656 C 16.722656 6.964844 17.140625 6.964844 17.390625 7.222656 L 18.78125 8.605469 C 19.035156 8.863281 19.035156 9.277344 18.78125 9.535156 L 15.3125 13 L 18.78125 16.46875 C 19.03125 16.726563 19.03125 17.136719 18.78125 17.394531 Z"
													/>
												</svg>
												<span className="ml-2 text-sm line-through text-grey">
													Chat support
												</span>
											</li>
										</ul>
										<form
											action="/api/stripe/standardPlanCheckoutSession"
											method="POST"
										>
											<button
												type="submit"
												role="link"
												className="relative inline-block py-4 overflow-hidden text-sm font-semibold text-center transition duration-200 border rounded-full border-grey-200 text-goldPrime hover:text-white group px-7 hover:text-orange"
											>
												<div className="absolute top-0 w-full h-full transition duration-200 transform bg-goldPrime right-full group-hover:translate-x-full group-hover:scale-102"></div>
												<span className="relative">Choose Plan</span>
											</button>
										</form>
									</div>
								</div>
							</motion.div>
							<motion.div
								variants={fadeInUp}
								className="w-full px-4 mb-8 lg:w-1/3 lg:mb-0"
							>
								<div className="max-w-lg p-10 mx-auto bg-blue rounded-3xl">
									<div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-goldPrime">
										<svg
											version="1.1"
											id="Layer_1"
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="96px"
											height="96px"
											viewBox="0 0 96 96"
											className="w-5 h-5"
											enableBackground="new 0 0 96 96"
										>
											<g>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													fill="#09275e"
													d="M48,0c26.51,0,48,21.49,48,48S74.51,96,48,96S0,74.51,0,48 S21.49,0,48,0L48,0z M26.764,49.277c0.644-3.734,4.906-5.813,8.269-3.79c0.305,0.182,0.596,0.398,0.867,0.646l0.026,0.025 c1.509,1.446,3.2,2.951,4.876,4.443l1.438,1.291l17.063-17.898c1.019-1.067,1.764-1.757,3.293-2.101 c5.235-1.155,8.916,5.244,5.206,9.155L46.536,63.366c-2.003,2.137-5.583,2.332-7.736,0.291c-1.234-1.146-2.576-2.312-3.933-3.489 c-2.35-2.042-4.747-4.125-6.701-6.187C26.993,52.809,26.487,50.89,26.764,49.277L26.764,49.277z"
												/>
											</g>
										</svg>
									</div>
									<span className="block mb-2 text-2xl font-semibold text-white">
										{stripePremiumPlan?.name}
									</span>
									<Paragraph
										content={stripePremiumPlan?.description}
										tailwindStyling="mb-6 mt-3 text-white"
									/>
									<span className="flex items-end">
										<span className="text-5xl font-extrabold leading-none text-white">
											£{stripePremiumPlan?.price}
										</span>
										<span className="text-white">
											/{stripePremiumPlan?.paymentRecurringInterval}
										</span>
									</span>
									<div className="mt-6">
										<span className="block mb-4 text-base text-white">
											What&apos;s included:
										</span>
										<ul className="mb-10">
											<motion.ul variants={stagger}>
												{card?.bulletList.map((keys) => (
													<BulletListCard
														iconFillColor={`#5ac3ff`}
														bulletPoint={keys?.bulletPoint}
														key={keys?.id || keys?.bulletPoint}
														tailwindStyling="ml-2 text-sm text-white"
													/>
												))}
											</motion.ul>
											<li className="flex items-center mb-6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 26 26"
													width="104px"
													height="104px"
													className="w-5 h-5"
												>
													<path
														fill="#001640"
														d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 18.78125 17.394531 L 17.390625 18.78125 C 17.136719 19.035156 16.722656 19.035156 16.46875 18.78125 L 13 15.3125 L 9.53125 18.78125 C 9.277344 19.035156 8.863281 19.035156 8.609375 18.777344 L 7.21875 17.394531 C 6.96875 17.136719 6.96875 16.726563 7.21875 16.46875 L 10.6875 13 L 7.222656 9.535156 C 6.96875 9.277344 6.96875 8.863281 7.222656 8.609375 L 8.609375 7.222656 C 8.863281 6.964844 9.28125 6.964844 9.535156 7.222656 L 13 10.6875 L 16.46875 7.222656 C 16.722656 6.964844 17.140625 6.964844 17.390625 7.222656 L 18.78125 8.605469 C 19.035156 8.863281 19.035156 9.277344 18.78125 9.535156 L 15.3125 13 L 18.78125 16.46875 C 19.03125 16.726563 19.03125 17.136719 18.78125 17.394531 Z"
													/>
												</svg>
												<span className="ml-2 text-sm text-white line-through">
													Component Library
												</span>
											</li>
											<li className="flex items-center mb-6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 26 26"
													width="104px"
													height="104px"
													className="w-5 h-5"
												>
													<path
														fill="#001640"
														d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 18.78125 17.394531 L 17.390625 18.78125 C 17.136719 19.035156 16.722656 19.035156 16.46875 18.78125 L 13 15.3125 L 9.53125 18.78125 C 9.277344 19.035156 8.863281 19.035156 8.609375 18.777344 L 7.21875 17.394531 C 6.96875 17.136719 6.96875 16.726563 7.21875 16.46875 L 10.6875 13 L 7.222656 9.535156 C 6.96875 9.277344 6.96875 8.863281 7.222656 8.609375 L 8.609375 7.222656 C 8.863281 6.964844 9.28125 6.964844 9.535156 7.222656 L 13 10.6875 L 16.46875 7.222656 C 16.722656 6.964844 17.140625 6.964844 17.390625 7.222656 L 18.78125 8.605469 C 19.035156 8.863281 19.035156 9.277344 18.78125 9.535156 L 15.3125 13 L 18.78125 16.46875 C 19.03125 16.726563 19.03125 17.136719 18.78125 17.394531 Z"
													/>
												</svg>
												<span className="ml-2 text-sm text-white line-through">
													All limited links
												</span>
											</li>
											<li className="flex items-center mb-6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 26 26"
													width="104px"
													height="104px"
													className="w-5 h-5"
												>
													<path
														fill="#001640"
														d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 18.78125 17.394531 L 17.390625 18.78125 C 17.136719 19.035156 16.722656 19.035156 16.46875 18.78125 L 13 15.3125 L 9.53125 18.78125 C 9.277344 19.035156 8.863281 19.035156 8.609375 18.777344 L 7.21875 17.394531 C 6.96875 17.136719 6.96875 16.726563 7.21875 16.46875 L 10.6875 13 L 7.222656 9.535156 C 6.96875 9.277344 6.96875 8.863281 7.222656 8.609375 L 8.609375 7.222656 C 8.863281 6.964844 9.28125 6.964844 9.535156 7.222656 L 13 10.6875 L 16.46875 7.222656 C 16.722656 6.964844 17.140625 6.964844 17.390625 7.222656 L 18.78125 8.605469 C 19.035156 8.863281 19.035156 9.277344 18.78125 9.535156 L 15.3125 13 L 18.78125 16.46875 C 19.03125 16.726563 19.03125 17.136719 18.78125 17.394531 Z"
													/>
												</svg>
												<span className="ml-2 text-sm text-white line-through">
													Own analytics platform
												</span>
											</li>
											<li className="flex items-center mb-6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 26 26"
													width="104px"
													height="104px"
													className="w-5 h-5"
												>
													<path
														fill="#001640"
														d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 18.78125 17.394531 L 17.390625 18.78125 C 17.136719 19.035156 16.722656 19.035156 16.46875 18.78125 L 13 15.3125 L 9.53125 18.78125 C 9.277344 19.035156 8.863281 19.035156 8.609375 18.777344 L 7.21875 17.394531 C 6.96875 17.136719 6.96875 16.726563 7.21875 16.46875 L 10.6875 13 L 7.222656 9.535156 C 6.96875 9.277344 6.96875 8.863281 7.222656 8.609375 L 8.609375 7.222656 C 8.863281 6.964844 9.28125 6.964844 9.535156 7.222656 L 13 10.6875 L 16.46875 7.222656 C 16.722656 6.964844 17.140625 6.964844 17.390625 7.222656 L 18.78125 8.605469 C 19.035156 8.863281 19.035156 9.277344 18.78125 9.535156 L 15.3125 13 L 18.78125 16.46875 C 19.03125 16.726563 19.03125 17.136719 18.78125 17.394531 Z"
													/>
												</svg>
												<span className="ml-2 text-sm text-white line-through">
													Chat support
												</span>
											</li>
										</ul>
										<form
											action="/api/stripe/premiumPlanCheckoutSession"
											method="POST"
										>
											<button
												type="submit"
												role="link"
												className="relative inline-block py-4 overflow-hidden text-sm font-semibold text-center text-white transition duration-200 rounded-full bg-goldPrime group px-7 hover:text-goldPrime"
											>
												<div className="absolute top-0 w-full h-full transition duration-200 transform bg-darkBlue right-full group-hover:translate-x-full group-hover:scale-102"></div>
												<span className="relative">Choose Plan</span>
											</button>
										</form>
									</div>
								</div>
							</motion.div>
							<motion.div
								variants={fadeInUp}
								className="w-full px-4 lg:w-1/3 lg:pt-16"
							>
								<div className="max-w-lg p-10 mx-auto bg-white border border-darkBlue rounded-3xl">
									<div className="flex items-center justify-center w-10 h-10 mb-4 border rounded-full border-darkBlue">
										<svg
											version="1.1"
											id="Layer_1"
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="96px"
											height="96px"
											viewBox="0 0 96 96"
											className="w-5 h-5"
											enableBackground="new 0 0 96 96"
										>
											<g>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													fill="#09275e"
													d="M48,0c26.51,0,48,21.49,48,48S74.51,96,48,96S0,74.51,0,48 S21.49,0,48,0L48,0z M26.764,49.277c0.644-3.734,4.906-5.813,8.269-3.79c0.305,0.182,0.596,0.398,0.867,0.646l0.026,0.025 c1.509,1.446,3.2,2.951,4.876,4.443l1.438,1.291l17.063-17.898c1.019-1.067,1.764-1.757,3.293-2.101 c5.235-1.155,8.916,5.244,5.206,9.155L46.536,63.366c-2.003,2.137-5.583,2.332-7.736,0.291c-1.234-1.146-2.576-2.312-3.933-3.489 c-2.35-2.042-4.747-4.125-6.701-6.187C26.993,52.809,26.487,50.89,26.764,49.277L26.764,49.277z"
												/>
											</g>
										</svg>
									</div>
									<span className="block mb-2 text-2xl font-semibold text-darkBlue">
										Enterprise
									</span>
									<Paragraph
										content={`Simply dummy text of the printing and typesetting industry.`}
										tailwindStyling="mb-6 mt-3 text-black"
									/>
									<span className="flex items-end">
										<span className="text-5xl font-extrabold leading-none text-darkBlue">
											Contact Us
										</span>
										{/* <span className="text-darkBlue">/month</span> */}
									</span>
									<div className="mt-6">
										<span className="block mb-4 text-base text-black">
											What&apos;s included:
										</span>
										<ul className="mb-10">
											<motion.ul variants={stagger}>
												{card?.bulletList.map((keys) => (
													<BulletListCard
														iconFillColor={`#6BBE66`}
														bulletPoint={keys?.bulletPoint}
														key={keys?.id || keys?.bulletPoint}
														tailwindStyling="ml-2 text-sm text-black"
													/>
												))}
											</motion.ul>
											<li className="flex items-center mb-6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 26 26"
													width="104px"
													height="104px"
													className="w-5 h-5"
												>
													<path
														fill="#001640"
														d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 18.78125 17.394531 L 17.390625 18.78125 C 17.136719 19.035156 16.722656 19.035156 16.46875 18.78125 L 13 15.3125 L 9.53125 18.78125 C 9.277344 19.035156 8.863281 19.035156 8.609375 18.777344 L 7.21875 17.394531 C 6.96875 17.136719 6.96875 16.726563 7.21875 16.46875 L 10.6875 13 L 7.222656 9.535156 C 6.96875 9.277344 6.96875 8.863281 7.222656 8.609375 L 8.609375 7.222656 C 8.863281 6.964844 9.28125 6.964844 9.535156 7.222656 L 13 10.6875 L 16.46875 7.222656 C 16.722656 6.964844 17.140625 6.964844 17.390625 7.222656 L 18.78125 8.605469 C 19.035156 8.863281 19.035156 9.277344 18.78125 9.535156 L 15.3125 13 L 18.78125 16.46875 C 19.03125 16.726563 19.03125 17.136719 18.78125 17.394531 Z"
													/>
												</svg>
												<span className="ml-2 text-sm line-through text-grey">
													Component Library
												</span>
											</li>
											<li className="flex items-center mb-6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 26 26"
													width="104px"
													height="104px"
													className="w-5 h-5"
												>
													<path
														fill="#001640"
														d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 18.78125 17.394531 L 17.390625 18.78125 C 17.136719 19.035156 16.722656 19.035156 16.46875 18.78125 L 13 15.3125 L 9.53125 18.78125 C 9.277344 19.035156 8.863281 19.035156 8.609375 18.777344 L 7.21875 17.394531 C 6.96875 17.136719 6.96875 16.726563 7.21875 16.46875 L 10.6875 13 L 7.222656 9.535156 C 6.96875 9.277344 6.96875 8.863281 7.222656 8.609375 L 8.609375 7.222656 C 8.863281 6.964844 9.28125 6.964844 9.535156 7.222656 L 13 10.6875 L 16.46875 7.222656 C 16.722656 6.964844 17.140625 6.964844 17.390625 7.222656 L 18.78125 8.605469 C 19.035156 8.863281 19.035156 9.277344 18.78125 9.535156 L 15.3125 13 L 18.78125 16.46875 C 19.03125 16.726563 19.03125 17.136719 18.78125 17.394531 Z"
													/>
												</svg>
												<span className="ml-2 text-sm line-through text-grey">
													All limited links
												</span>
											</li>
											<li className="flex items-center mb-6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 26 26"
													width="104px"
													height="104px"
													className="w-5 h-5"
												>
													<path
														fill="#001640"
														d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 18.78125 17.394531 L 17.390625 18.78125 C 17.136719 19.035156 16.722656 19.035156 16.46875 18.78125 L 13 15.3125 L 9.53125 18.78125 C 9.277344 19.035156 8.863281 19.035156 8.609375 18.777344 L 7.21875 17.394531 C 6.96875 17.136719 6.96875 16.726563 7.21875 16.46875 L 10.6875 13 L 7.222656 9.535156 C 6.96875 9.277344 6.96875 8.863281 7.222656 8.609375 L 8.609375 7.222656 C 8.863281 6.964844 9.28125 6.964844 9.535156 7.222656 L 13 10.6875 L 16.46875 7.222656 C 16.722656 6.964844 17.140625 6.964844 17.390625 7.222656 L 18.78125 8.605469 C 19.035156 8.863281 19.035156 9.277344 18.78125 9.535156 L 15.3125 13 L 18.78125 16.46875 C 19.03125 16.726563 19.03125 17.136719 18.78125 17.394531 Z"
													/>
												</svg>
												<span className="ml-2 text-sm line-through text-grey">
													Own analytics platform
												</span>
											</li>
											<li className="flex items-center mb-6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 26 26"
													width="104px"
													height="104px"
													className="w-5 h-5"
												>
													<path
														fill="#001640"
														d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 18.78125 17.394531 L 17.390625 18.78125 C 17.136719 19.035156 16.722656 19.035156 16.46875 18.78125 L 13 15.3125 L 9.53125 18.78125 C 9.277344 19.035156 8.863281 19.035156 8.609375 18.777344 L 7.21875 17.394531 C 6.96875 17.136719 6.96875 16.726563 7.21875 16.46875 L 10.6875 13 L 7.222656 9.535156 C 6.96875 9.277344 6.96875 8.863281 7.222656 8.609375 L 8.609375 7.222656 C 8.863281 6.964844 9.28125 6.964844 9.535156 7.222656 L 13 10.6875 L 16.46875 7.222656 C 16.722656 6.964844 17.140625 6.964844 17.390625 7.222656 L 18.78125 8.605469 C 19.035156 8.863281 19.035156 9.277344 18.78125 9.535156 L 15.3125 13 L 18.78125 16.46875 C 19.03125 16.726563 19.03125 17.136719 18.78125 17.394531 Z"
													/>
												</svg>
												<span className="ml-2 text-sm line-through text-grey">
													Chat support
												</span>
											</li>
										</ul>
										<Link
											className="relative inline-block py-4 overflow-hidden text-sm font-semibold text-center transition duration-200 border rounded-full border-grey-200 text-goldPrime hover:text-white group px-7 hover:text-orange"
											href={`/checkout`}
										>
											<div className="absolute top-0 w-full h-full transition duration-200 transform bg-goldPrime right-full group-hover:translate-x-full group-hover:scale-102"></div>
											<span className="relative">Coming soon</span>
										</Link>
									</div>
								</div>
							</motion.div>
						</motion.div>
					</motion.div>
					{/* Billing Information */}
					<motion.div
						variants={stagger}
						className="flex flex-col items-baseline justify-center max-w-xs mx-auto mt-12 sm:mx-0 sm:max-w-none sm:items-center gap-y-4 gap-x-8 sm:flex-row"
					>
						<motion.div
							variants={fadeInUp}
							className="flex items-center max-w-xs lg:mb-0 lg:mr-24"
						>
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-goldPrime">
								<svg
									className="p-2 text-white"
									width="48"
									height="48"
									viewBox="0 0 48 48"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19.5 34L18 40L16 42H32L30 40L28.5 34M6 26H42M10 34H38C40.2091 34 42 32.2091 42 30V10C42 7.79086 40.2091 6 38 6H10C7.79086 6 6 7.79086 6 10V30C6 32.2091 7.79086 34 10 34Z"
										stroke="#ffffff"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</div>
							<Paragraph
								content={pointOne}
								tailwindStyling="font-semibold text-darkBlue"
							/>
						</motion.div>
						<motion.div
							variants={fadeInUp}
							className="flex items-center max-w-xs"
						>
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-goldPrime">
								<svg
									className="p-2 text-white"
									width="48"
									height="48"
									viewBox="0 0 48 48"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6 30C6 34.4183 9.58172 38 14 38H32C37.5228 38 42 33.5228 42 28C42 22.4772 37.5228 18 32 18C31.9333 18 31.8668 18.0007 31.8004 18.002C30.8746 13.4365 26.8386 10 22 10C16.4772 10 12 14.4772 12 20C12 20.7537 12.0834 21.4879 12.2414 22.1939C8.66913 22.9952 6 26.1859 6 30Z"
										stroke="#ffffff"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</div>
							<Paragraph
								content={pointTwo}
								tailwindStyling="font-semibold text-darkBlue"
							/>
						</motion.div>
					</motion.div>
					{/* Payment Providers */}
					<motion.div
						variants={stagger}
						className="flex flex-wrap justify-center gap-6 mt-20 sm:flex-row lg:flex-row"
					>
						{paymentProviders.map((keys) => (
							<PaymentProvidersCard
								image={keys?.logo}
								key={keys?.id || keys?.logo?.sourceUrl}
							/>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Pricing;
