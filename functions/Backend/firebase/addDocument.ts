// Imports
import {collection, addDoc, getFirestore, Firestore} from "firebase/firestore";

// Firebase
import {IFirebaseUser} from "@/types/firebase";

/* Collect Users google account Details 
and send it ot the cloud Firestore Database */
export const addNewFirebaseUserDocument = async (user: any) => {
	const db: Firestore = getFirestore();
	const collectionRef = collection(db, "users");

	console.log(user);

	// const currentUser: IFirebaseUser = {
	// 	uid: `${user?.currentUser?.uid}`,
	// 	email: `${user?.currentUser?.email}`,
	// 	photoURL: `${user?.currentUser?.photoURL}`,
	// 	providerId: `${user?.currentUser?.providerId}`,
	// 	phoneNumber: `${user?.currentUser?.phoneNumber}`,
	// 	displayName: `${user?.currentUser?.displayName}`,
	// 	creationTime: `${user?.currentUser?.metadata.creationTime}`,
	// 	lastSignInTime: `${user?.currentUser?.metadata.lastSignInTime}`,
	// };

	// Stripe user checkout session details
	// const stripe = {
	// 	currency: `${user.currency}`,
	// 	stripeSessionId: `${user.sessionId}`,
	// 	stripePlanType: `${user.userPlanType}`,
	// 	totalAmount: `${user.totalAmount / 100}`,
	// 	customer: `${user.currentUser?.displayName}`,
	// 	stripeSessionCreated: `${user.sessionCreated}`,
	// 	customerDetailsEmail: `${user.currentUser?.email}`,
	// 	customerDetailsName: `${user.currentUser?.displayName}`,
	// };

	// console.log(stripe);
	// console.log(`
	// 	New user to be send to cloud Firestore database:
	// 	uid: ${currentUser?.uid},
	// 	email: ${currentUser?.email},
	// 	photoURL:${currentUser?.photoURL},
	// 	providerId: ${currentUser?.providerId},
	// 	displayName: ${currentUser?.displayName},
	// 	phoneNumber: ${currentUser?.phoneNumber},
	// 	creationTime: ${currentUser?.creationTime},
	// 	lastSignInTime: ${currentUser?.lastSignInTime},

	// 	Stripe:
	// 	currency: ${stripe.currency},
	// 	stripePaymentStatus: "Completed",
	// 	stripeCustomer: ${stripe.customer},
	// 	stripeCurrency: ${stripe.currency},
	// 	stripePlanType: ${stripe.stripePlanType},
	// 	stripeTotalAmount: ${stripe.totalAmount},
	// 	stripeSessionId: ${stripe.stripeSessionId},
	// 	stripeSessionCreated: ${stripe?.stripeSessionCreated},
	// 	stripeCustomerDetailsName: ${stripe.customerDetailsName},
	// 	stripeCustomerDetailsEmail: ${stripe.customerDetailsEmail},
	// `);

	try {
		// const docRef = await addDoc(collectionRef, {
		// 	uid: `${user.uid}`,
		// 	email: `${user.email}`,
		// 	photoURL: `${user.photoURL}`,
		// 	providerId: `${user.providerId}`,
		// 	displayName: `${user.displayName}`,
		// 	phoneNumber: `${user.phoneNumber}`,
		// 	emailVerified: `${user.emailVerified}`,
		// 	creationTime: `${user.metadata?.creationTime}`,
		// 	lastSignInTime: `${user.metadata.lastSignInTime}`,
		// 	// Stripe
		// 	currency: `${stripe.currency}`,
		// 	stripeCustomer: `${stripe.customer}`,
		// 	stripeCurrency: `${stripe.currency}`,
		// 	userCreated: `${stripe?.userCreated}`,
		// 	stripePlanType: `${stripe.stripePlanType}`,
		// 	stripeTotalAmount: `${stripe.totalAmount}`,
		// 	stripeSessionId: `${stripe.stripeSessionId}`,
		// 	stripeSessionCreated: `${stripe.sessionCreated}`,
		// 	stripeCustomerDetailsName: `${stripe.customerDetailsName}`,
		// 	stripeCustomerDetailsEmail: `${stripe.customerDetailsEmail}`,
		// });
		// console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};
