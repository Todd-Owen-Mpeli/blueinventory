import Image from "next/image";
import styles from "../styles/components/CTAOne.module.scss";

const HowItWorks = () => {
	return (
		<section className={styles.HowItWorks} id="HowItWorks">
			<div className="container mx-auto px-0">
				<div className="content">
					<div className="py-20 px-6 md:px-10 xl:px-28">
						<div className="mb-16 text-center mx-auto">
							<span className="text-lightBlue font-bold">
								Our Services made simple
							</span>
							<h2 className="mb-6 mt-8 text-4xl md:text-6xl text-center font-bold font-heading tracking-px-n leading-none md:max-w-2xl mx-auto">
								Connect your Inventory Without The Chaos
							</h2>
						</div>
						<div className="flex flex-col gap-10 lg:gap-20 xl:gap-36 mt-10 lg:mt-36">
							<div className="flex flex-col md:flex-row justify-between items-center gap-20">
								<div className="w-full lg:w-1/2 mb-5 lg:mb-0">
									<span className="mx-auto lg:mx-0 mb-6 lg:mb-10 flex w-[7rem] h-[7rem] items-center justify-center bg-flatPinkRed rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/tv.png"
											alt=""
											width="75px"
											height="75px"
											objectFit="contain"
										/>
									</span>
									<h5 className="mb-4 text-tiny uppercase font-bold text-center lg:text-left font-heading text-lightBlue">
										Create and Manage Inventory
									</h5>
									<h3 className="mb-4 text-2xl font-bold font-heading text-center lg:text-left text-black">
										Be Always In Control.
									</h3>
									<p className="text-black text-base text-center lg:text-left leading-relaxed">
										Creating and managing inventory has never been easier. With
										powerful tools that integrate with popular POS and
										e-commerce. No more spending hours on spreadsheets to figure
										out what stock you have
									</p>
								</div>
								<div className="w-full lg:w-1/2">
									<Image
										class="w-full mx-auto rounded-[15px]"
										src="/img/pexels-rodnae-productions-5915209.jpg"
										alt="Image One"
										width="750px"
										height="500px"
										objectFit="cover"
									/>
								</div>
							</div>
							<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-20">
								<div className="w-full lg:w-1/2">
									<Image
										class="w-full mx-auto rounded-[15px]"
										src="/img/pexels-jopwell-2422278.jpg"
										alt="Image One"
										width="750px"
										height="500px"
										objectFit="cover"
									/>
								</div>
								<div className="w-full lg:w-1/2 mb-5 lg:mb-0">
									<span className="mx-auto lg:mx-0 mb-6 lg:mb-10 flex w-[7rem] h-[7rem] items-center justify-center bg-lightBlue rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/electric-guitar.png"
											alt=""
											width="75px"
											height="75px"
											objectFit="contain"
										/>
									</span>
									<h5 className="mb-4 text-tiny uppercase font-bold font-heading text-center lg:text-left text-lightBlue">
										Track Related Products
									</h5>
									<h3 className="mb-4 text-2xl font-bold font-heading text-center lg:text-left text-black">
										Keep updated all the time
									</h3>
									<p className="text-black text-base text-center lg:text-left leading-relaxed">
										Track inventory levels across a wide variety of products and
										calculate the costs of goods sold. No more logging into
										multiple seller panels and software to track sales. Stop
										worrying about running out of stock - plan your inventory
										with absolute clarity
									</p>
								</div>
							</div>
							<div className="flex flex-col md:flex-row justify-between items-center gap-20">
								<div className="w-full lg:w-1/2 mb-5 lg:mb-0">
									<span className="mx-auto lg:mx-0 mb-6 lg:mb-10 flex w-[7rem] h-[7rem] items-center justify-center bg-limeGreen rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/graph.png"
											alt=""
											width="75px"
											height="75px"
											objectFit="contain"
										/>
									</span>
									<h5 className="mb-4 text-tiny uppercase font-bold font-heading text-center lg:text-left text-lightBlue">
										Inventory Optimization
									</h5>
									<h3 className="mb-4 text-2xl font-bold font-heading text-center lg:text-left text-black">
										Save Time And Money.
									</h3>
									<p className="text-black text-base text-center lg:text-left leading-relaxed">
										BlueInventory&rsquo;s inventory tracking software helps you
										find what is selling and what is not, saving you time and
										money by ensuring that your inventory is not only accurate,
										but has been prioritized.
									</p>
								</div>
								<div className="w-full lg:w-1/2 px-0">
									<Image
										class="w-full mx-auto rounded-[15px]"
										src="/img/pexels-rfstudio-3811082.jpg"
										alt="Image One"
										width="750px"
										height="500px"
										objectFit="cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
