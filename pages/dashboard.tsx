// Imports
import {motion} from "framer-motion";
import {IDashboard} from "@/types/context/dashboard";
import {DashboardContext} from "@/context/dashboard";
import type {NextPage, GetServerSideProps} from "next";
import {getAllStripePaymentPlans} from "@/functions/stripe/GetStripePaymentPlans";

// Queries Functions
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";

// Components
import MainContent from "@/components/Dashboard/MainContent";
import MainNavigation from "@/components/Dashboard/MainNavigation";

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
			<motion.section
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
				className={styles.dashboard}
			>
				<MainNavigation />
				<div className="flex flex-col items-center w-full border-[10px] border-pureBlack rounded-3xl bg-lightGrey">
					<MainContent />
				</div>
			</motion.section>
		</DashboardContext.Provider>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	// [email, firstName, lastName, password, profileImage]

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
