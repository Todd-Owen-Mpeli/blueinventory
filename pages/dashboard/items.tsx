// Imports
import {motion} from "framer-motion";
import {IDashboard} from "@/types/context/dashboard";
import {DashboardContext} from "@/context/dashboard";
import type {NextPage, GetServerSideProps} from "next";
import {getAllStripePaymentPlans} from "@/functions/Backend/stripe/GetStripePaymentPlans";

// Firebase
import {ICurrentUserData} from "@/types/firebase";
import {getUserDocument} from "@/firebase/functions/getUserDocument";

// Queries Functions
import {getThemesOptionsContent} from "@/functions/Frontend/graphql/Queries/GetAllThemesOptions";

// Components
import Layout from "@/components/Backend/Dashboard/Layout/Layout";

const items: NextPage<IDashboard> = ({
	userData,
	stripePlans,
	themesOptionsContent,
}) => {
	return (
		<DashboardContext.Provider
			value={{
				userData: userData,
				pageTitle: "Items",
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
			>
				<Layout>
					<h1>Items</h1>
				</Layout>
			</motion.section>
		</DashboardContext.Provider>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	/* Gets Current Signed-in user's document
	data from cloud firestore database */
	const userData: ICurrentUserData = await getUserDocument(
		`kscB8NgfOhiEawloNMgW`
	);

	const [stripePlans, themesOptionsContent] = await Promise.all([
		getAllStripePaymentPlans(),
		getThemesOptionsContent(),
	]);

	return {
		props: {
			userData,
			stripePlans,
			themesOptionsContent,
		},
	};
};

export default items;
