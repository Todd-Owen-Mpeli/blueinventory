// Firebase
export interface IFirebaseUser {
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
