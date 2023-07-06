// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PREVIEW PAGES */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllPreviewPagesFlexibleContentComponents = async (
	id: number,
	authToken: string,
	loginRedirectURL: string
) => {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: page(id: ${id}, idType: DATABASE_ID) {
					flexibleContent {
						flexibleContent {
							... on Page_Flexiblecontent_FlexibleContent_HeroSection {
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
							... on Page_Flexiblecontent_FlexibleContent_HeroSectionTwo {
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
							... on Page_Flexiblecontent_FlexibleContent_TitleParagraph {
								fieldGroupName
								paragraph
								title
							}
							... on Page_Flexiblecontent_FlexibleContent_IntroContent {
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
							... on Page_Flexiblecontent_FlexibleContent_FeaturesGrid {
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
							... on Page_Flexiblecontent_FlexibleContent_FeaturesGridTwo {
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
							... on Page_Flexiblecontent_FlexibleContent_Pricing {
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
							... on Page_Flexiblecontent_FlexibleContent_ContentStats {
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
							... on Page_Flexiblecontent_FlexibleContent_ContentImageGrid {
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
							... on Page_Flexiblecontent_FlexibleContent_ContentSliderAuto {
								fieldGroupName
							}
							... on Page_Flexiblecontent_FlexibleContent_TrustedBrands {
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
							... on Page_Flexiblecontent_FlexibleContent_ImageGrid {
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
							... on Page_Flexiblecontent_FlexibleContent_Sustainability {
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
							... on Page_Flexiblecontent_FlexibleContent_Faq {
								fieldGroupName
								paragraph
								title
								qagrid {
								title
								paragraph
								}
							}
							... on Page_Flexiblecontent_FlexibleContent_OperationalInsights {
								fieldGroupName
								italic
								title
								paragraph
							}
							... on Page_Flexiblecontent_FlexibleContent_Testimonial {
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
							... on Page_Flexiblecontent_FlexibleContent_ContactInfo {
								fieldGroupName
								paragraph
								title
							}
							... on Page_Flexiblecontent_FlexibleContent_ContactForm {
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
							... on Page_Flexiblecontent_FlexibleContent_Cta {
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
							... on Page_Flexiblecontent_FlexibleContent_CtaTwo {
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
							... on Page_Flexiblecontent_FlexibleContent_ErrorPageContent {
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

		return {
			content: response?.data?.mainContent?.flexibleContent?.flexibleContent,
		};
	} catch (error) {
		return {
			redirect: {
				destination: loginRedirectURL || "/",
				statusCode: 307,
			},
		};
	}
};

/* PREVIEW BLOGS POSTS */
/* Fetch all Flexible Content Components 
(For every flexible content Blog Post) */
export const getAllPreviewPostsFlexibleContentComponents = async (
	id: number,
	authToken: string,
	loginRedirectURL: string
) => {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: post(id: ${id}, idType: DATABASE_ID) {
					flexibleContent {
						flexibleContent {
							... on Post_Flexiblecontent_FlexibleContent_HeroSection {
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
							... on Post_Flexiblecontent_FlexibleContent_HeroSectionTwo {
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
							... on Post_Flexiblecontent_FlexibleContent_TitleParagraph {
								fieldGroupName
								paragraph
								title
							}
							... on Post_Flexiblecontent_FlexibleContent_IntroContent {
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
							... on Post_Flexiblecontent_FlexibleContent_FeaturesGrid {
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
							... on Post_Flexiblecontent_FlexibleContent_FeaturesGridTwo {
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
							... on Post_Flexiblecontent_FlexibleContent_Pricing {
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
							... on Post_Flexiblecontent_FlexibleContent_ContentStats {
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
							... on Post_Flexiblecontent_FlexibleContent_ContentImageGrid {
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
							... on Post_Flexiblecontent_FlexibleContent_ContentSliderAuto {
								fieldGroupName
							}
							... on Post_Flexiblecontent_FlexibleContent_TrustedBrands {
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
							... on Post_Flexiblecontent_FlexibleContent_ImageGrid {
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
							... on Post_Flexiblecontent_FlexibleContent_Sustainability {
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
							... on Post_Flexiblecontent_FlexibleContent_Faq {
								fieldGroupName
								paragraph
								title
								qagrid {
								title
								paragraph
								}
							}
							... on Post_Flexiblecontent_FlexibleContent_OperationalInsights {
								fieldGroupName
								italic
								title
								paragraph
							}
							... on Post_Flexiblecontent_FlexibleContent_Testimonial {
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
							... on Post_Flexiblecontent_FlexibleContent_ContactInfo {
								fieldGroupName
								paragraph
								title
							}
							... on Post_Flexiblecontent_FlexibleContent_ContactForm {
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
							... on Post_Flexiblecontent_FlexibleContent_Cta {
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
							... on Post_Flexiblecontent_FlexibleContent_CtaTwo {
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
							... on Post_Flexiblecontent_FlexibleContent_ErrorPageContent {
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

		return {
			content: response?.data?.mainContent?.flexibleContent?.flexibleContent,
		};
	} catch (error) {
		return {
			redirect: {
				destination: loginRedirectURL || "/",
				statusCode: 307,
			},
		};
	}
};
