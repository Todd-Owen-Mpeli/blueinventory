// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../../animations/animations";

interface ParagraphProps {
	content: string;
	tailwindStyling: string;
}

const Paragraph: FC<ParagraphProps> = ({content, tailwindStyling}) => {
	/* Sanitize the WYSIWYG paragraph content */
	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<motion.div
			variants={fadeIn}
			className={content ? `${tailwindStyling}` : `hidden`}
			dangerouslySetInnerHTML={createParagraphMarkup(content)}
		/>
	);
};

export default Paragraph;
