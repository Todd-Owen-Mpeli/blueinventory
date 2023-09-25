// Imports
import {
	doc,
	setDoc,
	Firestore,
	collection,
	getFirestore,
} from "firebase/firestore";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";

export const createNewUserWithEmailAndPassword = async (
	auth: any,
	values: {
		fullName: string;
		email: string;
		password: string;
	}
) => {
	let userCreated: boolean = false;
	const db: Firestore = getFirestore();
	const collectionRef = collection(db, "users");

	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			values?.email,
			values?.password
		);
		const user = userCredential?.user;

		/* Create & Add New user details 
		to the cloud Firestore Database */
		await setDoc(doc(collectionRef, `${user?.uid}`), {
			email: `${values?.email}`,
			photoURL: `${user?.photoURL}`,
			password: `${values?.password}`,
			displayName: `${values?.fullName}`,
			stripeSessionId: ``,
			emailVerified: `${user?.emailVerified}`,
			creationTime: `${user?.metadata?.creationTime}`,
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

		/* Update New user Display name details with 
		their full name in the cloud Firestore Database */
		updateProfile(auth?.currentUser, {
			displayName: values?.fullName,
		});

		userCreated = true;
	} catch (error) {
		throw new Error(
			`Error Message: Sorry ${values?.fullName} Something went wrong creating your account. Please try again.`
		);
	}

	return userCreated;
};
