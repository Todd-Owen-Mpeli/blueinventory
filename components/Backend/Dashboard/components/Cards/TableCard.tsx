// Imports
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {useDashboardContext} from "@/context/dashboard";
import {fadeIn, initial, stagger, initialTwo} from "@/animations/animations";

// Firebase
import {useFirebaseContext} from "@/context/Firebase";

// Components;
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const itemsPerPage = 10;

const TableCard: FC = () => {
	const firebaseContext = useFirebaseContext();
	const DashboardContext = useDashboardContext();
	const [currentPage, setCurrentPage] = useState(1);

	const startIndex: number = (currentPage - 1) * itemsPerPage;
	const endIndex: number = startIndex + itemsPerPage;

	const totalItems: number | undefined | any =
		DashboardContext?.itemsCollection?.length;
	const itemsToRender: any[] | undefined =
		DashboardContext?.itemsCollection?.slice(startIndex, endIndex);

	return (
		<>
			{itemsToRender && itemsToRender.length > 0 ? (
				itemsToRender.map((item: any, index: number) => (
					<Fragment key={index}>
						<tr
							className="px-4 py-6 bg-white odd:bg-lightGrey"
							key={startIndex + index}
						>
							<td className="px-4 py-3">
								<div className="flex flex-col flex-wrap items-start">
									<div className="flex flex-row items-center justify-start gap-2">
										<div className="flex flex-row items-center justify-start gap-6">
											<span className="font-semibold">
												00{startIndex + index}
											</span>
											<Image
												width={1000}
												height={1000}
												src={`${firebaseContext?.userData?.photoURL}`}
												alt={`${firebaseContext?.userData?.displayName} profile image`}
												className="object-cover object-center mr-3 rounded-full w-9 h-9"
											/>
										</div>
										<div className="flex flex-col">
											<span className="text-base font-semibold text-darkerBlue">
												{item.itemName}
											</span>
											<span className="font-normal text-tiny text-darkGrey">
												{item.category}
											</span>
										</div>
									</div>
								</div>
							</td>
							<td className="px-4 py-3">
								<div className="text-base font-normal">{item.description}</div>
							</td>
							<td className="px-4 py-3">
								<div className="text-base font-semibold">{item.quantity}</div>
							</td>
							<td className="px-4 py-3">
								<div className="px-2.5 py-1 text-sm font-normal text-white bg-darkBlue w-fit rounded-full">
									£{item.value}
								</div>
							</td>
							<td className="px-4 py-3">
								<Link className="inline-flex py-2.5 pr-0" href={``}>
									<span className="w-1 h-1 bg-black rounded-full"></span>
									<span className="mx-0.5 w-1 h-1 bg-black rounded-full"></span>
									<span className="w-1 h-1 bg-black rounded-full"></span>
								</Link>
							</td>
						</tr>
					</Fragment>
				))
			) : (
				<></>
			)}
			<tr>
				<div className="flex flex-row items-center justify-between gap-4 mt-6">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex items-center justify-start gap-4 pagination"
					>
						<button
							disabled={currentPage === 1}
							onClick={() => setCurrentPage(currentPage - 1)}
							className="px-4 py-2 transition-all duration-200 ease-in-out border cursor-pointer border-darkBlue hover:bg-darkBlue hover:text-white"
						>
							Previous
						</button>
						<span className="px-4 py-2 text-white bg-darkBlue">
							{currentPage}
						</span>
						<button
							disabled={endIndex >= totalItems}
							onClick={() => setCurrentPage(currentPage + 1)}
							className="px-4 py-2 transition-all duration-200 ease-in-out border cursor-pointer border-darkBlue hover:bg-darkBlue hover:text-white"
						>
							Next
						</button>
					</motion.div>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className=""
					>
						<Paragraph
							content={`Showing 10 out of ${totalItems} results`}
							tailwindStyling="text-sm text-black"
						/>
					</motion.div>
				</div>
			</tr>
		</>
	);
};

export default TableCard;
