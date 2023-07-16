// Imports
import Stripe from "stripe";

export type IStripeCustomer = {
	id: string;
	name: string | null | undefined;
	email: string | null;
	phone: string | null | undefined;
	address: Stripe.Address | null | undefined;
	description: string | null;
};

export interface IStripeCustomers {
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

export type IStripePlans = {
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
	stripePremiumPlan: {
		name: string;
		description: string;
		price: number;
		paymentRecurringInterval: string;
	};
	stripeStandardPlan: {
		name: string;
		description: string;
		price: number;
		paymentRecurringInterval: string;
	};
};

export interface IStripePaymentPlans {
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

export interface IStripeStandardPlan {
	name: string;
	description: string;
	price: number;
	paymentRecurringInterval: string;
}

export interface IStripePremiumPlan {
	name: string;
	description: string;
	price: number;
	paymentRecurringInterval: string;
}
