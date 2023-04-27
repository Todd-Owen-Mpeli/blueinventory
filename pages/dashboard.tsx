// Import
import {FC} from "react";
import {motion} from "framer-motion";
import {GetServerSideProps} from "next";
import {fadeInUp, stagger} from "../animations/animations";
import {getThemesOptionsContent} from "../functions/themesOptions";
import {clerkClient, getAuth, buildClerkProps} from "@clerk/nextjs/server";
import {
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "../functions/MenuLinks";

// Components
import Footer from "../components/Footer";
import Layout from "../components/App/dashboard/layout/Layout";
import Navbar from "../components/App/dashboard/components/Navbar";
import Stats from "../components/App/dashboard/components/Stats";

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
	footerMenuLinks: {
		footerMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	industriesMenuLinks: {
		industriesMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
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

const dashboard: FC<IDashboard> = ({
	id,
	metaTag,
	lastName,
	firstName,
	emailAddress,
	userContent,
	profileImageUrl,
	footerMenuLinks,
	industriesMenuLinks,
	themesOptionsContent,
}) => {
	return (
		<motion.section
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
			className="min-h-screen bg-center bg-no-repeat bg-cover bg-lightGrey"
			style={{
				backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue.svg")`,
			}}
		>
			<Layout metaTag={metaTag}>
				<Navbar />

				<Stats />
			</Layout>

			<Footer
				email={themesOptionsContent?.email}
				emailTwo={themesOptionsContent?.emailTwo}
				phoneNumber={themesOptionsContent?.phoneNumber}
				twitterLink={themesOptionsContent?.twitterLink}
				facebookLink={themesOptionsContent?.facebookLink}
				linkedinLink={themesOptionsContent?.linkedinLink}
				footerMenuLinks={footerMenuLinks?.footerMenuLinks}
				copyRightText={themesOptionsContent?.copyRightText}
				phoneNumberTwo={themesOptionsContent?.phoneNumberTwo}
				industriesMenuLinks={industriesMenuLinks?.industriesMenuLinks}
			/>
		</motion.section>
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

	const footerMenuLinks: object = await getFooterMenuLinks();
	const industriesMenuLinks: object = await getIndustriesMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	const props = {
		metaTag,
		footerMenuLinks,
		industriesMenuLinks,
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
