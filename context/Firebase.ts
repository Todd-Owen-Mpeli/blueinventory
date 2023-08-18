// Imports
import {IFirebaseUserProvider} from "@/types/firebase";
import {createContext, useContext} from "react";

export const FirebaseContext = createContext<IFirebaseUserProvider | undefined>(
	undefined
);

export const useFirebaseContext = () => {
	const content = useContext(FirebaseContext);

	if (content === undefined) {
		throw new Error(`useFirebaseContext must be used to render content.`);
	}

	return content;
};
