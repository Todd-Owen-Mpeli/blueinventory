// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {IOperationalInsightsCard} from "@/types/components/public";
import {initial, fadeInUp, stagger} from "@/animations/animations";

const OperationalInsightsCard: FC<IOperationalInsightsCard> = ({
	uri,
	title,
	paragraph,
	featuredImage,
	getRandomColor,
}) => {
	/* Sanitize the WYSIWYG paragraph content */
	function createTrimmedParagraphMarkup(paragraphContent: string) {
		const sanitizedContent: string = DOMPurify.sanitize(paragraphContent);

		return {
			__html: `${sanitizedContent.substring(0, 350)}...`,
		};
	}

	return (
		<div className="w-full h-full px-4">
			<div
				className={`relative px-0 h-[300px] border-l-[5px] border-r-[5px] lg:border-r-[10px] border-t-[5px] border-b-0 border-${getRandomColor}`}
				style={{
					clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
				}}
			>
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
				initial={initial}
				viewport={{once: true}}
				whileInView={stagger}
				className="flex flex-col items-baseline justify-between px-4 py-10"
			>
				<Link href={uri ? `operational-insights${uri}` : `/`}>
					<motion.h2
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mb-2 text-xl font-semibold text-darkBlue"
					>
						{title}
					</motion.h2>
				</Link>

				<motion.div
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
				>
					<div
						className={
							paragraph
								? `block my-6  px-0 leading-normal text-darkGrey`
								: `hidden`
						}
						dangerouslySetInnerHTML={createTrimmedParagraphMarkup(paragraph)}
					/>
				</motion.div>
				<motion.div
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
				>
					<Link
						href={uri ? `operational-insights${uri}` : `/`}
						className="underline text-blue hover:text-goldPrime"
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
