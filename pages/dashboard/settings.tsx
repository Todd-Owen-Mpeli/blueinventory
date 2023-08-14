// Imports
import {motion} from "framer-motion";
import {NextPage, GetStaticProps} from "next";
import {IDashboard} from "@/types/context/dashboard";
import {DashboardContext} from "@/context/dashboard";

// Components
import Layout from "@/components/Backend/Dashboard/Layout/Layout";
import Test from "@/components/Backend/Dashboard/components/Test";
import PaymentInfo from "@/components/Backend/Dashboard/components/PaymentInfo";
import SubscriptionInfo from "@/components/Backend/Dashboard/components/SubscriptionInfo";
import PersonalInformation from "@/components/Backend/Dashboard/components/PersonalInformation";

const settings: NextPage<IDashboard> = () => {
	return (
		<DashboardContext.Provider
			value={{
				pageTitle: "Settings",
			}}
		>
			<motion.section
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				<Layout
					tailwindStyling={
						"flex flex-col w-full border-[5px] p-0 border-pureBlack rounded-xl bg-lightGrey"
					}
				>
					<PersonalInformation />
					<div className="grid grid-cols-3 gap-8">
						<Test />
						<PaymentInfo />
						<SubscriptionInfo />
					</div>
				</Layout>
			</motion.section>
		</DashboardContext.Provider>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};

export default settings;
