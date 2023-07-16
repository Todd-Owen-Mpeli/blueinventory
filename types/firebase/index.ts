// Firebase
export interface IFirebaseUser {
	uid: string;
	email: string;
	metadata: string;
	phoneNumber: string;
	displayName: string;
	profileImageURL: string;
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
