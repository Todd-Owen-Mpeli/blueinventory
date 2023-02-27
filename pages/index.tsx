import {gql} from "@apollo/client";
import {client} from "../lib/apollo";

// Components
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import CTAOne from "../components/CTAOne";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SignUp from "../components/SignUp";
import CTATwo from "../components/CTATwo";
import MetaTag from "../components/Meta/MetaTag";
import HowItWorks from "../components/HowItWorks";
import TrustedBrands from "../components/TrustedBrands";
import FeaturesBanner from "../components/FeaturesBanner";

// Styling
import styles from "../styles/Home.module.scss";

export default function HomePage({seo, homePageContent}: any) {
	return (
		<>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={`BlueInventory `} seo={seo} />

			<main className={styles.main}>
				{/* Hero Section */}
				<Hero
					title={homePageContent?.heroSection?.title}
					subtitle={homePageContent?.heroSection?.subtitle}
					buttonLink={homePageContent?.heroSection?.buttonLink}
					buttonLinkTwo={homePageContent?.heroSection?.buttonLinkTwo}
					backgroundImage={
						homePageContent?.heroSection?.backgroundImage?.sourceUrl
					}
				/>

				{/* Feature Banner Section */}
				<FeaturesBanner
					title={homePageContent?.featuresBanner?.title}
					content={homePageContent?.featuresBanner?.content}
				/>

				{/* CTA Two */}
				<CTATwo
					title={homePageContent?.contactBannerTwo?.title}
					paragraph={homePageContent?.contactBannerTwo?.paragraph}
					buttonLink={homePageContent?.contactBannerTwo?.buttonLink}
				/>

				{/* How It Works */}
				<HowItWorks
					title={homePageContent?.howItWorks?.title}
					subtitle={homePageContent?.howItWorks?.subtitle}
					gridContent={homePageContent?.howItWorks?.gridContent}
				/>

				{/* Trusted Brands Logos */}
				<TrustedBrands
					title={homePageContent?.trustedBrands?.title}
					logos={homePageContent?.trustedBrands?.logos}
					paragraph={homePageContent?.trustedBrands?.paragraph}
				/>

				{/* CTA One */}
				<CTAOne
					title={homePageContent?.contactBanner?.title}
					titleTwo={homePageContent?.contactBanner?.titleTwo}
					paragraph={homePageContent?.contactBanner?.paragraph}
					paragraphTwo={homePageContent?.contactBanner?.paragraphTwo}
				/>

				{/* <!--===== SIGN UP =====--> */}
				<SignUp
					title={homePageContent?.contactBanner?.title}
					paragraph={homePageContent?.contactBanner?.paragraph}
					// Display Options
					backgroundColor={"white"}
					// backgroundColor={homePageContent?.signUp?.backgroundColor}
				/>

				{/* FAQ */}
				<FAQ
					title={homePageContent?.faq?.title}
					paragraph={homePageContent?.faq?.paragraph}
					buttonLink={homePageContent?.faq?.buttonLink}
					faqContent={homePageContent?.faq?.faqContent}
				/>
			</main>
		</>
	);
}

// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
// HomePage.getLayout = function PageLayout(page) {
// 	return (
// 		<>
// 			{/* <!--===== NAVBAR =====--> */}
// 			<Navbar />

// 			{/* <!--===== PAGE CONTENT =====--> */}
// 			{page}

// 			{/* <!--===== FOOTER =====--> */}
// 			<Footer />
// 		</>
// 	);
// };

export async function getStaticProps() {
	const getHomePageContent: any = gql`
		{
			mainContent: pages(where: {id: 54, status: PUBLISH}) {
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
						homePage {
							heroSection {
								subtitle
								title
								buttonLink {
									url
									title
									target
								}
								buttonLinkTwo {
									url
									title
									target
								}
								backgroundImage {
									sourceUrl
								}
							}
							featuresBanner {
								title
								content {
									title
									icon {
										altText
										sourceUrl
									}
								}
							}
							howItWorks {
								title
								subtitle
								gridContent {
									card {
										title
										subtitle
										paragraph
										displayImageLocation
										icon {
											altText
											sourceUrl
										}
										image {
											altText
											sourceUrl
										}
									}
								}
							}
							trustedBrands {
								title
								paragraph
								logos {
									image {
										altText
										sourceUrl
									}
								}
							}
							contactBannerTwo {
								title
								paragraph
								buttonLink {
									url
									title
									target
								}
							}
							contactBanner {
								title
								titleTwo
								paragraph
								paragraphTwo
							}
							faq {
								title
								paragraph
								buttonLink {
									url
									title
									target
								}
								faqContent {
									title
									paragraph
								}
							}
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getHomePageContent,
	});

	return {
		props: {
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			homePageContent: response.data?.mainContent?.edges[0]?.node?.homePage,
		},
		revalidate: 60,
	};
}
