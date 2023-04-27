// Import
import {FC} from "react";

// Components
import MetaTag from "../components/Meta/MetaTag";

interface ILayout {
	metaTag: {
		firstName: string;
		lastName: string;
		profileImageUrl: string;
	};
	children: React.ReactNode;
}

const Layout: FC<ILayout> = ({children, metaTag}) => {
	return (
		<section className="p-0 mx-auto overflow-x-hidden">
			<MetaTag
				firstName={metaTag?.firstName}
				lastName={metaTag?.lastName}
				profileImageUrl={metaTag?.profileImageUrl}
			/>

			<section>{children}</section>
		</section>
	);
};

export default Layout;
