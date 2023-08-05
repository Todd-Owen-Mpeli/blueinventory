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
	let currentUserUid: any;

	if (docSnap.exists()) {
		currentUserUid = docSnap.data().uid;
		console.log("Document data:", docSnap.data().uid);
	} else {
		// docSnap.data() will be undefined in this case
		console.log("No such document!");
	}

	return "";
};
