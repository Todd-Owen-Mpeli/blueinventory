import {Card, Text} from "@nextui-org/react";
import React from "react";
import {Community} from "../icons/community";
import {Box} from "../styles/box";
import {Flex} from "../styles/flex";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "@/animations/animations";

export const CardBalance2 = () => {
	return (
		<div className="px-6 rounded-xl bg-blackBlueDashTwo max-w-[350px] w-full min-h-[150px] h-full hover:bg-blueDash transition-all duration-500 ease-in-out">
			<motion.div
				variants={stagger}
				className="flex flex-col justify-between py-4"
			>
				<motion.div
					variants={fadeInUp}
					className="flex flex-row items-start justify-start gap-2"
				>
					<Community color={"$accents9"} />
					<Flex direction={"column"}>
						<Text span css={{color: ""}}>
							Healt Insurance
						</Text>
						<Text span size={"$xs"}>
							+2400 People
						</Text>
					</Flex>
				</motion.div>
				<motion.div
					variants={fadeInUp}
					className="flex flex-row items-center justify-start gap-8 py-3"
				>
					<Text span size={"$xl"} weight={"semibold"}>
						$12,138
					</Text>
					<Text span css={{color: "$red600"}} size={"$xs"}>
						+ 4.5%
					</Text>
				</motion.div>
				<motion.div
					variants={fadeInUp}
					className="flex flex-row items-center justify-center gap-4"
				>
					<Box>
						<Text
							span
							size={"$xs"}
							css={{color: "$green600"}}
							weight={"semibold"}
						>
							{"↓"}
						</Text>
						<Text span size={"$xs"}>
							11,930 GBP
						</Text>
					</Box>
					<Box>
						<Text
							span
							size={"$xs"}
							css={{color: "$red600"}}
							weight={"semibold"}
						>
							{"↑"}
						</Text>
						<Text span size={"$xs"}>
							54,120 GBP
						</Text>
					</Box>
					<Box>
						<Text
							span
							size={"$xs"}
							css={{color: "$green600"}}
							weight={"semibold"}
						>
							{"⭐"}
						</Text>
						<Text span size={"$xs"}>
							150 VIP
						</Text>
					</Box>
				</motion.div>
			</motion.div>
		</div>
	);
};
