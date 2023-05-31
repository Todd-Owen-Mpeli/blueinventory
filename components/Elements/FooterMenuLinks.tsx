// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {initial, fadeInUp} from "../../animations/animations";

interface IProps {
	url: string;
	label: string;
	tailwindStyling: string;
}

const FooterMenuLinks: FC<IProps> = ({url, label, tailwindStyling}) => {
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
