import {gql} from "@apollo/client";
import {client} from "../config/apollo";

// Components
import MetaTag from "../components/Meta/MetaTag";

// Styling
import styles from "../styles/Home.module.scss";

export default function FeaturesPage({seo, pageTitle, content}: any) {
	return (
		<>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={pageTitle} seo={seo} />

			<main></main>
		</>
	);
}

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
			// content: response.data?.mainContent?.edges[0]?.node?.featuresPage,
		},
		revalidate: 60,
	};
}
