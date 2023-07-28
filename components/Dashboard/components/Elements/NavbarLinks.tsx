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
	tailwindStyling,
}) => {
	return (
		<>
			<Link className={tailwindStyling} href={`/dashboard${path}`}>
				<motion.span
					initial={initialTwo}
					whileInView={fadeIn}
					className="flex items-center"
				>
					<Image
						alt={icon?.alt}
						src={icon?.src}
						width={icon?.width}
						height={icon?.height}
						className={
							icon?.src
								? `block mr-3 w-5 h-5 object-contain object-center`
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
