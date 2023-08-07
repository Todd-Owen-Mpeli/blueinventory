// Imports
import Stripe from "stripe";
import {NextApiRequest, NextApiResponse} from "next";

// Initialize Stripe
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
	apiVersion: "2022-11-15",
});

// Retrieve's a stripe checkout session
export default async function retrieveSessionHandler(
	req: NextApiRequest | any,
	res: NextApiResponse | any
): Promise<any> {
	if (req.method === "GET") {
		try {
			const {sessionId} = req.query;

			if (!sessionId.startsWith("cs_")) {
				throw Error("Incorrect Checkout Session ID.");
			}

			const retrieveSession = await stripe.checkout.sessions.retrieve(
				sessionId?.id
			);

			return res.status(200).json();
		} catch (error: any) {
			res.status(error.statusCode || 500).json(error.message);
			console.log(error);
			throw new Error(
				"Something went wrong trying to retrieve checkout session."
			);
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
}
