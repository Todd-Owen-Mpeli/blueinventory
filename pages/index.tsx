// Import
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import {getThemesOptionsContent} from "../functions/themesOptions";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "../functions/MenuLinks";

// Components
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Stats from "../components/Stats";
import Layout from "../components/Layout/Layout";
import JumboContent from "../components/JumboContent";
import Testimonial from "../components/Testimonial";

export default function HomePage({
	seo,
	content,
	footerMenuLinks,
	navbarMenuLinks,
	themesOptionsContent,
}: any) {
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
				pageTitle={`BlueInventory `}
				themesOptionsContent={themesOptionsContent}
				footerMenuLinks={footerMenuLinks?.footerMenuLinks}
				navbarMenuLinks={navbarMenuLinks?.navbarMenuLinks}
			>
				<Hero
					title={content?.heroSection?.title}
					subtitle={content?.heroSection?.subtitle}
					buttonLink={content?.heroSection?.buttonLink}
					buttonLinkTwo={content?.heroSection?.buttonLinkTwo}
					backgroundVideoUrl={content?.heroSection?.backgroundVideoUrl}
					backgroundImage={content?.heroSection?.backgroundImage?.sourceUrl}
				/>

				<Stats
					title={content?.stats?.title}
					column={content?.stats?.column}
					subtitle={content?.stats?.subtitle}
					paragraph={content?.stats?.paragraph}
					columnTwo={content?.stats?.columnTwo}
					bulletPoints={content?.stats?.bulletPoints}
				/>

				<JumboContent
					title={content?.howItWorks?.title}
					cardOne={content?.howItWorks?.cardOne}
					cardTwo={content?.howItWorks?.cardTwo}
					lastCard={content?.howItWorks?.lastCard}
					cardThree={content?.howItWorks?.cardThree}
					paragraph={content?.howItWorks?.paragraph}
					gridContent={content?.howItWorks?.gridContent}
				/>

				<Logos
					title={content?.trustedBrands?.title}
					logoGrid={content?.trustedBrands?.logos}
					paragraph={content?.trustedBrands?.paragraph}
				/>

				<Testimonial
					title={content?.testimonial?.title}
					content={content?.testimonial?.content}
					contentTwo={content?.testimonial?.contentTwo}
					paragraph={content?.testimonial?.paragraph}
				/>
			</Layout>
		</motion.div>
	);
}

export async function getStaticProps() {
	const getHomePageContent: any = gql`
		{
			mainContent: pages(where: {id: 49, status: PUBLISH}) {
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
						homePage {
							heroSection {
								title
								subtitle
								backgroundVideoUrl
								backgroundImage {
									sourceUrl
								}
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
							}
							stats {
								title
								subtitle
								paragraph
								bulletPoints {
									bulletPoint
								}
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
							}
							howItWorks {
								title
								paragraph
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
							testimonial {
								title
								paragraph
								content {
									title
									paragraph
									name
									image {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
								contentTwo {
									title
									paragraph
									name
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
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getHomePageContent,
	});

	const navbarMenuLinks: object = await getNavbarMenuLinks();
	const footerMenuLinks: object = await getFooterMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			navbarMenuLinks,
			footerMenuLinks,
			themesOptionsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			content: response.data?.mainContent?.edges[0]?.node?.homePage,
		},
		revalidate: 60,
	};
}
