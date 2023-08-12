"use client";

// Imports
import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import {IDashboard} from "@/types/context/dashboard";
import {DashboardContext} from "@/context/dashboard";
import {NextPage, GetServerSideProps} from "next";

import {getAllStripePaymentPlans} from "@/functions/Backend/stripe/GetStripePaymentPlans";

// Firebase
import {getAuth} from "firebase/auth";
import {getUserDocument} from "@/functions/Backend/firebase/getUserDocument";

// Queries Functions
import {getThemesOptionsContent} from "@/functions/Frontend/graphql/Queries/GetAllThemesOptions";

// Components
import Layout from "@/components/Backend/Dashboard/Layout/Layout";

const settings: NextPage<IDashboard> = ({
	stripePlans,
	themesOptionsContent,
}) => {
	const auth = getAuth();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [userData, setUserData] = useState(null);

	/* Gets Current Signed-in user's document
	data from cloud firestore database */
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const authUserUid: any = auth.currentUser?.uid;

		const getCurrentUserData = async () => {
			const userData: any = await getUserDocument(authUserUid);
			return userData;
		};

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
	}, []);

	return (
		<DashboardContext.Provider
			value={{
				userData: userData,
				pageTitle: "Settings",
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
					<h1>Settings</h1>
				</Layout>
			</motion.section>
		</DashboardContext.Provider>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const authUserUid = "R7nvJVB3QwPpKKDoDPzBi0yRwHh2";
	const authUserData: any = await getUserDocument(authUserUid);

	const [stripePlans, themesOptionsContent] = await Promise.all([
		getAllStripePaymentPlans(),
		getThemesOptionsContent(),
	]);

	return {
		props: {stripePlans, themesOptionsContent},
	};
};

export default settings;
