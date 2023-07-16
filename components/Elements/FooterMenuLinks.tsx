// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IFooterMenuLinks} from "@/types/components/public";
import {initial, fadeInUp} from "@/animations/animations";

const FooterMenuLinks: FC<IFooterMenuLinks> = ({
	url,
	label,
	tailwindStyling,
}) => {
	return (
		<motion.li
			className="px-0"
			initial={initial}
			whileInView={fadeInUp}
			viewport={{once: true}}
		>
			<Link className={tailwindStyling} href={url}>
				{label}
			</Link>
		</motion.li>
	);
};

export default FooterMenuLinks;
