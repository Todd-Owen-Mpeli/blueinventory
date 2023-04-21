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
import CTA from "../components/CTA";
import Layout from "../components/Layout/Layout";
import ContactInfo from "@/components/ContactInfo";

const contact = ({
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
				<ContactInfo
					email={themesOptionsContent?.email}
					title={content?.contactInfo?.title}
					subtitle={content?.contactInfo?.subtitle}
					groupOne={content?.contactInfo?.groupOne}
					groupTwo={content?.contactInfo?.groupTwo}
					emailTwo={themesOptionsContent?.emailTwo}
					paragraph={content?.contactInfo?.paragraph}
					phoneNumber={themesOptionsContent?.phoneNumber}
					phoneNumberTwo={themesOptionsContent?.phoneNumberTwo}
				/>

				<CTA
					title={content?.cta?.title}
					content={content?.cta?.content}
					paragraph={content?.cta?.paragraph}
					buttonLink={content?.cta?.buttonLink}
					buttonLinkTwo={content?.cta?.buttonLinkTwo}
					backgroundImage={content?.cta?.backgroundImage?.sourceUrl}
				/>
			</Layout>
		</motion.div>
	);
};

export default contact;

export async function getStaticProps() {
	const geContactPageContent: any = gql`
		{
			title: pages(where: {id: 545}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 545, status: PUBLISH}) {
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
						contactPage {
							contactInfo {
								title
								subtitle
								paragraph
								groupOne {
									title
									subtitle
									address
									image {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
								groupTwo {
									title
									subtitle
									address
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
								buttonLinkTwo {
									url
									title
									target
								}
								content {
									title
									paragraph
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
		query: geContactPageContent,
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
			content: response?.data?.mainContent?.edges[0]?.node?.contactPage,
		},
		revalidate: 60,
	};
}
