// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const SubscriptionInfo: FC = () => {
	return (
		<>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="flex flex-col items-center gap-8 px-4 bg-white"
			>
				<div className="p-6 bg-white shadow-lg rounded-xl">
					<div className="max-w-xs mx-auto">
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="mb-1 text-lg font-semibold text-darkBlue"
						>
							Auto renewal
						</motion.h4>
						<Paragraph
							content={`All subscriptions are set to automatically renew, unless you
										cancel before the next renewal date.`}
							tailwindStyling="my-5 text-base font-medium leading-5 text-black text-left"
						/>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="flex items-center"
						>
							<button className="flex items-center justify-center h-6 mr-3 rounded-full bg-blue w-11">
								<div className="w-5 h-5 bg-transparent rounded-full"></div>
								<div className="w-5 h-5 bg-white rounded-full"></div>
							</button>
							<span className="text-sm font-medium text-blue">
								Auto renewal is turned on
							</span>
						</motion.div>
					</div>
				</div>
				<div
					className="p-6 bg-center bg-no-repeat bg-cover shadow-lg rounded-xl "
					style={{
						backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-pinkRed.svg")`,
					}}
				>
					<div className="max-w-xs mx-auto">
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="mb-1 text-lg font-semibold text-white"
						>
							Cancel Subscription
						</motion.h4>
						<Paragraph
							content={`You will lose access to all premium features in your current
										subscription plan. Once you delete your account, there is no going back. Please be certain.
										<br/>
										<br/>
										All content in your database will also be deleted from our google cloud database.`}
							tailwindStyling="my-5 text-sm font-medium leading-5 text-white text-left"
						/>
						<motion.button
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
						>
							<Link
								href={`/pricing/#Pricing`}
								className="inline-block text-sm font-medium text-white hover:underline hover:text-yellowDash"
							>
								Cancel Subscription
							</Link>
						</motion.button>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default SubscriptionInfo;
