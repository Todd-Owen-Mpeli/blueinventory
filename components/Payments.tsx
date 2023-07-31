// Imports
import {motion} from "framer-motion";
import {fadeIn, initialTwo} from "@/animations/animations";

// Components
import PricingTwo from "./PricingTwo";

const Payments = () => {
	return (
		<>
			<motion.div
				initial={initialTwo}
				whileInView={fadeIn}
				viewport={{once: true}}
			>
				<PricingTwo />
			</motion.div>
		</>
	);
};

export default Payments;
