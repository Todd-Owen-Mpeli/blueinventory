// Import
import React from "react";
import type {NextPage} from "next";
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

interface IDashboard {
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

export const Content: NextPage<IDashboard> = ({
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
			<div className="flex flex-col gap-8 px-10 mt-4">
				{/* Card Section Top */}
				<section>
					<motion.h3
						variants={stagger}
						className="flex gap-2 mb-4 text-center text-black lg:text-left"
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
							<CardBalance1 title={`Software Checking`} price={`45,910`} />
						</motion.div>
						<motion.div variants={fadeInUp}>
							<CardBalance2 title={`Providing keys`} price={`12,138`} />
						</motion.div>
						<motion.div variants={fadeInUp}>
							<CardBalance3 title={`Balance Insurance`} price={`3,910`} />
						</motion.div>
					</motion.div>
				</section>

				{/* Chart */}
				<motion.section variants={stagger}>
					<motion.h3
						variants={fadeInUp}
						className="flex gap-2 mb-4 text-center text-black lg:text-left"
					>
						Statistics
					</motion.h3>
					<motion.div
						variants={fadeInUp}
						className="w-full p-10 rounded-xl bg-pureBlack"
					>
						<Chart />
					</motion.div>
				</motion.section>
			</div>

			{/* Left Section */}
			<motion.section
				variants={stagger}
				className="flex flex-col gap-4 px-6 mt-4 overflow-hidden h-fit"
			>
				<motion.h3
					variants={fadeInUp}
					className="flex gap-2 mb-4 text-center text-black lg:text-left"
				>
					Section
				</motion.h3>
				<motion.div
					variants={stagger}
					className="flex flex-row flex-wrap gap-4 sm:flex-wrap lg:flex-col"
				>
					<motion.div variants={fadeInUp}>
						<CardAgents />
					</motion.div>
					<motion.div variants={fadeInUp}>
						<CardTransactions />
					</motion.div>
				</motion.div>
			</motion.section>
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
