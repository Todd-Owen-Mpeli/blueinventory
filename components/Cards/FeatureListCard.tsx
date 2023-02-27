import {FunctionComponent} from "react";
import styles from "../styles/components/CardGrid.module.scss";

interface IProps {
	title: string;
	paragraph: string;
}

const FeatureListCard: FunctionComponent<IProps> = ({title, paragraph}) => {
	return (
		<div className={styles.item}>
			<h3 className="text-white mb-4 text-xl lg:text-3xl font-bold font-heading">
				{title}
			</h3>
			<p className="text-lg text-white leading-loose">{paragraph}</p>
		</div>
	);
};

export default FeatureListCard;
