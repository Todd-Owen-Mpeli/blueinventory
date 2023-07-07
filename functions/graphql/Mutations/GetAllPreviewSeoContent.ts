import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PREVIEW PAGES, BLOGS & INDUSTRIES SEO CONTENT */
/* Fetch all Seo Content (For every flexible content page) */
export async function getAllPreviewSeoContent(
	id: number,
	authToken: string,
	postType: string
) {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: ${postType}(id: ${id}, idType: DATABASE_ID) {
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
		`;

		const response: any = await client.query({
			query: content,
			variables: {
				id: id,
			},
			context: {
				headers: {
					authorization: authToken ? `Bearer ${authToken}` : "",
				},
			},
		});

		return response?.data?.mainContent?.seo;
	} catch (error) {
		console.log(error);
		throw new Error(
			`Something went wrong trying to get preview ${postType} seo content`
		);
	}
}
