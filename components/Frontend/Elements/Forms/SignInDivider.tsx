// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {initial, fadeInUp} from "@/animations/animations";

const SignInDivider: FC = () => {
	return (
		<>
			<motion.div
				initial={initial}
				viewport={{once: true}}
				whileInView={fadeInUp}
				className="flex items-center mb-6"
			>
				<div className="w-full h-px bg-darkGrey" />
				<span className="mx-4 text-sm text-black">Or</span>
				<div className="w-full h-px bg-darkGrey" />
			</motion.div>
		</>
	);
};

export default SignInDivider;
