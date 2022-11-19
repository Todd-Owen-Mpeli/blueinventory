import styles from "../styles/components/jumboGrid.module.scss";

const CardGrid = () => {
	return (
		<section className={styles.cardGrid}>
			<div className="container px-4 mx-auto">
				<div className="">
					<div className="my-28">
						<h2 className="text-xl md:text-6xl mx-auto text-center font-bold tracking-px-n leading-none md:max-w-2xl">
							Features List
						</h2>
					</div>
					<div className="flex flex-wrap py-14 px-4">
						<div className="w-full lg:w-1/2">
							<div className="py-12 px-10 rounded-lg bg-white">
								<h3 className="mb-4 text-xl lg:text-3xl font-bold font-heading">
									Make product stock-outs a thing of the past
								</h3>
								<p className="text-lg text-grey leading-loose">
									Create customer delight with Unleashed’s inventory control
									solution. By knowing at which warehouse a stocked item is
									being held, you can estimate how long it will take to get this
									item in store or to the customer.
								</p>
							</div>
						</div>
						<div className="w-full lg:w-1/2">
							<div className="py-12 px-10 rounded-lg bg-white">
								<h3 className="mb-4 text-xl lg:text-3xl font-bold font-heading">
									Suspendisse interdum ullamcorper elit, at consequat libero.
								</h3>
								<p className="text-lg text-grey leading-loose">
									Etiam pellentesque non nibh non pulvinar. Mauris posuere,
									tellus sit amet tempus vestibulum, erat augue imperdiet.
								</p>
							</div>
						</div>
						<div className="w-full lg:w-1/2">
							<div className="py-12 px-10 rounded-lg bg-white">
								<h3 className="mb-4 text-xl lg:text-3xl font-bold font-heading">
									Suspendisse interdum ullamcorper elit, at consequat libero.
								</h3>
								<p className="text-lg text-grey leading-loose">
									Etiam pellentesque non nibh non pulvinar. Mauris posuere,
									tellus sit amet tempus vestibulum, erat augue imperdiet.
								</p>
							</div>
						</div>
						<div className="w-full lg:w-1/2">
							<div className="py-12 px-10 rounded-lg bg-white">
								<h3 className="mb-4 text-xl lg:text-3xl font-bold font-heading">
									Suspendisse interdum ullamcorper elit, at consequat libero.
								</h3>
								<p className="text-lg text-grey leading-loose">
									Etiam pellentesque non nibh non pulvinar. Mauris posuere,
									tellus sit amet tempus vestibulum, erat augue imperdiet.
								</p>
							</div>
						</div>
						<div className="w-full lg:w-1/2">
							<div className="py-12 px-10 rounded-lg bg-white">
								<h3 className="mb-4 text-xl lg:text-3xl font-bold font-heading">
									Suspendisse interdum ullamcorper elit, at consequat libero.
								</h3>
								<p className="text-lg text-grey leading-loose">
									Etiam pellentesque non nibh non pulvinar. Mauris posuere,
									tellus sit amet tempus vestibulum, erat augue imperdiet.
								</p>
							</div>
						</div>
						<div className="w-full lg:w-1/2">
							<div className="py-12 px-10 rounded-lg bg-white">
								<h3 className="mb-4 text-xl lg:text-3xl font-bold font-heading">
									Suspendisse interdum ullamcorper elit, at consequat libero.
								</h3>
								<p className="text-lg text-grey leading-loose">
									Etiam pellentesque non nibh non pulvinar. Mauris posuere,
									tellus sit amet tempus vestibulum, erat augue imperdiet.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CardGrid;
