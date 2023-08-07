// Imports
import Stripe from "stripe";
import {NextApiRequest, NextApiResponse} from "next";
import {IStripeCustomer, IStripeCustomers} from "@/types/stripe";

// Initialize Stripe
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
	apiVersion: "2022-11-15",
});

export default async function retrieveAllStripeCustomers(
	req: NextApiRequest,
	res: NextApiResponse
): Promise<any> {
	if (req?.method === "GET") {
		try {
			const customers = await stripe.customers.list();
			res.status(200).json({customers});

			// Single Stripe Customer
			const stripeCustomer: IStripeCustomer = {
				id: customers?.data[0]?.id,
				name: customers?.data[0]?.name,
				email: customers?.data[0]?.email,
				phone: customers?.data[0]?.phone,
				address: customers?.data[0]?.address,
				description: customers?.data[0]?.description,
			};

			const stripeCustomers: IStripeCustomers | any = customers?.data;

			return stripeCustomers;
		} catch (error: any) {
			console.log(error);
			throw new Error(
				"Something went wrong trying to retrieve all stripe customers"
			);
		}
	} else {
		res.setHeader("Allow", "GET");
		return res.status(400).end("Method Not Allowed").json({
			status: "error",
			message: "Bad request. Please try again.",
		});
	}
}
