// Imports
import {FC} from "react";
import postHog from "posthog-js";
import {ILayout} from "@/types/components/public";

// Components
import Footer from "@/components/Frontend/Footer";
import Navbar from "@/components/Frontend/Navbar";
import MetaTag from "@/components/Frontend/Meta/MetaTag";
import CookiePolicyCard from "@/components/Frontend/Elements/CookiePolicyCard";

const Layout: FC<ILayout> = ({children}) => {
	return (
		<>
			<MetaTag />

			<Navbar />

			<div className="pt-16">{children}</div>

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
