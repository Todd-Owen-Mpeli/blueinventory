// Imports
import Stripe from "stripe";
import {config} from "dotenv";

// Environment Variables (Stripe Api Key) Stripe
if (process.env.NODE_ENV !== "production") {
	config();
}

// Initialize Stripe
export const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
	apiVersion: "2022-11-15",
});

export default async function handler(req: any, res: any) {
	const amount = req?.body?.amount;
	if (req?.method === "POST") {
		try {
			res.status(200).json({
				status: "Ok",
				message: `Request Successful`,
				Amount: amount * 7,
			});
		} catch (err) {
			console.log(err);

			return res.status(400).json({
				status: "error",
				message: `Something went wrong sending your details. Please try again.`,
				data: err,
			});
		}
	} else {
		res.status(200).json({
			status: "Ok",
			message: `Waiting for Request`,
		});
	}
}
