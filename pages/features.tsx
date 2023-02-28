import {gql} from "@apollo/client";
import {client} from "../lib/apollo";

// Components
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTATwo from "../components/CTATwo";
import HeroTwo from "../components/HeroTwo";
import MetaTag from "../components/Meta/MetaTag";
import CardGrid from "../components/CardGrid";
import FeaturesBanner from "../components/FeaturesBanner";
import ThreeContentGrid from "../components/ThreeContentGrid";

// Styling
import styles from "../styles/Home.module.scss";

export default function FeaturesPage({
	seo,
	pageTitle,
	featurePageContent,
}: any) {
	// console.log(featurePageContent);
	return (
		<>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={pageTitle} seo={seo} />

			<main className={styles.main}>
				{/* Hero Section */}
				<HeroTwo
					title={featurePageContent?.heroSection?.title}
					subtitle={featurePageContent?.heroSection?.subtitle}
					backgroundImage={
						featurePageContent?.heroSection?.backgroundImage?.sourceUrl
					}
				/>

				{/* Stats */}
				<Stats
					title={featurePageContent?.stats?.title}
					subtitle={featurePageContent?.stats?.subtitle}
					beforeTopText={featurePageContent?.stats?.beforeTopText}
					beforeNumber={featurePageContent?.stats?.beforeNumber}
					beforeBottomText={featurePageContent?.stats?.beforeBottomText}
					afterTopText={featurePageContent?.stats?.afterTopText}
					afterNumber={featurePageContent?.stats?.afterNumber}
					afterBottomText={featurePageContent?.stats?.afterBottomText}
				/>

				{/* Feature Banner Section */}
				<FeaturesBanner
					title={featurePageContent?.featuresBanner?.title}
					content={featurePageContent?.featuresBanner?.content}
				/>

				{/* Three Grid Content */}
				<ThreeContentGrid
					title={featurePageContent?.threeGridContent?.title}
					paragraph={featurePageContent?.threeGridContent?.paragraph}
					gridContent={featurePageContent?.threeGridContent?.gridContent}
					buttonLink={featurePageContent?.threeGridContent?.buttonLink}
				/>

				{/* Feature List */}
				<CardGrid
					title={featurePageContent?.featureList?.title}
					gridContent={featurePageContent?.featureList?.gridContent}
				/>

				{/* CTA Two */}
				<CTATwo
					title={featurePageContent?.contactBannerTwo?.title}
					paragraph={featurePageContent?.contactBannerTwo?.paragraph}
					buttonLink={featurePageContent?.contactBannerTwo?.buttonLink}
				/>
			</main>
		</>
	);
}

// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
// FeaturesPage.getLayout = function PageLayout({
// 	page,
// 	pageTitle,
// 	featurePageContent,
// }: any) {
// 	return (
// 		<>
// 			{/* <!--===== NAVBAR =====--> */}
// 			<Navbar />

// 			{/* <!--===== PAGE CONTENT =====--> */}
// 			{page}

// 			{/* <!--===== FOOTER =====--> */}
// 			<Footer email={featurePageContent?.ctaBannerTwo?.title} />
// 		</>
// 	);
// };

export async function getStaticProps() {
	const getFeaturePageContent: any = gql`
		{
			title: pages(where: {id: 121}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 121}) {
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
						featuresPage {
							heroSection {
								title
								subtitle
								backgroundImage {
									sourceUrl
								}
							}
							stats {
								title
								subtitle
								beforeTopText
								beforeNumber
								beforeBottomText
								afterTopText
								afterNumber
								afterBottomText
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
							threeGridContent {
								title
								paragraph
								buttonLink {
									url
									title
									target
								}
								gridContent {
									title
									paragraph
									icon {
										sourceUrl
									}
								}
							}
							featureList {
								title
								gridContent {
									card {
										title
										paragraph
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
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getFeaturePageContent,
	});

	return {
		props: {
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			pageTitle: response.data?.title?.edges[0]?.node?.title,
			featurePageContent:
				response.data?.mainContent?.edges[0]?.node?.featuresPage,
		},
		revalidate: 60,
	};
}
