// Import
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import {getThemesOptionsContent} from "../functions/themesOptions";
import {getAllOperationalInsightsContent} from "../functions/OperationalInsightsPostsSlugs";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "../functions/MenuLinks";

// Components
import CTATwo from "../components/CTATwo";
import HeroTwo from "../components/HeroTwo";
import Layout from "../components/Layout/Layout";
import OperationalInsights from "../components/OperationalInsights";

const operationalInsights = ({
	seo,
	content,
	pageTitle,
	footerMenuLinks,
	navbarMenuLinks,
	operationalInsights,
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

				{/* Renders all operational insights blog posts */}
				<OperationalInsights operationalInsights={operationalInsights} />

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

export default operationalInsights;

export async function getStaticProps() {
	const geOperationalInsightsPageContent: any = gql`
		{
			title: pages(where: {id: 723}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 723, status: PUBLISH}) {
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
						operationalInsightsPage {
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
		query: geOperationalInsightsPageContent,
	});

	const navbarMenuLinks: object = await getNavbarMenuLinks();
	const footerMenuLinks: object = await getFooterMenuLinks();
	const industriesMenuLinks: object = await getIndustriesMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();
	const operationalInsights: object = await getAllOperationalInsightsContent();

	return {
		props: {
			footerMenuLinks,
			navbarMenuLinks,
			industriesMenuLinks,
			operationalInsights,
			themesOptionsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			pageTitle: response?.data?.title?.edges[0]?.node?.title,
			content:
				response?.data?.mainContent?.edges[0]?.node?.operationalInsightsPage,
		},
		revalidate: 60,
	};
}
