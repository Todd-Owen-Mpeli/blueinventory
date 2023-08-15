// Imports
import {FC} from "react";
import {IDashBoardLayout} from "@/types/Dashboard/layout";

// Components
import Meta from "../Meta/Meta";
import Navigation from "./Navigation";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";

const Layout: FC<IDashBoardLayout> = ({children, tailwindStyling}) => {
	return (
		<>
			<Meta />

			<div className={styles.dashboard}>
				<Navigation />
				<div className={tailwindStyling}>{children}</div>
			</div>
		</>
	);
};

export default Layout;
