import Stripe from "stripe";
import {buffer} from "micro";
import {NextApiRequest, NextApiResponse} from "next";
import {addNewFirebaseUserDocument} from "@/functions/Backend/firebase/addDocument";

// Initialize Stripe
const stripe: Stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
	apiVersion: "2022-11-15",
});

export const config = {
	api: {
		bodyParser: false,
	},
} as {
	api: {
		bodyParser: boolean;
	};
};

const webhookSecret:
	| string
	| undefined = `${process.env.STRIPE_WEBHOOK_SECRET}`; // Your webhook secret from the Stripe Dashboard

const webhook = async (
	req: NextApiRequest | any,
	res: NextApiResponse | any
) => {
	if (req.method === "POST") {
		const buf = await buffer(req);
		const sig = req.headers["stripe-signature"] as string;
		let event;

		try {
			event = stripe.webhooks.constructEvent(
				buf.toString(),
				sig,
				webhookSecret
			);
		} catch (err: any) {
			return res.status(400).send(`Webhook Error: ${err.message}`);
		}

		if (event.type === "checkout.session.completed") {
			const session = event.data.object;

			console.log(session);
			// Implement your fulfillment logic here
			/* This could include retrieving customer
            information, updating your database, etc*/

			await addNewFirebaseUserDocument(session);
		}

		res.status(200).json({received: true});
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
};

export default webhook;
