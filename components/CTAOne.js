import styles from "../styles/components/CTAOne.module.scss";

const CTAOne = () => {
	return (
		<section className="CTAOne">
			<div className="bg-darkBlue text-white rounded-[0px] lg:rounded-t-[125px]">
				<div className="py-20 bg-grey-900 radius-for-skewed">
					<div className="container mx-auto px-4">
						<div className="topSection max-w-2xl mx-auto text-center">
							<h2 className="mb-4 text-white text-4xl lg:text-5xl font-bold">
								More than just a Inventory Management Solution
							</h2>
							<p className="mb-6 max-w-md mx-auto text-white text-base leading-loose">
								Join the business, manufacturers and distributors across
								Tanzania succeeding with BlueInventory.
							</p>
						</div>
						<div className={styles.bottomSection}>
							<div className="relative z-10 mx-auto md:max-w-2xl">
								<h3 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
									Be the first to know when we launch
								</h3>
								<p className="mb-8 text-base text-lightGrey font-medium">
									Stay in the loop with everything you need to know.
								</p>
								<div className="mx-auto md:max-w-md text-left">
									<div className="flex flex-wrap mb-1">
										<div className="w-full md:flex-1 mb-3 md:mb-0 md:mr-6">
											<input
												className="w-full py-3 px-4 text-grey leading-tight placeholder-grey focus:outline-none focus:ring-2 focus:ring-limeGreen focus:ring-opacity-50 border border-lightGrey rounded-lg shadow-xsm"
												type="text"
												placeholder="Enter your email"
											/>
										</div>
										<div className="w-full md:w-auto">
											<a
												className="inline-block py-3 px-5 w-full leading-5 text-white bg-blue hover:bg-limeGreen hover:ease-in-out hover:duration-200 text-white font-medium text-center focus:ring-2 focus:ring-limeGreen focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
												href="#"
											>
												Subscribe
											</a>
										</div>
									</div>
									<span className="text-xs text-lightGrey font-medium">
										<span>We care about your data in our </span>
										<a className="text-limeGreen hover:text-limeGreen" href="#">
											privacy policy
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTAOne;
