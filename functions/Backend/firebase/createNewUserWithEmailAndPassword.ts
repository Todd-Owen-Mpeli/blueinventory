// Imports
import {
	doc,
	setDoc,
	Firestore,
	collection,
	getFirestore,
	serverTimestamp,
} from "firebase/firestore";
import {FC} from "react";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";

export const createNewUserWithEmailAndPassword: FC = async (
	auth: any,
	values: any
) => {
	let userCreated: boolean = false;
	const timeStamp = serverTimestamp();
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
		setDoc(doc(collectionRef, user?.uid), user);

		/* Update New user Display name details with 
		their full name in the cloud Firestore Database */
		// updateProfile(auth?.currentUser, {
		// 	displayName: values?.fullName,
		// });

		console.log(user);

		userCreated = true;
	} catch (error) {
		throw new Error(
			`Error Message: Sorry ${values?.fullName} Something went wrong creating your account. Please try again.`
		);
	}

	return userCreated;
};
