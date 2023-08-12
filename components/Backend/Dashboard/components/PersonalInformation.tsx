// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useDashboardContext} from "@/context/dashboard";
import {initial, stagger, fadeInUp} from "@/animations/animations";

const PersonalInformation: FC = () => {
	const context = useDashboardContext();

	return (
		<>
			<div className="flex flex-col justify-between gap-4 p-4">
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex justify-between gap-4"
				>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={`block font-medium text-center text-white text-base`}
					>
						{context.userData?.displayName}
					</motion.h3>
					<motion.button
						initial={initial}
						viewport={{once: true}}
						whileInView={fadeInUp}
						aria-label="Edit Profile"
						role="button"
						type="button"
						className="relative flex items-center justify-center w-full px-4 py-2 space-x-4 overflow-hidden text-white transition duration-200 bg-center bg-no-repeat bg-cover rounded-md border-darkBlue group focus:ring-2 focus:ring-offset-1 hover:text-white hover:border-white focus:ring-white"
						style={{
							backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-darkblue.svg")`,
						}}
					>
						<div
							className="absolute top-0 w-full h-full transition duration-200 transform bg-bottom bg-no-repeat bg-cover bg-darkBlue right-full group-hover:translate-x-full group-hover:scale-102"
							style={{
								backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-orange-yellow-pinkRed.svg")`,
							}}
						/>
						<p className="relative">Edit</p>
					</motion.button>
				</motion.div>
				<div className="grid grid-col- md:grid-col-2">
					<div className="flex flex-col items-center justify-between">
						Enter
					</div>
					<div>Enter</div>
				</div>
			</div>
		</>
	);
};

export default PersonalInformation;
