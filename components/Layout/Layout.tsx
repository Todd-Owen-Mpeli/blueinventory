// Imports
import {FC} from "react";
import postHog from "posthog-js";
import {ILayout} from "@/components/types";

// Components
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MetaTag from "@/components/Meta/MetaTag";
import CookiePolicyCard from "@/components/Elements/CookiePolicyCard";

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
