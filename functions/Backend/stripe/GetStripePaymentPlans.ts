// Imports
import {
	IStripePremiumPlan,
	IStripePaymentPlans,
	IStripeStandardPlan,
} from "@/types/stripe";
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
	apiVersion: "2022-11-15",
});

// Fetches All Stripe Payment Plans
export const getAllStripePaymentPlans = async (): Promise<
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
			name: getProductProperty(stripePrices[1]?.product, "name") || "Standard",
			description:
				getProductProperty(stripePrices[1]?.product, "description") ||
				"Standard Inventory Management Software subscription",
			price: stripePrices[1]?.unit_amount
				? stripePrices[1]?.unit_amount / 100
				: 3999 / 100,
			paymentRecurringInterval: stripePrices[1]?.recurring?.interval,
		};

		// Stripe Premium Plan
		const stripePremiumPlan: IStripePremiumPlan | any = {
			name: getProductProperty(stripePrices[0]?.product, "name") || "Premium",
			description:
				getProductProperty(stripePrices[0]?.product, "description") ||
				"Premium Inventory Management Software subscription",
			price: stripePrices[0]?.unit_amount
				? stripePrices[0]?.unit_amount / 100
				: 8999 / 100,
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

const getProductProperty = (
	product: string | any | undefined,
	property: keyof any
) => {
	if (typeof product === "object" && product !== null) {
		return product[property];
	}
	return undefined;
};
