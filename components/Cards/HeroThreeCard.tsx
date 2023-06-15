// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHeroThreeCard} from "@/components/types";
import {initial, fadeInUp} from "@/animations/animations";

const HeroThreeCard: FC<IHeroThreeCard> = ({link, image}) => {
	return (
		<motion.div
			className="my-4"
			initial={initial}
			whileInView={fadeInUp}
			viewport={{once: true}}
		>
			<Link
				href={link?.url ? link?.url : `/`}
				className="rounded-none sm:rounded-full"
			>
				<Image
					alt={image?.altText}
					src={image?.sourceUrl}
					width={image?.mediaDetails?.width}
					height={image?.mediaDetails?.height}
					className={
						image?.sourceUrl
							? `block w-full rounded-none lg:rounded-full sm:h-[450px] lg:h-[650px] xl:h-[750px] object-cover object-center`
							: `hidden`
					}
				/>
			</Link>
		</motion.div>
	);
};

export default HeroThreeCard;
