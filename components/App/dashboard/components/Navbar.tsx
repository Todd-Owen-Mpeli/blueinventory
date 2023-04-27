// Import
import Link from "next/link";
import {motion} from "framer-motion";
import {UserButton} from "@clerk/nextjs";
import {fadeInUp} from "@/animations/animations";

const Navbar = () => {
	return (
		<div className="w-full gap-4 py-3 bg-white">
			<div className="flex items-center justify-between gap-4 px-4">
				<motion.div variants={fadeInUp} className="flex flex-col">
					<Link
						href="/"
						className="text-medium lg:text-lg text-darkBlue font-[900]"
					>
						BlueInventory
					</Link>
				</motion.div>
				<UserButton />
			</div>
		</div>
	);
};

export default Navbar;
