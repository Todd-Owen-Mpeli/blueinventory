import {FC} from "react";
import postHog from "posthog-js";
import CookiePolicyCard from "../Elements/CookiePolicyCard";

interface ILayout {
	children: React.ReactNode;
}

const Layout: FC<ILayout> = ({children}) => {
	return (
		<div>
			<div>{children}</div>
			{postHog.has_opted_in_capturing() ||
			postHog.has_opted_out_capturing() ? null : (
				<CookiePolicyCard />
			)}
		</div>
	);
};

export default Layout;
