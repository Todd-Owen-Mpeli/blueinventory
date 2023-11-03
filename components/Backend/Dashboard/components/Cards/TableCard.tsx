// Imports
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {useDashboardGlobalContext} from "@/context/dashboard";
import {fadeIn, initial, stagger, initialTwo} from "@/animations/animations";

// Firebase
import {useFirebaseContext} from "@/context/Firebase";

// Components;
import Paragraph from "@/components/Frontend/Elements/Paragraph";

const itemsPerPage = 10;

const TableCard: FC = () => {
	const firebaseContext = useFirebaseContext();
	const DashboardContext = useDashboardGlobalContext();
	const [currentPage, setCurrentPage] = useState(1);
	const [editFields, setEditFields] = useState(false);

	const startIndex: number = (currentPage - 1) * itemsPerPage;
	const endIndex: number = startIndex + itemsPerPage;

	const totalItems: number | undefined | any =
		DashboardContext?.itemsCollection?.length;
	const itemsToRender: any[] | undefined =
		DashboardContext?.itemsCollection?.slice(startIndex, endIndex);

	// Hides or Displays User dropdown
	const handleEditFields = () => {
		setEditFields(!editFields);
	};

	return (
		<>
			{itemsToRender && itemsToRender.length > 0 ? (
				itemsToRender.map((item: any, index: number) => (
					<Fragment key={index}>
						<motion.tr
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							key={startIndex + index}
							className="px-4 py-6 bg-white odd:bg-lightGrey"
						>
							<td className="px-4 py-3">
								<div className="flex flex-col flex-wrap items-start">
									<div className="flex flex-row items-center justify-start gap-2">
										<div className="flex flex-row items-center justify-start gap-6">
											<span className="font-semibold">
												00{startIndex + index}
											</span>
											<Image
												width={500}
												height={500}
												src={
													firebaseContext?.userData?.photoURL
														? firebaseContext?.userData?.photoURL
														: `/img/Logos/default-avatar-profile.jpg`
												}
												alt={`${firebaseContext?.userData?.displayName} profile image`}
												className="object-cover object-center mr-3 rounded-full w-9 h-9"
											/>
										</div>
										<div className="flex flex-col">
											<span className="font-semibold text-darkerBlue">
												{item?.itemName.length < 25
													? item?.itemName
													: item?.itemName.substring(0, 25) + "..."}
											</span>
											<span className="font-normal text-tiny text-darkGrey">
												{item?.category.length < 25
													? item?.category
													: item?.category.substring(0, 25) + "..."}
											</span>
										</div>
									</div>
								</div>
							</td>
							<td className="px-4 py-3">
								<div className="font-normal">
									{item?.description.length < 250
										? item?.description
										: item?.description.substring(0, 250) + "..."}
								</div>
							</td>
							<td className="px-4 py-3">
								<div className="font-semibold ">
									{editFields ? <></> : item?.quantity}
								</div>
							</td>
							<td className="px-4 py-3">
								<div className="px-2.5 py-1 text-sm font-normal text-white bg-darkBlue w-fit rounded-full">
									£{item?.value}
								</div>
							</td>
							<td className="px-4 py-3">
								<div className="flex flex-row gap-2">
									<button
										onClick={handleEditFields}
										className="inline-flex py-2.5 pr-0"
									>
										<span className="w-1 h-1 bg-black rounded-full"></span>
										<span className="mx-0.5 w-1 h-1 bg-black rounded-full"></span>
										<span className="w-1 h-1 bg-black rounded-full"></span>
									</button>
								</div>
							</td>
						</motion.tr>
					</Fragment>
				))
			) : (
				<></>
			)}
			<tr>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex flex-row items-center justify-between gap-4 mt-6"
				>
					{/* Pagination */}
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex items-center justify-start gap-4 pagination"
					>
						{/* Previous */}
						<motion.button
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							disabled={currentPage === 1}
							onClick={() => setCurrentPage(currentPage - 1)}
							className="px-4 py-2 transition-all duration-200 ease-in-out border cursor-pointer border-darkBlue hover:bg-goldPrimeDark hover:border-goldPrimeDark hover:text-white"
						>
							Previous
						</motion.button>
						<motion.span
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="px-4 py-2 text-white bg-darkBlue"
						>
							{currentPage}
						</motion.span>
						{/* Next */}
						<motion.button
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							disabled={endIndex >= totalItems}
							onClick={() => setCurrentPage(currentPage + 1)}
							className="px-4 py-2 transition-all duration-200 ease-in-out border cursor-pointer border-darkBlue hover:bg-goldPrimeDark hover:border-goldPrimeDark hover:text-white"
						>
							Next
						</motion.button>
					</motion.div>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
					>
						<Paragraph
							content={`Showing 10 out of ${totalItems} results`}
							tailwindStyling="text-sm text-black"
						/>
					</motion.div>
				</motion.div>
			</tr>
		</>
	);
};

export default TableCard;
