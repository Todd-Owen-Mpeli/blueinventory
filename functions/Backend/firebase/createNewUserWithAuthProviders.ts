// Imports
import {
	doc,
	setDoc,
	Firestore,
	collection,
	getFirestore,
} from "firebase/firestore";

/* Collect Users google account Details 
and send it to the cloud Firestore Database */
export const createNewUserWithAuthProviders = async (
	user: any,
	stripeSessionId: any
) => {
	let userCreated: boolean = false;
	const db: Firestore = getFirestore();
	const collectionRef = collection(db, "users");

	try {
		/* Create & Add New user details 
		to the cloud Firestore Database */
		await setDoc(doc(collectionRef, `${user?.uid}`), {
			email: `${user?.email}`,
			photoURL: `${user?.photoURL}`,
			password: `${user?.password}`,
			displayName: `${user?.displayName}`,
			stripeSessionId: `${stripeSessionId}`,
			emailVerified: `${user?.emailVerified}`,
			creationTime: `${user.metadata?.creationTime}`,
		});

		/* Creating a Items Sub Collection in
		the users cloud Firestore Database */
		const subCollectionRef = collection(db, `users/${user?.uid}/Items`);
		await setDoc(doc(subCollectionRef), {
			value: `100`,
			itemName: `Item One`,
			quantity: `1`,
			category: ``,
			description: `Item One`,
		});

		userCreated = true;
		console.log("Document written with ID: ", user.id);
	} catch (e) {
		throw new Error(
			`Error Message: Sorry ${user?.fullName} Something went wrong creating your account. Please try again.`
		);
	}

	return userCreated;
};
