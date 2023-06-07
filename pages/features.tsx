// Imports
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import type {NextPage, GetStaticProps} from "next";
import {getThemesOptionsContent} from "../functions/GetAllThemesOptions";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "../functions/GetAllMenuLinks";

// Components
import Logos from "../components/Logos";
import CTATwo from "../components/CTATwo";
import HeroTwo from "../components/HeroTwo";
import Layout from "../components/Layout/Layout";
import JumboContentTwo from "@/components/JumboContentTwo";
import TitleThreeContentGrid from "../components/TitleThreeContentGrid";
import ContentBackgroundImage from "../components/ContentBackgroundImage";

interface IFeatures {
	seo: {
		canonical: string;
		cornerstone: Boolean;
		focuskw: string;
		fullHead: string;
		metaDesc: string;
		metaKeywords: string;
		metaRobotsNofollow: string;
		metaRobotsNoindex: string;
		opengraphAuthor: string;
		opengraphDescription: string;
		opengraphImage: {
			mediaItemUrl: string;
		};
		opengraphModifiedTime: string;
		opengraphPublishedTime: string;
		opengraphPublisher: string;
		opengraphSiteName: string;
		opengraphTitle: string;
		opengraphType: string;
		opengraphUrl: string;
		readingTime: number;
		title: string;
		twitterDescription: string;
		twitterTitle: string;
		twitterImage: {
			mediaItemUrl: string;
		};
	};
	pageTitle: string;
	content: {
		heroSection: {
			title: string;
			paragraph: string;
			backgroundVideoUrl: string;
			backgroundImageOrVideo: string;
			backgroundImage: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		};
		introContent: {
			title: string;
			contentGrid: [
				{
					card: {
						id: string;
						title: string;
						paragraph: string;
						buttonLink: {
							url: string;
							title: string;
							target: string;
						};
					};
				}
			];
		};
		featuresGrid: {
			cardOne: {
				title: string;
				subtitle: string;
				paragraph: string;
			};
			cardTwo: {
				backgroundImage: {
					sourceUrl: string;
				};
			};
			gridContent: [
				{
					card: {
						id: string;
						title: string;
						subtitle: string;
						paragraph: string;
					};
				}
			];
			lastCard: {
				backgroundImage: {
					sourceUrl: string;
				};
			};
		};
		gridContent: [
			{
				card: {
					id: string;
					title: string;
					paragraph: string;
					contentLocation: string;
					backgroundImage: {
						sourceUrl: string;
					};
				};
			}
		];
		trustedBrands: {
			title: string;
			paragraph: string;
			logos: [
				{
					id: string;
					image: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							height: number;
							width: number;
						};
					};
				}
			];
		};
		cta: {
			title: string;
			paragraph: string;
			backgroundImage: {
				sourceUrl: string;
			};
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			buttonLinkTwo: {
				url: string;
				title: string;
				target: string;
			};
			content: {
				title: string;
				paragraph: string;
				backgroundImage: {
					sourceUrl: string;
				};
			};
		};
	};
	footerMenuLinks: {
		footerMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	navbarMenuLinks: {
		navbarMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	industriesMenuLinks: {
		industriesMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	themesOptionsContent: {
		email: string;
		emailTwo: string;
		phoneNumber: string;
		phoneNumberTwo: string;
		twitterLink: string;
		facebookLink: string;
		linkedinLink: string;
		copyrightText: string;
		errorPageContent: {
			title: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			buttonLinkTwo: {
				url: string;
				title: string;
				target: string;
			};
			backgroundImage: {
				sourceUrl: string;
			};
		};
	};
}

const features: NextPage<IFeatures> = ({
	seo,
	content,
	pageTitle,
	footerMenuLinks,
	navbarMenuLinks,
	industriesMenuLinks,
	themesOptionsContent,
}) => {
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

				<ContentBackgroundImage gridContent={content?.gridContent} />

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

export const getStaticProps: GetStaticProps = async () => {
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
};
