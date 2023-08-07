// Imports
import {getDocs, Firestore, collection, getFirestore} from "firebase/firestore";

/* Gets Current Signed-in user's document
    data from cloud firestore database */
export const getUserDocument = async (uid: string) => {
	const db: Firestore = getFirestore();
	const collectionRef = collection(db, "users");
	const usersSnapshot = await getDocs(collectionRef);

	let userDocData: any;
	let found: boolean = false; // Variable to track if the value is found

	/* Loop through each document and 
	retrieve the current users Document Data */
	usersSnapshot.forEach((doc) => {
		if (found) {
			return; // Exit the loop early if the value is found
		}

		// The current document uid
		const currentDocUid = doc.data().uid;

		if (currentDocUid == uid) {
			userDocData = doc.data();
			found = true; // Set the found variable to true
		}
	});

	return userDocData;
};
