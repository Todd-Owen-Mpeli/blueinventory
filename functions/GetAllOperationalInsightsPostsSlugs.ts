// Imports
import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

// Operational Insights Slugs
export const getAllOperationalInsightsPostsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				operationalInsightsSlugs: posts(where: {status: PUBLISH}) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.operationalInsightsSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the operational insight slugs"
		);
	}
};

// All Operational Insights
export async function getAllOperationalInsightsContent() {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: posts(where: {status: PUBLISH}, last: 10) {
					edges {
						node {
							id
							uri
							title(format: RENDERED)
							featuredImage {
								node {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
							template {
								... on DefaultTemplate {
									templateName
									flexibleContent {
										flexibleContent {
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionTwo {
												fieldGroupName
												paragraph
												title
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
			query: content,
		});

		return response?.data?.mainContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the operational insight posts"
		);
	}
}
