import {FunctionComponent} from "react";
import FeatureListCard from "./FeatureListCard";
import styles from "../../styles/components/CardGrid.module.scss";

interface IProps {
	title: string;
	gridContent: [
		{
			id: string;
			title: string;
			paragraph: string;
		}
	];
}

const CardGrid: FunctionComponent<IProps> = ({title, gridContent}) => {
	return (
		<section className={styles.cardGrid}>
			<div className="container px-0 mx-auto">
				<div className={styles.content}>
					<div className="my-28">
						<h2 className="text-white text-5xl sm:text-8xl mx-auto text-center font-bold tracking-px-n leading-none md:max-w-2xl">
							{title}
						</h2>
					</div>
					<div className={styles.gridContent}>
						{gridContent.map((keys) => (
							<FeatureListCard
								key={keys?.id}
								title={keys?.title}
								paragraph={keys?.paragraph}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CardGrid;
