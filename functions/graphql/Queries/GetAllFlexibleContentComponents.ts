import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PAGES, OPERATIONAL INSIGHTS POSTS & INDUSTRY PAGES*/
/* Fetch all Flexible Content Components (For every flexible content page) */
export async function getAllFlexibleContentComponents(
	slug: string,
	postType: string,
	postTypeFlexiblecontent: string
) {
	try {
		const content: DocumentNode = gql`
			{
        mainContent: ${postType}(where: {name: "${slug}", status: PUBLISH}) {
          edges {
            node {
              template {
                ... on DefaultTemplate {
                  flexibleContent {
                    flexibleContent {
                      ... on ${postTypeFlexiblecontent}_HeroSection {
                        backgroundVideoUrl
                        fieldGroupName
                        title
                        subtitle
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
                      ... on ${postTypeFlexiblecontent}_HeroSectionTwo {
                        fieldGroupName
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
                      ... on ${postTypeFlexiblecontent}_TitleParagraph {
                        fieldGroupName
                        paragraph
                        title
                      }
                      ... on ${postTypeFlexiblecontent}_IntroContent {
                        fieldGroupName
                        title
                        icon {
                            altText
                            sourceUrl
                            mediaDetails {
                              height
                              width
                            }
                          }
                        contentGrid {
                          card {
                            title
                            paragraph
                            icon {
                              altText
                              sourceUrl
                              mediaDetails {
                                height
                                width
                              }
                            }
                            buttonLink {
                              url
                              title
                              target
                            }
                          }
                        }
                      }
                      ... on ${postTypeFlexiblecontent}_FeaturesGrid {
                        fieldGroupName
                        paragraph
                        title
                        cardOne {
                          title
                          subtitle
                          paragraph
                        }
                        cardTwo {
                          backgroundImage {
                            altText
                            sourceUrl
                            mediaDetails {
                              height
                              width
                            }
                          }
                        }
                        cardThree {
                          foreground {
                            title
                            subtitle
                            paragraph
                          }
                          background {
                            title
                            subtitle
                            paragraph
                          }
                        }
                        lastCard {
                          backgroundImage {
                            altText
                            sourceUrl
                            mediaDetails {
                              height
                              width
                            }
                          }
                        }
                        gridContent {
                          card {
                            title
                            subtitle
                            paragraph
                          }
                        }
                      }
                      ... on ${postTypeFlexiblecontent}_FeaturesGridTwo {
                        fieldGroupName
                        cardOne {
                          title
                          subtitle
                          paragraph
                        }
                        cardTwo {
                          backgroundImage {
                            altText
                            sourceUrl
                            mediaDetails {
                              height
                              width
                            }
                          }
                        }
                        lastCard {
                          backgroundImage {
                            altText
                            sourceUrl
                            mediaDetails {
                              height
                              width
                            }
                          }
                        }
                        gridContent {
                          card {
                            title
                            subtitle
                            paragraph
                          }
                        }
                      }
                      ... on ${postTypeFlexiblecontent}_Pricing {
                        fieldGroupName
                        italic
                        title
                        pointTwo
                        pointOne
                        paragraph
                        paymentProviders {
                          logo {
                            altText
                            sourceUrl
                            mediaDetails {
                              height
                              width
                            }
                          }
                        }
                        card {
                          bulletList {
                            bulletPoint
                          }
                        }
                      }
                      ... on ${postTypeFlexiblecontent}_ContentStats {
                        fieldGroupName
                        paragraph
                        title
                        subtitle
                        column {
                          title
                          values
                          percentage
                        }
                        columnTwo {
                          title
                          values
                          percentage
                        }
                        bulletPoints {
                          bulletPoint
                        }
                      }
                      ... on ${postTypeFlexiblecontent}_ContentImageGrid {
                        fieldGroupName
                        gridContent {
                          card {
                            title
                            paragraph
                            contentLocation
                            backgroundImage {
                              sourceUrl
                            }
                          }
                        }
                      }
                      ... on ${postTypeFlexiblecontent}_ContentSliderAuto {
                        fieldGroupName
                      }
                      ... on ${postTypeFlexiblecontent}_TrustedBrands {
                        fieldGroupName
                        paragraph
                        title
                        logos {
                          image {
                            altText
                            sourceUrl
                            mediaDetails {
                              height
                              width
                            }
                          }
                        }
                      }
                      ... on ${postTypeFlexiblecontent}_ImageGrid {
                        fieldGroupName
                        image {
                          altText
                          sourceUrl
                          mediaDetails {
                            height
                            width
                          }
                        }
                        imageTwo {
                          altText
                          sourceUrl
                          mediaDetails {
                            height
                            width
                          }
                        }
                        imageThree {
                          altText
                          sourceUrl
                          mediaDetails {
                            height
                            width
                          }
                        }
                        imageFour {
                          altText
                          sourceUrl
                          mediaDetails {
                            height
                            width
                          }
                        }
                        imageFive {
                          altText
                          sourceUrl
                          mediaDetails {
                            height
                            width
                          }
                        }
                        imageSix {
                          altText
                          sourceUrl
                          mediaDetails {
                            height
                            width
                          }
                        }
                      }
                      ... on ${postTypeFlexiblecontent}_Sustainability {
                        fieldGroupName
                        imageText
                        title
                        subtitle
                        percentage
                        paragraph
                        image {
                          altText
                          sourceUrl
                          mediaDetails {
                            height
                            width
                          }
                        }
                      }
                      ... on ${postTypeFlexiblecontent}_Faq {
                        fieldGroupName
                        paragraph
                        title
                        qagrid {
                          title
                          paragraph
                        }
                      }
                      ... on ${postTypeFlexiblecontent}_OperationalInsights {
                        fieldGroupName
                        italic
                        title
                        paragraph
                      }
                      ... on ${postTypeFlexiblecontent}_Testimonial {
                        fieldGroupName
                        paragraph
                        title
                        contentGrid {
                          card {
                            name
                            position
                            paragraph
                            image {
                              altText
                              sourceUrl
                              mediaDetails {
                                height
                                width
                              }
                            }
                          }
                        }
                      }
                      ... on ${postTypeFlexiblecontent}_ContactInfo {
                        fieldGroupName
                        paragraph
                        title
                      }
                      ... on ${postTypeFlexiblecontent}_ContactForm {
                        fieldGroupName
                        title
                        backgroundImage {
                          altText
                          sourceUrl
                          mediaDetails {
                            height
                            width
                          }
                        }
                      }
                      ... on ${postTypeFlexiblecontent}_Cta {
                        fieldGroupName
                        paragraph
                        title
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
                        content {
                          title
                          paragraph
                        }
                      }
                      ... on ${postTypeFlexiblecontent}_CtaTwo {
                        fieldGroupName
                        paragraph
                        title
                        buttonLink {
                          url
                          title
                          target
                        }
                        backgroundImage {
                          sourceUrl
                        }
                      }
                      ... on ${postTypeFlexiblecontent}_ErrorPageContent {
                        fieldGroupName
                        paragraph
                        title
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
        }
			}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return {
			content:
				response.data?.mainContent?.edges[0]?.node?.template?.flexibleContent
					?.flexibleContent,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all flexible content components"
		);
	}
}
