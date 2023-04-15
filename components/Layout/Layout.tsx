// Import
import {FC} from "react";
import postHog from "posthog-js";

// Components
import Footer from "../Footer";
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
	themesOptionsContent: any;
	children: React.ReactNode;
}

const Layout: FC<ILayout> = ({
	seo,
	children,
	pageTitle,
	footerMenuLinks,
	themesOptionsContent,
}) => {
	return (
		<div>
			<MetaTag title={pageTitle} seo={seo} />

			<div>{children}</div>

			<Footer
				footerMenuLinks={footerMenuLinks}
				email={themesOptionsContent?.email}
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
