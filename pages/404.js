import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/404.module.scss";

const noPageExits = () => {
	return (
		<section className={styles.noPageExitsPage}>
			<div className={styles.mainContent}>
				<div className="px-10 py-44 overflow-hidden">
					<div className="container mx-auto p-0">
						<h1 className="mb-4 text-5xl md:text-7xl text-white text-center font-bold font-heading leading-tight">
							Something went wrong!
						</h1>
						<p className="mb-11 text-white text-center font-medium leading-relaxed md:max-w-md mx-auto">
							The page you are looking for is not found! Try something else or
							go back to homepage.
						</p>
						<div className="md:max-w-max mx-auto">
							<button
								className="inline-flex flex-wrap justify-center items-center py-4 px-6 w-full rounded-xl focus:ring focus:ring-blue bg-blue hover:bg-limeGreen transition ease-in-out duration-200"
								type="button"
							>
								<svg
									className="mr-2.5 text-white"
									width="16"
									height="16"
									viewbox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.66667 12.6666L2 7.99998M2 7.99998L6.66667 3.33331M2 7.99998L14 7.99998"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
								<span className="font-normal text-white">
									Go Back to Homepage
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Section */}
			<footer>
				<div className="py-8 bg-blue">
					<div className="container mx-auto px-4">
						<div className="flex flex-col md:flex-row justify-between items-center">
							<span className="text-lightGrey text-center md:text-left text-sm">
								&copy; 2022 BlueInventory Group. All rights reserved.
							</span>
							<div className="flex order-first md:order-last mb-6 md:mb-0">
								<a
									className="inline-flex items-center w-12 h-12 mr-4 bg-blue"
									href="#"
								>
									<svg
										className="mx-auto text-lightGrey hover:text-limeGreen h-4 w-4"
										viewBox="0 0 10 18"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M6.63482 17.7272V9.766H9.35818L9.76676 6.66243H6.63482V4.68126C6.63482 3.78299 6.88809 3.17083 8.20285 3.17083L9.877 3.17015V0.394215C9.58748 0.357312 8.59366 0.272705 7.43696 0.272705C5.02158 0.272705 3.36797 1.71878 3.36797 4.37389V6.66243H0.636353V9.766H3.36797V17.7272H6.63482Z"
										></path>
									</svg>
								</a>
								<a
									className="inline-flex items-center w-12 h-12 mr-4 bg-blue"
									href="#"
								>
									<svg
										className="mx-auto text-lightGrey hover:text-limeGreen h-4 w-4"
										viewBox="0 0 19 16"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M18.8182 2.14598C18.1356 2.44844 17.4032 2.65356 16.6337 2.74513C17.4194 2.27462 18.0209 1.52831 18.3059 0.641769C17.5689 1.0775 16.7553 1.39389 15.8885 1.56541C15.1943 0.82489 14.207 0.363647 13.1118 0.363647C11.0108 0.363647 9.30725 2.06719 9.30725 4.16707C9.30725 4.46489 9.34086 4.75577 9.40577 5.03392C6.24437 4.87513 3.44107 3.3605 1.56486 1.05895C1.23689 1.61986 1.05031 2.27344 1.05031 2.9711C1.05031 4.29107 1.72246 5.45574 2.74228 6.13713C2.1188 6.11628 1.5324 5.94477 1.01904 5.65968V5.70719C1.01904 7.5498 2.33089 9.08762 4.07034 9.43762C3.75164 9.52337 3.41558 9.57089 3.06792 9.57089C2.82225 9.57089 2.58468 9.54656 2.35174 9.50019C2.83613 11.0125 4.24071 12.1123 5.90486 12.1424C4.60343 13.1623 2.96246 13.7683 1.18013 13.7683C0.873039 13.7683 0.570554 13.7498 0.272736 13.7162C1.95658 14.7974 3.95564 15.4279 6.10419 15.4279C13.1026 15.4279 16.9281 9.63116 16.9281 4.60398L16.9153 4.11147C17.6628 3.57834 18.3094 2.90853 18.8182 2.14598Z"
										></path>
									</svg>
								</a>
								<a
									className="inline-flex items-center w-12 h-12 mr-4 bg-blue"
									href="#"
								>
									<svg
										className="mx-auto text-lightGrey hover:text-limeGreen h-4 w-4"
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M4.06713 0.454529H9.9328C11.9249 0.454529 13.5456 2.07519 13.5455 4.06715V9.93282C13.5455 11.9248 11.9249 13.5454 9.9328 13.5454H4.06713C2.07518 13.5454 0.45459 11.9249 0.45459 9.93282V4.06715C0.45459 2.07519 2.07518 0.454529 4.06713 0.454529ZM9.9329 12.3839C11.2845 12.3839 12.3841 11.2844 12.3841 9.93282H12.384V4.06714C12.384 2.71563 11.2844 1.61601 9.93282 1.61601H4.06715C2.71564 1.61601 1.61609 2.71563 1.61609 4.06714V9.93282C1.61609 11.2844 2.71564 12.384 4.06715 12.3839H9.9329ZM3.57148 7.00005C3.57148 5.10947 5.10951 3.5714 7.00005 3.5714C8.8906 3.5714 10.4286 5.10947 10.4286 7.00005C10.4286 8.89056 8.8906 10.4285 7.00005 10.4285C5.10951 10.4285 3.57148 8.89056 3.57148 7.00005ZM4.75203 6.99998C4.75203 8.23951 5.76054 9.24788 7.00004 9.24788C8.23955 9.24788 9.24806 8.23951 9.24806 6.99998C9.24806 5.76036 8.23963 4.75191 7.00004 4.75191C5.76046 4.75191 4.75203 5.76036 4.75203 6.99998Z"
											fill="currentColor"
										></path>
									</svg>
								</a>
								<a
									className="inline-flex items-center w-12 h-12 bg-blue"
									href="#"
								>
									<svg
										className="mx-auto text-lightGrey hover:text-limeGreen h-4 w-4"
										viewBox="0 0 18 18"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
};

export default noPageExits;

// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
noPageExits.getLayout = function PageLayout(page) {
	return (
		<>
			{/* <!--===== NAVBAR =====--> */}
			<Navbar />

			{/* <!--===== PAGE CONTENT =====--> */}
			{page}
		</>
	);
};
