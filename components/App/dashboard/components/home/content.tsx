// Import
import React, {FC} from "react";
import NextLink from "next/link";
import {Box} from "../styles/box";
import dynamic from "next/dynamic";
import {Flex} from "../styles/flex";
import {motion} from "framer-motion";
import {Text, Link} from "@nextui-org/react";
import {fadeInUp, stagger} from "@/animations/animations";

// Components
import {CardAgents} from "./card-agents";
import {TableWrapper} from "../table/table";
import {CardBalance1} from "./card-balance1";
import {CardBalance2} from "./card-balance2";
import {CardBalance3} from "./card-balance3";
import {CardTransactions} from "./card-transactions";

interface IProps {
	id: string;
	lastName: string;
	firstName: string;
	emailAddress: string;
	profileImageUrl: string;
	userContent: string;
}

const Chart = dynamic(
	() => import("../charts/steam").then((mod) => mod.Steam),
	{
		ssr: false,
	}
);

export const Content: FC<IProps> = ({
	id,
	lastName,
	firstName,
	userContent,
	emailAddress,
	profileImageUrl,
}) => (
	<Box css={{overflow: "hidden", height: "100%"}}>
		<Flex
			css={{
				gap: "$8",
				pt: "$5",
				height: "fit-content",
				flexWrap: "wrap",
				"@lg": {
					flexWrap: "nowrap",
				},
				"@sm": {
					pt: "$10",
				},
			}}
			justify={"center"}
		>
			<Flex
				css={{
					px: "$12",
					mt: "$8",
					"@xsMax": {px: "$10"},
					gap: "$12",
				}}
				direction={"column"}
			>
				{/* Card Section Top */}
				<Box>
					<motion.h3
						variants={stagger}
						className="flex gap-2 text-center text-black lg:text-left"
					>
						Hello,
						<motion.span variants={fadeInUp} className="tracking-tight">
							{firstName}
						</motion.span>
						<motion.span variants={fadeInUp} className="tracking-tight">
							{lastName}
						</motion.span>
					</motion.h3>
					<motion.div
						variants={stagger}
						className="flex flex-wrap items-center justify-between gap-4 lg:flex-row"
					>
						<motion.div variants={fadeInUp}>
							<CardBalance1 title={`Community Insurance`} price={`45,910`} />
						</motion.div>
						<motion.div variants={fadeInUp}>
							<CardBalance2 />
						</motion.div>
						<motion.div variants={fadeInUp}>
							<CardBalance3 />
						</motion.div>
					</motion.div>
				</Box>

				{/* Chart */}
				<Box>
					<h3 className="text-center text-black lg:text-left">Statistics</h3>
					<Box
						css={{
							width: "100%",
							backgroundColor: "$accents0",
							boxShadow: "$lg",
							borderRadius: "$2xl",
							px: "$10",
							py: "$10",
						}}
					>
						<Chart />
					</Box>
				</Box>
			</Flex>

			{/* Left Section */}
			<Box
				css={{
					px: "$12",
					mt: "$8",
					height: "fit-content",
					"@xsMax": {px: "$10"},
					gap: "$6",
					overflow: "hidden",
				}}
			>
				<h3 className="text-center text-black lg:text-left">Section</h3>
				<Flex
					direction={"column"}
					justify={"center"}
					className="flex flex-row flex-wrap sm:flex-wrap lg:flex-col"
				>
					<CardAgents />
					<CardTransactions />
				</Flex>
			</Box>
		</Flex>

		{/* Table Latest Users */}
		<Flex
			direction={"column"}
			justify={"center"}
			css={{
				width: "100%",
				py: "$10",
				px: "$10",
				mt: "$8",
				"@sm": {px: "$20"},
			}}
		>
			<Flex justify={"between"} wrap={"wrap"}>
				<h3 className="text-center text-black lg:text-left">Latest Users</h3>
				<NextLink href="/accounts">
					<Link
						block
						color="primary"
						css={{
							textAlign: "center",
							"@lg": {
								textAlign: "inherit",
							},
						}}
					>
						View All
					</Link>
				</NextLink>
			</Flex>
			<TableWrapper />
		</Flex>
	</Box>
);
