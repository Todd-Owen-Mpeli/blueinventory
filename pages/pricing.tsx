// Imports
import React, {useEffect} from "react";
import Stripe from "stripe";
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import {loadStripe} from "@Stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import type {NextPage, GetStaticProps} from "next";
import {getThemesOptionsContent} from "../functions/themesOptions";
import {fetchStripePaymentPlans} from "../functions/stripe/GetStripePaymentPlans";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "../functions/MenuLinks";

// Components
import CTATwo from "../components/CTATwo";
import Pricing from "@/components/Pricing";
import HeroTwo from "../components/HeroTwo";
import Layout from "../components/Layout/Layout";
import TitleParagraph from "../components/TitleParagraph";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// Stripe Checkout Session Init
const stripePromise = loadStripe(
	`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

interface IPricing {
	seo: {
		canonical: string;
		cornerstone: Boolean;
		focuskw: string;
		fullHead: string;
		metaDesc: string;
		metaKeywords: string;
		metaRobotsNofollow: string;
		metaRobotsNoindex: string;
		opengraphAuthor: string;
		opengraphDescription: string;
		opengraphImage: {
			mediaItemUrl: string;
		};
		opengraphModifiedTime: string;
		opengraphPublishedTime: string;
		opengraphPublisher: string;
		opengraphSiteName: string;
		opengraphTitle: string;
		opengraphType: string;
		opengraphUrl: string;
		readingTime: number;
		title: string;
		twitterDescription: string;
		twitterTitle: string;
		twitterImage: {
			mediaItemUrl: string;
		};
	};
	pageTitle: string;
	content: {
		heroSection: {
			title: string;
			paragraph: string;
			backgroundVideoUrl: string;
			backgroundImageOrVideo: string;
			backgroundImage: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		};
		pricing: {
			title: string;
			italic: string;
			pointOne: string;
			pointTwo: string;
			paragraph: string;
			card: {
				bulletList: [
					{
						id: string;
						bulletPoint: string;
					}
				];
			};
			paymentProviders: [
				{
					id: string;
					logo: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							height: number;
							width: number;
						};
					};
				}
			];
		};
		titleParagraph: {
			title: string;
			paragraph: string;
		};
		cta: {
			title: string;
			paragraph: string;
			backgroundImage: {
				sourceUrl: string;
			};
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			buttonLinkTwo: {
				url: string;
				title: string;
				target: string;
			};
			content: {
				title: string;
				paragraph: string;
				backgroundImage: {
					sourceUrl: string;
				};
			};
		};
	};
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
	footerMenuLinks: {
		footerMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	navbarMenuLinks: {
		navbarMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	industriesMenuLinks: {
		industriesMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	themesOptionsContent: {
		address: string;
		email: string;
		emailTwo: string;
		phoneNumber: string;
		phoneNumberTwo: string;
		copyrightText: string;
		facebookLink: string;
		linkedinLink: string;
		twitterLink: string;
		businessHours: {
			content: string;
		};
		errorPageContent: {
			title: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			backgroundImage: {
				sourceUrl: string;
			};
		};
	};
}

const pricing: NextPage<IPricing> = ({
	seo,
	content,
	pageTitle,
	footerMenuLinks,
	navbarMenuLinks,
	stripePremiumPlan,
	stripeStandardPlan,
	industriesMenuLinks,
	themesOptionsContent,
}) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);
		if (query.get("success")) {
			console.log("Order placed! You will receive an email confirmation.");
		}

		if (query.get("canceled")) {
			console.log(
				"Order canceled -- continue to shop around and checkout when you’re ready."
			);
		}
	}, []);

	return (
		<Elements stripe={stripePromise}>
			<motion.div
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				<Layout
					seo={seo}
					pageTitle={pageTitle}
					themesOptionsContent={themesOptionsContent}
					footerMenuLinks={footerMenuLinks?.footerMenuLinks}
					navbarMenuLinks={navbarMenuLinks?.navbarMenuLinks}
					industriesMenuLinks={industriesMenuLinks?.industriesMenuLinks}
				>
					<HeroTwo
						title={content?.heroSection?.title}
						paragraph={content?.heroSection?.paragraph}
						backgroundImage={content?.heroSection?.backgroundImage}
						backgroundVideoUrl={content?.heroSection?.backgroundVideoUrl}
						backgroundImageOrVideo={
							content?.heroSection?.backgroundImageOrVideo
						}
					/>

					<Pricing
						card={content?.pricing?.card}
						title={content?.pricing?.title}
						italic={content?.pricing?.italic}
						stripePremiumPlan={stripePremiumPlan}
						pointOne={content?.pricing?.pointOne}
						pointTwo={content?.pricing?.pointTwo}
						stripeStandardPlan={stripeStandardPlan}
						paragraph={content?.pricing?.paragraph}
						paymentProviders={content?.pricing?.paymentProviders}
					/>

					<TitleParagraph
						title={content?.titleParagraph?.title}
						paragraph={content?.titleParagraph?.paragraph}
					/>

					<CTATwo
						title={content?.cta?.title}
						paragraph={content?.cta?.paragraph}
						buttonLink={content?.cta?.buttonLink}
						backgroundImage={content?.cta?.backgroundImage?.sourceUrl}
					/>
				</Layout>
			</motion.div>
		</Elements>
	);
};

export default pricing;

export const getStaticProps: GetStaticProps = async () => {
	const gePricingPageContent: any = gql`
		{
			title: pages(where: {id: 543}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 543, status: PUBLISH}) {
				edges {
					node {
						seo {
							canonical
							cornerstone
							focuskw
							fullHead
							metaDesc
							metaKeywords
							metaRobotsNofollow
							metaRobotsNoindex
							opengraphAuthor
							opengraphDescription
							opengraphImage {
								mediaItemUrl
							}
							opengraphModifiedTime
							opengraphPublishedTime
							opengraphPublisher
							opengraphSiteName
							opengraphTitle
							opengraphType
							opengraphUrl
							readingTime
							title
							twitterDescription
							twitterTitle
							twitterImage {
								mediaItemUrl
							}
						}
						pricingPage {
							heroSection {
								title
								paragraph
								backgroundVideoUrl
								backgroundImageOrVideo
								backgroundImage {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
							pricing {
								title
								italic
								pointOne
								pointTwo
								paragraph
								card {
									bulletList {
										bulletPoint
									}
								}
								paymentProviders {
									logo {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
							}
							titleParagraph {
								title
								paragraph
							}
							cta {
								title
								paragraph
								buttonLink {
									url
									title
									target
								}
								backgroundImage {
									sourceUrl
								}
							}
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: gePricingPageContent,
	});

	const navbarMenuLinks: object = await getNavbarMenuLinks();
	const footerMenuLinks: object = await getFooterMenuLinks();
	const industriesMenuLinks: object = await getIndustriesMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();
	// Fetches All Stripe Payment Plans
	const {stripeStandardPlan, stripePremiumPlan} =
		await fetchStripePaymentPlans();

	return {
		props: {
			navbarMenuLinks,
			footerMenuLinks,
			stripePremiumPlan,
			stripeStandardPlan,
			industriesMenuLinks,
			themesOptionsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			pageTitle: response?.data?.title?.edges[0]?.node?.title,
			content: response?.data?.mainContent?.edges[0]?.node?.pricingPage,
		},
		revalidate: 60,
	};
};
