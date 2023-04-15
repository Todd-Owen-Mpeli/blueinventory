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
} from "../functions/MenuLinks";

// Components
import Layout from "../components/Layout/Layout";
import OperationalInsights from "../components/OperationalInsights";

const operationalInsights = ({
	seo,
	content,
	operationalInsights,
	pageTitle,
	footerMenuLinks,
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
			>
				{/* Renders all operational insights blog posts */}
				<OperationalInsights operationalInsights={operationalInsights} />
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
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: geOperationalInsightsPageContent,
	});

	const footerMenuLinks: object = await getFooterMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();
	const operationalInsights: object = await getAllOperationalInsightsContent();

	return {
		props: {
			footerMenuLinks,
			operationalInsights,
			themesOptionsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			pageTitle: response?.data?.title?.edges[0]?.node?.title,
			// content: response?.data?.mainContent?.edges[0]?.node?.operationalInsightsPage,
		},
		revalidate: 60,
	};
}
