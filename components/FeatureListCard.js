import styles from "../styles/components/CardGrid.module.scss";

const FeatureListCard = (props) => {
	return (
		<div className={styles.item}>
			<h3 className="text-white mb-4 text-xl lg:text-3xl font-bold font-heading">
				{props?.title}
			</h3>
			<p className="text-lg text-white leading-loose">{props?.paragraph}</p>
		</div>
	);
};

export default FeatureListCard;
