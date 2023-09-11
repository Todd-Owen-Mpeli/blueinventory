// Imports
import {FC} from "react";
import {ILayout} from "@/types/components/public";

// Components
import Navbar from "@/components/Frontend/Navbar";
import MetaTag from "@/components/Frontend/Meta/MetaTag";

const Layout: FC<ILayout> = ({children}) => {
	return (
		<>
			<MetaTag />

			<Navbar />

			<div className="pt-14">{children}</div>
		</>
	);
};

export default Layout;
