import Image from "next/image";

const HowItWorks = () => {
	return (
		<section className="textImageJumbo">
			<div className="container mx-auto">
				<div className="content px-8 lg:px-4">
					<div className="py-20 radius-for-skewed">
						<div className="mb-16 text-center mx-auto">
							<span className="text-lightBlue font-bold">
								Our Services made simple
							</span>
							<h2 className="mb-6 mt-8 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none md:max-w-2xl mx-auto">
								Connect your Inventory Without The Chaos
							</h2>
						</div>
						<div className="threeTextGrid relative flex flex-wrap -mx-4 z-0">
							<div className="colorLine hidden lg:block absolute top-[10%] z-[-1] inset-x-0 max-w-5xl xl:max-w-4xl mx-auto py-px rounded bg-gradient-to-r from-flatPinkRed via-flatLimeGreen to-yellow"></div>
							<div className="mb-8 w-full lg:w-1/3 px-4 text-center">
								<span className="relative mb-6 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-flatPinkRed rounded-full text-white text-2xl">
									1
								</span>
								<h5 className="mb-4 text-tiny uppercase font-bold font-heading text-lightBlue">
									Create and Manage Inventory
								</h5>
								<h3 className="mb-4 text-2xl font-bold font-heading text-black">
									Always In Control.
								</h3>
								<p className="text-black leading-relaxed">
									Creating and managing inventory has never been easier. With
									powerful tools that integrate with popular POS and e-commerce
									systems.
								</p>
							</div>
							<div className="mb-8 w-full lg:w-1/3 px-4 text-center">
								<span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-flatLimeGreen rounded-full text-white text-2xl">
									2
								</span>
								<h5 className="mb-4 text-tiny uppercase font-bold font-heading text-lightBlue">
									Track Related Products
								</h5>
								<h3 className="mb-4 text-2xl font-bold font-heading text-black">
									Keep updated all the time
								</h3>
								<p className="text-black leading-relaxed">
									Track inventory levels across a wide variety of products and
									calculate the costs of goods sold.
								</p>
							</div>
							<div className="w-full lg:w-1/3 px-4 text-center">
								<span className="mb-4 lg:mb-10 mx-auto flex w-16 h-16 items-center justify-center bg-yellow rounded-full text-white text-2xl">
									3
								</span>
								<h5 className="mb-4 text-tiny uppercase font-bold font-heading text-lightBlue">
									Inventory Optimization
								</h5>
								<h3 className="mb-4 text-2xl font-bold font-heading text-black">
									Save Time And Money.
								</h3>
								<p className="text-black leading-relaxed">
									BlueInventory&rsquo;s inventory tracking software helps you
									find what is selling and what is not, saving you time and
									money by ensuring that your inventory is not only accurate,
									but has been prioritized.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
