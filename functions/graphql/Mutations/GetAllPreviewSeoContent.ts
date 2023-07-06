import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PREVIEW PAGES SEO */
/* Fetch all Seo Content (For 
	every flexible content page) */
export async function getAllPreviewSeoPagesContent(
	id: number,
	authToken: string,
	loginRedirectURL: string
) {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: page(id: ${id}, idType: DATABASE_ID) {
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
		return {
			redirect: {
				destination: loginRedirectURL || "/",
				statusCode: 307,
			},
		};
	}
}

/* PREVIEW BLOGS SEO */
/* Fetch all Seo Content Blog Post */
export async function getAllPreviewSeoBlogPostsContent(
	id: number,
	authToken: string,
	loginRedirectURL: string
) {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: post(id: ${id}, idType: DATABASE_ID) {
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
		return {
			redirect: {
				destination: loginRedirectURL || "/",
				statusCode: 307,
			},
		};
	}
}
