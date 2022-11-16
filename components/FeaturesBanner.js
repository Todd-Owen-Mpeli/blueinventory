import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/FeaturesBanner.module.scss";

const FeaturesBanner = () => {
	return (
		<section className={styles.featuresBanner}>
			<div class="container px-0 mx-auto">
				<div class="flex flex-col lg:flex-row justify-between items-center">
					<div class="w-full lg:w-1/3 py-8 px-6 sm:p-8 sm:px-0">
						<div className={styles.iconsWrap}>
							<div class="flex flex-wrap items-center m-0 sm:m-3">
								<div class="w-auto p-3">
									<span className="mx-auto flex w-16 h-16 items-center justify-center bg-flatLightBlue rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/goal.png"
											alt=""
											width="150px"
											height="150px"
										/>
									</span>
								</div>
								<div class="flex-1 p-3">
									<h3 class="text-lg sm:text-xl font-semibold">
										Your Supply Chain simplified for building your business
									</h3>
								</div>
							</div>
						</div>
					</div>
					<div class="w-full lg:w-1/3 py-8 px-6 sm:p-8 sm:px-0">
						<div className={styles.iconsWrap}>
							<div class="flex flex-wrap items-center m-0 sm:m-3">
								<div class="w-auto p-3">
									<span className="mx-auto flex w-16 h-16 items-center justify-center bg-blue rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/idea.png"
											alt=""
											width="150px"
											height="150px"
										/>
									</span>
								</div>
								<div class="flex-1 p-3">
									<h3 class="text-lg sm:text-xl font-semibold">
										One-click copy &amp; paste system to make it that much
										easier
									</h3>
								</div>
							</div>
						</div>
					</div>
					<div class=" w-full lg:w-1/3 py-8 px-6 sm:p-8 sm:px-0">
						<div className={styles.iconsWrap}>
							<div class="flex flex-wrap items-center m-0 sm:m-3">
								<div class="w-auto p-3">
									<span className="mx-auto flex w-16 h-16 items-center justify-center bg-darkBlue rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/startup.png"
											alt=""
											width="150px"
											height="150px"
										/>
									</span>
								</div>
								<div class="flex-1 p-3">
									<h3 class="text-lg sm:text-xl font-semibold">
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
