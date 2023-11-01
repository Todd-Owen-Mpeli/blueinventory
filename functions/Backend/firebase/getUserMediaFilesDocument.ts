// Imports
import {getFirestore, collection, getDocs} from "firebase/firestore";

/* Gets Current Signed-in user's Media Files 
documents data from cloud firestore database */
export const getUserMediaFilesDocument = async (userDocID: string | null) => {
	const db = getFirestore();
	let mediaFilesCollectionsArray: any[] = [];

	try {
		const subCollectionRef = collection(db, `users/${userDocID}/Media`);
		const querySnapshot = await getDocs(subCollectionRef);

		querySnapshot.forEach((doc) => {
			mediaFilesCollectionsArray.push(doc.data());
		});
	} catch (error) {
		console.error("Error fetching user media files:", error);
	}

	return mediaFilesCollectionsArray;
};
