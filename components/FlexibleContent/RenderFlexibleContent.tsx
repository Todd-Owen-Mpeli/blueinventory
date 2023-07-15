// Import
import {FC} from "react";
import {useContentContext} from "@/context/context";

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

const RenderFlexibleContent: FC = () => {
	const content = useContentContext();

	const Flexiblecontent = content.postTypeFlexiblecontent;
	return (
		<>
			{content.content?.length > 0 ? (
				content.content.map((item: any, keys: any) => (
					<div key={keys}>
						{item?.fieldGroupName === `${Flexiblecontent}_HeroSection` ? (
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
						) : item?.fieldGroupName === `${Flexiblecontent}_HeroSectionTwo` ? (
							<>
								<HeroTwo
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									backgroundImageOrVideo={item?.backgroundImageOrVideo}
								/>
							</>
						) : item?.fieldGroupName === `${Flexiblecontent}_TitleParagraph` ? (
							<>
								<TitleParagraph
									title={item?.title}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${Flexiblecontent}_IntroContent` ? (
							<>
								<TitleThreeContentGrid
									icon={item?.icon}
									title={item?.title}
									contentGrid={item?.contentGrid}
								/>
							</>
						) : item?.fieldGroupName === `${Flexiblecontent}_FeaturesGrid` ? (
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
						  `${Flexiblecontent}_FeaturesGridTwo` ? (
							<>
								<JumboContentTwo
									cardOne={item?.cardOne}
									cardTwo={item?.cardTwo}
									lastCard={item?.lastCard}
									gridContent={item?.gridContent}
								/>
							</>
						) : item?.fieldGroupName === `${Flexiblecontent}_Pricing` ? (
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
						) : item?.fieldGroupName === `${Flexiblecontent}_ContentStats` ? (
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
						  `${Flexiblecontent}_ContentImageGrid` ? (
							<>
								<ContentBackgroundImage gridContent={item?.gridContent} />
							</>
						) : item?.fieldGroupName ===
						  `${Flexiblecontent}_ContentSliderAuto` ? (
							<>
								<ContentSlider />
							</>
						) : item?.fieldGroupName === `${Flexiblecontent}_TrustedBrands` ? (
							<>
								<Logos
									title={item?.title}
									logoGrid={item?.logos}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${Flexiblecontent}_ImageGrid` ? (
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
						) : item?.fieldGroupName === `${Flexiblecontent}_Sustainability` ? (
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
						) : item?.fieldGroupName === `${Flexiblecontent}_Faq` ? (
							<>
								<FAQ
									title={item?.title}
									qagrid={item?.qagrid}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${Flexiblecontent}_OperationalInsights` ? (
							<>
								<OperationalInsights
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${Flexiblecontent}_Testimonial` ? (
							<>
								<Testimonial
									title={item?.title}
									paragraph={item?.paragraph}
									contentGrid={item?.contentGrid}
								/>
							</>
						) : item?.fieldGroupName === `${Flexiblecontent}_ContactInfo` ? (
							<>
								<ContactInfo title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName === `${Flexiblecontent}_ContactForm` ? (
							<>
								<ContactForm
									title={item?.title}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${Flexiblecontent}_Cta` ? (
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
						) : item?.fieldGroupName === `${Flexiblecontent}_CtaTwo` ? (
							<>
								<CTATwo
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${Flexiblecontent}_ErrorPageContent` ? (
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
