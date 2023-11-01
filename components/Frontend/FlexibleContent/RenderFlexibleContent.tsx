// Import
import {FC} from "react";
import {useContentContext} from "@/context/context";

// Components
import SignUpCta from "../SignUpCta";
import CTA from "@/components/Frontend/CTA";
import FAQ from "@/components/Frontend/FAQ";
import Hero from "@/components/Frontend/Hero";
import Stats from "@/components/Frontend/Stats";
import Logos from "@/components/Frontend/Logos";
import CTATwo from "@/components/Frontend/CTATwo";
import Pricing from "@/components/Frontend/Pricing";
import HeroTwo from "@/components/Frontend/HeroTwo";
import GoogleIntegration from "../GoogleIntegration";
import ImageGrid from "@/components/Frontend/ImageGrid";
import Testimonial from "@/components/Frontend/Testimonial";
import ContactInfo from "@/components/Frontend/ContactInfo";
import ContactForm from "@/components/Frontend/ContactForm";
import JumboContent from "@/components/Frontend/JumboContent";
import ContentSlider from "@/components/Frontend/ContentSlider";
import ErrorPage from "@/components/Frontend/Elements/ErrorPage";
import TitleParagraph from "@/components/Frontend/TitleParagraph";
import Sustainability from "@/components/Frontend/Sustainability";
import JumboContentTwo from "@/components/Frontend/JumboContentTwo";
import OperationalInsights from "@/components/Frontend/OperationalInsights";
import TitleThreeContentGrid from "@/components/Frontend/TitleThreeContentGrid";
import ContentBackgroundImage from "@/components/Frontend/ContentBackgroundImage";

const RenderFlexibleContent: FC = () => {
	const context = useContentContext();

	const FlexibleContent = context.postTypeFlexibleContent;
	return (
		<>
			{context.content?.length > 0 ? (
				context.content.map((item: any, keys: any) => (
					<section key={keys}>
						{item?.fieldGroupName === `${FlexibleContent}_HeroSection` ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_HeroSectionTwo` ? (
							<>
								<HeroTwo
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									backgroundImageOrVideo={item?.backgroundImageOrVideo}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TitleParagraph` ? (
							<>
								<TitleParagraph
									title={item?.title}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_IntroContent` ? (
							<>
								<TitleThreeContentGrid
									icon={item?.icon}
									title={item?.title}
									contentGrid={item?.contentGrid}
								/>
								{/* <GoogleIntegration /> */}
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_FeaturesGrid` ? (
							<>
								<JumboContent
									icon={item?.icon}
									title={item?.title}
									cardOne={item?.cardOne}
									cardTwo={item?.cardTwo}
									lastCard={item?.lastCard}
									cardThree={item?.cardThree}
									paragraph={item?.paragraph}
									rotateIcon={item?.rotateIcon}
									gridContent={item?.gridContent}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_FeaturesGridTwo` ? (
							<>
								<JumboContentTwo
									cardOne={item?.cardOne}
									cardTwo={item?.cardTwo}
									lastCard={item?.lastCard}
									gridContent={item?.gridContent}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Pricing` ? (
							<>
								<Pricing
									card={item?.card}
									title={item?.title}
									italic={item?.italic}
									pointOne={item?.pointOne}
									pointTwo={item?.pointTwo}
									paragraph={item?.paragraph}
									paymentProviders={item?.paymentProviders}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContentStats` ? (
							<>
								<Stats
									title={item?.title}
									column={item?.column}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									columnTwo={item?.columnTwo}
									paragraphTwo={item?.paragraphTwo}
									bulletPoints={item?.bulletPoints}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ContentImageGrid` ? (
							<>
								<ContentBackgroundImage gridContent={item?.gridContent} />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ContentSliderAuto` ? (
							<>
								<ContentSlider />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TrustedBrands` ? (
							<>
								<Logos
									title={item?.title}
									logoGrid={item?.logos}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ImageGrid` ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_Sustainability` ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_Faq` ? (
							<>
								<FAQ
									icon={item?.icon}
									title={item?.title}
									qagrid={item?.qagrid}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_OperationalInsights` ? (
							<>
								<OperationalInsights
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Testimonial` ? (
							<>
								<Testimonial
									title={item?.title}
									paragraph={item?.paragraph}
									contentGrid={item?.contentGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContactInfo` ? (
							<>
								<ContactInfo title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContactForm` ? (
							<>
								<ContactForm
									title={item?.title}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Cta` ? (
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
						) : item?.fieldGroupName === `${FlexibleContent}_CtaTwo` ? (
							<>
								<CTATwo
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_SignUpCta` ? (
							<>
								<SignUpCta
									title={item?.title}
									titleTwo={item?.titleTwo}
									paragraph={item?.paragraph}
									bulletPoints={item?.bulletPoints}
									backgroundImage={item?.backgroundImage}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ErrorPageContent` ? (
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
					</section>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
