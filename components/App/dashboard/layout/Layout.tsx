// Import
import {FC} from "react";

// Components
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../components/Navbar";
import MetaTag from "../components/Meta/MetaTag";

interface ILayout {
	firstName: string;
	lastName: string;
	profileImageUrl: string;
	metaTag: {
		firstName: string;
		lastName: string;
		profileImageUrl: string;
	};
	children: React.ReactNode;
}

const Layout: FC<ILayout> = ({
	children,
	metaTag,
	firstName,
	lastName,
	profileImageUrl,
}) => {
	return (
		<section className="p-0 mx-auto overflow-x-hidden">
			<MetaTag
				firstName={metaTag?.firstName}
				lastName={metaTag?.lastName}
				profileImageUrl={metaTag?.profileImageUrl}
			/>

			<section className="flex">
				<Sidebar
					firstName={firstName}
					lastName={lastName}
					profileImageUrl={profileImageUrl}
				/>
				<div className="flex flex-col items-center justify-between w-full">
					<Navbar />
					<section>{children}</section>
				</div>
			</section>
		</section>
	);
};

export default Layout;
