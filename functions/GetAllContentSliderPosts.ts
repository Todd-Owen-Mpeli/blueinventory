// Imports
import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

// Content Slider Blog Posts Content
export const getContentSliderBlogPostsPostsContent = async () => {
	try {
		const getSingleBlogPostsContent: DocumentNode = gql`
			{
				mainContent: posts(first: 3, where: {status: PUBLISH}) {
					nodes {
						uri
						date
						title
						template {
							... on DefaultTemplate {
								templateName
								flexibleContent {
									flexibleContent {
										... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionThree {
											fieldGroupName
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
										... on DefaultTemplate_Flexiblecontent_FlexibleContent_TitleParagraph {
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
		`;

		const response: any = await client.query({
			query: getSingleBlogPostsContent,
		});

		return {
			content: response?.data?.mainContent?.nodes,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the content slider blog posts slugs content"
		);
	}
};
