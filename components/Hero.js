import styles from "../components/Hero.module.scss";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className="video-wrapper relative z-50">
				<video
					autoPlay
					muted
					loop
					id="heroVideo"
					className="absolute z-40 w-full h-[100vh] object-cover"
				>
					<source src="/videos/Hero.mp4" type="video/mp4" />
				</video>
				<div className="heroContent absolute z-50 w-full h-full">
					<div className="container p-0 mx-auto">
						<div className="flex flex-col w-full p-6 xl:p-20">
							<h2 className="w-full xl:w-[55%] text-4xl md:text-6xl text-white font-bold font-heading leading-normal">
								Inventory Management Software made simple
							</h2>
							<p className="mb-10 w-full xl:w-[50%] text-lg text-white font-medium">
								BlueInventory is your powerful central inventory management
								solution. Simpler Inventory so you’re free to grow and manage
								your business.
							</p>
							<div className="mb-6 md:inline-block">
								<button
									className="py-4 px-6 border-none w-[fit-content] text-white rounded-xl focus:ring focus:ring-blue transition ease-in-out duration-200 bg-blue hover:bg-limeGreen"
									type="button"
								>
									Sign Up&nbsp;
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
