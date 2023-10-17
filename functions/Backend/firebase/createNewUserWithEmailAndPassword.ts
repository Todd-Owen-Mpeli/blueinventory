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
		const itemsSubCollectionRef = collection(db, `users/${user?.uid}/Items`);
		await setDoc(doc(itemsSubCollectionRef), {
			value: `100`,
			itemName: `Item One`,
			quantity: `1`,
			category: ``,
			description: `Item One`,
		});
		/* Creating a Media Sub Collection in
		the users cloud Firestore Database */
		const mediaSubCollectionRef = collection(db, `users/${user?.uid}/Media`);
		await setDoc(doc(mediaSubCollectionRef), {
			value: `100`,
			itemName: `Item One`,
			quantity: `1`,
			category: ``,
			description: `Item One`,
		});

		/* Update New user Display Name details with 
		their full name in the cloud Firestore Database */
		updateProfile(auth?.currentUser, {
			displayName: values?.fullName,
		});

		userCreated = true;
		console.log("Document written with ID: ", auth?.currentUser.id);
	} catch (error) {
		throw new Error(
			`Error Message: Sorry ${values?.fullName} Something went wrong creating your account. Please try again.`
		);
	}

	return userCreated;
};
