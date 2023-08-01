// Imports
import {collection, addDoc, getFirestore, Firestore} from "firebase/firestore";

/* Collect Users google account Details 
and send it ot the cloud Firestore Database */
export const addNewFirebaseUserDocument = async (user: any) => {
	const db: Firestore = getFirestore();
	const collectionRef = collection(db, "users");

	try {
		console.log(`
		user: ${user.displayName}
		db: ${db}
		collectionRef: ${collectionRef}`);

		const docRef = await addDoc(collectionRef, {
			uid: `${user.uid}`,
			email: `${user.email}`,
			photoURL: `${user.photoURL}`,
			emailVerified: `${user.emailVerified}`,
			providerId: `${user.providerId}`,
			phoneNumber: `${user.phoneNumber}`,
			displayName: `${user.displayName}`,
			creationTime: `${user.metadata.creationTime}`,
			lastSignInTime: `${user.metadata.lastSignInTime}`,
			stripeId: ``,
			stripePaymentStatus: ``,
		});
		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};
