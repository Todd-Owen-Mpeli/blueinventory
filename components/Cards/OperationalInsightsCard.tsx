// Import
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, stagger} from "../../animations/animations";

interface IProps {
	uri: string;
	date: string;
	title: string;
	paragraph: string;
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
}

const OperationalInsightsCard: FC<IProps> = ({
	uri,
	date,
	title,
	paragraph,
	featuredImage,
}) => {
	/* Sanitize the WYSIWYG paragraph content */
	function createTrimmedParagraphMarkup(paragraphContent: string) {
		const sanitizedContent: string = DOMPurify.sanitize(paragraphContent);

		return {
			__html: `${sanitizedContent.substring(0, 150)}...`,
		};
	}

	return (
		<div className="w-full h-full">
			<div className="relative px-4 lg:px-0 h-[300px]">
				<Link href={uri ? `operational-insights${uri}` : `/`}>
					<Image
						alt={featuredImage?.node?.altText}
						src={featuredImage?.node?.sourceUrl}
						width={featuredImage?.node?.mediaDetails?.width}
						height={featuredImage?.node?.mediaDetails?.height}
						className="object-cover object-center w-full h-full"
					/>
				</Link>
			</div>
			<motion.div
				variants={stagger}
				className="flex flex-col items-baseline justify-between px-4 py-10"
			>
				<Link href={uri ? `operational-insights${uri}` : `/`}>
					<motion.h2
						variants={fadeInUp}
						className="mb-2 text-xl font-semibold text-black font-heading"
					>
						{title}
					</motion.h2>
				</Link>

				<span className="mt-2 font-semibold text-goldPrimeDark text-tiny">
					{date}
				</span>

				<motion.div variants={fadeInUp}>
					<div
						className={
							paragraph
								? `block my-6  px-0 leading-normal text-darkGrey`
								: `hidden`
						}
						dangerouslySetInnerHTML={createTrimmedParagraphMarkup(paragraph)}
					/>
				</motion.div>
				<motion.div variants={fadeInUp}>
					<Link
						href={uri ? `operational-insights${uri}` : `/`}
						className="text-blue hover:text-goldPrime hover:underline"
					>
						<span className="text-sm font-bold uppercase transition duration-200 ">
							Read more
						</span>
						<span className="inline-block ml-2">
							<svg
								className="w-3 h-3 text-blue-500"
								viewBox="0 0 8 12"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M1.875 0L0 1.875L4.125 6L0 10.125L1.875 12L7.875 6L1.875 0Z"></path>
							</svg>
						</span>
					</Link>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default OperationalInsightsCard;
