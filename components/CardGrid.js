import styles from "../styles/components/CardGrid.module.scss";

const CardGrid = () => {
	return (
		<section className={styles.cardGrid}>
			<div className="backgroundSVG relative z-0">
				<g transform="translate(486.2027401098467 277.71640813484635)">
					<path
						d="M152.5 -147.8C180.5 -124.5 174.2 -62.2 168 -6.2C161.7 49.7 155.5 99.5 127.5 122C99.5 144.5 49.7 139.7 -2.8 142.6C-55.4 145.4 -110.8 155.8 -141.8 133.3C-172.8 110.8 -179.4 55.4 -183.5 -4.1C-187.6 -63.6 -189.3 -127.3 -158.3 -150.6C-127.3 -173.9 -63.6 -157 -0.7 -156.3C62.2 -155.6 124.5 -171.1 152.5 -147.8"
						fill="#BB004B"
					></path>
				</g>
			</div>
			<div className="container px-0 mx-auto z-50 relative">
				<div className={styles.content}>
					<div className="my-28">
						<h2 className="text-white text-5xl sm:text-6xl mx-auto text-center font-bold tracking-px-n leading-none md:max-w-2xl">
							Features List
						</h2>
					</div>
					<div className={styles.gridContent}>
						<div className={styles.item}>
							<h3 className="text-white mb-4 text-xl lg:text-3xl font-bold font-heading">
								Product Management
							</h3>
							<p className="text-lg text-white leading-loose">
								Maintain consistent inventory information across all your
								business channels with a master list of goods. Use the
								customisable Categories feature to group certain products,
								making it easier to have a quick overview.
							</p>
						</div>
						<div className={styles.item}>
							<h3 className="text-white mb-4 text-xl lg:text-3xl font-bold font-heading">
								Product tracking
							</h3>
							<p className="text-lg text-white leading-loose">
								Make more profitable decisions for your business with detailed
								information for each product. lets you track all your goods from
								purchase to sale with Inventory Reports, or adjust quantity and
								value with a Stock Adjustment – so you can efficiently manage
								your products and concentrate on growing your business.
							</p>
						</div>
						<div className={styles.item}>
							<h3 className="text-white mb-4 text-xl lg:text-3xl font-bold font-heading">
								BlueInventory in your pocket
							</h3>
							<p className="text-lg text-white leading-loose">
								Take your inventory wherever you go, just sign ito you account
								either Android and iOS platforms. And have your stock
								information at your fingertips, making important sales on the go
								has never been easier.
							</p>
						</div>
						<div className={styles.item}>
							<h3 className="text-white mb-4 text-xl lg:text-3xl font-bold font-heading">
								Supplier & Vendor Management
							</h3>
							<p className="text-lg text-white leading-loose">
								Track and manage all your suppliers in one place, including
								vital information such as contact details, prices, and currency
								with powerful supplier management software.
							</p>
						</div>
						<div className={styles.item}>
							<h3 className="text-white mb-4 text-xl lg:text-3xl font-bold font-heading">
								Inventory accuracy
							</h3>
							<p className="text-lg text-white leading-loose">
								Efficiently manage your stock levels with product returns to
								your supplier that updates your dashboard. Return all or part of
								your purchase and maintain accurate inventory levels and values.
							</p>
						</div>
						<div className={styles.item}>
							<h3 className="text-white mb-4 text-xl lg:text-3xl font-bold font-heading">
								Monitor sales on the dashboard
							</h3>
							<p className="text-lg text-white leading-loose">
								Stay on top order fulfillments by keeping an eye on your
								dashboard. Stock alerts let you know which products are low in
								volume, overdue or need attention, ensuring that your customers
								are satisfied.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CardGrid;
