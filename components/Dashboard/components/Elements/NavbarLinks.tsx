// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {initialTwo, fadeIn} from "@/animations/animations";

// Components
import {INavbarLinks} from "@/types/Dashboard/components/elements/NavbarLinks";

const NavbarLinks: FC<INavbarLinks> = ({url, icon, label, tailwindStyling}) => {
	return (
		<>
			<Link className={tailwindStyling} href={url}>
				<motion.span
					initial={initialTwo}
					whileInView={fadeIn}
					className="inline-block mr-3"
				>
					<Image
						alt={icon?.altText}
						src={icon?.sourceUrl}
						width={icon?.mediaDetails?.width}
						height={icon?.mediaDetails?.height}
						className={
							icon?.sourceUrl
								? `block w-5 h-5 object-contain object-center`
								: `hidden`
						}
					/>
				</motion.span>
				<motion.span
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
				>
					{label}
				</motion.span>
			</Link>
		</>
	);
};

export default NavbarLinks;
