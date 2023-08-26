// Imports
import {
	doc,
	setDoc,
	Firestore,
	collection,
	getFirestore,
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
	const userCollectionRef = collection(
		db,
		"users",
		`${userDocID}`,
		subCollection
	);

	console.log(`userDocID: ${userDocID}`);
	console.log(`subCollection: ${subCollection}`);
	console.log(`userDisplayName: ${userDisplayName}`);
	console.log(`userCollectionRef: ${userCollectionRef}`);

	try {
		const docRef = await setDoc(doc(userCollectionRef), {
			value: `${newCreatedItem?.value}`,
			itemName: `${newCreatedItem?.itemName}`,
			quantity: `${newCreatedItem?.quantity}`,
			category: `${newCreatedItem?.category}`,
			description: `${newCreatedItem?.description}`,
		}).then(() => {
			console.log(
				`${userDisplayName}: Created a new item in ${subCollection} sub collection`,
				docRef
			);
		});
	} catch (error: any | undefined) {
		console.error("Error adding document: ", error);
	}
};
