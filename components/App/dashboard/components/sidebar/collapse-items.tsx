import {Flex} from "../styles/flex";
import React, {useState} from "react";
import {Collapse, Text} from "@nextui-org/react";

// Components
import {ChevronUpIcon} from "../icons/sidebar/chevron-up-icon";

interface Props {
	title: string;
	items: string[];
	icon: React.ReactNode;
}

export const CollapseItems = ({icon, items, title}: Props) => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen(!open);
	return (
		<Flex
			css={{
				gap: "$6",
				height: "100%",
				cursor: "pointer",
				alignItems: "center",
			}}
			align={"center"}
		>
			<Collapse
				title={
					<Flex
						css={{
							"&:active": {
								transform: "scale(0.98)",
							},
							"svg path": {
								fill: "#3d77f3",
							},
							"&:hover": {
								bg: "#0072f5",
								"& svg path": {
									fill: "#f6ad37",
								},
							},
						}}
						justify={"between"}
						onClick={handleToggle}
						className="h-full px-4 gap-4 flex items-center min-h-[44px] w-full rounded-md cursor-pointer transition-all duration-200 ease-in-out"
					>
						<Flex css={{gap: "$6"}}>
							{icon}
							<span className="text-base text-white">{title}</span>
						</Flex>

						<ChevronUpIcon
							css={{
								transition: "transform 0.3s ease",
								transform: open ? "rotate(-180deg)" : "rotate(0deg)",
							}}
						/>
					</Flex>
				}
				css={{
					width: "100%",
					"& .nextui-collapse-view": {
						p: "0",
					},
					"& .nextui-collapse-content": {
						marginTop: "$1",
						padding: "0px",
					},
				}}
				divider={false}
				showArrow={false}
			>
				{items.map((item, index) => (
					<Flex
						key={index}
						direction={"column"}
						css={{
							paddingLeft: "$16",
						}}
					>
						<Text
							span
							weight={"normal"}
							size={"$md"}
							css={{
								color: "$accents8",
								cursor: "pointer",
								"&:hover": {
									color: "$accents9",
								},
							}}
						>
							{item}
						</Text>
					</Flex>
				))}
			</Collapse>
		</Flex>
	);
};
