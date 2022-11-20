/* eslint-disable @next/next/no-img-element */
import styles from "../styles/components/stats.module.scss";

const Stats = () => {
	return (
		<section className={styles.stats}>
			<div className="container mx-auto relative z-50">
				<div className="relative z-50">
					<h2 className="mb-5 text-5xl md:text-6xl text-white font-bold font-heading text-center tracking-px-n leading-tight">
						Unlock your business true potential
					</h2>
					<p className="mb-16 text-lg text-white text-center font-medium leading-normal md:max-w-2xl mx-auto">
						Its easy to end up stocked with slow-moving items and low-profit
						products. Identify and fix inventory problems using real-time
						reporting that highlights trouble-spots.
					</p>
					<div className="md:max-w-4xl mx-auto bg-darkBlue rounded-[15px] shadow-6xl">
						<div className="flex flex-wrap justify-center items-center">
							<div className="w-full md:flex-1">
								<div className="text-center p-8 md:px-16 md:pt-9 md:pb-11">
									<p className="mb-4 text-white font-semibold leading-normal">
										Users Hours Spent before
									</p>
									<h2 className="text-orange mb-4 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
										6.7
									</h2>
									<p className="text-white font-medium leading-snug">
										Average hours spent a day managing inventory
									</p>
								</div>
							</div>
							<div className="w-auto">
								<div className="h-px w-14 md:w-px md:h-14 bg-grey"></div>
							</div>
							<div className="w-full md:flex-1">
								<div className="text-center p-8 md:px-16 md:pt-9 md:pb-11">
									<p className="mb-4 text-white font-semibold leading-normal">
										Users Hours Spent after
									</p>
									<h2 className="text-limeGreen mb-4 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
										3.4
									</h2>
									<p className="text-white font-medium leading-snug">
										48% average hours saved a day managing inventory
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.backgroundIcon}>
					<img
						src="/img/Icons/meteorite.png"
						alt=""
						width="450px"
						height="450px"
						className={styles.backgroundSvgOne}
					/>
				</div>
			</div>
		</section>
	);
};

export default Stats;
