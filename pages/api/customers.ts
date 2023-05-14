// Imports
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
	apiVersion: "2022-11-15",
});

interface IStripeCustomers {
	data: [
		{
			id: string;
			object: string;
			address: {
				city: string;
				country: string;
				line1: string;
				line2: string;
				postal_code: string;
				state: string;
			};
			balance: number;
			created: number;
			currency: any;
			default_source: any;
			delinquent: boolean;
			description: any;
			discount: any;
			email: string;
			invoice_prefix: string;
			invoice_settings: {
				custom_fields: any;
				default_payment_method: any;
				footer: any;
				rendering_options: any;
			};
			livemode: boolean;
			metadata: any;
			name: string;
			phone: string;
			preferred_locales: any;
			shipping: {
				address: any;
				name: string;
				phone: string;
			};
			tax_exempt: string;
			test_clock: any;
		}
	];
}

export default async function retrieveAllStripeCustomers(
	req: any,
	res: any
): Promise<any> {
	if (req?.method === "GET") {
		try {
			const customers = await stripe.customers.list();
			res.status(200).json({customers});

			// Single Stripe Customer
			const stripeCustomer = {
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
