// Import
import React from "react";
import NextLink from "next/link";
import {Flex} from "../styles/flex";
import {Link} from "@nextui-org/react";

// Components
import {useSidebarContext} from "../layout/layout-context";

interface Props {
	title: string;
	href?: string;
	isActive?: boolean;
	icon: React.ReactNode;
}

export const SidebarItem = ({icon, title, isActive, href = ""}: Props) => {
	const {collapsed, setCollapsed} = useSidebarContext();

	const handleClick = () => {
		if (window.innerWidth < 768) {
			setCollapsed();
		}
	};
	return (
		<NextLink href={href}>
			<Link className="max-w-full bg-blue">
				<Flex
					onClick={handleClick}
					css={{
						"svg path": {
							fill: "#3d77f3",
						},
						"&:active": {
							transform: "scale(0.98)",
						},
						...(isActive
							? {
									bg: "#0072f5",

									"& svg path": {
										fill: "#f6ad37",
									},
							  }
							: {
									"&:hover": {
										bg: "#0072f5",
										"& svg path": {
											fill: "#f6ad37",
										},
									},
							  }),
					}}
					className="h-full px-4 gap-4 flex items-center min-h-[44px] w-full rounded-md cursor-pointer transition-all duration-200 ease-in-out"
				>
					{icon}
					<span className="text-base text-white">{title}</span>
				</Flex>
			</Link>
		</NextLink>
	);
};
