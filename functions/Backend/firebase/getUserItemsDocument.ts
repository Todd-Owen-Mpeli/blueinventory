// Imports
import {getFirestore, collection, getDocs} from "firebase/firestore";

/* Gets Current Signed-in user's Items 
documents data from cloud firestore database */
export const getUserItemsDocument = async (userDocID: string | null) => {
	const db = getFirestore();
	let itemsCollectionsArray: any[] = [];

	if (userDocID) {
		const subCollectionRef = collection(db, `users/${userDocID}/Items`);
		const querySnapshot = await getDocs(subCollectionRef);

		querySnapshot.forEach((doc) => {
			itemsCollectionsArray.push(doc.data());
		});
	}

	return itemsCollectionsArray;
};
