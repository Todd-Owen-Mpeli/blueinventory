// Imports
import {FC} from "react";
import postHog from "posthog-js";

// Components
import Footer from "../Footer";
import Navbar from "../Navbar";
import MetaTag from "../Meta/MetaTag";
import CookiePolicyCard from "../Elements/CookiePolicyCard";

interface ILayout {
	children: React.ReactNode;
}

const Layout: FC<ILayout> = ({children}) => {
	return (
		<>
			<MetaTag />

			<Navbar />

			<section className="pt-16">{children}</section>

			<Footer />

			{/* Cookie Policy Pop Up */}
			{postHog.has_opted_in_capturing() ||
			postHog.has_opted_out_capturing() ? null : (
				<CookiePolicyCard />
			)}
		</>
	);
};

export default Layout;
