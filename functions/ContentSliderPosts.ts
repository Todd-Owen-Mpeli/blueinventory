// Imports
import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

// Content Slider Operational Insights Posts Content
export const fetchContentSliderOperationalInsightsPostsContent = async () => {
	try {
		const getSingleOperationalInsightContent: DocumentNode = gql`
			{
				mainContent: posts(first: 3, where: {status: PUBLISH}) {
					nodes {
						uri
						date
						title
						singleOperationalInsightPost {
							heroSection {
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
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: getSingleOperationalInsightContent,
		});

		return {
			content: response?.data?.mainContent?.nodes,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the content slider operational insight slugs content"
		);
	}
};
