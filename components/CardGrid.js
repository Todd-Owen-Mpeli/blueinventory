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
								<h3 className="text-flatLightBlue mb-4 text-xl lg:text-3xl font-bold font-heading">
									Product Management
								</h3>
								<p className="text-lg text-grey leading-loose">
									Maintain consistent inventory information across all your
									business channels with a master list of goods. Use the
									customisable Categories feature to group certain products,
									making it easier to have a quick overview.
								</p>
							</div>
						</div>
						<div className="w-full lg:w-1/2">
							<div className="py-12 px-10 rounded-lg bg-white">
								<h3 className="text-flatLightBlue mb-4 text-xl lg:text-3xl font-bold font-heading">
									Product tracking
								</h3>
								<p className="text-lg text-grey leading-loose">
									Make more profitable decisions for your business with detailed
									information for each product. lets you track all your goods
									from purchase to sale with Inventory Reports, or adjust
									quantity and value with a Stock Adjustment – so you can
									efficiently manage your products and concentrate on growing
									your business.
								</p>
							</div>
						</div>
						<div className="w-full lg:w-1/2">
							<div className="py-12 px-10 rounded-lg bg-white">
								<h3 className="text-flatLightBlue mb-4 text-xl lg:text-3xl font-bold font-heading">
									BlueInventory in your pocket
								</h3>
								<p className="text-lg text-grey leading-loose">
									Take your inventory wherever you go, just sign ito you account
									either Android and iOS platforms. And have your stock
									information at your fingertips, making important sales on the
									go has never been easier.
								</p>
							</div>
						</div>
						<div className="w-full lg:w-1/2">
							<div className="py-12 px-10 rounded-lg bg-white">
								<h3 className="text-flatLightBlue mb-4 text-xl lg:text-3xl font-bold font-heading">
									Supplier & Vendor Management
								</h3>
								<p className="text-lg text-grey leading-loose">
									Track and manage all your suppliers in one place, including
									vital information such as contact details, prices, and
									currency with powerful supplier management software.
								</p>
							</div>
						</div>
						<div className="w-full lg:w-1/2">
							<div className="py-12 px-10 rounded-lg bg-white">
								<h3 className="text-flatLightBlue mb-4 text-xl lg:text-3xl font-bold font-heading">
									Inventory accuracy
								</h3>
								<p className="text-lg text-grey leading-loose">
									Efficiently manage your stock levels with product returns to
									your supplier that updates your dashboard. Return all or part
									of your purchase and maintain accurate inventory levels and
									values.
								</p>
							</div>
						</div>
						<div className="w-full lg:w-1/2">
							<div className="py-12 px-10 rounded-lg bg-white">
								<h3 className="text-flatLightBlue mb-4 text-xl lg:text-3xl font-bold font-heading">
									Monitor sales on the dashboard
								</h3>
								<p className="text-lg text-grey leading-loose">
									Stay on top order fulfillments by keeping an eye on your
									dashboard. Stock alerts let you know which products are low in
									volume, overdue or need attention, ensuring that your
									customers are satisfied.
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
