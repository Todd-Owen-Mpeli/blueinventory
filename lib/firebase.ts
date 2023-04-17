import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: process.env.FIREBASE_API_KEY!,
		authDomain: process.env.FIREBASE_AUTH_DOMAIN!,
		projectId: process.env.FIREBASE_PROJECT_ID!,
		storageBucket: process.env.FIREBASE_STORAGE_BUCKET!,
		messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID!,
		appId: process.env.FIREBASE_APP_ID!,
	});
}

export const auth = firebase.auth();
export const db = firebase.firestore();
