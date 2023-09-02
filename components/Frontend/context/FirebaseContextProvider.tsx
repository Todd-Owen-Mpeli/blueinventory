import {FC} from "react";
import {IFirebaseContextProvider} from "@/types/context/public";
import {FirebaseContext} from "@/context/Firebase";

const DashboardContextProvider: FC<IFirebaseContextProvider> = ({
	children,
	firebaseUserUser,
}) => {
	return (
		<FirebaseContext.Provider
			value={{
				userData: firebaseUserUser?.userData,
				userDocId: firebaseUserUser?.userDocId,
				signedInUser: firebaseUserUser?.signedInUser,
			}}
		>
			{children}
		</FirebaseContext.Provider>
	);
};

export default DashboardContextProvider;
