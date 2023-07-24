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
import WelcomePopUp from "@/components/Dashboard/PopUp/WelcomePopUp";
import Tables from "@/components/Dashboard/components/Tables";

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
				className="min-h-screen bg-darkBlue"
			>
				<section className={styles.dashboard}>
					<div className="container px-4 mx-auto">
						<div className="flex flex-col items-center justify-between">
							<motion.h1
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="mb-6 text-4xl font-bold text-white sm:text-6xl lg:text-7xl"
							>
								Dashboard
							</motion.h1>

							<Tables />
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
