import {useState} from "react";
import postHog from "posthog-js";
import {motion} from "framer-motion";
import Paragraph from "./Paragraph";
import {fadeInUp, stagger} from "../../animations/animations";

const CookiePolicyCard = () => {
	const [showCookiePolicyCard, setShowCookiePolicyCard] = useState(true);

	const acceptCookies = () => {
		postHog.opt_in_capturing();
		setShowCookiePolicyCard(false);
	};

	const refuseCookies = () => {
		postHog.opt_out_capturing();
		setShowCookiePolicyCard(false);
	};

	return (
		<div
			className={
				showCookiePolicyCard
					? `fixed bottom-0 right-0 max-w-6xl px-4 md:max-w-md z-[999]`
					: `hidden`
			}
		>
			<motion.div
				variants={stagger}
				className="px-6 pt-4 pb-6 mb-8 text-white rounded bg-blueTwo"
			>
				<motion.h3 variants={fadeInUp} className="font-bold font-heading">
					Cookie Policy
				</motion.h3>
				<Paragraph
					content={`<p>We use cookies to personalize content, to provide social media
						features and to analyze our traffic. We also share information about
						your use of our site with our partners.</p>`}
					tailwindStyling="mt-3 mb-6 text-sm text-left"
				/>
				<motion.div
					variants={stagger}
					className="flex items-center justify-center gap-4"
				>
					<motion.button
						onClick={acceptCookies}
						variants={fadeInUp}
						className="inline-block px-6 py-3 mr-2 text-xs leading-none rounded bg-blue hover:bg-goldPrime"
					>
						Accept Cookies
					</motion.button>
					<motion.button
						onClick={refuseCookies}
						variants={fadeInUp}
						className="inline-block px-6 py-3 text-xs leading-none text-white rounded bg-darkBlue hover:bg-darkerBlue"
					>
						Refuse Cookies
					</motion.button>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default CookiePolicyCard;
