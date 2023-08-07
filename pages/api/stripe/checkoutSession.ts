// Imports
import Stripe from "stripe";
import {NextApiRequest, NextApiResponse} from "next";

// Initialize Stripe
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
	apiVersion: "2022-11-15",
});

// Creates a stripe checkout session
export default async function newCheckoutSessionHandler(
	req: NextApiRequest | any,
	res: NextApiResponse | any
): Promise<any> {
	if (req.method === "POST") {
		// Subscription Plan (Standard or Premium)
		const planType = req?.body.plan;
		const user = req?.body.user;

		try {
			// Create Checkout Sessions from body params.
			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						/* Provide the exact Price ID (for example, pr_1234)
						 of the product you want to sell*/
						price:
							planType === `${process.env.STRIPE_STANDARD_PLAN_NAME}`
								? `${process.env.STRIPE_STANDARD_PLAN_VALUE}`
								: `${process.env.STRIPE_PREMIUM_PLAN_VALUE}`,
						quantity: 1,
					},
				],
				mode: "subscription",
				success_url: `${req.headers.origin}/dashboard`,
				cancel_url: `${req.headers.origin}/sign-up`,
			});

			res.redirect(303, session.url);

			console.log(`
				Checkout user session completed: ${session?.id} 
			`);
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
