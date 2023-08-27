import {FC} from "react";
import styles from "@/styles/components/Loading.module.scss";

const Loading: FC = () => {
	return (
		<>
			<div className={styles.reactWrapper}>
				<div className={styles.react}>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</div>
			</div>
		</>
	);
};

export default Loading;
