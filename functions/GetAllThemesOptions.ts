import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

// Themes Options Content
export async function getThemesOptionsContent() {
	try {
		const content: DocumentNode = gql`
			{
				themeOptions(where: {id: 539, status: PUBLISH}) {
					edges {
						node {
							themeOptions {
								address
								email
								emailTwo
								phoneNumber
								phoneNumberTwo
								copyrightText
								facebookLink
								linkedinLink
								twitterLink
								businessHours {
									content
								}
								errorPageContent {
									title
									paragraph
									buttonLink {
										url
										title
										target
									}
									buttonLinkTwo {
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
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.themeOptions?.edges[0]?.node?.themeOptions;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch themes options content"
		);
	}
}
