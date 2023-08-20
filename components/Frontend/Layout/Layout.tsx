// Imports
import {FC} from "react";
import postHog from "posthog-js";
import {ILayout} from "@/types/components/public";

// Components
import Navbar from "@/components/Frontend/Navbar";
import MetaTag from "@/components/Frontend/Meta/MetaTag";
import CookiePolicyCard from "@/components/Frontend/Elements/CookiePolicyCard";

const Layout: FC<ILayout> = ({children}) => {
	return (
		<>
			<MetaTag />

			<Navbar />

			<div className="pt-16">{children}</div>
		</>
	);
};

export default Layout;
