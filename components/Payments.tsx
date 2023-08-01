// Imports
import {motion} from "framer-motion";
import {initial, stagger} from "@/animations/animations";

// Components
import Premium from "./Cards/checkout/Premium";
import CheckoutWelcome from "./CheckoutWelcome";
import Standard from "./Cards/checkout/Standard";

const Payments = () => {
	return (
		<>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="flex flex-row justify-between gap-4"
			>
				<CheckoutWelcome />
				<div className="flex flex-col w-full gap-4 py-16">
					<Standard />
					<Premium />
				</div>
			</motion.div>
		</>
	);
};

export default Payments;
