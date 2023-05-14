// Imports
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
	apiVersion: "2022-11-15",
});

// Creates a stripe checkout session with products
export default async function handler(req: any, res: any): Promise<any> {
	if (req.method === "POST") {
		try {
			// Create Checkout Sessions from body params.
			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
						price: `${process.env.STRIPE_STANDARD_PLAN}`,
						quantity: 1,
					},
				],
				mode: "subscription",
				success_url: `${req.headers.origin}/sign-in`,
				cancel_url: `${req.headers.origin}/pricing`,
			});
			res.redirect(303, session.url);
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
