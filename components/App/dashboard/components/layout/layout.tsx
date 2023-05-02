// Import
import React from "react";
import {motion} from "framer-motion";
import {useLockedBody} from "../hooks/useBodyLock";
import {createTheme, NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

// Styling
import {WrapperLayout} from "./layout.styles";
import styles from "../../../../../styles/components/Dashboard.module.scss";

// Components
import {NavbarWrapper} from "../navbar/navbar";
import {SidebarContext} from "./layout-context";
import {SidebarWrapper} from "../sidebar/sidebar";
import MetaTag from "@/components/App/dashboard/components/Meta/MetaTag";

// Themes
const lightTheme = createTheme({
	type: "light",
	theme: {
		colors: {},
	},
});

const darkTheme = createTheme({
	type: "dark",
	theme: {
		colors: {},
	},
});

interface Layout {
	metaTag: {
		firstName: string;
		lastName: string;
		profileImageUrl: string;
	};
	children: React.ReactNode;
}

export const Layout = ({children, metaTag}: Layout) => {
	const [sidebarOpen, setSidebarOpen] = React.useState(false);
	const [_, setLocked] = useLockedBody(false);
	const handleToggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
		setLocked(!sidebarOpen);
	};

	return (
		<NextThemesProvider
			defaultTheme="system"
			attribute="class"
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}
		>
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
							<SidebarWrapper />
							<NavbarWrapper>{children}</NavbarWrapper>
						</WrapperLayout>
					</SidebarContext.Provider>
				</motion.section>
			</NextUIProvider>
		</NextThemesProvider>
	);
};
