// Import
import {FC} from "react";
import {motion} from "framer-motion";
import {SignIn} from "@clerk/nextjs";
import {getThemesOptionsContent} from "../functions/themesOptions";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "../functions/MenuLinks";

// Components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface ISignInPage {
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
		copyRightText: string;
	};
}

const SignInPage: FC<ISignInPage> = ({
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
			backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-orange-yellow.svg")`,
		}}
	>
		<Navbar navbarMenuLinks={navbarMenuLinks?.navbarMenuLinks} />

		<section className="container flex flex-col items-center justify-center min-h-screen px-4 py-10 mx-auto overflow-hidden lg:pt-36 xxl:pt-24">
			<SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
		</section>

		<Footer
			footerMenuLinks={footerMenuLinks?.footerMenuLinks}
			email={themesOptionsContent?.email}
			industriesMenuLinks={industriesMenuLinks?.industriesMenuLinks}
			emailTwo={themesOptionsContent?.emailTwo}
			phoneNumber={themesOptionsContent?.phoneNumber}
			twitterLink={themesOptionsContent?.twitterLink}
			facebookLink={themesOptionsContent?.facebookLink}
			linkedinLink={themesOptionsContent?.linkedinLink}
			copyRightText={themesOptionsContent?.copyRightText}
			phoneNumberTwo={themesOptionsContent?.phoneNumberTwo}
		/>
	</motion.div>
);

export default SignInPage;

export async function getStaticProps() {
	const navbarMenuLinks: object = await getNavbarMenuLinks();
	const footerMenuLinks: object = await getFooterMenuLinks();
	const industriesMenuLinks: object = await getIndustriesMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			navbarMenuLinks,
			footerMenuLinks,
			industriesMenuLinks,
			themesOptionsContent,
		},
		revalidate: 60,
	};
}
