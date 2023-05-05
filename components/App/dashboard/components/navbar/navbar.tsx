// Import
import React from "react";
import {Box} from "../styles/box";
import {Flex} from "../styles/flex";
import {Input, Link, Navbar, Text} from "@nextui-org/react";

// Components
import {UserDropdown} from "./user-dropdown";
import {BurgerButton} from "./Burger-button";
import {SearchIcon} from "../icons/searchicon";
import {GithubIcon} from "../icons/navbar/github-icon";
import {SupportIcon} from "../icons/navbar/support-icon";
import {FeedbackIcon} from "../icons/navbar/feedback-icon";
import {NotificationsDropdown} from "./notifications-dropdown";

interface Props {
	lastName: string;
	firstName: string;
	emailAddress: string;
	profileImageUrl: string;
	children: React.ReactNode;
}

export const NavbarWrapper = ({
	children,
	lastName,
	firstName,
	emailAddress,
	profileImageUrl,
}: Props) => {
	const collapseItems: string[] = [
		"Profile",
		"Dashboard",
		"Activity",
		"Analytics",
		"System",
		"Deployments",
		"My Settings",
		"Team Settings",
		"Help & Feedback",
		"Log Out",
	];

	// Notifications Content
	const notifications: any = [
		{
			id: 1,
			title: "📣 Edit your information",
			description:
				"Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
		},
		{
			id: 2,
			title: "🚀 Say goodbye to paper receipts!",
			description:
				"Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
		},
		{
			id: 3,
			title: "📣 Inventory information update",
			description:
				"Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
		},
		{
			id: 4,
			title: "Stock Control levels",
			description:
				"Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
		},
	];

	return (
		<section className="relative flex flex-col w-full overflow-x-hidden overflow-y-auto bg-pureBlack">
			<Navbar
				isBordered
				css={{
					"@md": {
						justifyContent: "space-between",
					},

					"& .nextui-navbar-container": {
						border: "none",
						maxWidth: "100%",

						gap: "$6",
						"@md": {
							justifyContent: "space-between",
						},
					},
				}}
				className="justify-between w-full"
			>
				<Navbar.Content showIn="md">
					<BurgerButton />
				</Navbar.Content>
				<Navbar.Content
					hideIn={"md"}
					css={{
						width: "100%",
					}}
				>
					<Input
						clearable
						contentLeft={
							<SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
						}
						contentLeftStyling={false}
						css={{
							w: "100%",
							transition: "all 0.2s ease",
							"@xsMax": {
								w: "100%",
								// mw: '300px',
							},
							"& .nextui-input-content--left": {
								h: "100%",
								ml: "$4",
								dflex: "center",
							},
						}}
						placeholder="Search..."
					/>
				</Navbar.Content>
				<Navbar.Content>
					<Navbar.Content hideIn={"md"}>
						<Link href="/contact/#contactForm">
							<div className="flex items-center justify-between gap-2">
								<FeedbackIcon />
								<span className="text-base text-white">Feedback?</span>
							</div>
						</Link>
					</Navbar.Content>

					<Navbar.Content>
						<NotificationsDropdown notifications={notifications} />
					</Navbar.Content>

					<Navbar.Content hideIn={"md"}>
						<SupportIcon />
					</Navbar.Content>
					<Navbar.Content>
						<Link href="https://github.com/" target={"_blank"}>
							<GithubIcon />
						</Link>
					</Navbar.Content>
					<Navbar.Content>
						<UserDropdown />
					</Navbar.Content>
				</Navbar.Content>

				<Navbar.Collapse>
					{collapseItems.map((item, index) => (
						<Navbar.CollapseItem
							key={item}
							activeColor="secondary"
							css={{
								color: index === collapseItems.length - 1 ? "$error" : "",
							}}
							isActive={index === 2}
						>
							<Link
								color="inherit"
								css={{
									minWidth: "100%",
								}}
								href="#"
							>
								{item}
							</Link>
						</Navbar.CollapseItem>
					))}
				</Navbar.Collapse>
			</Navbar>
			{children}
		</section>
	);
};
