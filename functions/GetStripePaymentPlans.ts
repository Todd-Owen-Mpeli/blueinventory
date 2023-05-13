// Imports
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
	apiVersion: "2022-11-15",
});

interface IStripePaymentPlans {
	stripePrices:
		| [
				{
					id: string;
					object: string;
					active: boolean;
					billing_scheme: string;
					created: number;
					currency: string;
					custom_unit_amount: any;
					livemode: boolean;
					lookup_key: any;
					metadata: any;
					nickname: any;
					product: {
						id: string;
						object: string;
						active: boolean;
						attributes: [];
						created: number;
						default_price: string;
						description: string;
						images: [any];
						livemode: boolean;
						metadata: any;
						name: string;
						package_dimensions: any;
						shippable: any;
						statement_descriptor: any;
						tax_code: any;
						type: string;
						unit_label: any;
						updated: number;
						url: any;
					};
					recurring: {
						aggregate_usage: any;
						interval: string;
						interval_count: number;
						trial_period_days: any;
						usage_type: string;
					};
					tax_behavior: string;
					tiers_mode: any;
					transform_quantity: any;
					type: string;
					unit_amount: number;
					unit_amount_decimal: string;
				}
		  ];
}

interface IStripeStandardPlan {
	name: string;
	description: string;
	price: number;
	paymentRecurringInterval: string;
}

interface IStripePremiumPlan {
	name: string;
	description: string;
	price: number;
	paymentRecurringInterval: string;
}

// Fetches All Stripe Payment Plans
export const fetchStripePaymentPlans = async (): Promise<
	IStripePaymentPlans | any
> => {
	try {
		const {data: stripePrices} = await stripe.prices.list({
			active: true,
			limit: 3,
			expand: ["data.product"],
		});

		// Stripe Standard Plan
		const stripeStandardPlan: IStripeStandardPlan | any = {
			name: stripePrices[1]?.product?.name,
			description: stripePrices[1]?.product?.description,
			price: stripePrices[1].unit_amount / 100,
			paymentRecurringInterval: stripePrices[1]?.recurring?.interval,
		};

		// Stripe Premium Plan
		const stripePremiumPlan: IStripePremiumPlan | any = {
			name: stripePrices[0]?.product?.name,
			description: stripePrices[0]?.product?.description,
			price: stripePrices[0].unit_amount / 100,
			paymentRecurringInterval: stripePrices[0]?.recurring?.interval,
		};

		return {stripePrices, stripeStandardPlan, stripePremiumPlan};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the stripe payment plans"
		);
	}
};
