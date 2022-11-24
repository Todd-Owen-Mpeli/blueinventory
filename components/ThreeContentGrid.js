import styles from "../styles/components/ThreeContentGrid.module.scss";
import ThreeContentGridCard from "./ThreeContentGridCard";

const ThreeContentGrid = (props) => {
	return (
		<section className={styles.threeContentGrid}>
			<div className="container mx-auto">
				<div className={styles.content}>
					<h2 className="mb-5 text-5xl md:text-6xl text-black font-bold font-heading text-center tracking-px-n leading-tight">
						{props.title}
					</h2>
					<p className="mb-16 text-lg text-black text-center font-medium leading-normal md:max-w-2xl mx-auto">
						{props.paragraph}
					</p>
					<div className="flex flex-wrap">
						{props.gridContent.map((keys) => (
							<ThreeContentGridCard
								key={keys.id}
								icon={keys?.icon}
								title={keys?.title}
								subtitle={keys?.subtitle}
								paragraph={keys?.paragraph}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ThreeContentGrid;
