// Imports
import {
	doc,
	getDoc,
	Firestore,
	collection,
	getFirestore,
} from "firebase/firestore";

/* Collect all Users documents 
from cloud Firestore Database */
export const getAllUsersDocument = async (user: any) => {
	const db: Firestore = getFirestore();
	const collectionRef = collection(db, "users");

	const docRef = doc(collectionRef);
	const docSnap = await getDoc(docRef);

	return docSnap;
};
