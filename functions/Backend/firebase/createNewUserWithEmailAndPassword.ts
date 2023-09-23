// Imports
import {FC} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {addNewFirebaseUserDocument} from "./addDocument";

export const createNewUserWithEmailAndPassword: FC = async (
	auth: any,
	values: any
) => {
	let userCreated: boolean = false;

	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			values?.email,
			values?.password
		);
		// console.log(userCredential);

		// addNewFirebaseUserDocument(
		// 	userCredential?.user,
		// 	"cs_test_a1B80dzRSKXi5M8y9ZghnkO9FE7KPWlbZCem8ctTBBSWnj9YAeHcfj2XoH"
		// );

		userCreated = true;
	} catch (error) {
		throw new Error(
			`Error Message: Sorry ${values?.fullName} Something went wrong creating your account. Please try again.`
		);
	}

	return userCreated;
};
