import Link from "next/link";
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
import LegosSpinner from "../components/LegosSpinner";
import TrustedBrands from "../components/TrustedBrands";
import TestComponent from "../components/TestComponent";
import FeaturesBanner from "../components/FeaturesBanner";
import ThreeLinksGrid from "../components/ThreeLinksGrid";

// Styling
import styles from "../styles/Home.module.scss";
import ContentSlider from "../components/ContentSlider";

export default function HomePage({seo, homePageContent}: any) {
	return (
		<>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={`BlueInventory `} seo={seo} />

			<main>
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

				{/*  THREE LINKS GRID */}
				<ThreeLinksGrid
					buttonLink={homePageContent?.heroSection?.buttonLinkTwo}
					buttonLinkTwo={homePageContent?.heroSection?.buttonLinkTwo}
					buttonLinkThree={homePageContent?.heroSection?.buttonLinkTwo}
					backgroundImage={
						homePageContent?.heroSection?.backgroundImage?.sourceUrl
					}
				/>

				{/* CONTENT SLIDER */}
				<TestComponent />
				<ContentSlider
					contentOne={homePageContent?.contentSlider?.contentOne}
					contentTwo={homePageContent?.contentSlider?.contentTwo}
					contentThree={homePageContent?.contentSlider?.contentThree}
				/>

				{/* LEGO SPINNER */}
				<LegosSpinner />

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

				{/*  SIGN UP */}
				<SignUp
					title={homePageContent?.contactBanner?.title}
					paragraph={homePageContent?.contactBanner?.paragraph}
					// Display Options
					backgroundColor={"white"}
					// backgroundColor={homePageContent?.signUp?.backgroundColor}
				/>

				<section className="pt-24 pb-32 overflow-hidden bg-gradient-gray2">
					<div className="container px-4 mx-auto">
						<div className="max-w-md mx-auto mb-20">
							<h2 className="mb-4 text-6xl font-semibold text-center text-gray-900 sm:text-7xl">
								Got questions?
							</h2>
							<p className="text-lg text-center text-gray-600">
								Frequently Asked Questions
							</p>
						</div>
						<div className="flex flex-wrap mb-24 -m-6">
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-gray-900 text-medium">
										Is it really unlimited downloads?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-gray-900 text-medium">
										Is it really unlimited downloads?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-gray-900 text-medium">
										Do you offer discounts on annual plans?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-gray-900 text-medium">
										Do you offer discounts on annual plans?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-gray-900 text-medium">
										What kind of file do you offer with the packages?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
							<div className="w-full p-6 md:w-1/2">
								<div className="md:max-w-xl">
									<h2 className="mb-4 font-medium text-gray-900 text-medium">
										What kind of file do you offer with the packages?
									</h2>
									<p className="text-base text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sagittis euismod ornare aenean ut justo elit amet. Gravida
										pulvinar ac elementum praesent vel quis accumsan, proin
										rhoncus.
									</p>
								</div>
							</div>
						</div>
						<a
							className="block mx-auto overflow-hidden text-base font-medium text-gray-900 group max-w-max hover:text-gray-800"
							href="#"
						>
							<p className="mb-1">
								Didn&rsquo;t find the answer? Contact us here
							</p>
							<div className="w-full h-px transition duration-500 ease-in-out transform -translate-x-0 group-hover:translate-x-full bg-gradient-cyan"></div>
						</a>
					</div>
				</section>

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
			mainContent: pages(where: {id: 49, status: PUBLISH}) {
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
							contentSlider {
								contentOne {
									tag
									title
									paragraph
									publishedDate
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										altText
										sourceUrl
										mediaDetails {
											width
											height
										}
									}
								}
								contentTwo {
									tag
									title
									paragraph
									publishedDate
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										altText
										sourceUrl
										mediaDetails {
											width
											height
										}
									}
								}
								contentThree {
									tag
									title
									paragraph
									publishedDate
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										altText
										sourceUrl
										mediaDetails {
											width
											height
										}
									}
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
									card {
										title
										paragraph
									}
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
