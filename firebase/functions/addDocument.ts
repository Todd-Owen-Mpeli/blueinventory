// Imports
import {collection, addDoc, getFirestore, Firestore} from "firebase/firestore";

/* Collect Users google account Details 
and send it ot the cloud Firestore Database */
export const addNewFirebaseUserDocument = async (user: any) => {
	const db: Firestore = getFirestore();
	const collectionRef = collection(db, "users");

	// Stripe user checkout session details
	const stripe = {
		status: "open",
		created: `${user.metadata.creationTime}`,
		currency: "GBP",
		customer: `${user.displayName}`,
		paymentStatus: "closed",
		stripeSessionId:
			"cs_test_a1EYiLZsYaye72OjsUH17K95GQIo0IhPtqeNRqLrGxNXFmVZK2bnXrvuIK",
		paymentMethodTypes: "card",
		customerDetailsName: `${user.displayName}`,
		customerDetailsEmail: `${user.email}`,
		customerDetailsPhone: `${user.phoneNumber}`,
		customerDetailsAddress: " ",
	};

	try {
		// console.log(`
		// 	New user to be send to cloud Firestore database:

		// 	uid: ${user.uid},
		// 	email: ${user.email},
		// 	stripePaymentStatus: "",
		// 	photoURL:${user.photoURL},
		// 	providerId: ${user.providerId},
		// 	displayName: ${user.displayName},
		// 	phoneNumber: ${user.phoneNumber},
		// 	emailVerified: ${user.emailVerified},
		// 	creationTime: ${user.metadata.creationTime},
		// 	lastSignInTime: ${user.metadata.lastSignInTime},

		// `);

		const docRef = await addDoc(collectionRef, {
			uid: `${user.uid}`,
			email: `${user.email}`,
			photoURL: `${user.photoURL}`,
			providerId: `${user.providerId}`,
			displayName: `${user.displayName}`,
			phoneNumber: `${user.phoneNumber}`,
			emailVerified: `${user.emailVerified}`,
			creationTime: `${user.metadata.creationTime}`,
			lastSignInTime: `${user.metadata.lastSignInTime}`,
			// Stripe
			stripeStatus: `${stripe.status}`,
			stripeCreated: `${stripe.created}`,
			stripeCurrency: `${stripe.currency}`,
			stripeCustomer: `${stripe.customer}`,
			stripeId: `${stripe.stripeSessionId}`,
			stripePaymentStatus: `${stripe.paymentStatus}`,
			stripePaymentMethodTypes: `${stripe.paymentMethodTypes}`,
			stripeCustomerDetailsName: `${stripe.customerDetailsName}`,
			stripeCustomerDetailsEmail: `${stripe.customerDetailsEmail}`,
			stripeCustomerDetailsPhone: `${stripe.customerDetailsPhone}`,
			stripeCustomerDetailsAddress: `${stripe.customerDetailsAddress}`,
		});
		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};