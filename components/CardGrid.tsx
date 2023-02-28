import {FunctionComponent} from "react";
import FeatureListCard from "../components/Cards/FeatureListCard";
import styles from "../styles/components/CardGrid.module.scss";

interface IProps {
	title: string;
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				paragraph: string;
			};
		}
	];
}

const CardGrid: FunctionComponent<IProps> = ({title, gridContent}) => {
	return (
		<section className={styles.cardGrid}>
			<div className="container px-0 mx-auto">
				<div className={styles.content}>
					<div className="my-28">
						<h2 className="mx-auto text-5xl font-bold leading-none text-center text-white sm:text-8xl tracking-px-n md:max-w-2xl">
							{title}
						</h2>
					</div>
					<div className={styles.gridContent}>
						{gridContent.map((keys) => (
							<FeatureListCard
								key={keys?.card?.id}
								title={keys?.card?.title}
								paragraph={keys?.card?.paragraph}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CardGrid;
