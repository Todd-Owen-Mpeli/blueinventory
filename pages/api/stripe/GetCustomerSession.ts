import Stripe from "stripe";
import {buffer} from "micro";
import {NextApiRequest, NextApiResponse} from "next";

// Initialize Stripe
const stripe: Stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
	apiVersion: "2022-11-15",
});

// Define the interface for the Stripe event
interface StripeEvent extends Stripe.Event {
	data: {
		object: {
			customer: string; // Replace with the actual structure of the customer object
		};
	};
}

export default async function webhooks(
	req: NextApiRequest | any,
	res: NextApiResponse | any
) {
	try {
		const sig: any = req.headers["stripe-signature"];
		const endpointSecret: string = `${process.env.STRIPE_WEBHOOK_SECRET}`; // Replace with your actual webhook secret key

		const buf: Buffer = await buffer(req.body);

		console.log(buf, sig, endpointSecret);

		const event = stripe.webhooks.constructEvent(
			buf.toString(),
			sig,
			endpointSecret
		);

		if (event.type === "checkout.session.completed") {
			const eventData = event as StripeEvent; // Typecast the event

			// Now you can access the customer property safely
			const customer = eventData.data.object.customer;

			console.log(customer);

			// Perform your necessary actions with the customer data
			res.status(200).send("Webhook received successfully");
		}
	} catch (error) {
		console.error("Error handling webhook:", error);
		res.status(400).send("Webhook Error");
	}
}
