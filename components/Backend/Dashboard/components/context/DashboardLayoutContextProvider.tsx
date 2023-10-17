import {FC} from "react";
import {DashboardLayoutContext} from "@/context/dashboard";
import {IDashboardLayoutContextProvider} from "@/types/context/dashboard";

const DashboardLayoutContextProvider: FC<IDashboardLayoutContextProvider> = ({
	children,
	revealMediaFilesModal,
	revealCreateItemModal,
	handleCloseCreateItemModal,
	handleRevealMediaFilesModal,
	handleRevealUserCreateItemModal,
	handleCloseMediaFilesModalHandler,
}) => {
	return (
		<DashboardLayoutContext.Provider
			value={{
				revealMediaFilesModal: revealMediaFilesModal,
				revealCreateItemModal: revealCreateItemModal,
				handleCloseCreateItemModal: handleCloseCreateItemModal,
				handleRevealMediaFilesModal: handleRevealMediaFilesModal,
				handleRevealUserCreateItemModal: handleRevealUserCreateItemModal,
				handleCloseMediaFilesModalHandler: handleCloseMediaFilesModalHandler,
			}}
		>
			{children}
		</DashboardLayoutContext.Provider>
	);
};

export default DashboardLayoutContextProvider;
