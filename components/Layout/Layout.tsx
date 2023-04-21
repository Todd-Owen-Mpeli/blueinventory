// Import
import {FC} from "react";
import postHog from "posthog-js";

// Components
import Footer from "../Footer";
import Navbar from "../Navbar";
import MetaTag from "../Meta/MetaTag";
import CookiePolicyCard from "../Elements/CookiePolicyCard";

interface ILayout {
	seo: any;
	pageTitle: string;
	footerMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
	navbarMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
	industriesMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
	themesOptionsContent: any;
	children: React.ReactNode;
}

const Layout: FC<ILayout> = ({
	seo,
	children,
	pageTitle,
	footerMenuLinks,
	navbarMenuLinks,
	industriesMenuLinks,
	themesOptionsContent,
}) => {
	return (
		<>
			<MetaTag title={pageTitle} seo={seo} />

			<Navbar navbarMenuLinks={navbarMenuLinks} />

			<section className="pt-16">{children}</section>

			<Footer
				footerMenuLinks={footerMenuLinks}
				email={themesOptionsContent?.email}
				industriesMenuLinks={industriesMenuLinks}
				emailTwo={themesOptionsContent?.emailTwo}
				phoneNumber={themesOptionsContent?.phoneNumber}
				twitterLink={themesOptionsContent?.twitterLink}
				facebookLink={themesOptionsContent?.facebookLink}
				linkedinLink={themesOptionsContent?.linkedinLink}
				copyRightText={themesOptionsContent?.copyrightText}
				phoneNumberTwo={themesOptionsContent?.phoneNumberTwo}
			/>

			{/* Cookie Policy Pop Up */}
			{postHog.has_opted_in_capturing() ||
			postHog.has_opted_out_capturing() ? null : (
				<CookiePolicyCard />
			)}
		</>
	);
};

export default Layout;
