// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useDashboardContext} from "@/context/dashboard";
import {initial, stagger, fadeInUp} from "@/animations/animations";

const PaymentInfo: FC = () => {
	const context = useDashboardContext();

	return (
		<div>
			<div className="w-full px-10 pt-6 pb-10 mb-6 bg-white shadow-lg lg:min-w-[35rem] rounded-xl">
				<div className="flex flex-wrap items-center justify-between mb-6 -mx-4">
					<div className="w-full px-4 mb-2 sm:w-auto sm:mb-0">
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-lg font-semibold text-darkBlue"
						>
							Payment methods
						</motion.h4>
					</div>
				</div>
				<div className="pb-6 mb-6 border-b border-darkBlue">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-wrap items-center justify-between -mx-4 -mb-5"
					>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="w-full px-4 mb-5 sm:w-auto"
						>
							<div className="flex flex-col items-center items-baseline gap-y-2">
								<h5 className="text-base font-semibold leading-5 text-black">
									Visa ending in 3456
								</h5>
								<span className="text-sm font-medium text-black">
									Expires 04/2028
								</span>
							</div>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="w-full px-4 mb-5 sm:w-auto"
						>
							<span className="inline-block px-2 py-1 ml-auto text-base font-bold leading-6 text-black transition bg-white rounded-lg duration">
								Default
							</span>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default PaymentInfo;
