import {FC} from "react";
import {GlobalContext} from "../../../context/Global";
import {IGlobalContextProvider} from "@/types/context/public";

const GlobalContextProvider: FC<IGlobalContextProvider> = ({
	children,
	globalProps,
}) => {
	return (
		<GlobalContext.Provider
			value={{
				stripePlans: globalProps?.stripePlans,
				mainMenuLinks: globalProps?.mainMenuLinks,
				navbarMenuLinks: globalProps?.navbarMenuLinks,
				footerMenuLinks: globalProps?.footerMenuLinks,
				industriesMenuLinks: globalProps?.industriesMenuLinks,
				themesOptionsContent: globalProps?.themesOptionsContent,
				operationalInsights: globalProps?.operationalInsights,
				contentSliderPostsContent: globalProps?.contentSliderPostsContent,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
