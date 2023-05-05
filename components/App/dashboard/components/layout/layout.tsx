// Import
import React from "react";
import {motion} from "framer-motion";
import {useLockedBody} from "../hooks/useBodyLock";
import {NextUIProvider} from "@nextui-org/react";

// Styling
import {WrapperLayout} from "./layout.styles";
import styles from "../../../../../styles/pages/Dashboard.module.scss";

// Components
import {NavbarWrapper} from "../navbar/navbar";
import {SidebarContext} from "./layout-context";
import {SidebarWrapper} from "../sidebar/sidebar";
import MetaTag from "@/components/App/dashboard/components/Meta/MetaTag";

interface Layout {
	lastName: string;
	firstName: string;
	emailAddress: string;
	profileImageUrl: string;
	metaTag: {
		firstName: string;
		lastName: string;
		profileImageUrl: string;
	};
	children: React.ReactNode;
}

export const Layout = ({
	children,
	metaTag,
	lastName,
	firstName,
	emailAddress,
	profileImageUrl,
}: Layout) => {
	const [sidebarOpen, setSidebarOpen] = React.useState(false);
	const [_, setLocked] = useLockedBody(false);
	const handleToggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
		setLocked(!sidebarOpen);
	};

	return (
		<section className="bg-pureBlack">
			<NextUIProvider>
				<motion.section
					exit={{
						opacity: 0,
					}}
					initial="initial"
					animate="animate"
					className={styles.dashboard}
				>
					<SidebarContext.Provider
						value={{
							collapsed: sidebarOpen,
							setCollapsed: handleToggleSidebar,
						}}
					>
						<MetaTag
							firstName={metaTag?.firstName}
							lastName={metaTag?.lastName}
							profileImageUrl={metaTag?.profileImageUrl}
						/>
						<WrapperLayout>
							<SidebarWrapper profileImageUrl={profileImageUrl} />
							<NavbarWrapper
								lastName={lastName}
								firstName={firstName}
								emailAddress={emailAddress}
								profileImageUrl={profileImageUrl}
							>
								{children}
							</NavbarWrapper>
						</WrapperLayout>
					</SidebarContext.Provider>
				</motion.section>
			</NextUIProvider>
		</section>
	);
};
