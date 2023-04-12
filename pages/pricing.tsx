import {gql} from "@apollo/client";
import {client} from "../lib/apollo";

// Components
import MetaTag from "../components/Meta/MetaTag";

// Styling
import styles from "../styles/Home.module.scss";

const pricingPage = ({seo, pricingPageContent, pageTitle}: any) => {
	return (
		<>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={pageTitle} seo={seo} />

			<main></main>
		</>
	);
};

export default pricingPage;

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
			content: response.data?.mainContent?.edges[0]?.node?.pricingPage,
		},
		revalidate: 60,
	};
}
