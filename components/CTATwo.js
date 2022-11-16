import Link from "next/link";
import styles from "../styles/components/CTATwo.module.scss";

const CTATwo = () => {
	return (
		<section className="py-14 px-4 md:py-28 md:px-10 bg-blue overflow-hidden bg-gradient-to-r from-blue to-blueTwo">
			<div className="container px-0 mx-auto">
				<div className="flex flex-wrap items-center">
					<div className="w-full md:w-1/2 relative z-50">
						<div className="">
							<h2 className="mb-5 text-4xl md:text-6xl text-white text-center md:text-left font-bold tracking-px-n leading-tight">
								Join the the pre-launch hype train
							</h2>
							<p className="text-white text-center md:text-left text-opacity-90 text-base md:max-w-md">
								Be the first to know when we launch. Stay in the loop with
								everything you need to know.
							</p>
						</div>
						<div className={styles.backgroundIcon}>
							<img
								src="/img/Icons/spaceship.png"
								alt=""
								width="450px"
								height="450px"
								objectFit="contain"
								className={styles.backgroundSvgOne}
							/>
						</div>
					</div>
					<div className="w-full md:w-1/2 p-8">
						<div className="flex flex-wrap ml-auto md:w-56">
							<div className="w-full p-2">
								<button
									className="py-4 px-6 w-full font-medium rounded-xl shadow-6xl focus:ring focus:ring-limeGreen bg-white hover:bg-limeGreen hover:ease-in-out hover:duration-200 hover:text-white"
									type="button"
								>
									<Link href="#">
										<a className="text-lg sm:text-xl font-semibold">
											Sign Up Now
										</a>
									</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTATwo;
