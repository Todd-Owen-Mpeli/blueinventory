// Imports
import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import {IDashboard} from "@/types/context/dashboard";
import {DashboardContext} from "@/context/dashboard";
import type {NextPage, GetServerSideProps} from "next";

import {getAllStripePaymentPlans} from "@/functions/Backend/stripe/GetStripePaymentPlans";

// Firebase
import {getAuth} from "firebase/auth";
import {getUserDocument} from "@/functions/Backend/firebase/getUserDocument";

// Queries Functions
import {getThemesOptionsContent} from "@/functions/Frontend/graphql/Queries/GetAllThemesOptions";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";

// Components
import Layout from "@/components/Backend/Dashboard/Layout/Layout";

const id: NextPage<IDashboard> = ({stripePlans, themesOptionsContent}) => {
	const auth = getAuth();
	const authUserUid: any = auth.currentUser?.uid;
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [userData, setUserData] = useState(null);

	/* Gets Current Signed-in user's document
	data from cloud firestore database */
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const getCurrentUserData = async () => {
		const userData: any = await getUserDocument(authUserUid);
		return userData;
	};

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getCurrentUserData();
				setUserData(data);
			} catch (error) {
				console.error("Error occurred:", error);
				setUserData(null);
			}
		};
		fetchData();
	}, [getCurrentUserData]);

	return (
		<DashboardContext.Provider
			value={{
				userData: userData,
				pageTitle: "Add id",
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
					<h1>Add id</h1>
				</Layout>
			</motion.section>
		</DashboardContext.Provider>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const [stripePlans, themesOptionsContent] = await Promise.all([
		getAllStripePaymentPlans(),
		getThemesOptionsContent(),
	]);

	return {
		props: {stripePlans, themesOptionsContent},
	};
};

export default id;
