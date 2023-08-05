// Imports
import {
	doc,
	getDoc,
	Firestore,
	collection,
	getFirestore,
} from "firebase/firestore";

/* Gets Current Signed-in user's document
    data from cloud firestore database */
export const getUserDocument = async (docRefID: string) => {
	const db: Firestore = getFirestore();
	const collectionRef = collection(db, "users");
	const docSnap = await getDoc(doc(collectionRef, docRefID));
	let currentUserData: any;

	if (docSnap.exists()) {
		currentUserData = docSnap.data();
		console.log("Document data:", docSnap.data());
	} else {
		// docSnap.data() will be undefined in this case
		console.log("No such document!");
	}

	return currentUserData;
};
