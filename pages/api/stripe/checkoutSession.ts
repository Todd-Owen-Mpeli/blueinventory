// Imports
import Stripe from "stripe";
import {getAuth} from "firebase/auth";
import {IFirebaseUser} from "@/types/firebase";
import {addNewFirebaseUserDocument} from "@/firebase/functions/addDocument";

// Initialize Stripe
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
	apiVersion: "2022-11-15",
});

// Creates a stripe checkout session with products
export default async function newCheckoutSessionHandler(
	req: any,
	res: any
): Promise<any> {
	// Firebase User Details
	const auth = getAuth();
	const user: IFirebaseUser = {
		uid: `${auth?.currentUser?.uid}`,
		email: `${auth?.currentUser?.email}`,
		photoURL: `${auth?.currentUser?.photoURL}`,
		providerId: `${auth?.currentUser?.providerId}`,
		phoneNumber: `${auth?.currentUser?.phoneNumber}`,
		displayName: `${auth?.currentUser?.displayName}`,
		creationTime: `${auth?.currentUser?.metadata.creationTime}`,
		lastSignInTime: `${auth?.currentUser?.metadata.lastSignInTime}`,
	};

	if (req.method === "POST") {
		const planType = req?.body.plan;

		try {
			// Create Checkout Sessions from body params.
			const session = await stripe.checkout.sessions
				.create({
					line_items: [
						{
							/* Provide the exact Price ID (for example, pr_1234)
						 of the product you want to sell*/
							price:
								planType === "standard"
									? `${process.env.STRIPE_STANDARD_PLAN}`
									: `${process.env.STRIPE_PREMIUM_PLAN}`,
							quantity: 1,
						},
					],
					mode: "subscription",
					success_url: `${req.headers.origin}/dashboard`,
					cancel_url: `${req.headers.origin}/sign-up`,
				})
				.then(async (e) => {
					if (e.url) {
						/* Collect Users google account Details 
                        and send it ot the cloud Firestore Database */
						await addNewFirebaseUserDocument(user);
						// Redirects the user to the next page
						res.redirect(303, e.url);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		} catch (error: any) {
			res.status(error.statusCode || 500).json(error.message);
			console.log(error);
			throw new Error(
				"Something went wrong trying to create a Standard plan checkout session."
			);
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
}
