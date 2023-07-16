// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {IParagraphProps} from "@/types/components/public";
import {initial, fadeInUp} from "@/animations/animations";

const Paragraph: FC<IParagraphProps> = ({content, tailwindStyling}) => {
	/* Sanitize the WYSIWYG paragraph content */
	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<>
			<motion.div
				initial={initial}
				viewport={{once: true}}
				whileInView={fadeInUp}
				className={content ? `${tailwindStyling}` : `hidden`}
				dangerouslySetInnerHTML={createParagraphMarkup(content)}
			/>
		</>
	);
};

export default Paragraph;
