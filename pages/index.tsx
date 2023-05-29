// Imports
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import type {NextPage, GetStaticProps} from "next";
import {getThemesOptionsContent} from "../functions/themesOptions";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "../functions/MenuLinks";

// Components
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Stats from "../components/Stats";
import Layout from "../components/Layout/Layout";
import Testimonial from "../components/Testimonial";
import JumboContent from "../components/JumboContent";
import HeroThree from "@/components/HeroThree";

interface IHomePage {
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
	content: {
		heroSection: {
			title: string;
			subtitle: string;
			backgroundVideoUrl: string;
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
		heroThree: {
			title: string;
			paragraph: string;
			imageGrid: [
				{
					card: {
						link: {
							url: string;
							title: string;
							target: string;
						};
						image: {
							altText: string;
							sourceUrl: string;
							mediaDetails: {
								height: number;
								width: number;
							};
						};
					};
				}
			];
		};
		stats: {
			title: string;
			subtitle: string;
			paragraph: string;
			bulletPoints: [
				{
					id: string;
					bulletPoint: string;
				}
			];
			column: {
				title: string;
				values: string;
				percentage: string;
			};
			columnTwo: {
				title: string;
				values: string;
				percentage: string;
			};
		};
		howItWorks: {
			title: string;
			paragraph: string;
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
			cardThree: {
				foreground: {
					title: string;
					subtitle: string;
					paragraph: string;
				};
				background: {
					title: string;
					subtitle: string;
					paragraph: string;
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
		testimonial: {
			title: string;
			paragraph: string;
			contentGrid: [
				{
					card: {
						id: string;
						name: string;
						position: string;
						paragraph: string;
						image: {
							altText: string;
							sourceUrl: string;
							mediaDetails: {
								height: number;
								width: number;
							};
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

const HomePage: NextPage<IHomePage> = ({
	seo,
	content,
	footerMenuLinks,
	navbarMenuLinks,
	industriesMenuLinks,
	themesOptionsContent,
}) => (
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
			industriesMenuLinks={industriesMenuLinks?.industriesMenuLinks}
		>
			<Hero
				title={content?.heroSection?.title}
				subtitle={content?.heroSection?.subtitle}
				buttonLink={content?.heroSection?.buttonLink}
				buttonLinkTwo={content?.heroSection?.buttonLinkTwo}
				backgroundVideoUrl={content?.heroSection?.backgroundVideoUrl}
				backgroundImage={content?.heroSection?.backgroundImage?.sourceUrl}
			/>

			<HeroThree
				title={content?.heroThree?.title}
				paragraph={content?.heroThree?.paragraph}
				imageGrid={content?.heroThree?.imageGrid}
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
				paragraph={content?.testimonial?.paragraph}
				contentGrid={content?.testimonial?.contentGrid}
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

export const getStaticProps: GetStaticProps = async () => {
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
							heroThree {
								title
								paragraph
								imageGrid {
									card {
										link {
											url
											title
											target
										}
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
								contentGrid {
									card {
										name
										paragraph
										position
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
		query: getHomePageContent,
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
			content: response.data?.mainContent?.edges[0]?.node?.homePage,
		},
		revalidate: 60,
	};
};

export default HomePage;
