import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import ThreeContentGridCard from "./Cards/ThreeContentGridCard";
import styles from "../styles/components/ThreeContentGrid.module.scss";

interface IProps {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	gridContent: [
		{
			id: string;
			title: string;
			subtitle: string;
			paragraph: string;
			icon: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
}

const ThreeContentGrid: FunctionComponent<IProps> = ({
	title,
	paragraph,
	gridContent,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mb-11 text-center lg:text-left text-medium text-darkGrey font-[400] md:max-w-2xl";
		} else {
			contentStyling =
				"block mb-11 text-center lg:text-left text-medium text-darkGrey font-[400] md:max-w-2xl";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.threeContentGrid}>
			<div className="container mx-auto">
				<div className={styles.content}>
					<h2 className="mb-5 text-center lg:text-left tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
						{title}
					</h2>
					<div
						className={isParagraphContent(paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
					/>
					<div className="flex flex-wrap">
						{gridContent.map((keys) => (
							<ThreeContentGridCard
								key={keys.id}
								icon={keys?.icon}
								title={keys?.title}
								subtitle={keys?.subtitle}
								paragraph={keys?.paragraph}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ThreeContentGrid;
