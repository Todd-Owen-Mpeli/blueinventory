import {gql} from "@apollo/client";
import {client} from "../lib/apollo";

// Components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroTwo from "../components/HeroTwo";
import JumboGrid from "../components/JumboGrid";
import MetaTag from "../components/Meta/MetaTag";

// Styling
import styles from "../styles/Home.module.scss";
import PricingOptions from "../components/PricingOptions";

const pricingPage = ({seo, pricingPageContent, pageTitle}: any) => {
	return (
		<>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={pageTitle} seo={seo} />

			<main className={styles.main}>
				{/* Hero Section */}
				<HeroTwo
					title={pricingPageContent?.heroSection?.title}
					subtitle={pricingPageContent?.heroSection?.subtitle}
					backgroundImage={
						pricingPageContent?.heroSection?.backgroundImage?.sourceUrl
					}
				/>

				{/* Pricing Options Section */}
				<PricingOptions />

				{/* Jumbo Section */}
				<JumboGrid />
			</main>
		</>
	);
};

export default pricingPage;

// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
pricingPage.getLayout = function PageLayout({
	page,
	pageTitle,
	pricingPageContent,
}: any) {
	return (
		<>
			{/* <!--===== NAVBAR =====--> */}
			<Navbar />

			{/* <!--===== PAGE CONTENT =====--> */}
			{page}

			{/* <!--===== FOOTER =====--> */}
			<Footer email={pricingPageContent?.ctaBannerTwo?.title} />
		</>
	);
};

export async function getStaticProps() {
	const getPricingPageContent: any = gql`
		{
			title: pages(where: {id: 251}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 251}) {
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
								subtitle
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
		query: getPricingPageContent,
	});

	return {
		props: {
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			pageTitle: response.data?.title?.edges[0]?.node?.title,
			pricingPageContent:
				response.data?.mainContent?.edges[0]?.node?.pricingPage,
		},
		revalidate: 60,
	};
}
