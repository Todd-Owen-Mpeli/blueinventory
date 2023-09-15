// Firebase
export type IFirebaseUser = {
	uid: string;
	email: string;
	photoURL: string;
	providerId: string;
	phoneNumber: string;
	displayName: string;
	accessToken: string;
	emailVerified: boolean;
	metadata: {
		creationTime: string;
		lastSignInTime: string;
	};
};
export type IFirebaseConfig = {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
	measurementId: string;
};
// Create Item Functions
export type INewCreatedItem = {
	value: string;
	quantity: string;
	itemName: string;
	category: string;
	description: string;
};
