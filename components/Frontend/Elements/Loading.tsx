import {FC} from "react";
import styles from "@/styles/components/Loading.module.scss";

const Loading: FC = () => {
	return (
		<>
			<div className={styles.spinnerWrapper}>
				{/* LEGO SPINNER */}
				<div className={styles.loader}>
					<div className={styles.box + ` ${styles.box0}`}>
						<div></div>
					</div>
					<div className={styles.box + ` ${styles.box1}`}>
						<div></div>
					</div>
					<div className={styles.box + ` ${styles.box2}`}>
						<div></div>
					</div>
					<div className={styles.box + ` ${styles.box3}`}>
						<div></div>
					</div>
					<div className={styles.box + ` ${styles.box4}`}>
						<div></div>
					</div>
					<div className={styles.box + ` ${styles.box5}`}>
						<div></div>
					</div>
					<div className={styles.box + ` ${styles.box6}`}>
						<div></div>
					</div>
					<div className={styles.box + ` ${styles.box7}`}>
						<div></div>
					</div>
					<div className={styles.ground}>
						<div></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Loading;
