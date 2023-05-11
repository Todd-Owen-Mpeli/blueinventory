// Import
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
		plan: string;
		pricing: string;
		paragraph: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		bulletList: [
			{
				id: string;
				bulletPoint: string;
			}
		];
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
}) => {
	return (
		<section
			id="Pricing"
			className="relative pb-24 overflow-hidden bg-lightGrey"
		>
			<div className="pt-32 pb-52">
				<div className="container px-4 mx-auto">
					<div className="max-w-2xl mx-auto mb-24 text-center lg:max-w-5xl">
						<span className="inline-block px-3 py-1 mb-4 text-sm font-[400] tracking-widest text-white uppercase rounded-full bg-blue">
							Pricing
						</span>
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
							tailwindStyling="text-base mt-10 text-black"
						/>
					</div>
				</div>
			</div>
			<div className="container px-4 mx-auto">
				<div className="max-w-md mx-auto lg:max-w-4xl">
					<div className="px-8 mb-16 bg-white shadow-xl -mt-52 lg:mb-8 py-9 sm:px-14 rounded-3xl">
						<motion.div
							variants={stagger}
							className="flex flex-wrap items-center -mx-4"
						>
							<motion.div
								variants={fadeInUp}
								className="w-full px-4 pb-12 mb-8 border-b border-grey lg:w-2/5 lg:mb-0 lg:py-4 lg:border-0 lg:border-r"
							>
								<motion.div variants={stagger} className="text-center">
									<motion.span
										variants={fadeInUp}
										className="block mb-4 text-2xl font-semibold"
									>
										{card?.plan}
									</motion.span>
									<motion.span
										variants={fadeInUp}
										className="block mb-5 text-5xl font-bold text-darkBlue"
									>
										{card?.pricing}
									</motion.span>
									<motion.div variants={fadeInUp}>
										<Link
											className="relative inline-block px-10 py-4 overflow-hidden font-semibold text-center text-white transition duration-200 rounded-full bg-blue group"
											href={card?.buttonLink?.url}
											target={card?.buttonLink?.target}
										>
											<div className="absolute top-0 w-full h-full transition duration-200 transform bg-darkBlue right-full group-hover:translate-x-full group-hover:scale-102" />
											<span className="relative">
												{card?.buttonLink?.title}
											</span>
										</Link>
									</motion.div>
								</motion.div>
							</motion.div>
							<motion.div
								variants={fadeInUp}
								className="w-full px-4 py-2 lg:w-3/5"
							>
								<motion.div variants={stagger} className="max-w-sm ml-auto">
									<Paragraph
										content={card?.paragraph}
										tailwindStyling="mb-8 text-black"
									/>
									<motion.ul variants={stagger}>
										{card?.bulletList.map((keys) => (
											<BulletListCard
												bulletPoint={keys?.bulletPoint}
												key={keys?.id || keys?.bulletPoint}
											/>
										))}
									</motion.ul>
								</motion.div>
							</motion.div>
						</motion.div>
					</div>
					<motion.div
						variants={stagger}
						className="items-center justify-center mt-12 lg:flex"
					>
						<motion.div
							variants={fadeInUp}
							className="flex items-center max-w-xs mb-12 lg:mb-0 sm:mr-24"
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
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
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
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
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
						className="flex flex-wrap justify-center gap-6 mt-20 lg:flex-row"
					>
						{paymentProviders.map((keys) => (
							<PaymentProvidersCard
								image={keys?.logo}
								key={keys?.id || keys?.logo?.sourceUrl}
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
