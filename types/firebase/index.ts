// Firebase
export interface IFirebaseUserProvider {
	userData: IFirebaseUser | undefined;
	signedInUser: boolean | undefined;
}
export interface IFirebaseUser {
	uid: string;
	email: string;
	photoURL: string;
	providerId: string;
	phoneNumber: string;
	displayName: string;
	creationTime: string | undefined;
	lastSignInTime: string;
}

export interface IFirebaseConfig {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
	measurementId: string;
}

export interface ICurrentUserData {
	email: string;
	uid: string;
	phoneNumber: string;
	lastSignInTime: string;
	photoURL: string;
	emailVerified: string;
	displayName: string;
	providerId: string;
	creationTime: string;
}
