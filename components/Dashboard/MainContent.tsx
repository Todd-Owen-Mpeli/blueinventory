// Imports
import {FC} from "react";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";

// Components
import Tables from "./components/Tables";

const mainContent: FC = () => {
	return (
		<>
			<div className={styles.mainContent}>
				<Tables />
			</div>
		</>
	);
};

export default mainContent;
