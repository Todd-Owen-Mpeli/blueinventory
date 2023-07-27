// Imports
import {motion} from "framer-motion";
import {IDashboard} from "@/types/context/dashboard";
import {DashboardContext} from "@/context/dashboard";
import type {NextPage, GetServerSideProps} from "next";
import {initial, stagger} from "@/animations/animations";
import {getAllStripePaymentPlans} from "@/functions/stripe/GetStripePaymentPlans";

// Queries Functions
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";
import MainNavigation from "@/components/Dashboard/MainNavigation";

// Components

const dashboard: NextPage<IDashboard> = ({
	stripePlans,
	themesOptionsContent,
}) => {
	return (
		<DashboardContext.Provider
			value={{
				stripePlans: stripePlans,
				themesOptionsContent: themesOptionsContent,
			}}
		>
			<motion.div
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
				className="min-h-screen bg-darkerBlue"
			>
				<section className={styles.dashboard}>
					<div className="container px-4 mx-auto">
						<div className="flex flex-col items-center justify-between">
							<div className="w-[30%]">
								<MainNavigation />
							</div>
							<div className="w-[70%]"></div>
						</div>
					</div>
				</section>
			</motion.div>
		</DashboardContext.Provider>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const [stripePlans, themesOptionsContent] = await Promise.all([
		getAllStripePaymentPlans(),
		getThemesOptionsContent(),
	]);

	return {
		props: {
			stripePlans,
			themesOptionsContent,
		},
	};
};

export default dashboard;
