import {gql} from "@apollo/client";
import {client} from "../config/apollo";
import {getThemesOptionsContent} from "../functions/themesOptions";

// Components
import Logos from "../components/Logos";
import MetaTag from "../components/Meta/MetaTag";
import Footer from "../components/Footer";

export default function HomePage({
	seo,
	content,
	footerMenuLinks,
	themesOptionsContent,
}: any) {
	return (
		<>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={`BlueInventory `} seo={seo} />

			<main>
				<Logos
					title={content?.trustedBrands?.title}
					logoGrid={content?.trustedBrands?.logos}
				/>
				<Footer
					email={themesOptionsContent?.email}
					phoneNumber={themesOptionsContent?.phoneNumber}
					twitterLink={themesOptionsContent?.twitterLink}
					facebookLink={themesOptionsContent?.facebookLink}
					linkedinLink={themesOptionsContent?.linkedinLink}
					footerMenuLinks={footerMenuLinks?.footerMenuLinks}
					copyRightText={themesOptionsContent?.copyrightText}
					phoneNumberTwo={themesOptionsContent?.phoneNumberTwo}
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
							trustedBrands {
								title
								logos {
									image {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
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

	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			themesOptionsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			content: response.data?.mainContent?.edges[0]?.node?.homePage,
		},
		revalidate: 60,
	};
}
