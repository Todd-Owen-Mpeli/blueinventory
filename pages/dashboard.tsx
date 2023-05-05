// Import
import type {NextPage} from "next";
import {GetServerSideProps} from "next";
import {getThemesOptionsContent} from "../functions/themesOptions";
import {clerkClient, getAuth, buildClerkProps} from "@clerk/nextjs/server";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";

// Components
import {Layout} from "../components/App/dashboard/components/layout/layout";
import {Content} from "../components/App/dashboard/components/home/content";

interface IDashboard {
	id: string;
	lastName: string;
	firstName: string;
	userContent: string;
	emailAddress: string;
	profileImageUrl: string;
	metaTag: {
		firstName: string;
		lastName: string;
		profileImageUrl: string;
	};
	themesOptionsContent: {
		email: string;
		emailTwo: string;
		phoneNumber: string;
		phoneNumberTwo: string;
		twitterLink: string;
		facebookLink: string;
		linkedinLink: string;
		copyRightText: string;
	};
}

const dashboard: NextPage<IDashboard> = ({
	id,
	metaTag,
	lastName,
	firstName,
	userContent,
	emailAddress,
	profileImageUrl,
	themesOptionsContent,
}) => {
	return (
		<Layout
			metaTag={metaTag}
			lastName={lastName}
			firstName={firstName}
			emailAddress={emailAddress}
			profileImageUrl={profileImageUrl}
		>
			<section className={styles.dashboardContent}>
				<Content
					id={id}
					lastName={lastName}
					firstName={firstName}
					userContent={userContent}
					emailAddress={emailAddress}
					profileImageUrl={profileImageUrl}
				/>
			</section>
		</Layout>
	);
};

export default dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const {userId} = getAuth(ctx.req);

	const user = userId ? await clerkClient.users.getUser(userId) : undefined;

	// Dashboard User Profile Information
	const userResponse = {
		id: user?.id ? user?.id : ` `,
		firstName: user?.firstName ? user?.firstName : ` `,
		lastName: user?.lastName ? user?.lastName : ` `,
		profileImageUrl: user?.profileImageUrl
			? user?.profileImageUrl
			: `/img/Logos/default-avatar-profile.png`,
		emailAddress: user?.emailAddresses[0]?.emailAddress
			? user?.emailAddresses[0]?.emailAddress
			: ` `,
	};

	// Dashboard Meta Tag Object
	const metaTag = {
		firstName: user?.firstName ? user?.firstName : `BlueInventory`,
		lastName: user?.lastName ? user?.lastName : ` `,
		profileImageUrl: user?.profileImageUrl
			? user?.profileImageUrl
			: `/img/Logos/default-avatar-profile.png`,
	};

	const themesOptionsContent: object = await getThemesOptionsContent();

	const props = {
		metaTag,
		themesOptionsContent,
		id: userResponse?.id,
		lastName: userResponse?.lastName,
		firstName: userResponse?.firstName,
		emailAddress: userResponse?.emailAddress,
		profileImageUrl: userResponse?.profileImageUrl,
		userContent: JSON.stringify({...buildClerkProps(ctx.req, {user})}),
	};

	return {
		props,
	};
};
