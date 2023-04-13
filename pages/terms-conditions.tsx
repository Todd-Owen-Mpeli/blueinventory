// Import
import {gql} from "@apollo/client";
import {client} from "../config/apollo";
import {getThemesOptionsContent} from "../functions/themesOptions";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "../functions/MenuLinks";

// Components
import Footer from "../components/Footer";
import MetaTag from "../components/Meta/MetaTag";

const termsConditions = ({
	seo,
	content,
	pageTitle,
	footerMenuLinks,
	themesOptionsContent,
}: any) => {
	return (
		<>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={pageTitle} seo={seo} />

			<main>
				<Footer
					email={themesOptionsContent?.email}
					emailTwo={themesOptionsContent?.emailTwo}
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
};

export default termsConditions;

export async function getStaticProps() {
	const geTermsConditionsPageContent: any = gql`
		{
			title: pages(where: {id: 549}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 549, status: PUBLISH}) {
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
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: geTermsConditionsPageContent,
	});

	const footerMenuLinks: object = await getFooterMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			footerMenuLinks,
			themesOptionsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			pageTitle: response.data?.title?.edges[0]?.node?.title,
			// content: response.data?.mainContent?.edges[0]?.node?.termsConditionsPage,
		},
		revalidate: 60,
	};
}
