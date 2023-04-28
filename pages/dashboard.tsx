// Import
import Link from "next/link";
import Image from "next/image";
import type {NextPage} from "next";
import {motion} from "framer-motion";
import {GetServerSideProps} from "next";
import {fadeInUp, stagger} from "../animations/animations";
import {getThemesOptionsContent} from "../functions/themesOptions";
import {clerkClient, getAuth, buildClerkProps} from "@clerk/nextjs/server";

// Components
import Layout from "../components/App/dashboard/layout/Layout";

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
	emailAddress,
	userContent,
	profileImageUrl,
	themesOptionsContent,
}) => {
	return (
		<motion.section
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
			className="min-h-screen bg-center bg-no-repeat bg-cover bg-pureBlack"
		>
			<Layout
				metaTag={metaTag}
				firstName={firstName}
				lastName={lastName}
				profileImageUrl={profileImageUrl}
			>
				<div className="flex items-center justify-between p-4 mt-6">
					<Link href="#" className="flex items-center gap-x-2">
						<Image
							width={500}
							height={500}
							alt="avatar"
							src={profileImageUrl}
							className="object-cover rounded-full h-7 w-7"
						/>
						<div className="flex gap-1 text-base font-medium text-white dark:text-white">
							<span>{firstName}</span>
							<span>{lastName}</span>
						</div>
					</Link>
				</div>
			</Layout>
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
