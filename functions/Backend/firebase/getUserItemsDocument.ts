// Imports
import {getFirestore, collection, getDocs} from "firebase/firestore";

/* Gets Current Signed-in user's Items 
documents data from cloud firestore database */
export const getUserItemsDocument = async (userDocID: string | null) => {
	const db = getFirestore();
	let itemsCollectionsArray: any[] = [];

	try {
		const subCollectionRef = collection(db, `users/${userDocID}/Items`);
		const querySnapshot = await getDocs(subCollectionRef);

		querySnapshot.forEach((doc) => {
			itemsCollectionsArray.push(doc.data());
		});
	} catch (error) {
		console.error("Error fetching user items:", error);
	}

	return itemsCollectionsArray;
};
