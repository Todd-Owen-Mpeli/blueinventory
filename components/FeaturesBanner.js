import Image from "next/image";
import styles from "../styles/components/FeaturesBanner.module.scss";

const FeaturesBanner = () => {
	return (
		<section className={styles.featuresBanner}>
			<div className="container px-0 mx-auto">
				<div className="flex flex-col lg:flex-row justify-between items-center">
					<div className="w-full lg:w-1/3 py-8 px-6 sm:p-8 sm:px-0">
						<div className={styles.iconsWrap}>
							<div className="flex flex-col lg:flex-row items-center m-0 sm:m-3">
								<div className="w-auto p-3">
									<span className="mx-auto flex w-[7rem] h-[7rem] items-center justify-center bg-flatLightBlue rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/goal.png"
											alt=""
											width="75px"
											height="75px"
										/>
									</span>
								</div>
								<div className="flex-1 p-3">
									<h3 className="text-lg sm:text-xl text-center lg:text-left font-semibold">
										Your Supply Chain simplified for building your business
									</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/3 py-8 px-6 sm:p-8 sm:px-0">
						<div className={styles.iconsWrap}>
							<div className="flex flex-col lg:flex-row items-center m-0 sm:m-3">
								<div className="w-auto p-3">
									<span className="mx-auto flex w-[7rem] h-[7rem] items-center justify-center bg-blue rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/idea.png"
											alt=""
											width="75px"
											height="75px"
										/>
									</span>
								</div>
								<div className="flex-1 p-3">
									<h3 className="text-lg sm:text-xl text-center lg:text-left font-semibold">
										One-click copy &amp; paste system to make it that much
										easier
									</h3>
								</div>
							</div>
						</div>
					</div>
					<div className=" w-full lg:w-1/3 py-8 px-6 sm:p-8 sm:px-0">
						<div className={styles.iconsWrap}>
							<div className="flex flex-col lg:flex-row items-center m-0 sm:m-3">
								<div className="w-auto p-3">
									<span className="mx-auto flex w-[7rem] h-[7rem] items-center justify-center bg-darkBlue rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/startup.png"
											alt=""
											width="75px"
											height="75px"
										/>
									</span>
								</div>
								<div className="flex-1 p-3">
									<h3 className="text-lg sm:text-xl text-center lg:text-left font-semibold">
										Fully Tracked ordering low stock products
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesBanner;