// Import
import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
};

interface ISlug extends Array<SlugResponse> {}

// Industries Page Slugs
export const fetchIndustriesPageSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				slugs: industries(where: {status: PUBLISH}) {
					nodes {
						slug
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.slugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the industries page slugs"
		);
	}
};

// Industries Page Content
export const fetchIndustriesPageContent = async (slug: string) => {
	try {
		const getIndustriesPageContent: DocumentNode = gql`
			{
				mainContent: industry(id: "${slug}", idType: SLUG) {
                    title
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
					industryPage {
						heroSection {
      					  title
      					  paragraph
      					  backgroundVideoUrl
      					  backgroundImageOrVideo
      					  backgroundImage {
      					    altText
          					sourceUrl
          					mediaDetails {
          					  height
          					  width
          					}
      					  }
      					}
						titleParagraph {
							title
							paragraph
						}
						cta {
							title
							paragraph
							buttonLink {
								url
								title
								target
							}
							backgroundImage {
								sourceUrl
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: getIndustriesPageContent,
		});

		return {
			seo: response?.data?.mainContent?.seo,
			pageTitle: response?.data?.mainContent?.title,
			content: response.data?.mainContent?.industryPage,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the industries page content"
		);
	}
};
