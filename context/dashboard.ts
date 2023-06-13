import {createContext, useContext} from "react";

interface IDashboardContent {
	stripePlans: {
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
	themesOptionsContent: {
		email: string;
		address: string;
		emailTwo: string;
		phoneNumber: string;
		phoneNumberTwo: string;
		twitterLink: string;
		facebookLink: string;
		linkedinLink: string;
		copyrightText: string;
	};
}

export const DashboardContext = createContext<IDashboardContent | undefined>(
	undefined
);

export const useDashboardContext = () => {
	const content = useContext(DashboardContext);

	if (content === undefined) {
		throw new Error(`useDashboardContext must be used to render content.`);
	}

	return content;
};
