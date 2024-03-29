// Imports
import {getDocs, Firestore, collection, getFirestore} from "firebase/firestore";

/* Gets Current Signed-in user's document
    data from cloud firestore database */
export const validateAccountAlreadyExist = async (newUserUID: string) => {
	const db: Firestore = getFirestore();
	const collectionRef = collection(db, "users");
	const querySnapshot = await getDocs(collectionRef);

	let isUserExist: boolean = false;
	let found: boolean = false;
	let userDocID;

	try {
		/* Loop through each document and retrieve the uid */
		querySnapshot.forEach((doc) => {
			if (found) {
				return isUserExist; // Exit the loop early if the value is found
			}

			// The current document uid
			const currentDocUid = doc.data().uid;

			if (currentDocUid.includes(newUserUID)) {
				isUserExist = true;
				userDocID = doc.id;
				found = true; // Set the found variable to true
			}
		});
	} catch (error) {
		throw new Error(
			`Error Message: Something went wrong validating your account credential. Please try again.`
		);
	}

	return isUserExist;
};
