// Imports
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "../functions/GetAllMenuLinks";
import {motion} from "framer-motion";
import type {NextPage, GetStaticProps} from "next";
import {getThemesOptionsContent} from "../functions/GetAllThemesOptions";

// Components
import SignUp from "@/components/SignUp";
import LayoutTwo from "@/components/Layout/LayoutTwo";

interface ISignUpPage {
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
	navbarMenuLinks: {
		navbarMenuLinks: [
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
		copyrightText: string;
	};
}

const signUpPage: NextPage<ISignUpPage> = ({
	footerMenuLinks,
	navbarMenuLinks,
	industriesMenuLinks,
	themesOptionsContent,
}) => (
	<motion.div
		exit={{
			opacity: 0,
		}}
		initial="initial"
		animate="animate"
		className="min-h-screen bg-white bg-center bg-no-repeat bg-cover"
		style={{
			backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-pink-red-yellow.svg")`,
		}}
	>
		<LayoutTwo
			pageTitle={`Sign Up`}
			themesOptionsContent={themesOptionsContent}
			footerMenuLinks={footerMenuLinks?.footerMenuLinks}
			navbarMenuLinks={navbarMenuLinks?.navbarMenuLinks}
			industriesMenuLinks={industriesMenuLinks?.industriesMenuLinks}
		>
			<section className="container flex flex-col items-center justify-center min-h-screen px-4 py-10 mx-auto overflow-hidden">
				<SignUp
					title={`Sign Up today`}
					paragraph={`We kindly request you to enter your details.`}
				/>
			</section>
		</LayoutTwo>
	</motion.div>
);

export const getStaticProps: GetStaticProps = async () => {
	// Fetch remaining content simultaneously
	const [
		navbarMenuLinks,
		footerMenuLinks,
		industriesMenuLinks,
		themesOptionsContent,
	] = await Promise.all([
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getIndustriesMenuLinks(),
		getThemesOptionsContent(),
	]);

	return {
		props: {
			navbarMenuLinks,
			footerMenuLinks,
			industriesMenuLinks,
			themesOptionsContent,
		},
		revalidate: 60,
	};
};

export default signUpPage;
