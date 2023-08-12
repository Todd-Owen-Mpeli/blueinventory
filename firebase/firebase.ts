// Imports
import admin from "firebase-admin";
import {Auth, getAuth} from "firebase/auth";
import {getAnalytics} from "firebase/analytics";
import {getPerformance} from "firebase/performance";
import {Firestore, getFirestore} from "firebase/firestore";
import {FirebaseApp, getApps, initializeApp} from "firebase/app";
import {IFirebaseConfig, IFirebaseUser} from "@/types/firebase";
import {cert} from "firebase-admin/app";
/* TODO: Add SDKs for Firebase products that you want to use
 https://firebase.google.com/docs/web/setup#available-libraries

 Your web app's Firebase configuration
 For Firebase JS SDK v7.20.0 and later, measurementId is optional */

// FireBase Web App Configuration
export const firebaseConfig: IFirebaseConfig = {
	apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
	authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`,
	projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
	storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}`,
	messagingSenderId: `${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}`,
	appId: `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`,
	measurementId: `${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`,
};

// Firebase User Details
export const firebaseUser: IFirebaseUser = {
	uid: ``,
	email: ``,
	providerId: ``,
	phoneNumber: ``,
	displayName: ``,
	creationTime: ``,
	lastSignInTime: ``,
	photoURL: ``,
};

export const initializeFirebase = () => {
	try {
		if (!getApps().length) {
			// Initializing Firebase
			const app: FirebaseApp = initializeApp(firebaseConfig);

			// Creating auth for Authentication
			const auth: Auth = getAuth(app);

			// Initialize Cloud Firestore and get a reference to the service
			const db: Firestore = getFirestore(app);

			// Firebase Admin SDK
			const serviceAccount: any = "../firebase/service-account-key.json";
			// const admin = cert(serviceAccount);
			// const serviceAccount = require("../firebase/service-account-key.json");
			// admin.initializeApp({
			// 	credential: admin.credential.cert(serviceAccount),
			// });

			// Firebase User Details
			const firebaseUser: IFirebaseUser = {
				uid: `${auth?.currentUser?.uid}`,
				email: `${auth?.currentUser?.email}`,
				photoURL: `${auth?.currentUser?.photoURL}`,
				providerId: `${auth?.currentUser?.providerId}`,
				phoneNumber: `${auth?.currentUser?.phoneNumber}`,
				displayName: `${auth?.currentUser?.displayName}`,
				creationTime: `${auth?.currentUser?.metadata.creationTime}`,
				lastSignInTime: `${auth?.currentUser?.metadata.lastSignInTime}`,
			};

			// Initializing Firebase Analytics & Performance
			if (typeof window !== "undefined") {
				if ("measurementId" in firebaseConfig) {
					const analytics = getAnalytics(app);
					const performance = getPerformance(app);
				}
			}

			console.log(`Firebase initialization successful`);
			return firebaseUser;
		}
	} catch (error) {
		console.log(error);
		throw new Error(
			"Failed Initializing Firebase: Something went wrong initializing firebase. Please reattempt firebase initialization"
		);
	}
};

export default initializeFirebase;
