// Import
import Link from "next/link";
import {motion} from "framer-motion";
import {UserButton} from "@clerk/nextjs";
import {fadeInUp} from "@/animations/animations";

const Navbar = () => {
	return (
		<div className="w-full gap-4 p-3 border-b border-darkGrey rtl:border-r-0 rtl:border-l">
			<div className="flex items-center justify-between gap-4 px-4">
				<motion.div variants={fadeInUp} className="flex flex-col">
					{/* Search */}
					<input
						type="text"
						className="w-full py-1.5 pl-10 pr-4 text-white  border rounded-md bg-darkerBlue border-darkGrey focus:border-darkGrey focus:ring-none"
						placeholder="Search"
					/>
				</motion.div>
				<UserButton />
			</div>
		</div>
	);
};

export default Navbar;
