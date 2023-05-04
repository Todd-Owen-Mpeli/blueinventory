// Import
import React from "react";
import type {NextPage} from "next";
import {GetServerSideProps} from "next";
import {getThemesOptionsContent} from "@/functions/themesOptions";
import {clerkClient, getAuth, buildClerkProps} from "@clerk/nextjs/server";

// Styling
import styles from "@/styles/components/Dashboard.module.scss";

// Components
import {Accounts} from "../../components/App/dashboard/components/accounts";
import {Layout} from "../../components/App/dashboard/components/layout/layout";

interface IDashboard {
	metaTag: {
		firstName: string;
		lastName: string;
		profileImageUrl: string;
	};
}

const accounts: NextPage<IDashboard> = ({metaTag}) => {
	return (
		<Layout metaTag={metaTag}>
			<section className={styles.dashboardContent}>
				<Accounts />
			</section>
		</Layout>
	);
};

export default accounts;

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
		emailAddress: user?.emailAddresses[0]?.emailAddress ? user?.firstName : ` `,
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
