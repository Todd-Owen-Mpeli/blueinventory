import {FC} from "react";
import {PageContext} from "@/context/context";
import {IPageContextProvider} from "@/types/context/public";

const PageContextProvider: FC<IPageContextProvider> = ({
	seo,
	content,
	children,
	postTypeFlexibleContent,
}) => {
	return (
		<PageContext.Provider
			value={{
				seo: seo,
				content: content,
				postTypeFlexibleContent: postTypeFlexibleContent,
			}}
		>
			{children}
		</PageContext.Provider>
	);
};

export default PageContextProvider;
