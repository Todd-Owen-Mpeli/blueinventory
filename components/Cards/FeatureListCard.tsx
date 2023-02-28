import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import styles from "../../styles/components/CardGrid.module.scss";

interface IProps {
	title: string;
	paragraph: string;
}

const FeatureListCard: FunctionComponent<IProps> = ({title, paragraph}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] text-center lg:text-left text-white text-medium font-[400]";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] text-center lg:text-left text-white text-medium font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className={styles.item}>
			<h3 className="mb-4 text-xl font-bold text-white lg:text-3xl font-heading">
				{title}
			</h3>
			<div
				className={isParagraphContent(paragraph)}
				dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
			/>
		</div>
	);
};

export default FeatureListCard;
