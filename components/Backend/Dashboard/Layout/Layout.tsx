// Imports
import {FC, useState} from "react";
import {IDashBoardLayout} from "@/types/Dashboard/layout";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";
import TopNavbar from "./TopNavbar";

// Context Component
import DashboardLayoutContextProvider from "../components/context/DashboardLayoutContextProvider";

// Components
import Navigation from "./Navigation";
import CreateItem from "../components/CreateItem";
import MediaFiles from "../components/Modals/MediaFiles";

const Layout: FC<IDashBoardLayout> = ({children}) => {
	const [revealCreateItemModal, setRevealCreateItemModal] = useState(false);
	const [revealMediaFilesModal, setRevealMediaFilesModal] = useState(false);

	/* Hides or Displays Media Files Modal */
	const handleRevealMediaFilesModal = () => {
		setRevealMediaFilesModal(!revealMediaFilesModal);
	};
	/* Hides or Displays Create Item Modal */
	const handleRevealUserCreateItemModal = () => {
		setRevealCreateItemModal(!revealCreateItemModal);
	};

	/* Hides Create Item Modal */
	const handleCloseCreateItemModal = () => {
		setRevealCreateItemModal(false);
	};

	/* Hides Media Files Modal */
	const handleCloseMediaFilesModalHandler = () => {
		setRevealMediaFilesModal(false);
	};

	return (
		<>
			<DashboardLayoutContextProvider
				revealMediaFilesModal={revealMediaFilesModal}
				revealCreateItemModal={revealCreateItemModal}
				handleCloseCreateItemModal={handleCloseCreateItemModal}
				handleRevealMediaFilesModal={handleRevealMediaFilesModal}
				handleRevealUserCreateItemModal={handleRevealUserCreateItemModal}
				handleCloseMediaFilesModalHandler={handleCloseMediaFilesModalHandler}
			>
				<div className={styles.dashboard}>
					<Navigation />
					<div className="flex flex-col w-full bg-white">
						<TopNavbar />
						<div className="flex flex-col p-0">
							<CreateItem />
							{children}
							<MediaFiles />
						</div>
					</div>
				</div>
			</DashboardLayoutContextProvider>
		</>
	);
};

export default Layout;
