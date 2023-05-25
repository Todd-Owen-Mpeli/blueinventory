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
			initial={initial}
			viewport={{once: true}}
			whileInView={fadeInUp}
			className="px-0"
		>
			<Link className={tailwindStyling} href={url}>
				{label}
			</Link>
		</motion.li>
	);
};

export default FooterMenuLinks;
