// Imports
import {createContext, useContext} from "react";
import {IGlobalContext} from "@/types/context/public";

export const GlobalContext = createContext<IGlobalContext | undefined>(
	undefined
);

export const useGlobalContext = () => {
	const content = useContext(GlobalContext);

	if (content === undefined) {
		throw new Error(`useGlobalContext must be used to render content.`);
	}

	return content;
};
