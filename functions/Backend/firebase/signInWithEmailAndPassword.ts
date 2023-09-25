import {signInWithEmailAndPassword} from "firebase/auth";

export const signInUserWithEmailAndPassword = async (
	auth: any,
	values: {
		fullName: string;
		email: string;
		password: string;
	}
) => {
	let wrongEmail: boolean = false;
	let userNotFound: boolean = false;
	let userDisabled: boolean = false;
	let wrongPassword: boolean = false;

	await signInWithEmailAndPassword(auth, values?.email, values?.password).catch(
		(error) => {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;

			if (errorCode === "auth/invalid-email") {
				wrongEmail = true;
			} else if (errorCode === "auth/wrong-password") {
				wrongPassword = true;
			} else if (errorCode === "auth/user-not-found") {
				userNotFound = true;
			} else if (errorCode === "auth/user-disabled") {
				userDisabled = true;
			}
			console.log(error);
		}
	);

	return {wrongEmail, wrongPassword, userNotFound, userDisabled};
};
