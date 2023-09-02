// Imports
import {motion} from "framer-motion";
import {NextPage, GetStaticProps} from "next";
import {IDashboard} from "@/types/context/dashboard";

// Components
import Layout from "@/components/Backend/Dashboard/Layout/Layout";
import Test from "@/components/Backend/Dashboard/components/Test";
import PaymentInfo from "@/components/Backend/Dashboard/components/PaymentInfo";
import SubscriptionInfo from "@/components/Backend/Dashboard/components/SubscriptionInfo";
import PersonalInformation from "@/components/Backend/Dashboard/components/PersonalInformation";
import DashboardMetaContentProvider from "@/components/Frontend/context/DashboardMetaContentProvider";

const settings: NextPage<IDashboard> = () => {
	return (
		<DashboardMetaContentProvider pageTitle={"Settings"}>
			<motion.section
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				<Layout
					tailwindStyling={"flex flex-col w-full p-0 rounded-xl bg-white"}
				>
					<PersonalInformation />
					<div className="grid grid-cols-1 gap-8 py-4 lg:grid-cols-3">
						<Test />
						<PaymentInfo />
						<SubscriptionInfo />
					</div>
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

export default settings;
