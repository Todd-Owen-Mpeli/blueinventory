// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useContentContext} from "@/context/context";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Standard: FC = () => {
	const content = useContentContext();

	return (
		<>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="flex flex-row items-center gap-6 p-8 mb-8 bg-white border-[1px] w-fit border-goldPrime"
			>
				<div className="self-center px-3">
					<h3 className="mb-4 text-3xl font-bold text-center">
						{content.stripePlans.stripeStandardPlan?.name}
					</h3>
					<Paragraph
						content={content.stripePlans.stripeStandardPlan?.description}
						tailwindStyling="text-base my-4 text-darkBlue max-w-sm text-center"
					/>
				</div>
				<div className="px-3">
					<ul className="mb-4 text-gray-500">
						<li className="flex mb-4">
							<svg
								className="flex-shrink-0 w-5 h-5 mr-4 text-blue"
								viewBox="0 0 20 15"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
								></path>
							</svg>
							<span>Complete Insights</span>
						</li>
						<li className="flex mb-4">
							<svg
								className="flex-shrink-0 w-5 h-5 mr-4 text-blue"
								viewBox="0 0 20 15"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
								></path>
							</svg>
							<span>10GB cloud storage</span>
						</li>
						<li className="flex">
							<svg
								className="flex-shrink-0 w-5 h-5 mr-4 text-blue"
								viewBox="0 0 20 15"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
								></path>
							</svg>
							<span>Cancel anytime</span>
						</li>
					</ul>
				</div>
				<div className="flex flex-col items-center justify-center gap-4 px-3 lg:text-center">
					<motion.span
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
					>
						<span className="text-5xl font-extrabold leading-none text-darkBlue">
							£{content.stripePlans.stripeStandardPlan?.price}
						</span>
						<span className="text-darkBlue">
							/
							{content.stripePlans.stripeStandardPlan?.paymentRecurringInterval}
						</span>
					</motion.span>
					<form
						action="/api/stripe/checkoutSession"
						method="POST"
						className="w-full"
					>
						<input
							className="hidden"
							type="hidden"
							name="plan"
							value="standard"
						/>
						<button
							type="submit"
							role="link"
							className="w-full px-6 py-2 mt-4 font-bold leading-loose text-white transition duration-200 bg-goldPrime hover:bg-blue"
						>
							Choose Plan
						</button>
					</form>
				</div>
			</motion.div>
		</>
	);
};

export default Standard;
