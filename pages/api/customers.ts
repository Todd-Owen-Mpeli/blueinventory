// Imports
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
	apiVersion: "2022-11-15",
});

export default async function retrieveAllStripeCustomers(
	req: any,
	res: any
): Promise<any> {
	// const body = req?.body;
	if (req?.method === "GET") {
		try {
			const customers = await stripe.customers.list();
			res.status(200).json({customers});

			console.log(customers);
		} catch (error) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to retrieve all stripe customers"
			);
		}
	} else {
		return res.status(400).json({
			status: "error",
			message: "Bad request. Please try again.",
		});
	}
}
