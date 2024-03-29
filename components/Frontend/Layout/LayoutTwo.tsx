// Imports
import {FC} from "react";
import Head from "next/head";
import {ILayoutTwo} from "@/types/components/public";

// Components
import NavbarTwo from "../Global/NavbarTwo";

const Layout: FC<ILayoutTwo> = ({children, pageTitle}) => {
	return (
		<>
			<Head>
				<title>{`${pageTitle} | Inventory Management Software`}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/img/Logos/BlueInventory favicon Two.png" />
			</Head>

			<NavbarTwo />
			<div className="pt-14">{children}</div>
		</>
	);
};

export default Layout;
