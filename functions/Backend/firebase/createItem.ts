// Imports
import {
	addDoc,
	Firestore,
	collection,
	getFirestore,
	CollectionReference,
} from "firebase/firestore";
import {INewCreatedItem} from "@/types/firebase";

/* Collect Users google account Details 
and send it to the cloud Firestore Database */
export const createUserItem = async (
	userDocID: string | null,
	userDisplayName: string | undefined,
	newCreatedItem: INewCreatedItem
) => {
	const db: Firestore = getFirestore();
	const subCollection: string = "Items";
	const userCollectionRef: CollectionReference<any> = collection(
		db,
		`users/${userDocID}/${subCollection}`
	);

	try {
		await addDoc(userCollectionRef, {
			value: newCreatedItem.value,
			itemName: newCreatedItem.itemName,
			quantity: newCreatedItem.quantity,
			category: newCreatedItem.category,
			description: newCreatedItem.description,
		});

		console.log(
			`${userDisplayName}: Created a new item in ${subCollection} sub collection`
		);
	} catch (error: any) {
		console.error("Error adding document: ", error);
	}
};
