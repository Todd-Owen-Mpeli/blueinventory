// Import
import {FC} from "react";

// Components
import CTA from "../CTA";
import FAQ from "../FAQ";
import Hero from "../Hero";
import Stats from "../Stats";
import Logos from "../Logos";
import CTATwo from "../CTATwo";
import Pricing from "../Pricing";
import ImageGrid from "../ImageGrid";
import Testimonial from "../Testimonial";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";
import HeroTwo from "@/components/HeroTwo";
import JumboContent from "../JumboContent";
import ContentSlider from "../ContentSlider";
import ErrorPage from "../Elements/ErrorPage";
import TitleParagraph from "../TitleParagraph";
import Sustainability from "../Sustainability";
import JumboContentTwo from "../JumboContentTwo";
import OperationalInsights from "../OperationalInsights";
import TitleThreeContentGrid from "../TitleThreeContentGrid";
import ContentBackgroundImage from "../ContentBackgroundImage";

interface IFlexibleContent {
	content: any;
	stripePremiumPlan: {
		name: string;
		description: string;
		price: number;
		paymentRecurringInterval: string;
	};
	stripeStandardPlan: {
		name: string;
		description: string;
		price: number;
		paymentRecurringInterval: string;
	};
	themesOptionsContent: {
		email: string;
		address: string;
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
	operationalInsights: [
		{
			node: {
				id: string;
				uri: string;
				title: string;
				singleOperationalInsightPost: {
					titleParagraph: {
						paragraph: string;
					};
				};
				featuredImage: {
					node: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							width: number;
							height: number;
						};
					};
				};
			};
		}
	];
	contentSliderPostsContent: {
		content: [
			{
				uri: string;
				date: string;
				title: string;
				template: {
					flexibleContent: {
						flexibleContent: [
							{
								fieldGroupName: string;
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
							},
							{
								fieldGroupName: string;
								paragraph: string;
								title: string;
							}
						];
					};
				};
			},
			{
				uri: string;
				date: string;
				title: string;
				template: {
					flexibleContent: {
						flexibleContent: [
							{
								fieldGroupName: string;
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
							},
							{
								fieldGroupName: string;
								paragraph: string;
								title: string;
							}
						];
					};
				};
			},
			{
				uri: string;
				date: string;
				title: string;
				template: {
					flexibleContent: {
						flexibleContent: [
							{
								fieldGroupName: string;
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
							},
							{
								fieldGroupName: string;
								paragraph: string;
								title: string;
							}
						];
					};
				};
			}
		];
	};
}
const RenderFlexibleContent: FC<IFlexibleContent> = ({
	content,
	stripePremiumPlan,
	stripeStandardPlan,
	operationalInsights,
	themesOptionsContent,
	contentSliderPostsContent,
}) => {
	const FlexibleContentComponent =
		"DefaultTemplate_Flexiblecontent_FlexibleContent";
	return (
		<>
			{content?.length > 0 ? (
				content.map((item: any, keys: any) => (
					<div key={keys}>
						{item?.fieldGroupName ===
						`${FlexibleContentComponent}_HeroSection` ? (
							<>
								<Hero
									title={item?.title}
									subtitle={item?.subtitle}
									buttonLink={item?.buttonLink}
									buttonLinkTwo={item?.buttonLinkTwo}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_HeroSectionTwo` ? (
							<>
								<HeroTwo
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									backgroundImageOrVideo={item?.backgroundImageOrVideo}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_TitleParagraph` ? (
							<>
								<TitleParagraph
									title={item?.title}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_IntroContent` ? (
							<>
								<TitleThreeContentGrid
									title={item?.title}
									contentGrid={item?.contentGrid}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_FeaturesGrid` ? (
							<>
								<JumboContent
									title={item?.title}
									cardOne={item?.cardOne}
									cardTwo={item?.cardTwo}
									lastCard={item?.lastCard}
									cardThree={item?.cardThree}
									paragraph={item?.paragraph}
									gridContent={item?.gridContent}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_FeaturesGridTwo` ? (
							<>
								<JumboContentTwo
									cardOne={item?.cardOne}
									cardTwo={item?.cardTwo}
									lastCard={item?.lastCard}
									gridContent={item?.gridContent}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_Pricing` ? (
							<>
								<Pricing
									card={item?.card}
									title={item?.title}
									italic={item?.italic}
									pointOne={item?.pointOne}
									pointTwo={item?.pointTwo}
									paragraph={item?.paragraph}
									stripePremiumPlan={stripePremiumPlan}
									stripeStandardPlan={stripeStandardPlan}
									paymentProviders={item?.paymentProviders}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContentStats` ? (
							<>
								<Stats
									title={item?.title}
									column={item?.column}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									columnTwo={item?.columnTwo}
									bulletPoints={item?.bulletPoints}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContentImageGrid` ? (
							<>
								<ContentBackgroundImage gridContent={content?.gridContent} />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContentSliderAuto` ? (
							<>
								<ContentSlider
									content={contentSliderPostsContent?.content[0]}
									contentTwo={contentSliderPostsContent?.content[1]}
									contentThree={contentSliderPostsContent?.content[2]}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_TrustedBrands` ? (
							<>
								<Logos
									title={item?.title}
									logoGrid={item?.logos}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ImageGrid` ? (
							<>
								<ImageGrid
									image={item?.image}
									imageTwo={item?.imageTwo}
									imageThree={item?.imageThree}
									imageFour={item?.imageFour}
									imageFive={item?.imageFive}
									imageSix={item?.imageSix}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_Sustainability` ? (
							<>
								<Sustainability
									image={item?.image}
									title={item?.title}
									subtitle={item?.subtitle}
									imageText={item?.imageText}
									paragraph={item?.paragraph}
									percentage={item?.percentage}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContentComponent}_Faq` ? (
							<>
								<FAQ
									title={item?.title}
									qagrid={item?.qagrid}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_OperationalInsights` ? (
							<>
								<OperationalInsights
									operationalInsights={operationalInsights}
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_Testimonial` ? (
							<>
								<Testimonial
									title={item?.title}
									paragraph={item?.paragraph}
									contentGrid={item?.contentGrid}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContactInfo` ? (
							<>
								<ContactInfo
									title={item?.title}
									paragraph={item?.paragraph}
									email={themesOptionsContent?.email}
									address={themesOptionsContent?.address}
									emailTwo={themesOptionsContent?.emailTwo}
									phoneNumber={themesOptionsContent?.phoneNumber}
									phoneNumberTwo={themesOptionsContent?.phoneNumberTwo}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContactForm` ? (
							<>
								<ContactForm
									title={item?.title}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContentComponent}_Cta` ? (
							<>
								<CTA
									title={item?.title}
									content={item?.content}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									buttonLinkTwo={item?.buttonLinkTwo}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_CtaTwo` ? (
							<>
								<CTATwo
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ErrorPageContent` ? (
							<>
								<ErrorPage
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									buttonLinkTwo={item?.buttonLinkTwo}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : (
							<></>
						)}
					</div>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
