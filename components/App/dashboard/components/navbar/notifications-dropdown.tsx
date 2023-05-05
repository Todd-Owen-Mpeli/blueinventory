// Import
import React, {FC} from "react";
import {Dropdown, Navbar} from "@nextui-org/react";

// Components
import {NotificationIcon} from "../icons/navbar/notificationicon";

interface INotifications {
	notifications: [
		{
			id: string;
			title: string;
			description: string;
		}
	];
}

export const NotificationsDropdown: FC<INotifications> = ({notifications}) => {
	return (
		<Dropdown placement="bottom-right">
			<Dropdown.Trigger>
				<Navbar.Item>
					<NotificationIcon />
				</Navbar.Item>
			</Dropdown.Trigger>
			<Dropdown.Menu
				aria-label="Avatar Actions"
				css={{
					$$dropdownMenuWidth: "340px",
					$$dropdownItemHeight: "70px",
					"& .nextui-dropdown-item": {
						py: "$4",
						// dropdown item left icon
						svg: {
							color: "$secondary",
							mr: "$4",
						},
						// dropdown item title
						"& .nextui-dropdown-item-content": {
							w: "100%",
							fontWeight: "$semibold",
						},
					},
				}}
				className="border-none bg-pureBlack"
			>
				<Dropdown.Section title="Notifications">
					{notifications.map((keys) => (
						<Dropdown.Item
							key={keys?.id}
							showFullDescription
							description={keys?.description}
							className="my-1 transition-all duration-200 ease-in-out hover:bg-blueDash"
						>
							<span className="font-normal text-tiny">{keys?.title}</span>
						</Dropdown.Item>
					))}
				</Dropdown.Section>
			</Dropdown.Menu>
		</Dropdown>
	);
};
