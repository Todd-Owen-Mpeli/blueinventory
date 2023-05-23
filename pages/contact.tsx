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
import HeroTwo from "../components/HeroTwo";
import Layout from "../components/Layout/Layout";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

interface IContact {
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
		contactInfo: {
			title: string;
			subtitle: string;
			paragraph: string;
			groupOne: {
				title: string;
				subtitle: string;
				address: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: string;
						width: string;
					};
				};
			};
			groupTwo: {
				title: string;
				subtitle: string;
				address: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: string;
						width: string;
					};
				};
			};
		};
		contactForm: {
			title: string;
			backgroundImage: {
				sourceUrl: string;
			};
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
		address: string;
		email: string;
		emailTwo: string;
		phoneNumber: string;
		phoneNumberTwo: string;
		twitterLink: string;
		facebookLink: string;
		linkedinLink: string;
		copyRightText: string;
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

const contact: NextPage<IContact> = ({
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

				<ContactInfo
					email={themesOptionsContent?.email}
					title={content?.contactInfo?.title}
					address={themesOptionsContent?.address}
					emailTwo={themesOptionsContent?.emailTwo}
					paragraph={content?.contactInfo?.paragraph}
					phoneNumber={themesOptionsContent?.phoneNumber}
					phoneNumberTwo={themesOptionsContent?.phoneNumberTwo}
				/>

				<ContactForm
					title={content?.contactForm?.title}
					backgroundImage={content?.contactForm?.backgroundImage?.sourceUrl}
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

export const getStaticProps: GetStaticProps = async () => {
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
							contactForm {
								title
								backgroundImage {
									sourceUrl
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
};
