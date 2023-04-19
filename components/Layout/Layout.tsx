// Import
import {FC} from "react";

// Components
import Footer from "../Footer";
import Navbar from "../Navbar";
import MetaTag from "../Meta/MetaTag";

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
		<div>
			<MetaTag title={pageTitle} seo={seo} />

			<Navbar navbarMenuLinks={navbarMenuLinks} />

			<div className="pt-16">{children}</div>

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
		</div>
	);
};

export default Layout;
