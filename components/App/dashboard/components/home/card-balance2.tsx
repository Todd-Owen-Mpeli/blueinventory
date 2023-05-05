// Import
import React, {FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "@/animations/animations";

// Components
import {Community} from "../icons/community";

interface IProps {
	title: string;
	price: string;
}

export const CardBalance2: FC<IProps> = ({title, price}) => {
	return (
		<div className="px-6 rounded-xl bg-pureBlack max-w-[350px] w-full min-h-[150px] h-full hover:bg-blueDash transition-all duration-500 ease-in-out">
			<motion.div
				variants={stagger}
				className="flex flex-col justify-between py-4"
			>
				<motion.div
					variants={fadeInUp}
					className="flex flex-row items-start justify-start gap-2"
				>
					<Community color={"$accents9"} />
					<div className="flex flex-col items-baseline justify-center">
						<span className="tracking-wide text-white text-tiny">{title}</span>
					</div>
				</motion.div>
				<motion.div
					variants={fadeInUp}
					className="flex flex-row items-center justify-start gap-2 py-3"
				>
					<span className="text-xl font-semibold text-white">£ {price}</span>
					<span className="text-xs text-brightGreenDash">+ 4.5%</span>
				</motion.div>
				<motion.div
					variants={fadeInUp}
					className="flex flex-row items-center justify-center gap-4"
				>
					<div className="flex flex-row gap-2">
						<span className="text-sm font-[900] text-brightGreenDash">
							{"↓"}
						</span>
						<span className="text-xs text-white">11,930 GBP</span>
					</div>
					<div className="flex flex-row gap-2">
						<span className="text-sm font-[900] text-pinkRedDash">{"↑"}</span>
						<span className="text-xs text-white">54,120 GBP</span>
					</div>
					<div className="flex flex-row gap-2">
						<span className="text-sm font-[900] text-brightGreenDash">
							{"⭐"}
						</span>
						<span className="text-xs text-white">150 VIP</span>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};
