// Imports
import {getAuth} from "firebase/auth";
import {getDocs, Firestore, collection, getFirestore} from "firebase/firestore";

/* Gets Current Signed-in user's document
    data from cloud firestore database */
export const getUserDocument = async () => {
	const auth = getAuth();
	const db: Firestore = getFirestore();
	const collectionRef = collection(db, "users");
	const querySnapshot = await getDocs(collectionRef);

	let found: boolean = false; // Variable to track if the value is found
	let userDocData;

	/* Loop through each document and 
	retrieve the current users Document Data */
	querySnapshot.forEach((doc) => {
		if (found) {
			return; // Exit the loop early if the value is found
		}

		// The current document uid
		const currentDocUid = doc.data().uid;

		if (
			currentDocUid.includes(
				auth.currentUser?.uid || `R7nvJVB3QwPpKKDoDPzBi0yRwHh2`
			)
		) {
			userDocData = doc.data();
			found = true; // Set the found variable to true
		}
	});

	return userDocData;
};
