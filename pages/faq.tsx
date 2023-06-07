// Imports
import Link from "next/link";
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import type {NextPage, GetStaticProps} from "next";
import {getThemesOptionsContent} from "../functions/GetAllThemesOptions";
import {fetchContentSliderOperationalInsightsPostsContent} from "@/functions/GetAllContentSliderPosts";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "../functions/GetAllMenuLinks";

// Components
import CTATwo from "../components/CTATwo";
import HeroTwo from "@/components/HeroTwo";
import Layout from "../components/Layout/Layout";
import ContentSlider from "@/components/ContentSlider";
import TitleParagraph from "../components/TitleParagraph";
import Paragraph from "@/components/Elements/Paragraph";
import FAQ from "@/components/FAQ";

interface IFaq {
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
		titleParagraph: {
			title: string;
			paragraph: string;
		};
		faq: {
			title: string;
			paragraph: string;
			qagrid: [
				{
					title: string;
					paragraph: string;
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
	contentSliderPostsContent: {
		content: [
			{
				uri: string;
				date: string;
				title: string;
				singleOperationalInsightPost: {
					heroSection: {
						backgroundVideoUrl: string;
						backgroundImageOrVideo: string;
						backgroundImage: {
							altText: string;
							sourceUrl: string;
							mediaDetails: {
								height: number;
								width: number;
							};
						};
					};
					titleParagraph: {
						title: string;
						paragraph: string;
					};
				};
			},
			{
				uri: string;
				date: string;
				title: string;
				singleOperationalInsightPost: {
					heroSection: {
						backgroundVideoUrl: string;
						backgroundImageOrVideo: string;
						backgroundImage: {
							altText: string;
							sourceUrl: string;
							mediaDetails: {
								height: number;
								width: number;
							};
						};
					};
					titleParagraph: {
						title: string;
						paragraph: string;
					};
				};
			},
			{
				uri: string;
				date: string;
				title: string;
				singleOperationalInsightPost: {
					heroSection: {
						backgroundVideoUrl: string;
						backgroundImageOrVideo: string;
						backgroundImage: {
							altText: string;
							sourceUrl: string;
							mediaDetails: {
								height: number;
								width: number;
							};
						};
					};
					titleParagraph: {
						title: string;
						paragraph: string;
					};
				};
			}
		];
	};
}

const faq: NextPage<IFaq> = ({
	seo,
	content,
	pageTitle,
	footerMenuLinks,
	navbarMenuLinks,
	industriesMenuLinks,
	themesOptionsContent,
	contentSliderPostsContent,
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

				<TitleParagraph
					title={content?.titleParagraph?.title}
					paragraph={content?.titleParagraph?.paragraph}
				/>

				<FAQ
					title={content?.faq?.title}
					qagrid={content?.faq?.qagrid}
					paragraph={content?.faq?.paragraph}
				/>

				<section
					className="pt-32 overflow-hidden bg-center bg-no-repeat bg-cover bg-darkBlue pb-36"
					style={{
						backgroundImage: `url("svg/backgroundSVG/stacked-waves-haikei-blue-darkblue.svg")`,
					}}
				>
					<div className="container px-4 mx-auto">
						<div className="md:max-w-3xl">
							<h2 className="text-6xl font-bold leading-none text-center text-white sm:text-left mb-9 md:text-8xl xl:text-10xl tracking-px-n">
								Inventory management, Take full control
							</h2>
							<Paragraph
								content={`Providing a broad-ranging service to item management, Often referred to as stock management. We specialize in non-Commerce inventory management. </br></br>
                                From tracking and controlling your business’ inventory as it is bought, maintained, stored, and sold. Ensuring you always have the right quantities of the right item in the right location at the right time.`}
								tailwindStyling="text-base font-medium text-white mb-36"
							/>
						</div>
						<div className="flex flex-wrap -m-3">
							<div className="w-full p-3 md:w-1/2">
								<div className="bg-white p-7 rounded-3xl">
									<div className="flex flex-wrap -m-4">
										<div className="w-auto p-4">
											<svg
												width="28"
												height="28"
												viewBox="0 0 28 28"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M4.66669 5.83329C4.66669 5.18896 5.18902 4.66663 5.83335 4.66663H22.1667C22.811 4.66663 23.3334 5.18896 23.3334 5.83329V8.16663C23.3334 8.81096 22.811 9.33329 22.1667 9.33329H5.83335C5.18902 9.33329 4.66669 8.81096 4.66669 8.16663V5.83329Z"
													stroke="#2563eb"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
												<path
													d="M4.66669 15.1666C4.66669 14.5223 5.18902 14 5.83335 14H12.8334C13.4777 14 14 14.5223 14 15.1666V22.1666C14 22.811 13.4777 23.3333 12.8334 23.3333H5.83335C5.18902 23.3333 4.66669 22.811 4.66669 22.1666V15.1666Z"
													stroke="#2563eb"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
												<path
													d="M18.6667 15.1666C18.6667 14.5223 19.189 14 19.8334 14H22.1667C22.811 14 23.3334 14.5223 23.3334 15.1666V22.1666C23.3334 22.811 22.811 23.3333 22.1667 23.3333H19.8334C19.189 23.3333 18.6667 22.811 18.6667 22.1666V15.1666Z"
													stroke="#2563eb"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
											</svg>
										</div>
										<div className="flex-1 p-4">
											<h3 className="mb-3 text-lg font-semibold">
												Inventory management definition
											</h3>
											<Paragraph
												content={`Inventory management is the practice of controlling the flow of goods and materials through a business, striking a balance between ensuring enough stock is available to fulfil customer orders, while minimising the costs of holding excess inventory.`}
												tailwindStyling="text-base font-medium text-black"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full p-3 md:w-1/2">
								<div className="bg-white p-7 rounded-3xl">
									<div className="flex flex-wrap -m-4">
										<div className="w-auto p-4">
											<svg
												width="28"
												height="28"
												viewBox="0 0 28 28"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M3.5 11.6667H24.5M8.16667 17.5H9.33333M14 17.5H15.1667M7 22.1667H21C22.933 22.1667 24.5 20.5997 24.5 18.6667V9.33337C24.5 7.40038 22.933 5.83337 21 5.83337H7C5.067 5.83337 3.5 7.40038 3.5 9.33337V18.6667C3.5 20.5997 5.067 22.1667 7 22.1667Z"
													stroke="#2563eb"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
											</svg>
										</div>
										<div className="flex-1 p-4">
											<h3 className="mb-3 text-lg font-semibold">
												How does it work in practice
											</h3>
											<Paragraph
												content={`Our Inventory management solution works by tracking products, components and ingredients across multiple industries. Ensure that stock is used as efficiently and effectively as possible.`}
												tailwindStyling="text-base font-medium text-black"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<ContentSlider
					content={contentSliderPostsContent?.content[0]}
					contentTwo={contentSliderPostsContent?.content[1]}
					contentThree={contentSliderPostsContent?.content[2]}
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

export default faq;

export const getStaticProps: GetStaticProps = async () => {
	const getFaqPageContent: any = gql`
		{
			title: pages(where: {id: 1770}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 1770, status: PUBLISH}) {
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
						faqPage {
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
							titleParagraph {
								title
								paragraph
							}
							faq {
								title
								paragraph
								qagrid {
									title
									paragraph
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
		query: getFaqPageContent,
	});

	const navbarMenuLinks: object = await getNavbarMenuLinks();
	const footerMenuLinks: object = await getFooterMenuLinks();
	const industriesMenuLinks: object = await getIndustriesMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();
	const contentSliderPostsContent: object =
		await fetchContentSliderOperationalInsightsPostsContent();

	return {
		props: {
			footerMenuLinks,
			navbarMenuLinks,
			industriesMenuLinks,
			themesOptionsContent,
			contentSliderPostsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			pageTitle: response?.data?.title?.edges[0]?.node?.title,
			content: response?.data?.mainContent?.edges[0]?.node?.faqPage,
		},
		revalidate: 60,
	};
};
