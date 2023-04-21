// Import
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import {getThemesOptionsContent} from "../functions/themesOptions";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "../functions/MenuLinks";

// Components
import Logos from "../components/Logos";
import CTATwo from "../components/CTATwo";
import HeroTwo from "../components/HeroTwo";
import Layout from "../components/Layout/Layout";
import JumboContentTwo from "@/components/JumboContentTwo";
import TitleThreeContentGrid from "../components/TitleThreeContentGrid";

const features = ({
	seo,
	content,
	pageTitle,
	footerMenuLinks,
	navbarMenuLinks,
	industriesMenuLinks,
	themesOptionsContent,
}: any) => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			<Layout
				seo={seo}
				pageTitle={pageTitle}
				themesOptionsContent={themesOptionsContent}
				footerMenuLinks={footerMenuLinks?.footerMenuLinks}
				navbarMenuLinks={navbarMenuLinks?.navbarMenuLinks}
				industriesMenuLinks={industriesMenuLinks?.industriesMenuLinks}
			>
				<HeroTwo
					title={content?.heroSection?.title}
					paragraph={content?.heroSection?.paragraph}
					backgroundImage={content?.heroSection?.backgroundImage}
					backgroundVideoUrl={content?.heroSection?.backgroundVideoUrl}
					backgroundImageOrVideo={content?.heroSection?.backgroundImageOrVideo}
				/>

				<TitleThreeContentGrid
					title={content?.introContent?.title}
					contentGrid={content?.introContent?.contentGrid}
				/>

				<JumboContentTwo
					cardOne={content?.featuresGrid?.cardOne}
					cardTwo={content?.featuresGrid?.cardTwo}
					lastCard={content?.featuresGrid?.lastCard}
					gridContent={content?.featuresGrid?.gridContent}
				/>

				<Logos
					title={content?.trustedBrands?.title}
					logoGrid={content?.trustedBrands?.logos}
					paragraph={content?.trustedBrands?.paragraph}
				/>

				<CTATwo
					title={content?.cta?.title}
					paragraph={content?.cta?.paragraph}
					buttonLink={content?.cta?.buttonLink}
					backgroundImage={content?.cta?.backgroundImage?.sourceUrl}
				/>
			</Layout>
		</motion.div>
	);
};

export default features;

export async function getStaticProps() {
	const geFeaturesPageContent: any = gql`
		{
			title: pages(where: {id: 121}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 121, status: PUBLISH}) {
				edges {
					node {
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
						featuresPage {
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
							introContent {
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
							featuresGrid {
								cardOne {
									title
									subtitle
									paragraph
								}
								cardTwo {
									backgroundImage {
										sourceUrl
									}
								}
								lastCard {
									backgroundImage {
										sourceUrl
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
							trustedBrands {
								title
								paragraph
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
			}
		}
	`;

	const response: any = await client.query({
		query: geFeaturesPageContent,
	});

	const navbarMenuLinks: object = await getNavbarMenuLinks();
	const footerMenuLinks: object = await getFooterMenuLinks();
	const industriesMenuLinks: object = await getIndustriesMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			navbarMenuLinks,
			footerMenuLinks,
			industriesMenuLinks,
			themesOptionsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			pageTitle: response?.data?.title?.edges[0]?.node?.title,
			content: response?.data?.mainContent?.edges[0]?.node?.featuresPage,
		},
		revalidate: 60,
	};
}
