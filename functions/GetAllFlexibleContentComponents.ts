import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PAGES */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export async function getAllPagesFlexibleContentComponents(slug: string) {
	try {
		const content: DocumentNode = gql`
			{
				pageTitle: pages(where: {name: "${slug}", status: PUBLISH}) {
					edges {
						node {
							title
						}
					}
				}
        mainContent: pages(where: {name: "${slug}", status: PUBLISH}) {
          edges {
            node {
              template {
                ... on DefaultTemplate {
                  flexibleContent {
                    flexibleContent {
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSection {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionTwo {
                        backgroundImageOrVideo
                        backgroundVideoUrl
                        title
                        paragraph
                        fieldGroupName
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_IntroContent {
                        fieldGroupName
                        title
                        contentGrid {
                          card {
                            title
                            paragraph
                            buttonLink {
                              url
                              title
                              target
                            }
                          }
                        }
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_FeaturesGrid {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_FeaturesGridTwo {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Pricing {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentStats {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentImageGrid {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentSliderAuto {
                        fieldGroupName
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_TrustedBrands {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ImageGrid {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Sustainability {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Faq {
                        fieldGroupName
                        paragraph
                        title
                        qagrid {
                          title
                          paragraph
                        }
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_OperationalInsights {
                        fieldGroupName
                        italic
                        title
                        paragraph
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Testimonial {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactInfo {
                        fieldGroupName
                        paragraph
                        title
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactForm {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Cta {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_CtaTwo {
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
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
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

/* OPERATIONAL INSIGHTS POSTS */
/* Fetch all Flexible Content Components 
(For every flexible content Operational Insights Posts) */
export async function getAllOperationalInsightsPostsFlexibleContentComponents(
	slug: string
) {
	try {
		const content: DocumentNode = gql`
			{
				pageTitle: posts(where: {name: "${slug}", status: PUBLISH}) {
					edges {
						node {
							title
						}
					}
				}
        mainContent: posts(where: {name: "${slug}", status: PUBLISH}) {
          edges {
            node {
              template {
                ... on DefaultTemplate {
                  flexibleContent {
                    flexibleContent {
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSection {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionTwo {
                        backgroundImageOrVideo
                        backgroundVideoUrl
                        title
                        paragraph
                        fieldGroupName
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_IntroContent {
                        fieldGroupName
                        title
                        contentGrid {
                          card {
                            title
                            paragraph
                            buttonLink {
                              url
                              title
                              target
                            }
                          }
                        }
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_FeaturesGrid {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_FeaturesGridTwo {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Pricing {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentStats {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentImageGrid {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentSliderAuto {
                        fieldGroupName
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_TrustedBrands {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ImageGrid {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Sustainability {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Faq {
                        fieldGroupName
                        paragraph
                        title
                        qagrid {
                          title
                          paragraph
                        }
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_OperationalInsights {
                        fieldGroupName
                        italic
                        title
                        paragraph
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Testimonial {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactInfo {
                        fieldGroupName
                        paragraph
                        title
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactForm {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Cta {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_CtaTwo {
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
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
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

/* INDUSTRY PAGES */
/* Fetch all Flexible Content Components 
(For every flexible content Industries page) */
export async function getAllIndustriesPagesFlexibleContentComponents(
	slug: string
) {
	try {
		const content: DocumentNode = gql`
			{
				pageTitle: industries(where: {name: "${slug}", status: PUBLISH}) {
					edges {
						node {
							title
						}
					}
				}
        mainContent: industries(where: {name: "${slug}", status: PUBLISH}) {
          edges {
            node {
              template {
                ... on DefaultTemplate {
                  flexibleContent {
                    flexibleContent {
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSection {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionTwo {
                        backgroundImageOrVideo
                        backgroundVideoUrl
                        title
                        paragraph
                        fieldGroupName
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_IntroContent {
                        fieldGroupName
                        title
                        contentGrid {
                          card {
                            title
                            paragraph
                            buttonLink {
                              url
                              title
                              target
                            }
                          }
                        }
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_FeaturesGrid {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_FeaturesGridTwo {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Pricing {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentStats {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentImageGrid {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentSliderAuto {
                        fieldGroupName
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_TrustedBrands {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ImageGrid {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Sustainability {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Faq {
                        fieldGroupName
                        paragraph
                        title
                        qagrid {
                          title
                          paragraph
                        }
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_OperationalInsights {
                        fieldGroupName
                        italic
                        title
                        paragraph
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Testimonial {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactInfo {
                        fieldGroupName
                        paragraph
                        title
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactForm {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_Cta {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_CtaTwo {
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
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
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
