/* eslint-disable react-hooks/rules-of-hooks */
// Imports
import {useState} from "react";
import {motion} from "framer-motion";
import {NextPage, GetStaticProps} from "next";
import {IDashboard} from "@/types/context/dashboard";
import {layoutTailwindStyling} from "@/context/dashboard";

// Firebase
import {getAuth} from "firebase/auth";
import {getUserDocument} from "@/functions/Backend/firebase/getUserDocument";

// Components
import Layout from "@/components/Backend/Dashboard/Layout/Layout";
import DashboardMetaContentProvider from "@/components/Frontend/context/DashboardMetaContentProvider";

const add: NextPage<IDashboard> = () => {
	const auth = getAuth();
	const authUserUid: any = auth.currentUser?.uid;
	const [userData, setUserData] = useState(null);

	/* Gets Current Signed-in user's document
	data from cloud firestore database */
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

	return (
		<DashboardMetaContentProvider pageTitle={"Add"}>
			<motion.section
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				<Layout tailwindStyling={layoutTailwindStyling}>
					<h1 className="text-lg font-bold text-left lg:text-2xl">Add</h1>
				</Layout>
			</motion.section>
		</DashboardMetaContentProvider>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};

export default add;
