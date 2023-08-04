"use client";

// Imports
import {useState} from "react";
import postHog from "posthog-js";
import {motion} from "framer-motion";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Frontend/Elements/Paragraph";

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
				initial={initial}
				viewport={{once: true}}
				whileInView={stagger}
				className="px-6 pt-4 pb-6 mb-8 text-white rounded bg-blueTwo"
			>
				<motion.h3
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className="tracking-normal text-white uppercase text-medium"
				>
					Cookie Policy
				</motion.h3>
				<Paragraph
					content={`<p>We use cookies to personalize content, to provide social media
						features and to analyze our traffic. We also share information about
						your use of our site with our partners.</p>`}
					tailwindStyling="mt-3 mb-6 text-xs text-left"
				/>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex items-center justify-center gap-4"
				>
					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						onClick={acceptCookies}
						viewport={{once: true}}
						className="px-6 py-3 text-xs leading-none tracking-wider text-white rounded bg-blue hover:bg-goldPrime"
					>
						Accept Cookies
					</motion.button>
					<motion.button
						initial={initial}
						whileInView={fadeInUp}
						onClick={refuseCookies}
						viewport={{once: true}}
						className="px-6 py-3 text-xs leading-none tracking-wider text-white rounded bg-darkBlue hover:bg-darkerBlue"
					>
						Refuse Cookies
					</motion.button>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default CookiePolicyCard;