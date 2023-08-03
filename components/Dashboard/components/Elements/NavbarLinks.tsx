// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {initialTwo, fadeIn} from "@/animations/animations";

// Components
import {INavbarLinks} from "@/types/Dashboard/components/elements/NavbarLinks";

const NavbarLinks: FC<INavbarLinks> = ({
	path,
	icon,
	label,
	displayMenuText,
	tailwindStyling,
}) => {
	return (
		<>
			<Link className={tailwindStyling} href={`/dashboard${path}`}>
				<motion.span
					initial={initialTwo}
					whileInView={fadeIn}
					className={
						displayMenuText ? `flex items-center` : `flex items-center`
					}
				>
					<Image
						alt={icon?.alt}
						src={icon?.src}
						width={icon?.width}
						height={icon?.height}
						className="w-[20px] h-[20px] object-contain object-center"
					/>
				</motion.span>
				<motion.span
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className={displayMenuText ? `block` : `hidden`}
				>
					{label}
				</motion.span>
			</Link>
		</>
	);
};

export default NavbarLinks;
