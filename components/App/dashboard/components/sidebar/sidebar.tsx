// Import
import React, {useState} from "react";
import {useRouter} from "next/router";
import {CollapseItems} from "./collapse-items";
import {Avatar, Tooltip} from "@nextui-org/react";

// Styling
import {Box} from "../styles/box";
import {Flex} from "../styles/flex";
import {Sidebar} from "../sidebar/sidebarStyled";

// Components
import {SidebarItem} from "./sidebar-item";
import {SidebarMenu} from "./sidebar-menu";
import {CompaniesDropdown} from "./companies-dropdown";
import {useSidebarContext} from "../layout/layout-context";

// Icons
import {DevIcon} from "../icons/sidebar/dev-icon";
import {HomeIcon} from "../icons/sidebar/home-icon";
import {ViewIcon} from "../icons/sidebar/view-icon";
import {FilterIcon} from "../icons/sidebar/filter-icon";
import {BalanceIcon} from "../icons/sidebar/balance-icon";
import {ReportsIcon} from "../icons/sidebar/reports-icon";
import {PaymentsIcon} from "../icons/sidebar/payments-icon";
import {AccountsIcon} from "../icons/sidebar/accounts-icon";
import {ProductsIcon} from "../icons/sidebar/products-icon";
import {SettingsIcon} from "../icons/sidebar/settings-icon";
import {CustomersIcon} from "../icons/sidebar/customers-icon";
import {ChangeLogIcon} from "../icons/sidebar/changelog-icon";

export const SidebarWrapper = () => {
	const router = useRouter();
	const defaultRoute = "/dashboard";
	const {collapsed, setCollapsed} = useSidebarContext();

	return (
		<Box
			as="aside"
			className="sticky top-0 min-h-screen h-full z-[202] bg-pureBlack"
		>
			{collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

			<Sidebar collapsed={collapsed} className="bg-blueDash rounded-r-xl">
				<Sidebar.Header>
					<CompaniesDropdown />
				</Sidebar.Header>
				<Flex direction={"column"} justify={"between"} css={{height: "100%"}}>
					<Sidebar.Body className="body sidebar">
						<SidebarItem
							title="Home"
							icon={<HomeIcon />}
							isActive={router.pathname === defaultRoute}
							href={defaultRoute}
						/>
						<SidebarMenu title="Main Menu">
							<SidebarItem
								isActive={router.pathname === `${defaultRoute}/accounts`}
								title="Accounts"
								icon={<AccountsIcon />}
								href={`${defaultRoute}/accounts`}
							/>
							<SidebarItem
								isActive={router.pathname === `${defaultRoute}/payments`}
								title="Payments"
								href={`${defaultRoute}/payments`}
								icon={<PaymentsIcon />}
							/>
							<CollapseItems
								icon={<BalanceIcon />}
								items={["Banks Accounts", "Credit Cards", "Loans"]}
								title="Balances"
							/>

							<SidebarItem
								isActive={router.pathname === `${defaultRoute}/customers`}
								title="Customers"
								icon={<CustomersIcon />}
							/>
							<SidebarItem
								isActive={router.pathname === "/products"}
								title="Products"
								icon={<ProductsIcon />}
							/>
							<SidebarItem
								isActive={router.pathname === "/reports"}
								title="Reports"
								icon={<ReportsIcon />}
								href={`${defaultRoute}/customers`}
							/>
						</SidebarMenu>

						<SidebarMenu title="General">
							<SidebarItem
								isActive={router.pathname === `${defaultRoute}/developers`}
								title="Developers"
								icon={<DevIcon />}
								href={`${defaultRoute}/developers`}
							/>
							<SidebarItem
								isActive={router.pathname === `${defaultRoute}/view`}
								title="View Test Data"
								icon={<ViewIcon />}
								href={`${defaultRoute}/view`}
							/>
							<SidebarItem
								isActive={router.pathname === `${defaultRoute}/settings`}
								title="Settings"
								icon={<SettingsIcon />}
								href={`${defaultRoute}/settings`}
							/>
						</SidebarMenu>

						<SidebarMenu title="Updates">
							<SidebarItem
								isActive={router.pathname === `${defaultRoute}/changelog`}
								title="Changelog"
								icon={<ChangeLogIcon />}
								href={`${defaultRoute}/changelog`}
							/>
						</SidebarMenu>
					</Sidebar.Body>
					<Sidebar.Footer>
						<Tooltip content={"Settings"} rounded color="primary">
							<SettingsIcon />
						</Tooltip>
						<Tooltip content={"Adjustments"} rounded color="primary">
							<FilterIcon />
						</Tooltip>
						<Tooltip content={"Profile"} rounded color="primary">
							<Avatar
								src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
								size={"sm"}
							/>
						</Tooltip>
					</Sidebar.Footer>
				</Flex>
			</Sidebar>
		</Box>
	);
};
