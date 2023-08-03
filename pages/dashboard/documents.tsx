// Imports
import {motion} from "framer-motion";
import {IDashboard} from "@/types/context/dashboard";
import {DashboardContext} from "@/context/dashboard";
import type {NextPage, GetServerSideProps} from "next";
import {getAllStripePaymentPlans} from "@/functions/stripe/GetStripePaymentPlans";

// Firebase
import {getAllUsersDocument} from "@/firebase/functions/getAllUsers";

// Queries Functions
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";

// Components
import Layout from "@/components/Dashboard/Layout/Layout";
import MainContent from "@/components/Dashboard/MainContent";
import MainNavigation from "@/components/Dashboard/MainNavigation";

const documents: NextPage<IDashboard> = ({
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
			<Layout pageTitle={`Documents`}>
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
			</Layout>
		</DashboardContext.Provider>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	// [email, firstName, lastName, password, profileImage]

	// const getAllUsersDocument: any = await getAllUsersDocument();

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

export default documents;
